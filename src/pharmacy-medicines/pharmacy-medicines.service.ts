import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { activeUserWhere } from '../common/prisma-user-filters';

@Injectable()
export class PharmacyMedicinesService {
  constructor(private readonly prisma: PrismaService) {}

  private async ensureOwnership(medicineId: string, userId: string) {
    const medicine = await this.prisma.pharmacyMedicine.findUnique({
      where: { id: medicineId },
      include: { pharmacy: true },
    });

    if (!medicine) {
      throw new NotFoundException('Medicine not found');
    }

    if (!medicine.pharmacy || medicine.pharmacy.userId !== userId) {
      throw new ForbiddenException(
        'You cannot modify medicines of another pharmacy',
      );
    }

    return medicine;
  }

  async addMedicineForPharmacy(userId: string, data: any) {
    const pharmacy = await this.prisma.pharmacy.findUnique({
      where: { userId },
    });

    if (!pharmacy) {
      throw new NotFoundException('Pharmacy profile not found');
    }

    return this.prisma.pharmacyMedicine.create({
      data: {
        pharmacyId: pharmacy.id,
        medicineName: data.medicineName,
        genericName: data.genericName,
        quantity: data.quantity ?? 0,
        availabilityStatus:
          typeof data.availabilityStatus === 'boolean'
            ? data.availabilityStatus
            : true,
      },
    });
  }

  async getPharmacyInventory(userId: string) {
    const pharmacy = await this.prisma.pharmacy.findUnique({
      where: { userId },
    });

    if (!pharmacy) {
      throw new NotFoundException('Pharmacy profile not found');
    }

    return this.prisma.pharmacyMedicine.findMany({
      where: { pharmacyId: pharmacy.id },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async deleteMedicineForPharmacy(userId: string, id: string) {
    await this.ensureOwnership(id, userId);

    return this.prisma.pharmacyMedicine.delete({
      where: { id },
    });
  }

  async updateMedicineForPharmacy(userId: string, id: string, data: any) {
    await this.ensureOwnership(id, userId);

    return this.prisma.pharmacyMedicine.update({
      where: { id },
      data: {
        quantity: data.quantity,
        availabilityStatus: data.availabilityStatus,
      },
    });
  }

  async searchMedicines(
    query?: string,
    location?: string,
    page = 1,
    pageSize = 10,
  ) {
    const trimmedQuery = query?.trim();
    const trimmedLocation = location?.trim();
    const mode = 'insensitive' as const;

    const orFilter =
      trimmedQuery && trimmedQuery.length > 0
        ? {
            OR: [
              { medicineName: { contains: trimmedQuery, mode } },
              { genericName: { contains: trimmedQuery, mode } },
            ],
          }
        : undefined;

    return this.prisma.pharmacyMedicine.findMany({
      where: {
        AND: [
          orFilter ?? {},
          trimmedLocation
            ? {
                pharmacy: {
                  location: { contains: trimmedLocation, mode },
                  user: activeUserWhere,
                },
              }
            : { pharmacy: { user: activeUserWhere } },
        ],
      },
      include: {
        pharmacy: true,
      },
      orderBy: [
        { medicineName: 'asc' },
        { genericName: 'asc' },
        { availabilityStatus: 'desc' },
      ],
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }
}
