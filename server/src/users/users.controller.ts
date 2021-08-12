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
import UserSignInDto from './dto/signIn.dto';
import UpdateUserDataDto from './dto/updateUser.dto';
import { UserSignDataDto } from './dto/userForm.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

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
  @UseInterceptors(FileInterceptor('avatar'))
  async postSignUpData(
    @UploadedFile() file: Express.Multer.File,
    @Body()
    body: UserSignDataDto,
    @Res() res: Response,
  ) {
    //
    if (file !== undefined) {
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
    @Body() body: UserSignInDto,
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
  async patchUserData(
    @Body() body: UpdateUserDataDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const serialId: string = req.session.user._id;
    //
    try {
      const updated = await this.userService.updateUser(serialId, body);
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

  @Get('logout')
  userLogout(@Req() req: Request, @Res() res: Response) {
    //
    req.session.destroy((error) => console.log(error));

    return res.status(200).json({
      message: 'Success logout!',
    });
  }
}
