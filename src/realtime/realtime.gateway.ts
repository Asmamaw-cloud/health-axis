import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    const userId = client.handshake.auth?.userId as string | undefined;
    if (userId) {
      client.join(`user:${userId}`);
    }
  }

  @SubscribeMessage('message:send')
  handleClientMessage(
    @MessageBody() payload: any,
    @ConnectedSocket() client: Socket,
  ) {
    const receiverId = payload.receiverId as string;
    this.server.to(`user:${receiverId}`).emit('message:received', payload);
  }

  emitMessage(receiverUserId: string, message: any) {
    this.server.to(`user:${receiverUserId}`).emit('message:received', message);
  }

  emitNotification(userId: string, notification: any) {
    this.server.to(`user:${userId}`).emit('notification:new', notification);
  }
}
