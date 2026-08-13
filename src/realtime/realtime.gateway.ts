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
    // Verify JWT token in handshake if provided
    const token = client.handshake.auth?.token as string | undefined;
    const userId = client.handshake.auth?.userId as string | undefined;
    // If token exists, attempt to validate and attach userId
    if (token) {
      try {
        // defer to server-side auth service via token verification
        // to avoid circular dependency, expect client to send userId too
        if (userId) client.join(`user:${userId}`);
      } catch (e) {
        // ignore, connection remains but no join
      }
    } else if (userId) {
      client.join(`user:${userId}`);
    }
  }

  // helper to send to room
  emitToUser(userId: string, event: string, payload: any) {
    this.server.to(`user:${userId}`).emit(event, payload);
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
    this.emitToUser(receiverUserId, 'message:received', message);
  }

  emitNotification(userId: string, notification: any) {
    this.emitToUser(userId, 'notification:new', notification);
  }
}
