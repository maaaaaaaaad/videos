import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PostSignIn } from './types/postSignIn.type';
import { PostSignUpType } from './types/postSignUp.type';
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
  async postSignUpData(@Req() req: Request, @Res() res: Response) {
    //
    const body: PostSignUpType = req.body;

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
  async postSignInData(@Req() req: Request, @Res() res: Response) {
    //
    const body: PostSignIn = req.body;

    try {
      const result = await this.userService.signInUser(body);

      if (result) req.session.user = result; //need to save this session into the DB

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
}
