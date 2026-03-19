import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
      throw new ForbiddenException('You cannot modify medicines of another pharmacy');
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

  async searchMedicines(query: string, location?: string) {
    return this.prisma.pharmacyMedicine.findMany({
      where: {
        AND: [
          {
            OR: [
              { medicineName: { contains: query, mode: 'insensitive' } },
              { genericName: { contains: query, mode: 'insensitive' } },
            ],
          },
          location
            ? {
                pharmacy: {
                  location: { contains: location, mode: 'insensitive' },
                },
              }
            : {},
        ],
      },
      include: {
        pharmacy: true,
      },
      orderBy: [
        { availabilityStatus: 'desc' },
        { medicineName: 'asc' },
      ],
    });
  }
}

