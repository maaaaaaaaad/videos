import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserInformation } from './user.schema';

export type VideoDocument = VideoInformation & Document;

@Schema()
export class VideoInformation {
  @Prop({ required: true })
  public videoUrl: string;

  @Prop({ required: true })
  public title: string;

  @Prop({ required: true })
  public description: string;

  @Prop({ required: true })
  public theme: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' })
  owner: UserInformation;
}

export const VideoSchema = SchemaFactory.createForClass(VideoInformation);
