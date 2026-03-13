import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PrescriptionsService } from './prescriptions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../generated/prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('prescriptions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('consultations/:id')
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Post('prescription')
  @Roles(UserRole.provider)
  async addPrescription(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
    @Body()
    body: {
      medicines: Array<{
        medicineName: string;
        dosage?: string;
        frequency?: string;
        duration?: string;
        instructions?: string;
      }>;
    },
  ) {
    return this.prescriptionsService.addPrescriptionForConsultation(
      user.userId,
      id,
      body.medicines,
    );
  }
}

