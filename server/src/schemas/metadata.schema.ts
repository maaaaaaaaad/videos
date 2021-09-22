import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserInformation } from './user.schema';
import * as mongoose from 'mongoose';

export type MetadataDocument = MetadataInformation & Document;

@Schema()
export class MetadataInformation {
  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  date: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserData' })
  owner: UserInformation;
}

export const metadataSchema = SchemaFactory.createForClass(MetadataInformation);
