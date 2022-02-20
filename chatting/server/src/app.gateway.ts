import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: 'http://localhost:3000' },
})
export class AppGateway {
  @WebSocketServer() server: Socket;

  @SubscribeMessage('test')
  handleTest(@MessageBody() data: string, @ConnectedSocket() socket: Socket) {
    console.log('test', data);
    socket.emit('test', `thank you ${data}`);
  }
}
