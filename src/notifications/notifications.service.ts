import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async listForUser(userId: string) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createNotification(
    userId: string,
    type: string,
    message: string,
  ) {
    return this.prisma.notification.create({
      data: {
        userId,
        type,
        message,
      },
    });
  }
}

