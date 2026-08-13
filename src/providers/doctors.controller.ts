import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProvidersService } from './providers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('doctors')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  async list(
    @Query('q') q?: string,
    @Query('specialization') specialization?: string,
    @Query('fee_max') feeMax?: string,
    @Query('available') available?: string,
  ) {
    // Delegate to existing providers service
    const rawFee = feeMax ? Number(feeMax) : undefined;
    const feeVal = Number.isFinite(rawFee) ? rawFee : undefined;
    const availableFlag = available === 'true' ? true : available === 'false' ? false : undefined;
    const filter = { q: q?.trim(), specialization: specialization?.trim(), feeMax: feeVal, available: availableFlag };
    return this.providersService.listProviders(filter);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.providersService.getProviderById(id);
  }
}
