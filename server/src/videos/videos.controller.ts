import { FileInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
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
    @Res() res: Response,
  ) {
    if (video !== null) {
      body.video = video;
    }

    try {
      const result = await this.videoServie.upload(body);
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
