import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
import { PostSignUpType } from './types/postSignUp.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('UserData') private userModel: Model<UserDocument>,
  ) {}
  //
  async signUpUserData(signUpData: PostSignUpType) {
    //
    const { id, pass1, pass2, email, nickname } = signUpData;

    const checkExists: boolean = await this.userModel.exists({
      $or: [{ id }, { email }, { nickname }],
    });

    if (checkExists) {
      throw new Error(`This user id or email or nickname is already taken.`);
    }

    if (pass1 !== pass2) {
      throw new Error(`Password does not match`);
    }

    return await this.userModel.create({
      userId: id,
      pass1,
      email,
      nickname,
    });
  }
}
