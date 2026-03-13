import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ConsultationStatus,
  UserRole,
} from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

interface BookConsultationPayload {
  providerId: string;
  consultationDate: string;
  consultationTime: string;
  notes?: string;
}

@Injectable()
export class ConsultationsService {
  constructor(private readonly prisma: PrismaService) {}

  async bookConsultation(
    patientId: string,
    payload: BookConsultationPayload,
  ) {
    return this.prisma.consultation.create({
      data: {
        patientId,
        providerId: payload.providerId,
        consultationDate: new Date(payload.consultationDate),
        consultationTime: new Date(payload.consultationTime),
        consultationStatus: ConsultationStatus.pending,
        consultationNotes: payload.notes,
      },
    });
  }

  async listConsultations(userId: string, role: UserRole) {
    if (role === UserRole.patient) {
      return this.prisma.consultation.findMany({
        where: { patientId: userId },
        include: { provider: true },
      });
    }

    if (role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId },
      });
      if (!provider) {
        return [];
      }

      return this.prisma.consultation.findMany({
        where: { providerId: provider.id },
        include: { patient: true },
      });
    }

    // admin: see all
    return this.prisma.consultation.findMany({
      include: { patient: true, provider: true },
    });
  }

  async updateStatusForProvider(
    providerUserId: string,
    consultationId: string,
    status: ConsultationStatus,
  ) {
    const provider = await this.prisma.provider.findUnique({
      where: { userId: providerUserId },
    });
    if (!provider) {
      throw new ForbiddenException('Provider profile not found');
    }

    const consultation = await this.prisma.consultation.findUnique({
      where: { id: consultationId },
    });

    if (!consultation) {
      throw new NotFoundException('Consultation not found');
    }

    if (consultation.providerId !== provider.id) {
      throw new ForbiddenException('You cannot modify this consultation');
    }

    return this.prisma.consultation.update({
      where: { id: consultationId },
      data: {
        consultationStatus: status,
      },
    });
  }

  async ensureConsultationForProvider(
    providerUserId: string,
    consultationId: string,
  ) {
    const provider = await this.prisma.provider.findUnique({
      where: { userId: providerUserId },
    });
    if (!provider) {
      throw new ForbiddenException('Provider profile not found');
    }

    const consultation = await this.prisma.consultation.findUnique({
      where: { id: consultationId },
    });

    if (!consultation) {
      throw new NotFoundException('Consultation not found');
    }

    if (consultation.providerId !== provider.id) {
      throw new ForbiddenException('You cannot access this consultation');
    }

    return consultation;
  }

  async setMeetingLink(
    consultationId: string,
    meetingLink: string,
  ) {
    return this.prisma.consultation.update({
      where: { id: consultationId },
      data: { meetingLink },
    });
  }
}

