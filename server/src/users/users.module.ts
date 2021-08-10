import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { MulterModule } from '@nestjs/platform-express';

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
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
