import { Injectable, Logger } from '@nestjs/common';
import { RealtimeGateway } from '../realtime/realtime.gateway';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from './email.service';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly realtimeGateway: RealtimeGateway,
    private readonly emailService: EmailService,
  ) {}

  async listForUser(userId: string) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createNotification(userId: string, type: string, message: string) {
    return this.prisma.notification.create({
      data: {
        userId,
        type,
        message,
      },
    });
  }

  async createNotificationWithSender(
    userId: string,
    type: string,
    message: string,
    senderId?: string,
  ) {
    return this.prisma.notification.create({
      data: {
        userId,
        type,
        message,
        senderId: senderId ?? undefined,
      },
    });
  }

  async dispatchNotification(
    userId: string,
    type: string,
    message: string,
    opts?: { emailSubject?: string; senderId?: string },
  ) {
    const notification = await this.createNotificationWithSender(
      userId,
      type,
      message,
      opts?.senderId,
    );

    // In-app delivery (socket). Never fail the request if websocket is down.
    try {
      this.realtimeGateway.emitNotification(userId, notification);
    } catch {
      // no-op
    }

    // Email delivery (best-effort).
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: { email: true },
      });

      if (!user?.email) {
        this.logger.warn(
          `Email skipped: missing user.email (userId=${userId}, type=${type})`,
        );
        return notification;
      }

      const subject =
        opts?.emailSubject ??
        (() => {
          switch (type) {
            case 'consultation_request':
              return 'New consultation request';
            case 'consultation_confirmation':
              return 'Consultation confirmed';
            case 'consultation_declined':
              return 'Consultation declined';
            case 'consultation_reminder':
              return 'Consultation reminder';
            case 'new_message':
              return 'New message received';
            case 'abnormal_reading':
              return 'Abnormal health reading';
            case 'prescription_added':
              return 'New prescription added';
            case 'consultation_video_invite':
              return 'Video call invitation';
            default:
              return 'HealthBridge notification';
          }
        })();

      if (user?.email) {
        const html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="margin: 0 0 12px 0;">HealthBridge</h2>
            <p style="margin: 0 0 12px 0;">${escapeHtml(message)}</p>
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              This is an automated notification.
            </p>
          </div>
        `;

        this.logger.log(
          `Sending email via Resend (type=${type}, to=${user.email})`,
        );
        await this.emailService.sendEmail(user.email, subject, html);
      }
    } catch (err) {
      this.logger.error(
        `Email failed (best-effort) (userId=${userId}, type=${type}): ${
          (err as Error)?.message ?? String(err)
        }`,
      );
      // no-op
    }

    return notification;
  }

  async markAsRead(userId: string, notificationId: string) {
    // Ensure users can only mark their own notifications as read.
    const result = await this.prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { isRead: true },
    });

    if (result.count === 0) {
      return null;
    }

    return this.prisma.notification.findUnique({
      where: { id: notificationId },
    });
  }

  async getBadgeCounts(userId: string, role: string) {
    const unreadMessages = await this.prisma.notification.findMany({
      where: {
        userId,
        type: 'new_message',
        isRead: false,
        senderId: { not: null },
      },
      select: { senderId: true },
    });

    const messageCount = new Set(
      unreadMessages.map((n) => n.senderId).filter(Boolean),
    ).size;

    const remindersCount = await this.prisma.notification.count({
      where: {
        userId,
        type: 'consultation_reminder',
        isRead: false,
      },
    });

    const healthAlertsCount =
      role === 'patient'
        ? await this.prisma.notification.count({
            where: {
              userId,
              type: 'abnormal_reading',
              isRead: false,
            },
          })
        : 0;

    const prescriptionCount =
      role === 'patient'
        ? await this.prisma.notification.count({
            where: {
              userId,
              type: 'prescription_added',
              isRead: false,
            },
          })
        : 0;

    const consultationUpdatesCount =
      role === 'patient'
        ? await this.prisma.notification.count({
            where: {
              userId,
              type: {
                in: [
                  'consultation_confirmation',
                  'consultation_declined',
                  'consultation_video_invite',
                ],
              },
              isRead: false,
            },
          })
        : role === 'provider'
          ? await this.prisma.notification.count({
              where: {
                userId,
                type: 'consultation_request',
                isRead: false,
              },
            })
          : 0;

    return {
      messageCount,
      consultationUpdatesCount,
      remindersCount,
      healthAlertsCount,
      prescriptionCount,
    };
  }

  async markMessagesRead(userId: string) {
    return this.markMessagesReadWithSender(userId);
  }

  async getUnreadMessageSenders(userId: string) {
    const unread = await this.prisma.notification.findMany({
      where: {
        userId,
        type: 'new_message',
        isRead: false,
        senderId: { not: null },
      },
      select: { senderId: true },
    });

    return {
      senderIds: Array.from(
        new Set(unread.map((n) => n.senderId).filter(Boolean)),
      ),
    };
  }

  async markMessagesReadWithSender(userId: string, senderId?: string) {
    return this.prisma.notification.updateMany({
      where: {
        userId,
        type: 'new_message',
        isRead: false,
        ...(senderId ? { senderId } : {}),
      },
      data: { isRead: true },
    });
  }

  async markNonMessageRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: {
        userId,
        type: {
          notIn: [
            'new_message',
            'consultation_video_invite',
            'prescription_added',
          ],
        },
        isRead: false,
      },
      data: { isRead: true },
    });
  }

  async markPrescriptionAddedRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: {
        userId,
        type: 'prescription_added',
        isRead: false,
      },
      data: { isRead: true },
    });
  }
}
