import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../integrations/storage.service';

@Injectable()
export class MessagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
  ) {}

  async sendMessage(
    senderId: string,
    receiverId: string,
    payload: { messageText?: string; imageUrl?: string },
  ) {
    return this.prisma.message.create({
      data: {
        senderId,
        receiverId,
        messageText: payload.messageText,
        imageUrl: payload.imageUrl,
      },
    });
  }

  async getConversation(userId: string, withUserId: string) {
    return this.prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: withUserId },
          { senderId: withUserId, receiverId: userId },
        ],
      },
      orderBy: { timestamp: 'asc' },
    });
  }
}

