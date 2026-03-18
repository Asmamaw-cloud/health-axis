import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { VerificationStatus } from '../generated/prisma';

interface ProviderFilter {
  q?: string;
  specialization?: string;
  feeMax?: number;
  available?: boolean;
}

@Injectable()
export class ProvidersService {
  constructor(private readonly prisma: PrismaService) {}

  async listProviders(filter: ProviderFilter) {
    const where: any = {};

    if (filter.q) {
      // Search by provider's user fullName
      where.user = {
        fullName: { contains: filter.q, mode: 'insensitive' },
      };
    }

    if (filter.specialization) {
      // Partial, case-insensitive match on specialization
      where.specialization = { contains: filter.specialization, mode: 'insensitive' };
    }

    if (filter.feeMax !== undefined) {
      where.consultationFee = { lte: filter.feeMax };
    }

    if (filter.available === true) {
      // For now, approximate availability by having a non-null schedule.
      where.availabilitySchedule = { not: null };
    } else if (filter.available === false) {
      where.availabilitySchedule = null;
    }

    // Strictly enforce approved status as requested
    where.verificationStatus = VerificationStatus.approved;

    return this.prisma.provider.findMany({
      where,
      include: {
        user: true,
      },
    });
  }

  async getProviderById(id: string) {
    const provider = await this.prisma.provider.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!provider) {
      throw new NotFoundException('Provider not found');
    }

    return provider;
  }

  async updateOwnProviderProfile(userId: string, update: any) {
    const provider = await this.prisma.provider.findUnique({
      where: { userId },
    });

    if (!provider) {
      throw new NotFoundException('Provider profile not found');
    }

    return this.prisma.provider.update({
      where: { id: provider.id },
      data: {
        specialization: update.specialization ?? provider.specialization,
        yearsExperience: update.yearsExperience ?? provider.yearsExperience,
        consultationFee: update.consultationFee ?? provider.consultationFee,
        profileDescription:
          update.profileDescription ?? provider.profileDescription,
        availabilitySchedule:
          update.availabilitySchedule ?? provider.availabilitySchedule,
      },
    });
  }
}

