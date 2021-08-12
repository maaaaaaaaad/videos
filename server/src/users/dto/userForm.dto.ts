import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserSignDataDto {
  @IsString()
  userId: string;

  @IsString()
  pass1: string;

  @IsString()
  pass2: string;

  @IsEmail()
  email: string;

  @IsString()
  nickname: string;

  @IsOptional()
  avatar: Express.Multer.File | undefined;
}
