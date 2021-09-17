import { CommentDto } from './dto/comment.dto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { Response } from 'express';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Post('create-comment')
  async createComment(@Body() comment: CommentDto, @Res() res: Response) {
    try {
      const result = await this.metadataService.addComment(comment);
      return res.status(200).json({
        result,
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
