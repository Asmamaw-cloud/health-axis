import { ApiProperty } from '@nestjs/swagger';

export class AddPharmacyMedicineDto {
  @ApiProperty({ description: 'Name of the medicine' })
  medicineName: string;

  @ApiProperty({ description: 'Generic name of the medicine', required: false })
  genericName?: string;

  @ApiProperty({ description: 'Quantity available', default: 0 })
  quantity?: number;

  @ApiProperty({ description: 'Availability status', default: true })
  availabilityStatus?: boolean;
}

export class UpdatePharmacyMedicineDto {
  @ApiProperty({ description: 'Quantity available' })
  quantity: number;

  @ApiProperty({ description: 'Availability status' })
  availabilityStatus: boolean;
}
