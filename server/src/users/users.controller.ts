import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('validation/id')
  async idValidation(@Res() res: Response, @Req() req: Request) {
    const { id }: { id: string } = req.body;

    const checking = await this.userService.validationId(id);

    if (checking === true) {
      return res.send(`${id} has already to exists`);
    }

    return res.status(HttpStatus.OK).send('OK');
  }
}
