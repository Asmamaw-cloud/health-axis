import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DoctorsController } from './doctors.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ProvidersController, DoctorsController],
  providers: [ProvidersService],
  exports: [ProvidersService],
})
export class ProvidersModule {}
