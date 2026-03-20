import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConsultationsService } from './consultations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole, ConsultationStatus } from '../generated/prisma';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AgoraService } from '../integrations/agora.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import {
  BookConsultationDto,
  UpdateConsultationStatusDto,
} from './dto/consultation.dto';

@ApiTags('consultations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('consultations')
export class ConsultationsController {
  constructor(
    private readonly consultationsService: ConsultationsService,
    private readonly agoraService: AgoraService,
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  @Post('book')
  @Roles(UserRole.patient)
  async book(
    @CurrentUser() user: { userId: string },
    @Body() body: BookConsultationDto,
  ) {
    const created = await this.consultationsService.bookConsultation(
      user.userId,
      body,
    );

    // Notify the provider that a new consultation request was created.
    const consultation = await this.prisma.consultation.findUnique({
      where: { id: created.id },
      include: {
        patient: true,
        provider: { include: { user: true } },
      },
    });

    if (consultation?.provider?.userId) {
      const alreadySent = await this.prisma.notification.findFirst({
        where: {
          userId: consultation.provider.userId,
          type: 'consultation_request',
          message: { contains: consultation.id },
        },
      });

      if (!alreadySent) {
        const patientName = consultation.patient?.fullName ?? 'a patient';
        const message = `New consultation request (ID: ${consultation.id}) from ${patientName}.`;

        await this.notificationsService.dispatchNotification(
          consultation.provider.userId,
          'consultation_request',
          message,
          { senderId: consultation.patientId },
        );
      }
    }

    return created;
  }

  @Get()
  @Roles(UserRole.patient, UserRole.provider, UserRole.admin)
  async list(@CurrentUser() user: { userId: string; role: UserRole }) {
    return this.consultationsService.listConsultations(user.userId, user.role);
  }

  @Get(':id')
  async getConsultation(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string; role: UserRole },
  ) {
    const consultation = await this.consultationsService.getConsultation(
      user.userId,
      user.role,
      id,
    );
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

    // Consultation confirmation: when provider moves a consultation to `scheduled`.
    if (body.status === ConsultationStatus.scheduled) {
      const consultation = await this.prisma.consultation.findUnique({
        where: { id },
        include: {
          patient: true,
          provider: { include: { user: true } },
        },
      });

      if (consultation) {
        const alreadySent = await this.prisma.notification.findFirst({
          where: {
            userId: consultation.patientId,
            type: 'consultation_confirmation',
            message: { contains: consultation.id },
          },
        });

        if (!alreadySent) {
          const providerName =
            consultation.provider?.user?.fullName || 'your provider';

          const d = consultation.consultationDate;
          const t = consultation.consultationTime;
          const pad = (n: number) => String(n).padStart(2, '0');
          const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
            d.getDate(),
          )}`;
          const time = `${pad(t.getHours())}:${pad(t.getMinutes())}`;

          const message = `Your consultation (ID: ${consultation.id}) with Dr. ${providerName} has been confirmed for ${date} at ${time}.`;

          await this.notificationsService.dispatchNotification(
            consultation.patientId,
            'consultation_confirmation',
            message,
            { senderId: consultation.provider.userId },
          );
        }
      }
    }

    // Consultation decline: when provider moves a consultation to `rejected`.
    if (body.status === ConsultationStatus.rejected) {
      const consultation = await this.prisma.consultation.findUnique({
        where: { id },
        include: {
          patient: true,
          provider: { include: { user: true } },
        },
      });

      if (consultation) {
        const alreadySent = await this.prisma.notification.findFirst({
          where: {
            userId: consultation.patientId,
            type: 'consultation_declined',
            message: { contains: consultation.id },
          },
        });

        if (!alreadySent) {
          const providerName =
            consultation.provider?.user?.fullName || 'your provider';
          const d = consultation.consultationDate;
          const t = consultation.consultationTime;
          const pad = (n: number) => String(n).padStart(2, '0');
          const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
            d.getDate(),
          )}`;
          const time = `${pad(t.getHours())}:${pad(t.getMinutes())}`;

          const message = `Your consultation (ID: ${consultation.id}) with Dr. ${providerName} was declined for ${date} at ${time}.`;

          await this.notificationsService.dispatchNotification(
            consultation.patientId,
            'consultation_declined',
            message,
            { senderId: consultation.provider.userId },
          );
        }
      }
    }

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

    return { ...consultation, meetingLink, token, appId };
  }
}
