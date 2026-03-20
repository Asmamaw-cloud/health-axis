import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiProperty({ description: 'ID of the message receiver' })
  receiverId: string;

  @ApiProperty({ description: 'Text content of the message', required: false })
  messageText?: string;

  fileUrl?: string;
}
