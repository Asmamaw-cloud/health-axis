import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConsultationsService } from './consultations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole, ConsultationStatus } from '../generated/prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AgoraService } from '../integrations/agora.service';

@ApiTags('consultations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('consultations')
export class ConsultationsController {
  constructor(
    private readonly consultationsService: ConsultationsService,
    private readonly agoraService: AgoraService,
  ) {}

  @Post('book')
  @Roles(UserRole.patient)
  async book(
    @CurrentUser() user: { userId: string },
    @Body()
    body: {
      providerId: string;
      consultationDate: string;
      consultationTime: string;
      notes?: string;
    },
  ) {
    return this.consultationsService.bookConsultation(user.userId, body);
  }

  @Get()
  async list(@CurrentUser() user: { userId: string; role: UserRole }) {
    return this.consultationsService.listConsultations(
      user.userId,
      user.role,
    );
  }

  @Put(':id/status')
  @Roles(UserRole.provider)
  async updateStatus(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
    @Body() body: { status: ConsultationStatus },
  ) {
    const updated = await this.consultationsService.updateStatusForProvider(
      user.userId,
      id,
      body.status,
    );

    // Placeholder: notification + email can be triggered here.
    return updated;
  }

  @Post(':id/start')
  @Roles(UserRole.provider)
  async start(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
  ) {
    const consultation =
      await this.consultationsService.ensureConsultationForProvider(
        user.userId,
        id,
      );

    if (consultation.meetingLink) {
      return { meetingLink: consultation.meetingLink };
    }

    const meetingLink = this.agoraService.generateMeetingLink(id);

    await this.consultationsService.setMeetingLink(id, meetingLink);

    return { meetingLink };
  }
}

