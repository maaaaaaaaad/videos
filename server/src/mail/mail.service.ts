import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly emailService: MailerService) {}

  private async send(
    tos: string[],
    subject: string,
    templateName: string,
    context: any = {},
  ) {
    await this.emailService.sendMail({
      to: tos.join(', '),
      subject,
      template: `./${templateName}`,
      context,
    });
  }

  async emailAuth(to: string): Promise<number> {
    //
    const container = {
      email: to,
      date: new Date(),
      secret_key: Math.floor(Math.random() * 100000) + 100000,
    };

    await this.send(
      [to],
      'Email Authentication from Woong',
      'email-authentication.ejs',
      container,
    );

    return container.secret_key;
  }
}
