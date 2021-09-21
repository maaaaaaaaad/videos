import { CommentDto } from './dto/comment.dto';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { Response, Request } from 'express';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Post('create-comment')
  async createComment(
    @Body() comment: CommentDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    try {
      const result = await this.metadataService.addComment(
        req.session.user._id,
        comment,
      );
      return res.status(200).json({
        result,
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }

  @Get('get-comments')
  async getComments(@Res() res: Response) {
    try {
      const result = await this.metadataService.getAllComments();
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
