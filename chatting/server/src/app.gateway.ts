import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import rooms from './rooms.data';

@WebSocketGateway({
  cors: { origin: 'http://localhost:3000' },
})
export class AppGateway implements OnGatewayDisconnect, OnGatewayConnection {
  @WebSocketServer() io: Socket;

  @SubscribeMessage('UPDATE_ROOMS')
  handleTest(@ConnectedSocket() socket: Socket) {
    socket.emit('UPDATE_ROOMS', rooms);
  }

  handleConnection(client: Socket) {
    Logger.log(`connect ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    Logger.log(`disconnect ${client.id}`);
  }
}
