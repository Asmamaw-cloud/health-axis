import { Controller, Get, Param, Patch, Query, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProvidersService } from './providers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../generated/prisma/client';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { UpdateProviderProfileDto } from './dto/provider.dto';

@ApiTags('providers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  async listProviders(
    @Query('specialization') specialization?: string,
    @Query('fee_max') feeMax?: string,
    @Query('available') available?: string,
  ) {
    const rawFee = feeMax ? Number(feeMax) : undefined;
    const feeVal = Number.isFinite(rawFee) ? rawFee : undefined;
    const availableFlag = available === 'true' ? true : available === 'false' ? false : undefined;

    const filter = {
      specialization: specialization?.trim(),
      feeMax: feeVal,
      available: availableFlag,
    };

    return this.providersService.listProviders(filter);
  }

  @Get(':id')
  async getProvider(@Param('id') id: string) {
    return this.providersService.getProviderById(id);
  }

  @Patch(':id')
  @Roles(UserRole.provider)
  async updateOwnProfile(
    @Param('id') _id: string,
    @CurrentUser() user: { userId: string },
    @Body() body: UpdateProviderProfileDto,
  ) {
    // Provider can only update their own profile regardless of path param.
    return this.providersService.updateOwnProviderProfile(user.userId, body);
  }
}

