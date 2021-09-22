import { Body, Controller, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CommentDto } from './dto/comment.dto';
import { MetadataService } from './metadata.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Post('create-comment')
  async postComment(
    @Query('videoId') videoId: string,
    @Body() body: CommentDto,
    @Res() res: Response,
  ) {
    try {
      const result = await this.metadataService.createComment(videoId, body);
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
