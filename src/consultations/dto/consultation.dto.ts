import { ApiProperty } from '@nestjs/swagger';
import { ConsultationStatus } from '../../generated/prisma/client';

export class BookConsultationDto {
  @ApiProperty({ description: 'ID of the healthcare provider' })
  providerId: string;

  @ApiProperty({ description: 'Date of the consultation (YYYY-MM-DD)' })
  consultationDate: string;

  @ApiProperty({ description: 'Time of the consultation (HH:MM:SS)' })
  consultationTime: string;

  @ApiProperty({ description: 'Optional notes for the consultation', required: false })
  notes?: string;
}

export class UpdateConsultationStatusDto {
  @ApiProperty({ description: 'New status for the consultation', enum: ConsultationStatus })
  status: ConsultationStatus;
}