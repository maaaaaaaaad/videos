import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserInformation } from './user.schema';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' })
  owner: UserInformation;
}

export const VideoSchema = SchemaFactory.createForClass(VideoInformation);
