import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserInformation } from './user.schema';
import { MetadataInformation } from './metadata.schema';

export type VideoDocument = VideoInformation & Document;

@Schema()
export class VideoInformation {
  @Prop({ required: true })
  videoUrl: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  theme: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  age_verification: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' })
  owner: UserInformation;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Metadatas' }])
  comment: MetadataInformation[];
}

export const VideoSchema = SchemaFactory.createForClass(VideoInformation);
