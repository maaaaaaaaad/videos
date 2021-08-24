import { FileInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { VideoDto } from './dto/video.dto';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private videoServie: VideosService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('video'))
  async uploadVideo(
    @UploadedFile() video: Express.Multer.File,
    @Body() body: VideoDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //
    body.video = video;
    const userSession = req.session.user;

    try {
      const result = await this.videoServie.upload(userSession, body);
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
