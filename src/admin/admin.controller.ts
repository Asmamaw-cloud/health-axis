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
    const [
      totalPatients,
      totalProviders,
      totalPharmacies,
      totalConsultations,
      pendingProviders,
      pendingPharmacies,
    ] = await this.prisma.$transaction([
      this.prisma.user.count({ where: { role: UserRole.patient } }),
      this.prisma.provider.count({
        where: { verificationStatus: VerificationStatus.approved },
      }),
      this.prisma.pharmacy.count({
        where: { verificationStatus: VerificationStatus.approved },
      }),
      this.prisma.consultation.count(),
      this.prisma.provider.findMany({
        where: { verificationStatus: VerificationStatus.pending },
        include: { user: true },
      }),
      this.prisma.pharmacy.findMany({
        where: { verificationStatus: VerificationStatus.pending },
        include: { user: true },
      }),
    ]);

    return {
      totalPatients,
      totalProviders,
      totalPharmacies,
      totalConsultations,
      pendingProviders,
      pendingPharmacies,
    };
  }
}
