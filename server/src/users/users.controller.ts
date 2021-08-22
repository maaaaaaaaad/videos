import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { diskStorage } from 'multer';
import { MailService } from 'src/mail/mail.service';
import UserSignInDto from './dto/signIn.dto';
import UpdateUserDataDto from './dto/updateUser.dto';
import { UserSignDataDto } from './dto/userForm.dto';
import { Helper } from './shared/helper';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private readonly emailService: MailService,
  ) {}

  @Post('check-id')
  async checkUserId(
    @Body() body: Pick<UserSignDataDto, 'userId'>,
    @Res() res: Response,
  ) {
    //
    const result = await this.userService.checkingId(body.userId);
    return res.status(200).json({
      response: result,
    });
  }

  @Post('check-nick')
  async checkNickname(
    @Body() body: Pick<UserSignDataDto, 'nickname'>,
    @Res() res: Response,
  ) {
    //
    const result = await this.userService.checkingNick(body.nickname);
    return res.status(200).json({
      response: result,
    });
  }

  @Post('check-email')
  async checkEmail(
    @Body() body: Pick<UserSignDataDto, 'email'>,
    @Res() res: Response,
  ) {
    //
    const result = await this.userService.checkingEmail(body.email);
    return res.status(200).json({
      result,
    });
  }

  @Post('email-authentication')
  async emailAuthService(
    @Body() body: Pick<UserSignInDto, 'email'>,
    @Res() res: Response,
  ) {
    //
    const email = body.email;

    const result: number = await this.emailService.emailAuth(email);
    return res.status(200).json({
      message: 'Successfully send email!',
      secret_key: result,
    });
  }

  @Get()
  async getUserSession(@Req() req: Request, @Res() res: Response) {
    //
    const userSession = req.session;

    return res.status(200).json({
      message: 'Success',
      userSession,
    });
  }

  @Post('signup')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
      }),
    }),
  )
  async postSignUpData(
    @UploadedFile() file: Express.Multer.File,
    @Body()
    body: UserSignDataDto,
    @Res() res: Response,
  ) {
    //
    if (file !== null) {
      body.avatar = file;
    }
    //
    try {
      const result = await this.userService.signUpUserData(body);

      return res.status(200).json({
        message: 'Create new Account!',
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  @Post('login')
  async postSignInData(
    @Body() body: Pick<UserSignInDto, 'userId' | 'pass2'>,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //
    try {
      const result = await this.userService.signInUser(body);

      req.session.user = result;

      return res.status(200).json({
        message: 'Success Login!',
        result,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  @Patch('update')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName,
      }),
    }),
  )
  async patchUserData(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Pick<UpdateUserDataDto, 'email' | 'nickname' | 'avatar'>,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //
    if (file !== null) {
      body.avatar = file;
    }

    const userSession = req.session.user;

    try {
      const updated = await this.userService.updateUser(userSession, body);
      req.session.user = updated;

      return res.status(200).json({
        message: 'Success Update!',
        updated,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  @Patch('change-password')
  async patchPassword(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: Pick<UpdateUserDataDto, 'pass1' | 'pass2'>,
  ) {
    //
    const userSession = req.session.user;

    try {
      const updated = await this.userService.passwordChanger(userSession, body);
      req.session.user = updated;

      return res.status(200).json({
        message: 'Success Change!',
        updated,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  @Get('logout')
  userLogout(@Req() req: Request, @Res() res: Response) {
    //
    req.session.destroy((error) => console.log(error));

    return res.status(200).json({
      message: 'Success logout!',
    });
  }
}
