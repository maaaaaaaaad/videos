import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { VideoInformation } from './video.schema';

interface HashPassword extends Document {
  password: string;
}
export type UserDocument = UserInformation & Document;

@Schema()
export class UserInformation {
  @Prop({ required: true })
  readonly userId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ required: false })
  avatarUrl: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'VideoData' }])
  videos: VideoInformation[];
}

export const UserSchema = SchemaFactory.createForClass(
  UserInformation,
).pre<HashPassword>('save', async function (next: NextFunction) {
  //
  if (this.isModified('password')) {
    //
    this.password = await bcrypt.hash(
      this.password,
      Number(process.env.HASH_PASSWORD),
    );
  }
  next();
});
