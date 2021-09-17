import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { metadataSchema } from 'src/schemas/metadata.schema';
import { MetadataController } from './metadata.controller';
import { MetadataService } from './metadata.service';

@Module({
  imports: [
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
