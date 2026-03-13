import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { RealtimeGateway } from '../realtime/realtime.gateway';

@ApiTags('messages')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly realtimeGateway: RealtimeGateway,
  ) {}

  @Post()
  async send(
    @CurrentUser() user: { userId: string },
    @Body()
    body: {
      receiverId: string;
      messageText?: string;
      imageUrl?: string;
    },
  ) {
    const message = await this.messagesService.sendMessage(
      user.userId,
      body.receiverId,
      {
        messageText: body.messageText,
        imageUrl: body.imageUrl,
      },
    );

    this.realtimeGateway.emitMessage(body.receiverId, message);

    return message;
  }

  @Get()
  async getConversation(
    @CurrentUser() user: { userId: string },
    @Query('with') withUserId: string,
  ) {
    return this.messagesService.getConversation(user.userId, withUserId);
  }
}

