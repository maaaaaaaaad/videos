import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetadataDocument } from 'src/schemas/metadata.schema';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class MetadataService {
  constructor(
    @InjectModel('Metadatas')
    private readonly metadataModel: Model<MetadataDocument>,
  ) {}
  async createComment(commentDto: CommentDto) {
    const { dataId, date } = commentDto;
    const comment = await this.metadataModel.create({
      dataId,
      date,
    });
    //add to comment array into the video service
    return comment;
  }
}
