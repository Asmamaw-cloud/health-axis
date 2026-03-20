import { Module } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ConsultationsController } from './consultations.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AgoraService } from '../integrations/agora.service';
import { NotificationsModule } from '../notifications/notifications.module';
import { ConsultationRemindersService } from './consultation-reminders.service';

@Module({
  imports: [PrismaModule, NotificationsModule],
  controllers: [ConsultationsController],
  providers: [ConsultationsService, AgoraService, ConsultationRemindersService],
  exports: [ConsultationsService],
})
export class ConsultationsModule {}
