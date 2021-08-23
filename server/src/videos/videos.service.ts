import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';
import { VideoDto } from './dto/video.dto';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel('Videos') private videoModel: Model<VideoDocument>,
  ) {}
  //
  async upload(videoData: VideoDto) {
    const { video, title, description, theme } = videoData;

    try {
      const createVideo = new this.videoModel({
        video: video ? video.path : null,
        title,
        description,
        theme,
      });
      return await createVideo.save();
    } catch (error) {
      console.log(error.message);
    }
  }
}
