import { Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole, VerificationStatus } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Roles(UserRole.admin)
@Controller('admin')
export class AdminController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('providers')
  async listProviders() {
    return this.prisma.provider.findMany();
  }

  @Patch('providers/:id/approve')
  async approveProvider(@Param('id') id: string) {
    return this.prisma.provider.update({
      where: { id },
      data: { verificationStatus: VerificationStatus.approved },
    });
  }

  @Get('pharmacies')
  async listPharmacies() {
    return this.prisma.pharmacy.findMany();
  }

  @Patch('pharmacies/:id/approve')
  async approvePharmacy(@Param('id') id: string) {
    return this.prisma.pharmacy.update({
      where: { id },
      data: { verificationStatus: VerificationStatus.approved },
    });
  }

  @Get('analytics')
  async analytics() {
    const [users, consultations, pharmaciesCount, healthReadings] =
      await this.prisma.$transaction([
        this.prisma.user.count(),
        this.prisma.consultation.count(),
        this.prisma.pharmacy.count(),
        this.prisma.healthReading.count(),
      ]);

    return {
      totalUsers: users,
      totalConsultations: consultations,
      pharmaciesCount,
      healthReadings,
    };
  }
}

