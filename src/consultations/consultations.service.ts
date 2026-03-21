import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ConsultationStatus,
  ConsultationType,
  UserRole,
  VerificationStatus,
} from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { activeUserWhere } from '../common/prisma-user-filters';

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

  async bookConsultation(patientId: string, payload: BookConsultationPayload) {
    const providerRow = await this.prisma.provider.findUnique({
      where: { id: payload.providerId },
      include: { user: true },
    });

    if (
      !providerRow ||
      providerRow.verificationStatus !== VerificationStatus.approved ||
      providerRow.user?.isSuspended
    ) {
      throw new ForbiddenException('Provider is not available');
    }

    // Combine date and time strings for correct parsing (e.g. "2024-03-18T21:00")
    const combinedDateTime = new Date(
      `${payload.consultationDate}T${payload.consultationTime}`,
    );

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
            cTime.getSeconds(),
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
            : c,
        );
      }
      return consultations;
    };

    if (role === UserRole.patient) {
      const data = await this.prisma.consultation.findMany({
        where: {
          patientId: userId,
          provider: { user: activeUserWhere },
        },
        include: { provider: { include: { user: true } } },
      });
      const marked = await markExpired(data);
      // Hide Agora join credentials until the patient acknowledges the video invite.
      return marked.map((c) => ({
        ...c,
        meetingLink: c.patientVideoJoinAllowed ? c.meetingLink : null,
      }));
    }

    if (role === UserRole.provider) {
      const provider = await this.prisma.provider.findUnique({
        where: { userId },
      });
      if (!provider) {
        return [];
      }

      const data = await this.prisma.consultation.findMany({
        where: {
          providerId: provider.id,
          patient: activeUserWhere,
        },
        include: { patient: true },
      });
      return markExpired(data);
    }

    if (role === UserRole.admin) {
      const data = await this.prisma.consultation.findMany({
        include: { patient: true, provider: true },
      });
      return markExpired(data);
    }

    return [];
  }

  async getConsultation(userId: string, role: UserRole, id: string) {
    const consultation = await this.prisma.consultation.findUnique({
      where: { id },
      include: { patient: true, provider: { include: { user: true } } },
    });

    if (!consultation) {
      throw new NotFoundException('Consultation not found');
    }

    if (role === UserRole.patient && consultation.patientId !== userId) {
      throw new ForbiddenException('You cannot access this consultation');
    }

    if (
      role === UserRole.provider &&
      consultation.provider?.userId !== userId
    ) {
      throw new ForbiddenException('You cannot access this consultation');
    }

    if (role !== UserRole.admin) {
      if (consultation.patient?.isSuspended) {
        throw new NotFoundException('Consultation not found');
      }
      if (consultation.provider?.user?.isSuspended) {
        throw new NotFoundException('Consultation not found');
      }
    }

    return consultation;
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

    // `cancelled` is patient-only via PUT /consultations/:id/cancel
    if (status === ConsultationStatus.cancelled) {
      throw new ForbiddenException(
        'Providers cannot cancel consultations; only patients can cancel a booking.',
      );
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
      include: { patient: true, provider: { include: { user: true } } },
    });

    if (!consultation) {
      throw new NotFoundException('Consultation not found');
    }

    if (consultation.providerId !== provider.id) {
      throw new ForbiddenException('You cannot access this consultation');
    }

    return consultation;
  }

  async setMeetingLink(consultationId: string, meetingLink: string) {
    return this.prisma.consultation.update({
      where: { id: consultationId },
      data: { meetingLink },
    });
  }

  async resetPatientVideoJoinGate(consultationId: string) {
    return this.prisma.consultation.update({
      where: { id: consultationId },
      data: { patientVideoJoinAllowed: false },
    });
  }

  async allowPatientVideoJoin(patientId: string, consultationId: string) {
    const consultation = await this.prisma.consultation.findUnique({
      where: { id: consultationId },
    });
    if (!consultation || consultation.patientId !== patientId) {
      throw new ForbiddenException('You cannot access this consultation');
    }
    if (consultation.consultationStatus !== ConsultationStatus.scheduled) {
      throw new ForbiddenException(
        'Video join is only available for scheduled consultations.',
      );
    }
    if (!consultation.meetingLink) {
      throw new ForbiddenException(
        'The provider has not started the video call yet.',
      );
    }
    return this.prisma.consultation.update({
      where: { id: consultationId },
      data: { patientVideoJoinAllowed: true },
    });
  }
}
