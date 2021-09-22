import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { metadataSchema } from 'src/schemas/metadata.schema';
import { VideosModule } from 'src/videos/videos.module';
import { MetadataController } from './metadata.controller';
import { MetadataService } from './metadata.service';

@Module({
  imports: [
    VideosModule,
    MongooseModule.forFeature([
      {
        name: 'Metadatas',
        schema: metadataSchema,
        collection: 'vbnmetadatas',
      },
    ]),
  ],
  controllers: [MetadataController],
  providers: [MetadataService],
})
export class MetadataModule {}
