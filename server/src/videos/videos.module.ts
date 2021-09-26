import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema } from 'src/schemas/video.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Videos',
        schema: VideoSchema,
        collection: 'vbnvideos',
      },
    ]),
    MulterModule.register({
      dest: 'upload/videos',
    }),
  ],
  providers: [VideosService],
  controllers: [VideosController],
  exports: [VideosService],
})
export class VideosModule {}
