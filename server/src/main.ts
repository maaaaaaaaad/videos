import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
  });

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useStaticAssets(join(__dirname, '..', 'avatar'), {
    index: false,
    prefix: '/avatar',
  });

  app.useStaticAssets(join(__dirname, '..', 'assets'), {
    index: false,
    prefix: '/assets',
  });

  app.useStaticAssets(join(__dirname, '..', 'upload/videos'), {
    index: false,
    prefix: '/upload/videos',
  });

  await app.listen(5000);
}
bootstrap();
