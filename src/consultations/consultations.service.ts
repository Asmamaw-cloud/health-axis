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
    const markExpired = async (consultations: any[]) => {
      const now = new Date();
      const expiredIds = consultations
        .filter((c) => {
          if (c.consultationStatus !== ConsultationStatus.pending) return false;
          const cDate = c.consultationDate;
          const cTime = c.consultationTime;
          const combined = new Date(
            cDate.getFullYear(),
            cDate.getMonth(),
            cDate.getDate(),
            cTime.getHours(),
            cTime.getMinutes(),
            cTime.getSeconds()
          );
          return combined < now;
        })
        .map((c) => c.id);

      if (expiredIds.length > 0) {
        await this.prisma.consultation.updateMany({
          where: { id: { in: expiredIds } },
          data: { consultationStatus: ConsultationStatus.expired },
        });
        return consultations.map((c) =>
          expiredIds.includes(c.id)
            ? { ...c, consultationStatus: ConsultationStatus.expired }
            : c
        );
      }
      return consultations;
    };

    if (role === UserRole.patient) {
      const data = await this.prisma.consultation.findMany({
        where: { patientId: userId },
        include: { provider: true },
      });
      return markExpired(data);
    }

    if (role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId },
      });
      if (!provider) {
        return [];
      }

      const data = await this.prisma.consultation.findMany({
        where: { providerId: provider.id },
        include: { patient: true },
      });
      return markExpired(data);
    }

    // admin: see all
    const data = await this.prisma.consultation.findMany({
      include: { patient: true, provider: true },
    });
    return markExpired(data);
  }

  async cancelConsultation(patientId: string, consultationId: string) {
    const consultation = await this.prisma.consultation.findUnique({
      where: { id: consultationId },
    });

    if (!consultation || consultation.patientId !== patientId) {
      throw new ForbiddenException('You cannot modify this consultation');
    }

    return this.prisma.consultation.update({
      where: { id: consultationId },
      data: {
        consultationStatus: ConsultationStatus.cancelled,
      },
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

