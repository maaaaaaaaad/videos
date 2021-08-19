import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly emailService: MailerService) {}

  async _send(
    tos: string[],
    subject: string,
    templateName: string,
    context: any = {},
  ): Promise<boolean> {
    await this.emailService.sendMail({
      to: tos.join(', '),
      subject,
      template: `${templateName}`,
      context,
    });

    return true;
  }

  async emailAuth(to: string) {
    await this._send([to], 'Email Authentication', 'email-authentication.ejs', {
      email: to,
      date: new Date(),
    });
  }
}
