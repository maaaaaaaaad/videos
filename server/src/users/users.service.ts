import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UserSignDataDto } from './dto/userForm.dto';
import UserSignInDto from './dto/signIn.dto';
import UpdateUserDataDto from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('UserData') private userModel: Model<UserDocument>,
  ) {}
  //
  async signUpUserData(signUpData: UserSignDataDto) {
    //
    const { userId, pass1, pass2, email, nickname, avatar } = signUpData;

    const checkExists: boolean = await this.userModel.exists({
      $or: [{ userId }, { email }, { nickname }],
    });

    if (checkExists) {
      throw new Error(`This user id or email or nickname is already taken.`);
    }

    if (pass1 !== pass2) {
      throw new Error(`Password does not match`);
    }

    const user = new this.userModel({
      userId,
      password: pass2,
      email,
      nickname,
      avatar: avatar ? avatar.path : null,
    });

    return await user.save();
  }

  async signInUser(signInData: UserSignInDto) {
    //
    const { userId, pass2 } = signInData;

    const checkExists = await this.userModel.findOne({ userId });
    const checkPassword = await bcrypt.compare(pass2, checkExists.password);

    if (!checkPassword) {
      throw new NotFoundException('Password does not match');
    }

    return checkExists;
  }

  async updateUser(_id: string, updataData: UpdateUserDataDto) {
    //
    const { nickname, email } = updataData;
    const checkExistsInfo: boolean = await this.userModel.exists({
      $or: [{ email }, { nickname }],
    });

    if (checkExistsInfo) {
      throw new Error(`This email or nickname is already taken.`);
    }

    if (email === '' || nickname === '') {
      throw new Error(`Plase fill user data.`);
    }

    return await this.userModel.findByIdAndUpdate(
      _id,
      {
        email,
        nickname,
      },
      { new: true },
    );
  }
}
