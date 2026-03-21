import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../generated/prisma';
import { activeUserWhere } from '../common/prisma-user-filters';

@ApiTags('profile')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller()
export class ProfileController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('me')
  async me(@CurrentUser() user: { userId: string; role: UserRole }) {
    const base = await this.prisma.user.findUnique({
      where: { id: user.userId },
    });

    if (!base) {
      return null;
    }

    if (user.role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId: user.userId },
      });
      return { user: base, provider };
    }

    if (user.role === UserRole.pharmacy) {
      const pharmacy = await this.prisma.pharmacy.findUnique({
        where: { userId: user.userId },
      });
      return { user: base, pharmacy };
    }

    return { user: base };
  }

  @Get('dashboard')
  async dashboard(@CurrentUser() user: { userId: string; role: UserRole }) {
    if (user.role === UserRole.patient) {
      const [consultations, unreadNotifications, recentReadings] =
        await this.prisma.$transaction([
          this.prisma.consultation.findMany({
            where: {
              patientId: user.userId,
              provider: { user: activeUserWhere },
            },
            orderBy: { consultationDate: 'asc' },
            include: { provider: { include: { user: true } } },
            take: 5,
          }),
          this.prisma.notification.count({
            where: { userId: user.userId, isRead: false },
          }),
          this.prisma.healthReading.findMany({
            where: { patientId: user.userId },
            orderBy: { timestamp: 'desc' },
            take: 5,
          }),
        ]);
      return {
        role: user.role,
        upcomingConsultations: consultations,
        unreadNotifications,
        recentReadings,
      };
    }

    if (user.role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId: user.userId },
      });
      const providerId = provider?.id ?? '';

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const [todayCons, pending, unreadNotifications] =
        await this.prisma.$transaction([
          this.prisma.consultation.findMany({
            where: {
              providerId,
              consultationDate: today,
              consultationStatus: { in: ['scheduled', 'pending'] },
              patient: activeUserWhere,
            },
            include: { patient: true },
            orderBy: { consultationTime: 'asc' },
          }),
          this.prisma.consultation.findMany({
            where: {
              providerId,
              consultationStatus: 'pending',
              patient: activeUserWhere,
            },
            include: { patient: true },
            orderBy: { consultationDate: 'asc' },
          }),
          this.prisma.notification.count({
            where: { userId: user.userId, isRead: false },
          }),
        ]);
      return {
        role: user.role,
        todayConsultations: todayCons,
        pendingRequests: pending,
        unreadNotifications,
      };
    }

    if (user.role === UserRole.admin) {
      const [users, consultations] = await this.prisma.$transaction([
        this.prisma.user.count(),
        this.prisma.consultation.count(),
      ]);
      return {
        role: user.role,
        totalUsers: users,
        totalConsultations: consultations,
      };
    }

    if (user.role === UserRole.pharmacy) {
      const pharmacy = await this.prisma.pharmacy.findUnique({
        where: { userId: user.userId },
      });
      const pharmacyId = pharmacy?.id ?? '';
      const [totalMedicines, lowStockMedicines] =
        await this.prisma.$transaction([
          this.prisma.pharmacyMedicine.count({
            where: { pharmacyId },
          }),
          this.prisma.pharmacyMedicine.findMany({
            where: {
              pharmacyId,
              OR: [{ quantity: { lt: 10 } }, { availabilityStatus: false }],
            },
            take: 5,
          }),
        ]);
      return { role: user.role, totalMedicines, lowStockMedicines };
    }

    return { role: user.role };
  }
}
