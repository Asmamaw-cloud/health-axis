import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly configService: ConfigService) {}

  private get apiKey(): string {
    return this.configService.get<string>('RESEND_API_KEY') ?? '';
  }

  private get fromAddress(): string {
    return (
      this.configService.get<string>('EMAIL_FROM') ??
      this.configService.get<string>('RESEND_FROM_EMAIL') ??
      'no-reply@example.com'
    );
  }

  async sendEmail(to: string, subject: string, html: string) {
    if (!this.apiKey) {
      this.logger.warn('RESEND_API_KEY is not configured. Skipping email send.');
      return;
    }

    // Resend expects a `from`, `to[]`, `subject` and at least one content field (html/text).
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: this.fromAddress,
        to: [to],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      this.logger.error(`Resend email failed: ${res.status} ${text}`);
      return;
    }
  }
}

