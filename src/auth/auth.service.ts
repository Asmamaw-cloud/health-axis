import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { RegisterDto, LoginDto, ResetPasswordDto } from './dto/auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '../generated/prisma';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  private async verifyPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async register(payload: RegisterDto) {
    const existing = await this.usersService.findByEmailOrPhone(
      payload.email,
      payload.phoneNumber,
    );

    if (existing) {
      throw new ConflictException(
        'User with provided email or phone already exists',
      );
    }

    const passwordHash = await this.hashPassword(payload.password);

    const user = await this.usersService.createUser({
      fullName: payload.fullName,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
      passwordHash,
      role: payload.role,
    });

    // Create role-specific records (provider / pharmacy) when applicable
    if (payload.role === UserRole.provider) {
      const p = payload as any;
      await this.prisma.provider.create({
        data: {
          userId: user.id,
          specialization: p.specialization ?? undefined,
          yearsExperience:
            p.yearsExperience !== undefined
              ? Number(p.yearsExperience)
              : undefined,
          consultationFee: p.consultationFee ?? undefined,
          profileDescription: p.profileDescription ?? undefined,
          availabilitySchedule: p.availabilitySchedule ?? undefined,
        },
      });
    }

    if (payload.role === UserRole.pharmacy) {
      const ph = payload as any;
      await this.prisma.pharmacy.create({
        data: {
          userId: user.id,
          pharmacyName: ph.pharmacyName ?? user.fullName,
          location: ph.location ?? undefined,
          contactInfo: ph.contactInfo ?? undefined,
        },
      });
    }

    const accessToken = await this.createAccessToken(user.id, user.role);

    return {
      accessToken,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
    };
  }

  async login(payload: LoginDto) {
    const user = await this.usersService.findByEmailOrPhone(
      payload.email,
      (payload as any).phoneNumber,
    );

    if (!user) {
      this.logger.log(
        `Login attempt failed: user not found for email=${payload.email} phone=${(payload as any).phoneNumber}`,
      );
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.log(
      `Login attempt: found user id=${user.id} email=${user.email} phone=${user.phoneNumber} role=${user.role}`,
    );

    const passwordValid = await this.verifyPassword(
      payload.password,
      user.password,
    );
    if (!passwordValid) {
      this.logger.log(
        `Login attempt failed: invalid password for userId=${user.id}`,
      );
    }
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.createAccessToken(user.id, user.role);
    this.logger.log(`Login successful for userId=${user.id}; issuing token`);

    return {
      accessToken,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
    };
  }

  async resetPassword(payload: ResetPasswordDto) {
    // Minimal stub implementation using a simple token lookup.
    const resetRecord = await this.prisma.notification.findFirst({
      where: {
        type: 'password_reset',
        message: payload.token,
      },
      include: {
        user: true,
      },
    });

    if (!resetRecord || !resetRecord.user) {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    const newHash = await this.hashPassword(payload.newPassword);

    await this.prisma.user.update({
      where: { id: resetRecord.userId },
      data: { password: newHash },
    });

    // Mark token as used
    await this.prisma.notification.update({
      where: { id: resetRecord.id },
      data: { isRead: true },
    });

    return { success: true };
  }

  async createAccessToken(userId: string, role: UserRole) {
    const payload = { sub: userId, role };
    const expiresInSeconds =
      Number(this.configService.get<string>('JWT_EXPIRES_IN') ?? '3600') ||
      3600;

    return this.jwtService.signAsync(payload, {
      expiresIn: expiresInSeconds,
    });
  }
}
