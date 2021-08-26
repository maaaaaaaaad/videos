import { forwardRef, Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema } from 'src/schemas/video.schema';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    MongooseModule.forFeature([
      {
        name: 'Videos',
        schema: VideoSchema,
        collection: 'vbnvideos',
      },
    ]),
    MulterModule.register({
      dest: 'upload/video/',
    }),
  ],
  providers: [VideosService],
  controllers: [VideosController],
  exports: [VideosService],
})
export class VideosModule {}
