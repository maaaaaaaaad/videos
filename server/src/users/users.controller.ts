import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
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
  async postSignUpData(@Body() body: UserSignDataDto, @Res() res: Response) {
    //

    try {
      const result = await this.userService.signUpUserData(body);
      return res.status(HttpStatus.OK).json({
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

      if (result) {
        req.session.user = result;
      }

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
