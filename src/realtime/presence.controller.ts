import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RealtimeGateway } from './realtime.gateway';

@Controller('presence')
export class PresenceController {
  constructor(private readonly prisma: PrismaService, private readonly gateway: RealtimeGateway) {}

  @Post()
  async upsert(@Body() body: any) {
    const { userId, status, meta } = body;
    const existing = await this.prisma.presence.findUnique({ where: { userId } });
    let record;
    if (existing) {
      record = await this.prisma.presence.update({ where: { userId }, data: { status, meta } });
    } else {
      record = await this.prisma.presence.create({ data: { userId, status, meta } });
    }
    // broadcast presence change
    this.gateway.emitNotification(userId, { event: 'presence:update', presence: record });
    return record;
  }

  @Get()
  async list(@Query('userId') userId?: string) {
    if (userId) return this.prisma.presence.findUnique({ where: { userId } });
    return this.prisma.presence.findMany();
  }
}
