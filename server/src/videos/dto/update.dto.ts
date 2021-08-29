import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { VideoDto } from './video.dto';

class UpdateVideoDto extends PartialType(VideoDto) {
  @IsString()
  _id: string;
}

export default UpdateVideoDto;
