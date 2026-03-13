import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RealtimeModule } from '../realtime/realtime.module';
import { StorageService } from '../integrations/storage.service';

@Module({
  imports: [PrismaModule, RealtimeModule],
  controllers: [MessagesController],
  providers: [MessagesService, StorageService],
  exports: [MessagesService],
})
export class MessagesModule {}

