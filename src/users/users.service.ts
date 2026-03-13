import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByEmailOrPhone(email?: string, phoneNumber?: string) {
    if (!email && !phoneNumber) {
      return null;
    }

    return this.prisma.user.findFirst({
      where: {
        OR: [
          email ? { email } : undefined,
          phoneNumber ? { phoneNumber } : undefined,
        ].filter(Boolean) as Array<{ email?: string; phoneNumber?: string }>,
      },
    });
  }

  createUser(params: {
    fullName: string;
    email?: string;
    phoneNumber?: string;
    passwordHash: string;
    role: UserRole;
  }) {
    const { fullName, email, phoneNumber, passwordHash, role } = params;

    return this.prisma.user.create({
      data: {
        fullName,
        email,
        phoneNumber,
        password: passwordHash,
        role,
      },
    });
  }
}

