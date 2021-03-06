import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { MulterModule } from '@nestjs/platform-express';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'UserData',
        schema: UserSchema,
        collection: 'vbnusers',
      },
    ]),
    MulterModule.register({
      dest: 'avatar/',
    }),
    MailModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
