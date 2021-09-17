import { PartialType } from '@nestjs/mapped-types';
import { MetadataDto } from './metadata.dto';

export class CommentDto extends PartialType(MetadataDto) {}
