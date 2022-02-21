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
import { nanoid } from 'nanoid';
import { Socket } from 'socket.io';
import rooms from '../rooms.data';
import { CreateRoom } from './dto';

@WebSocketGateway({
  cors: { origin: 'http://localhost:3000' },
})
export class AppGateway implements OnGatewayDisconnect, OnGatewayConnection {
  @WebSocketServer() io: Socket;

  @SubscribeMessage('CREATE_ROOM')
  handleTest(
    @MessageBody() { name }: CreateRoom,
    @ConnectedSocket() socket: Socket,
  ) {
    const key: string = nanoid();
    rooms[key] = { name, people: 1 };
    socket.emit('CREATE_ROOM', rooms);
    socket.join(key);
    socket.broadcast.emit('CREATE_ROOM', rooms);
  }

  handleConnection(client: Socket) {
    Logger.log(`connect ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    Logger.log(`disconnect ${client.id}`);
  }
}
