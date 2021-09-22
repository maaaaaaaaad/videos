import { IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  dataId: string;

  @IsString()
  date: string;
}
