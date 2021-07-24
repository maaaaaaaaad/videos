import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

export const UserSchema = SchemaFactory.createForClass(UserInformation);
