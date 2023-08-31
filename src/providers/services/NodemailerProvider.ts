import { smptEmail, smptPass } from '../../config';
import { IEmailProvider } from '../interfaces/IEmailProvider';
import nodemailer from 'nodemailer';

class NodemailerProvider implements IEmailProvider {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: smptEmail,
        pass: smptPass,
      },
    });
  }

  async sendEmail(from: string, to: string, subject: string, content: string): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from,
        to,
        subject,
        text: content,
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async sendTemplate(from: string, to: string, subject: string, html: string): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from,
        to,
        subject,
        html,
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

export const nodemailerProvider = new NodemailerProvider();
