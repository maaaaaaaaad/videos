import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { NextFunction } from 'express';

interface HashPassword extends Document {
  password: string;
}
export type UserDocument = UserInformation & Document;

@Schema()
export class UserInformation {
  @Prop({ required: true })
  readonly userId: string;

  @Prop({ required: true })
  readonly password: string;

  @Prop({ required: true })
  readonly email: string;

  @Prop({ required: true })
  readonly nickname: string;

  @Prop({ required: false })
  readonly avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(
  UserInformation,
).pre<HashPassword>('save', async function (next: NextFunction) {
  //
  if (this.isModified('password')) {
    //
    this.password = await bcrypt.hash(this.password, 5);
  }
  next();
});
