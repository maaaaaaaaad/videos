import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { VideoInformation } from './video.schema';

export type MetadataDocument = MetadataInformation & Document;

@Schema()
export class MetadataInformation {
  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Videos' })
  videos: VideoInformation;
}

export const metadataSchema = SchemaFactory.createForClass(MetadataInformation);
