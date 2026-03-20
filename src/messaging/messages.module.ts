import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RealtimeModule } from '../realtime/realtime.module';
import { StorageService } from '../integrations/storage.service';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [PrismaModule, RealtimeModule, NotificationsModule],
  controllers: [MessagesController],
  providers: [MessagesService, StorageService],
  exports: [MessagesService],
})
export class MessagesModule {}
