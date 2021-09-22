import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetadataDocument } from 'src/schemas/metadata.schema';
import { VideosService } from 'src/videos/videos.service';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class MetadataService {
  constructor(
    @InjectModel('Metadatas')
    private readonly metadataModel: Model<MetadataDocument>,
    private readonly videosService: VideosService,
  ) {}

  async createComment(videoId: string, commentDto: CommentDto) {
    const { nickname, comment, date } = commentDto;
    const commentData = await this.metadataModel.create({
      comment,
      date,
      nickname,
    });
    await this.videosService.comment(videoId, commentData);
    return commentData;
  }
}
