import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { MetadataDto } from './metadata.dto';

export class CommentDto extends PartialType(MetadataDto) {
  @IsString()
  comment: string;
}
