import { IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  userId: string;

  @IsString()
  nickname: string;

  @IsString()
  date: string;
}
