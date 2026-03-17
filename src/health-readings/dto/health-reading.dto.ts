import { ApiProperty } from '@nestjs/swagger';

export class CreateHealthReadingDto {
  @ApiProperty({ description: 'Blood pressure reading (e.g., "120/80")', required: false })
  bloodPressure?: string;

  @ApiProperty({ description: 'Heart rate in BPM', required: false })
  heartRate?: number;

  @ApiProperty({ description: 'Body temperature in Celsius', required: false })
  temperature?: number;

  @ApiProperty({ description: 'Blood glucose level', required: false })
  bloodGlucose?: number;

  @ApiProperty({ description: 'Body weight in kg', required: false })
  weight?: number;
}