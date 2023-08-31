export interface IEmailProvider {
  sendEmail(from: string, to: string, subject: string, content: string): Promise<boolean>;
  sendTemplate(from: string, to: string, subject: string, html: string): Promise<boolean>;
}
