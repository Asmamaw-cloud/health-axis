import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PrescriptionsService } from './prescriptions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../generated/prisma';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AddPrescriptionDto } from './dto/prescription.dto';

@ApiTags('prescriptions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('prescriptions')
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Get()
  @Roles(UserRole.patient)
  async getMyPrescriptions(@CurrentUser() user: { userId: string }) {
    return this.prescriptionsService.getPatientPrescriptions(user.userId);
  }

  @Get('consultation/:consultationId')
  @Roles(UserRole.patient, UserRole.provider)
  async getConsultationPrescriptions(
    @Param('consultationId') consultationId: string,
    @CurrentUser() user: { userId: string; role: UserRole },
  ) {
    return this.prescriptionsService.getConsultationPrescriptions(
      consultationId,
      user.userId,
      user.role,
    );
  }

  @Post('consultation/:consultationId')
  @Roles(UserRole.provider)
  async addPrescription(
    @Param('consultationId') id: string,
    @CurrentUser() user: { userId: string },
    @Body() body: AddPrescriptionDto,
  ) {
    return this.prescriptionsService.addPrescriptionForConsultation(
      user.userId,
      id,
      body.medicines,
    );
  }
}
