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
  async upsert(@Body() body: { userId: string; status?: string; typingInConversation?: string | null }) {
    const { userId, status, typingInConversation } = body || {};
    if (!userId) return { error: 'missing userId' };

    const now = new Date();
    const data: any = {
      userId,
      status: status || 'online',
      lastSeen: now,
      updatedAt: now,
    };
    if (typeof typingInConversation !== 'undefined') data.typingInConversation = typingInConversation;

    const existing = await this.prisma.presence.findUnique({ where: { userId } });
    if (existing) {
      return this.prisma.presence.update({ where: { userId }, data });
    }
    return this.prisma.presence.create({ data });
  }
}
