import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel('VideoData') private videoModel: Model<VideoDocument>,
  ) {}
  //
}
