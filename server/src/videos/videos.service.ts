import { UserDocument } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';
import { VideoDto } from './dto/video.dto';
import UpdateVideoDto from './dto/update.dto';
import { MetadataDocument } from 'src/schemas/metadata.schema';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel('Videos') private readonly videoModel: Model<VideoDocument>,
  ) {}

  async getAllVideos() {
    return await this.videoModel
      .find({})
      .populate('owner comment')
      .sort({ date: 'desc' });
  }

  async getUserVideos(userSession: UserDocument) {
    const videos = await this.videoModel
      .find({ owner: userSession._id })
      .populate('owner comment')
      .sort({
        date: 'desc',
      });
    return videos;
  }

  async getComments(videoId: string) {
    const find = await this.videoModel
      .findOne({ _id: videoId })
      .populate('comment');
    return find;
  }

  async upload(userSession: UserDocument, videoData: VideoDto) {
    const { video, title, description, theme, age_verification } = videoData;

    const createVideo = new this.videoModel({
      videoUrl: video.path,
      title,
      description,
      theme,
      date: new Date().toLocaleDateString(),
      age_verification,
      owner: userSession._id,
    });
    return await createVideo.save();
  }

  async update(updateData: UpdateVideoDto) {
    const { _id, title, description, theme } = updateData;

    const update = await this.videoModel.findByIdAndUpdate(
      _id,
      {
        title,
        description,
        theme,
      },
      { new: true },
    );
    return update;
  }

  async delete(videoId: Pick<UpdateVideoDto, '_id'>) {
    return await this.videoModel.findByIdAndDelete(videoId);
  }

  async search(keyword: string) {
    return await this.videoModel
      .find({
        title: {
          $regex: new RegExp(keyword, 'i'),
        },
      })
      .populate('owner')
      .sort({ date: 'desc' });
  }

  async comment(videoId: string, commentData: MetadataDocument) {
    const find = await this.videoModel.findById({ _id: videoId });
    find.comment.push(commentData);
    await find.save();
  }
}
