import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const VideoSchema = SchemaFactory.createForClass(VideoInformation);
