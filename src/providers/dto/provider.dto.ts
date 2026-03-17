import { ApiProperty } from '@nestjs/swagger';

export class UpdateProviderProfileDto {
  @ApiProperty({ description: 'Medical specialization', required: false })
  specialization?: string;

  @ApiProperty({ description: 'Years of experience', required: false })
  yearsExperience?: number;

  @ApiProperty({ description: 'Consultation fee', required: false })
  consultationFee?: number;

  @ApiProperty({ description: 'Profile description', required: false })
  profileDescription?: string;

  @ApiProperty({ description: 'Availability schedule (JSON)', required: false })
  availabilitySchedule?: any;
}