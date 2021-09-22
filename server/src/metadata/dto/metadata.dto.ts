import { IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  date: string;
}
