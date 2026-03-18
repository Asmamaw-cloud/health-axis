import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../generated/prisma';

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
      const [consultations, unreadNotifications] = await this.prisma.$transaction([
        this.prisma.consultation.findMany({
          where: { patientId: user.userId },
          orderBy: { consultationDate: 'asc' },
          take: 5,
        }),
        this.prisma.notification.count({
          where: { userId: user.userId, isRead: false },
        }),
      ]);
      return { role: user.role, consultations, unreadNotifications };
    }

    if (user.role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId: user.userId },
      });
      const providerId = provider?.id ?? '';
      const [upcoming, unreadNotifications] = await this.prisma.$transaction([
        this.prisma.consultation.findMany({
          where: { providerId },
          orderBy: { consultationDate: 'asc' },
          take: 5,
        }),
        this.prisma.notification.count({
          where: { userId: user.userId, isRead: false },
        }),
      ]);
      return { role: user.role, upcomingConsultations: upcoming, unreadNotifications };
    }

    if (user.role === UserRole.admin) {
      const [users, consultations] = await this.prisma.$transaction([
        this.prisma.user.count(),
        this.prisma.consultation.count(),
      ]);
      return { role: user.role, totalUsers: users, totalConsultations: consultations };
    }

    return { role: user.role };
  }
}

