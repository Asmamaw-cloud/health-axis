import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ConsultationStatus } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class ConsultationRemindersService {
  private readonly logger = new Logger(ConsultationRemindersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  private combineDateTime(consultation: {
    consultationDate: Date;
    consultationTime: Date;
  }) {
    const d = consultation.consultationDate;
    const t = consultation.consultationTime;
    return new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
    );
  }

  private formatDate(d: Date) {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  private formatTime(t: Date) {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(t.getHours())}:${pad(t.getMinutes())}`;
  }

  @Cron('* * * * *')
  async handleReminderTick() {
    const now = new Date();
    const windowStart = new Date(now.getTime() + 30 * 60 * 1000 - 60 * 1000);
    const windowEnd = new Date(now.getTime() + 30 * 60 * 1000 + 60 * 1000);

    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const endOfTomorrow = new Date(startOfToday);
    endOfTomorrow.setDate(endOfTomorrow.getDate() + 2);

    // Fetch a limited set (date-only field) then filter by exact time window in JS.
    const consultations = await this.prisma.consultation.findMany({
      where: {
        consultationStatus: ConsultationStatus.scheduled,
        consultationDate: {
          gte: startOfToday,
          lte: endOfTomorrow,
        },
      },
      include: {
        patient: true,
        provider: {
          include: { user: true },
        },
      },
    });

    for (const consultation of consultations) {
      const combined = this.combineDateTime(consultation);
      if (combined < windowStart || combined > windowEnd) continue;

      const alreadySent = await this.prisma.notification.findFirst({
        where: {
          userId: consultation.patientId,
          type: 'consultation_reminder',
          message: { contains: consultation.id },
        },
      });

      if (alreadySent) continue;

      const providerName =
        consultation.provider?.user?.fullName || 'your provider';
      const message = `Reminder: Your consultation (ID: ${consultation.id}) with Dr. ${providerName} is at ${this.formatDate(
        consultation.consultationDate,
      )} ${this.formatTime(consultation.consultationTime)}.`;

      this.logger.log(`Sending reminder for consultation=${consultation.id}`);
      await this.notificationsService.dispatchNotification(
        consultation.patientId,
        'consultation_reminder',
        message,
        { senderId: consultation.provider?.userId ?? undefined },
      );

      // Also notify the provider (so they get an email + in-app reminder too).
      if (consultation.provider?.userId) {
        const alreadyProviderSent = await this.prisma.notification.findFirst({
          where: {
            userId: consultation.provider.userId,
            type: 'consultation_reminder',
            message: { contains: consultation.id },
          },
        });

        if (!alreadyProviderSent) {
          const patientName = consultation.patient?.fullName ?? 'your patient';
          const providerMessage = `Reminder: You have a consultation (ID: ${consultation.id}) with ${patientName} on ${this.formatDate(
            consultation.consultationDate,
          )} ${this.formatTime(consultation.consultationTime)}.`;

          await this.notificationsService.dispatchNotification(
            consultation.provider.userId,
            'consultation_reminder',
            providerMessage,
            { senderId: consultation.patientId },
          );
        }
      }
    }
  }
}
