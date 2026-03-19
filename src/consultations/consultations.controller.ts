import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConsultationsService } from './consultations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole, ConsultationStatus } from '../generated/prisma';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AgoraService } from '../integrations/agora.service';
import { BookConsultationDto, UpdateConsultationStatusDto } from './dto/consultation.dto';

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
    @Body() body: BookConsultationDto,
  ) {
    return this.consultationsService.bookConsultation(user.userId, body);
  }

  @Get()
  @Roles(UserRole.patient, UserRole.provider, UserRole.admin)
  async list(@CurrentUser() user: { userId: string; role: UserRole }) {
    return this.consultationsService.listConsultations(
      user.userId,
      user.role,
    );
  }

  @Get(':id')
  async getConsultation(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string; role: UserRole },
  ) {
    const consultation = await this.consultationsService.getConsultation(user.userId, user.role, id);
    const token = this.agoraService.generateRtcToken(id, user.userId);
    const appId = this.agoraService.getAppId();
    return { ...consultation, token, appId };
  }

  //Provider can update status of their consultations (e.g. mark as completed, cancelled, etc.)
  @Put(':id/status')
  @Roles(UserRole.provider)
  async updateStatus(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
    @Body() body: UpdateConsultationStatusDto,
  ) {
    const updated = await this.consultationsService.updateStatusForProvider(
      user.userId,
      id,
      body.status,
    );

    // Placeholder: notification + email can be triggered here.
    return updated;
  }

  @Put(':id/cancel')
  @Roles(UserRole.patient)
  async cancel(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.consultationsService.cancelConsultation(user.userId, id);
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

    let meetingLink = consultation.meetingLink;
    if (!meetingLink) {
      meetingLink = this.agoraService.generateMeetingLink(id);
      await this.consultationsService.setMeetingLink(id, meetingLink);
    }

    const token = this.agoraService.generateRtcToken(id, user.userId);
    const appId = this.agoraService.getAppId();

    return { meetingLink, token, appId };
  }
}

