import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
import { PostSignIn } from './types/postSignIn.type';
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
      password: pass2,
      email,
      nickname,
    });
  }

  async signInUser(signInData: PostSignIn) {
    //
    const { id, pass1, pass2 } = signInData;

    if (pass1 !== pass2) {
      throw new Error(`Password does not match`);
    }

    const checkExists = await this.userModel.findOne({ userId: id });

    if (checkExists.password !== pass2) {
      throw new Error(`Password does not match`);
    }
    return checkExists;
  }
}
