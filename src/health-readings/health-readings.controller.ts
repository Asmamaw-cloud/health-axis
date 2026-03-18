import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HealthReadingsService } from './health-readings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../generated/prisma';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CreateHealthReadingDto } from './dto/health-reading.dto';

@ApiTags('health-readings')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('health-readings')
export class HealthReadingsController {
  constructor(
    private readonly healthReadingsService: HealthReadingsService,
  ) {}

  @Post()
  @Roles(UserRole.patient)
  async create(
    @CurrentUser() user: { userId: string },
    @Body() body: CreateHealthReadingDto,
  ) {
    return this.healthReadingsService.createReading(user.userId, body);
  }

  @Get()
  async get(
    @CurrentUser() user: { userId: string; role: UserRole },
    @Query('patientId') patientId?: string,
  ) {
    if (user.role === UserRole.provider) {
      if (!patientId) {
        return [];
      }
      return this.healthReadingsService.getReadingsForProvider(
        user.userId,
        patientId,
      );
    }

    return this.healthReadingsService.getReadingsForPatient(
      user.userId,
      user.role,
    );
  }
}

