import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRoom {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  name: string;
}

export class JoinedRoom {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  name: string;
}

export class Message {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  key: string;
}
