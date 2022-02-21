import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RoomsType } from '../rooms.data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('rooms')
  getRooms(): RoomsType {
    return this.appService.getRooms();
  }
}
