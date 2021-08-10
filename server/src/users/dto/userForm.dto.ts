import { IsEmail, IsString, ValidateNested } from 'class-validator';

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

  @ValidateNested()
  avatar?: Express.Multer.File | null;
}
