import { IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  userId: string;

  @IsString()
  comment: string;
}
