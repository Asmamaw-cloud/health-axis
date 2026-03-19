import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../generated/prisma';

interface CreateReadingPayload {
  bloodPressure?: string;
  heartRate?: number;
  temperature?: number;
  bloodGlucose?: number;
  weight?: number;
}

@Injectable()
export class HealthReadingsService {
  constructor(private readonly prisma: PrismaService) {}

  async createReading(patientId: string, data: CreateReadingPayload) {
    const reading = await this.prisma.healthReading.create({
      data: {
        patientId,
        bloodPressure: data.bloodPressure,
        heartRate: data.heartRate,
        temperature: data.temperature as any,
        bloodGlucose: data.bloodGlucose as any,
        weight: data.weight as any,
      },
    });

    // Threshold checks to create notifications
    const highBp =
      reading.bloodPressure &&
      (() => {
        const [systolic, diastolic] =
          reading.bloodPressure.split('/').map((v) => Number(v));
        return systolic > 160 || diastolic > 100;
      })();

    const highHr = reading.heartRate != null && reading.heartRate > 120;
    const highTemp =
      reading.temperature != null && Number(reading.temperature) > 38;

    if (highBp || highHr || highTemp) {
      // Find providers for this patient – for now, create a generic notification
      await this.prisma.notification.create({
        data: {
          userId: patientId,
          type: 'abnormal_reading',
          message: 'Abnormal health reading detected',
        },
      });
    }

    return reading;
  }

  async getReadingsForProvider(
    providerUserId: string,
    patientId?: string,
    search?: string,
  ) {
    const provider = await this.prisma.provider.findUnique({
      where: { userId: providerUserId },
    });
    if (!provider) {
      throw new ForbiddenException('Provider profile not found');
    }

    if (patientId) {
      // Ensure linked
      const consultation = await this.prisma.consultation.findFirst({
        where: { providerId: provider.id, patientId },
      });
      if (!consultation) {
        throw new ForbiddenException('You are not linked to this patient');
      }

      return this.prisma.healthReading.findMany({
        where: { patientId },
        orderBy: { timestamp: 'desc' },
        include: { patient: true },
      });
    }

    // No patientId, fetch all readings for linked patients
    const linkedConsultations = await this.prisma.consultation.findMany({
      where: { providerId: provider.id },
      select: { patientId: true },
    });
    const linkedPatientIds = [...new Set(linkedConsultations.map(c => c.patientId))];

    if (linkedPatientIds.length === 0) return [];

    return this.prisma.healthReading.findMany({
      where: { 
        patientId: { in: linkedPatientIds },
        patient: search ? {
          fullName: { contains: search, mode: 'insensitive' }
        } : undefined,
      },
      orderBy: { timestamp: 'desc' },
      include: { patient: true },
    });
  }

  async getReadingsForPatient(userId: string, role: UserRole) {
    if (role !== UserRole.patient) {
      throw new ForbiddenException('Only patients can access their readings here');
    }

    return this.prisma.healthReading.findMany({
      where: { patientId: userId },
      orderBy: { timestamp: 'desc' },
      include: { patient: true },
    });
  }
}

