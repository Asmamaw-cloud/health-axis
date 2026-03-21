import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

export type JwtPayload = {
  sub: string;
  role: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') ?? 'change-me',
    });
  }

  async validate(payload: JwtPayload) {
    const row = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, role: true, isSuspended: true },
    });

    if (!row) {
      throw new UnauthorizedException();
    }

    if (row.isSuspended) {
      throw new UnauthorizedException('Account suspended');
    }

    return { userId: row.id, role: row.role };
  }
}
