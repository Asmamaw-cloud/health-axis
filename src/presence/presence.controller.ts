import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('presence')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('presence')
export class PresenceController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(@Query('userId') userId?: string) {
    if (!userId) return [];
    const pres = await this.prisma.presence.findMany({ where: { userId } });
    return pres;
  }

  @Post()
  async upsert(@Body() body: { userId: string; status?: string; meta?: any }) {
    const { userId, status, meta } = body || {};
    if (!userId) return { error: 'missing userId' };

    const data: any = {
      userId,
      status: status || 'online',
      meta: meta ?? null,
      updatedAt: new Date(),
    };

    // Use upsert with unique userId
    return this.prisma.presence.upsert({
      where: { userId },
      update: data,
      create: data,
    });
  }
}
