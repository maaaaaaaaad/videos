import { UserDocument } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';
import { VideoDto } from './dto/video.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel('Videos') private readonly videoModel: Model<VideoDocument>,
    private readonly usersService: UsersService,
  ) {}
  //
  async getAllVideos() {
    return await this.videoModel
      .find({})
      .populate('owner')
      .sort({ date: 'asc' });
  }

  async getUserVideos(userSession: UserDocument) {
    const videos = await this.videoModel
      .find({ owner: userSession._id })
      .populate('owner')
      .sort({
        date: 'asc',
      });

    return videos;
  }

  async upload(userSession: UserDocument, videoData: VideoDto) {
    const { video, title, description, theme } = videoData;

    const createVideo = new this.videoModel({
      videoUrl: video.path,
      title,
      description,
      theme,
      date: new Date(),
      owner: userSession._id,
    });

    await this.usersService.addUserVideos(userSession, createVideo);

    return await createVideo.save();
  }
}
