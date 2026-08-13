import {
  Controller,
  Get,
  Param,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async list(@CurrentUser() user: { userId: string; role: string }) {
    return this.notificationsService.listForUser(user.userId);
  }

  @Get('badge-counts')
  async badgeCounts(@CurrentUser() user: { userId: string; role: string }) {
    return this.notificationsService.getBadgeCounts(user.userId, user.role);
  }

  @Put(':id/read')
  async markAsRead(
    @Param('id') id: string,
    @CurrentUser() user: { userId: string; role: string },
  ) {
    return this.notificationsService.markAsRead(user.userId, id);
  }

  @Put('mark-messages-read')
  async markMessagesRead(
    @CurrentUser() user: { userId: string },
    @Query('senderId') senderId?: string,
  ) {
    return this.notificationsService.markMessagesReadWithSender(
      user.userId,
      senderId,
    );
  }

  @Get('unread-message-senders')
  async unreadMessageSenders(@CurrentUser() user: { userId: string }) {
    return this.notificationsService.getUnreadMessageSenders(user.userId);
  }

  @Put('mark-non-message-read')
  async markNonMessageRead(
    @CurrentUser() user: { userId: string; role: string },
  ) {
    return this.notificationsService.markNonMessageRead(user.userId);
  }

  @Put('mark-prescription-added-read')
  async markPrescriptionAddedRead(@CurrentUser() user: {
    userId: string;
  }) {
    return this.notificationsService.markPrescriptionAddedRead(user.userId);
  }
}
