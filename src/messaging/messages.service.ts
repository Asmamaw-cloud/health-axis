import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole, VerificationStatus } from '../generated/prisma';
import { activeUserWhere } from '../common/prisma-user-filters';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async sendMessage(
    senderId: string,
    receiverId: string,
    payload: {
      messageText?: string;
      fileUrl?: string;
    },
  ) {
    const receiver = await this.prisma.user.findUnique({
      where: { id: receiverId },
      select: { isSuspended: true },
    });
    if (receiver?.isSuspended) {
      throw new ForbiddenException('Cannot message this user');
    }

    return this.prisma.message.create({
      data: {
        senderId,
        receiverId,
        messageText: payload.messageText,
        fileUrl: payload.fileUrl,
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

  async getContacts(userId: string, role: string, search?: string) {
    if (role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId },
      });
      if (!provider) return [];

      const consultations = await this.prisma.consultation.findMany({
        where: {
          providerId: provider.id,
          NOT: {
            consultationStatus: { in: ['pending', 'cancelled'] },
          },
          patient: {
            ...activeUserWhere,
            ...(search
              ? {
                  fullName: { contains: search, mode: 'insensitive' },
                }
              : {}),
          },
        },
        select: {
          patient: {
            select: {
              id: true,
              fullName: true,
            },
          },
        },
      });

      // deduplicate patients
      const patientsMap = new Map();
      consultations.forEach((c) => {
        if (c.patient) {
          patientsMap.set(c.patient.id, {
            id: c.patient.id,
            fullName: c.patient.fullName,
            role: 'patient',
          });
        }
      });
      return Array.from(patientsMap.values());
    }

    if (role === UserRole.patient) {
      const mode = 'insensitive' as const;
      const providers = await this.prisma.provider.findMany({
        where: {
          AND: [
            { verificationStatus: VerificationStatus.approved },
            { user: activeUserWhere },
            ...(search
              ? [
                  {
                    OR: [
                      {
                        user: {
                          fullName: { contains: search, mode },
                        },
                      },
                      {
                        specialization: { contains: search, mode },
                      },
                    ],
                  },
                ]
              : []),
          ],
        },
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
            },
          },
        },
      });

      return providers.map((p) => ({
        id: p.user.id,
        fullName: p.user.fullName,
        specialization: p.specialization,
        role: 'provider',
      }));
    }

    return [];
  }
}
