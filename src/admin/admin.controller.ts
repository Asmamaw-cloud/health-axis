import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole, VerificationStatus } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { activeUserWhere } from '../common/prisma-user-filters';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { CurrentUserPayload } from '../common/decorators/current-user.decorator';
import { AdminSuspendDto } from './dto/admin.dto';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Roles(UserRole.admin)
@Controller('admin')
export class AdminController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('providers')
  async listProviders() {
    return this.prisma.provider.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  @Patch('providers/:id/approve')
  async approveProvider(
    @Param('id') id: string,
    @Body() body: { verificationStatus: VerificationStatus },
  ) {
    const status = body.verificationStatus;
    if (
      status !== VerificationStatus.approved &&
      status !== VerificationStatus.rejected
    ) {
      throw new BadRequestException('Invalid verificationStatus');
    }
    return this.prisma.provider.update({
      where: { id },
      data: { verificationStatus: status },
    });
  }

  @Get('pharmacies')
  async listPharmacies() {
    return this.prisma.pharmacy.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get('users')
  async listUsers(@Query('role') roleFilter?: string) {
    const validRoles = Object.values(UserRole) as string[];
    const where =
      roleFilter && validRoles.includes(roleFilter)
        ? { role: roleFilter as UserRole }
        : {};

    return this.prisma.user.findMany({
      where,
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNumber: true,
        role: true,
        isSuspended: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  @Patch('users/:userId/suspend')
  async setUserSuspended(
    @Param('userId') userId: string,
    @Body() body: AdminSuspendDto,
    @CurrentUser() admin: CurrentUserPayload,
  ) {
    if (userId === admin.userId && body.suspended) {
      throw new ForbiddenException('Cannot suspend your own account');
    }

    const target = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true },
    });

    if (!target) {
      throw new BadRequestException('User not found');
    }

    if (target.role === UserRole.admin) {
      throw new ForbiddenException('Cannot change suspension for admin users');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { isSuspended: body.suspended },
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNumber: true,
        role: true,
        isSuspended: true,
        createdAt: true,
      },
    });
  }

  @Patch('pharmacies/:id/approve')
  async approvePharmacy(
    @Param('id') id: string,
    @Body() body: { verificationStatus: VerificationStatus },
  ) {
    const status = body.verificationStatus;
    if (
      status !== VerificationStatus.approved &&
      status !== VerificationStatus.rejected
    ) {
      throw new BadRequestException('Invalid verificationStatus');
    }
    return this.prisma.pharmacy.update({
      where: { id },
      data: { verificationStatus: status },
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
      this.prisma.user.count({
        where: { role: UserRole.patient, ...activeUserWhere },
      }),
      this.prisma.provider.count({
        where: {
          verificationStatus: VerificationStatus.approved,
          user: activeUserWhere,
        },
      }),
      this.prisma.pharmacy.count({
        where: {
          verificationStatus: VerificationStatus.approved,
          user: activeUserWhere,
        },
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
