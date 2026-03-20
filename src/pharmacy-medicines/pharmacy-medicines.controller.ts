import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PharmacyMedicinesService } from './pharmacy-medicines.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../generated/prisma';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import {
  AddPharmacyMedicineDto,
  UpdatePharmacyMedicineDto,
} from './dto/pharmacy-medicine.dto';

@ApiTags('pharmacy-medicines')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller()
export class PharmacyMedicinesController {
  constructor(
    private readonly pharmacyMedicinesService: PharmacyMedicinesService,
  ) {}

  @Get('medicines/search')
  async search(@Query('q') q: string, @Query('location') location?: string) {
    return this.pharmacyMedicinesService.searchMedicines(q, location);
  }

  @Get('pharmacy/medicines')
  @Roles(UserRole.pharmacy)
  async getMyMedicines(@CurrentUser() user: { userId: string }) {
    return this.pharmacyMedicinesService.getPharmacyInventory(user.userId);
  }

  @Post('pharmacy/medicines')
  @Roles(UserRole.pharmacy)
  async addMedicine(
    @CurrentUser() user: { userId: string },
    @Body() body: AddPharmacyMedicineDto,
  ) {
    return this.pharmacyMedicinesService.addMedicineForPharmacy(
      user.userId,
      body,
    );
  }

  @Put('pharmacy/medicines/:id')
  @Roles(UserRole.pharmacy)
  async updateMedicine(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
    @Body() body: UpdatePharmacyMedicineDto,
  ) {
    return this.pharmacyMedicinesService.updateMedicineForPharmacy(
      user.userId,
      id,
      body,
    );
  }

  @Delete('pharmacy/medicines/:id')
  @Roles(UserRole.pharmacy)
  async deleteMedicine(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.pharmacyMedicinesService.deleteMedicineForPharmacy(
      user.userId,
      id,
    );
  }
}
