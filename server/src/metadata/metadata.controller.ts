import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CommentDto } from './dto/comment.dto';
import { MetadataService } from './metadata.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Post('create-comment/:videoId')
  async postComment(
    @Param('videoId') videoId: string,
    @Body() body: CommentDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    if (req.session.user) {
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
    throw new NotFoundException('Not found user session');
  }

  @Get('get-comments/:videoId')
  async getComments(@Param('videoId') videoId: string, @Res() res: Response) {
    try {
      const result = await this.metadataService.getComments(videoId);
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
