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
import { CreateRoom, JoinedRoom, Message } from './dto';

import rooms from '../rooms.data';
import users from '../users.data';

@WebSocketGateway({
  cors: { origin: 'http://localhost:3000' },
})
export class AppGateway implements OnGatewayDisconnect, OnGatewayConnection {
  @WebSocketServer() io: Socket;

  @SubscribeMessage('CREATE_ROOM')
  createRoom(
    @MessageBody() { name }: CreateRoom,
    @ConnectedSocket() socket: Socket,
  ) {
    const key: string = nanoid();
    rooms[key] = { name, people: 1 };
    socket.emit('CREATE_ROOM', { key, name });
    socket.join(key);
    users[socket.id] = { joinRoom: key };
    socket.broadcast.emit('NEW_ROOM', rooms);
  }

  @SubscribeMessage('JOINED_ROOM')
  joinedRoom(
    @MessageBody() { key, name }: JoinedRoom,
    @ConnectedSocket() socket: Socket,
  ) {
    if (rooms[key].name !== name) return;
    socket.join(key);
    rooms[key].people += 1;
    users[socket.id] = { joinRoom: key };
    socket.emit('SUCCESS_JOINED', { key, name });
    socket.broadcast.emit('NEW_ROOM', rooms);
  }

  @SubscribeMessage('LEAVE_ROOM')
  leaveRoom(@ConnectedSocket() socket: Socket): void {
    const joinRoom = users[socket.id]?.joinRoom;
    if (!joinRoom) return;
    socket.leave(joinRoom);
    socket.emit('SUCCESS_LEAVE');
    socket.broadcast.emit('SOME_LEAVE_ROOM', { room: joinRoom });
    rooms[joinRoom].people -= 1;

    if (rooms[joinRoom].people === 0) {
      delete rooms[joinRoom];
      socket.broadcast.emit('NEW_ROOM', rooms);
    }
  }

  @SubscribeMessage('SEND_MESSAGE')
  sendMessage(
    @MessageBody() { message, key }: Message,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(socket.rooms);
    console.log(message);
    socket.broadcast.to(key).emit('SEND_MESSAGE', { message });
  }

  handleConnection(client: Socket) {
    Logger.log(`connect ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    Logger.log(`disconnect ${client.id}`);
    const joinRoom: string = users[client.id]?.joinRoom;

    console.log(joinRoom);

    if (joinRoom) {
      rooms[joinRoom].people -= 1;
      client.leave(joinRoom);

      if (rooms[joinRoom].people === 0) {
        delete rooms[joinRoom];
        client.broadcast.emit('NEW_ROOM', rooms);
      }
    }
  }
}
