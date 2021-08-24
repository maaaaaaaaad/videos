import { UserDocument } from 'src/schemas/user.schema';
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

  async getAllVideos() {
    return await this.videoModel.find({}).populate('owner');
  }

  async upload(userSession: UserDocument, videoData: VideoDto) {
    const { video, title, description, theme } = videoData;

    const createVideo = new this.videoModel({
      videoUrl: video.path,
      title,
      description,
      theme,
      owner: userSession._id,
    });

    return await createVideo.save();
  }
}
