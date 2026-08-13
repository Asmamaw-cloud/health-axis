import { Module } from '@nestjs/common';
import { HealthReadingsService } from './health-readings.service';
import { HealthReadingsController } from './health-readings.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [PrismaModule, NotificationsModule],
  controllers: [HealthReadingsController],
  providers: [HealthReadingsService],
  exports: [HealthReadingsService],
})
export class HealthReadingsModule {}
