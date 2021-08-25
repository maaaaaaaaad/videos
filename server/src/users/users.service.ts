import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UserSignDataDto } from './dto/userForm.dto';
import UserSignInDto from './dto/signIn.dto';
import UpdateUserDataDto from './dto/updateUser.dto';
import { VideoDocument } from 'src/schemas/video.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('UserData') private userModel: Model<UserDocument>,
  ) {}
  //
  async checkingId(id: string) {
    const idExist: boolean = await this.userModel.exists({
      userId: id,
    });

    if (idExist) {
      return {
        userId: id,
        duplicate: idExist,
        message: 'Already taken',
      };
    }

    return {
      userId: id,
      duplicate: idExist,
      message: 'Successfully',
    };
  }

  async checkingNick(nickname: string) {
    const nickExist: boolean = await this.userModel.exists({
      nickname,
    });

    if (nickExist) {
      return {
        userId: nickname,
        duplicate: nickExist,
        message: 'Already taken',
      };
    }

    return {
      userId: nickname,
      duplicate: nickExist,
      message: 'Successfully',
    };
  }

  async checkingEmail(email: string): Promise<boolean> {
    const emailExist: boolean = await this.userModel.exists({
      email,
    });

    return emailExist;
  }

  async signUpUserData(signUpData: UserSignDataDto) {
    //
    const { userId, pass1, pass2, email, nickname, avatar } = signUpData;

    const checkExists: boolean = await this.userModel.exists({
      email,
    });

    if (checkExists) {
      throw new Error(`This email is already taken.`);
    }

    if (pass1 !== pass2) {
      throw new Error(`Password does not match`);
    }

    const user = new this.userModel({
      userId,
      password: pass2,
      email,
      nickname,
      avatarUrl: avatar ? avatar.path : null,
    });

    return await user.save();
  }

  async signInUser(signInData: UserSignInDto) {
    const { userId, pass2 } = signInData;

    const checkExists = await this.userModel.findOne({ userId });
    const checkPassword = await bcrypt.compare(pass2, checkExists.password);

    if (!checkPassword) {
      throw new NotFoundException('Password does not match');
    }

    if (checkExists) {
      return checkExists;
    }
  }

  async updateUser(session: UserDocument, updataData: UpdateUserDataDto) {
    const { email, nickname, avatar } = updataData;

    if (email !== session.email || nickname !== session.nickname) {
      const checkExistsInfo: boolean = await this.userModel.exists({
        $or: [{ email, nickname }],
      });

      if (checkExistsInfo) {
        throw new Error(`This email or nickname is already taken.`);
      }
    }

    return await this.userModel.findByIdAndUpdate(
      session._id,
      {
        email: email ?? session.email,
        nickname: nickname ?? session.nickname,
        avatarUrl: avatar ? avatar.path : session.avatarUrl,
      },
      { new: true },
    );
  }

  async passwordChanger(
    session: UserDocument,
    password: Pick<UpdateUserDataDto, 'pass1' | 'pass2'>,
  ) {
    const { pass1, pass2 } = password;
    const findUser = await this.userModel.findById(session._id);

    if (pass1 !== pass2) {
      throw new Error(`Password does not match`);
    }

    findUser.password = pass2;

    return await findUser.save();
  }

  async addUserVideos(userSession: UserDocument, video: VideoDocument) {
    //
    const user = await this.userModel.findById(userSession._id);
    user.videos.push(video);
    await user.save();
  }
}
