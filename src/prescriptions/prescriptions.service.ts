import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class PrescriptionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async addPrescriptionForConsultation(
    providerUserId: string,
    consultationId: string,
    medicines: Array<{
      medicineName: string;
      dosage?: string;
      frequency?: string;
      duration?: string;
      instructions?: string;
    }>,
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
      throw new ForbiddenException(
        'You cannot prescribe for this consultation',
      );
    }

    const created = await this.prisma.$transaction(
      medicines.map((m) =>
        this.prisma.prescription.create({
          data: {
            consultationId,
            medicineName: m.medicineName,
            dosage: m.dosage,
            frequency: m.frequency,
            duration: m.duration,
            instructions: m.instructions,
          },
        }),
      ),
    );

    // Notification for the patient when a provider adds prescriptions.
    await this.notificationsService.dispatchNotification(
      consultation.patientId,
      'prescription_added',
      `New prescription added for your consultation (ID: ${consultationId}).`,
      { senderId: providerUserId },
    );

    return created;
  }
  
  async getPatientPrescriptions(userId: string) {
    return this.prisma.prescription.findMany({
      where: {
        consultation: {
          patientId: userId,
        },
      },
      include: {
        consultation: {
          include: {
            provider: {
              include: {
                user: true,
              },
            },
          },
        },
      },
      orderBy: {
        consultation: {
           consultationDate: 'desc'
        }
      }
    });
  }

  async getConsultationPrescriptions(consultationId: string, userId: string, role: string) {
    const consultation = await this.prisma.consultation.findUnique({
      where: { id: consultationId },
      include: { provider: true }
    });

    if (!consultation) {
      throw new NotFoundException('Consultation not found');
    }

    // Access control
    if (role === 'patient' && consultation.patientId !== userId) {
      throw new ForbiddenException('You cannot access this prescription');
    }

    if (role === 'provider' && consultation.provider?.userId !== userId) {
      throw new ForbiddenException('You cannot access this prescription');
    }

    return this.prisma.prescription.findMany({
      where: { consultationId },
    });
  }
}
