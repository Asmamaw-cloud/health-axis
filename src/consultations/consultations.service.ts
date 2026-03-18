import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ConsultationStatus,
  ConsultationType,
  UserRole,
} from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

interface BookConsultationPayload {
  providerId: string;
  consultationDate: string;
  consultationTime: string;
  consultationType: ConsultationType;
  notes?: string;
}

@Injectable()
export class ConsultationsService {
  constructor(private readonly prisma: PrismaService) {}

  async bookConsultation(
    patientId: string,
    payload: BookConsultationPayload,
  ) {
    // Combine date and time strings for correct parsing (e.g. "2024-03-18T21:00")
    const combinedDateTime = new Date(`${payload.consultationDate}T${payload.consultationTime}`);
    
    return this.prisma.consultation.create({
      data: {
        patientId,
        providerId: payload.providerId,
        consultationDate: new Date(payload.consultationDate),
        consultationTime: combinedDateTime,
        consultationType: payload.consultationType,
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

