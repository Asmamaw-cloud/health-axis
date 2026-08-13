import { ApiProperty } from '@nestjs/swagger';

export class MedicineDto {
  @ApiProperty({ description: 'Name of the medicine' })
  medicineName: string;

  @ApiProperty({ description: 'Dosage instructions', required: false })
  dosage?: string;

  @ApiProperty({ description: 'Frequency of administration', required: false })
  frequency?: string;

  @ApiProperty({ description: 'Duration of treatment', required: false })
  duration?: string;

  @ApiProperty({ description: 'Special instructions', required: false })
  instructions?: string;
}

export class AddPrescriptionDto {
  @ApiProperty({
    description: 'List of medicines to prescribe',
    type: [MedicineDto],
  })
  medicines: MedicineDto[];
}
