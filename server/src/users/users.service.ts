import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('UserData') private userModel: Model<UserDocument>,
  ) {}
  //
  async validationId(idValue: string) {
    return await this.userModel.exists({ userId: idValue });
  }
}
