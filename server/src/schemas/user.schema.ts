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
  @Prop()
  readonly userId: string;

  @Prop()
  readonly password: string;

  @Prop()
  public email: string;

  @Prop()
  public nickname: string;
}

export const UserSchema = SchemaFactory.createForClass(
  UserInformation,
).pre<HashPassword>('save', async function (next: NextFunction) {
  //
  if (this.isModified('password')) {
    //
    this.password = await bcrypt.hash(
      this.password,
      Math.floor(Math.random() + 1),
    );
  }
  next();
});
