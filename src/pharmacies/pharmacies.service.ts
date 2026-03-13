import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PharmaciesService {
  constructor(private readonly prisma: PrismaService) {}

  async getPharmacyForUser(userId: string) {
    const pharmacy = await this.prisma.pharmacy.findUnique({
      where: { userId },
    });

    if (!pharmacy) {
      throw new NotFoundException('Pharmacy profile not found');
    }

    return pharmacy;
  }
}

