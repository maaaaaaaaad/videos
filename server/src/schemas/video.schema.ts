import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserInformation } from './user.schema';

export type VideoDocument = VideoInformation & Document;
export type VideoMetadata = {
  views_count: number;
  comment: {
    author: string | null;
    content: string | null;
    date: number;
  };
};

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

  @Prop(
    raw({
      views_count: { type: Number, default: 0 },
      comment: [
        {
          author: { type: String, default: null },
          content: { type: String, default: null },
          date: { type: Number, default: null },
        },
      ],
    }),
  )
  metadata: VideoMetadata;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' })
  owner: UserInformation;
}

export const VideoSchema = SchemaFactory.createForClass(VideoInformation);
