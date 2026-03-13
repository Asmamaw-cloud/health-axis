import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrescriptionsService {
  constructor(private readonly prisma: PrismaService) {}

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
      throw new ForbiddenException('You cannot prescribe for this consultation');
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

    return created;
  }
}

