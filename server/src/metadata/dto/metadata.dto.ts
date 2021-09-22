import { IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  nickname: string;

  @IsString()
  date: string;
}
