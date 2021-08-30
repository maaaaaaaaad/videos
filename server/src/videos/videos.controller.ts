import { FileInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { VideoDto } from './dto/video.dto';
import { VideosService } from './videos.service';
import UpdateVideoDto from './dto/update.dto';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoServie: VideosService) {}

  @Get()
  async getAllItems(@Res() res: Response) {
    try {
      const result = await this.videoServie.getAllVideos();
      return res.status(200).json({
        message: 'Loaded to read the all videos',
        result,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  @Get('get-videos')
  async getUserItem(@Req() req: Request, @Res() res: Response) {
    const userSession = req.session.user;

    try {
      const result = await this.videoServie.getUserVideos(userSession);
      return res.status(200).json({
        message: 'Successfully get user videos',
        result,
      });
    } catch (error) {
      return res.status(400).json({
        message: new NotFoundException(`Not found ${error.message}`),
      });
    }
  }

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
      const upload = await this.videoServie.upload(userSession, body);
      return res.status(200).json({
        result: upload,
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }

  @Patch('update')
  async updateVideo(@Res() res: Response, @Body() body: UpdateVideoDto) {
    try {
      const result = await this.videoServie.update(body);
      return res.status(200).json({
        message: 'Successfully update video',
        result,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  @Post('delete')
  async deleteUserVideo(
    @Res() res: Response,
    @Body() videoId: Pick<UpdateVideoDto, '_id'>,
  ) {
    try {
      const result = await this.videoServie.delete(videoId);
      return res.status(200).json({
        message: 'Successfully delete video',
        result,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}
