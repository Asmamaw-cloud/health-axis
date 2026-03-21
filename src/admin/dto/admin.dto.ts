import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const adminSuspendBodySchema = z.object({
  suspended: z.boolean(),
});

export class AdminSuspendDto {
  static schema = adminSuspendBodySchema;

  @ApiProperty({ description: 'Whether the user is suspended' })
  suspended!: boolean;
}
