import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PostSignIn } from './types/postSignIn.type';
import { PostSignUpType } from './types/postSignUp.type';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('signup')
  async postSignUpData(@Req() req: Request, @Res() res: Response) {
    //
    const body: PostSignUpType = req.body;

    const result = await this.userService.signUpUserData(body);

    return res.status(HttpStatus.OK).json({
      message: 'Create new Account!',
      data: result,
    });
  }

  @Post('login')
  async postSignInData(@Req() req: Request, @Res() res: Response) {
    //
    const body: PostSignIn = req.body;

    const result = await this.userService.signInUser(body);

    return res.status(HttpStatus.OK).json({
      message: 'Success load user!',
      user: result,
    });
  }
}
