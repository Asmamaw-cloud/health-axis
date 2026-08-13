import { Module } from '@nestjs/common';
import { RealtimeGateway } from './realtime.gateway';
import { PrismaModule } from '../prisma/prisma.module';
import { AudioSessionsController } from './audio-sessions.controller';
import { PresenceController } from './presence.controller';

@Module({
  imports: [PrismaModule],
  providers: [RealtimeGateway],
  controllers: [AudioSessionsController, PresenceController],
  exports: [RealtimeGateway],
})
export class RealtimeModule {}
