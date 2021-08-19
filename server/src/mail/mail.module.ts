import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports: [MailService],
  providers: [MailService],
})
export class MailModule {}
