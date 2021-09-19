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
  async addComment(commentDto: CommentDto) {
    const { userId, comment, date } = commentDto;

    const createComment = new this.metadataModel({
      userId,
      comment,
      date,
    });

    return await createComment.save();
  }

  async getAllComments() {
    return await this.metadataModel.find({});
  }
}
