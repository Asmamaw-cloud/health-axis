import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RealtimeGateway } from './realtime.gateway';

@Controller('audio-sessions')
export class AudioSessionsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: RealtimeGateway,
  ) {}

  @Get()
  async list(@Query('receiverId') receiverId?: string, @Query('status') status?: string) {
    const where: any = {};
    if (receiverId) where.receiverId = receiverId;
    if (status) where.status = status;
    return this.prisma.audioSession.findMany({ where, orderBy: { createdAt: 'desc' }, take: 50 });
  }

  @Post()
  async create(@Body() body: any) {
    const session = await this.prisma.audioSession.create({ data: body });
    // notify receiver
    this.gateway.emitMessage(session.receiverId, { event: 'audio_session:insert', new: session });
    return session;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const updated = await this.prisma.audioSession.update({ where: { id }, data: body });
    // broadcast update to both parties
    this.gateway.emitMessage(updated.receiverId, { event: 'audio_session:update', new: updated });
    this.gateway.emitMessage(updated.initiatorId, { event: 'audio_session:update', new: updated });
    return updated;
  }
}
