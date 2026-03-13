import { Module } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ConsultationsController } from './consultations.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AgoraService } from '../integrations/agora.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConsultationsController],
  providers: [ConsultationsService, AgoraService],
  exports: [ConsultationsService],
})
export class ConsultationsModule {}

