import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';
import { VideoDto } from './dto/video.dto';
import { UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel('VideoData') private videoModel: Model<VideoDocument>,
  ) {}
  //
  async upload(session: UserDocument, videoData: VideoDto) {
    const { video, title, description, theme } = videoData;

    return await this.videoModel.create({
      video,
      title,
      description,
      theme,
      owner: session._id,
    });
  }
}
