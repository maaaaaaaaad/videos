import { IsString } from 'class-validator';

export class UserSignDataDto {
  @IsString()
  userId: string;

  @IsString()
  pass1: string;

  @IsString()
  pass2: string;

  @IsString()
  email: string;

  @IsString()
  nickname: string;
}
