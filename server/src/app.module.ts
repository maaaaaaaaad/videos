import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configEmail from './config/email';
import { MailerModule } from '@nestjs-modules/mailer';
import * as path from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { VideosModule } from './videos/videos.module';
import { UsersModule } from './users/users.module';
import { MetadataModule } from './metadata/metadata.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/vbn', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configEmail],
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('email'),
          template: {
            dir: path.join(__dirname, '/templates/'),
            adapter: new EjsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
    }),
    UsersModule,
    VideosModule,
    MetadataModule,
  ],
})
export class AppModule {}
