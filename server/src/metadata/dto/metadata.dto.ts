import { IsEmail, IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsString()
  nickname: string;

  @IsString()
  avatarUrl: string | null;

  @IsString()
  date: string;
}
