import { Injectable } from '@nestjs/common';
import rooms, { RoomsType } from './rooms.data';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello World!</h1>';
  }

  getRooms(): RoomsType {
    return rooms;
  }
}
