import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
  ResetPasswordRequestDto,
} from './dto/auth.dto';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @ApiBearerAuth()
  @Post('logout')
  async logout() {
    // Stateless JWT logout – client should discard token. Endpoint kept for symmetry.
    return { success: true };
  }

  @Post('reset-password/request')
  async requestReset(@Body() body: ResetPasswordRequestDto) {
    // Minimal stub: generate a token and store in notifications for the user.
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      // Do not leak existence of users.
      return { success: true };
    }

    const token = Math.random().toString(36).slice(2);

    await this.prisma.notification.create({
      data: {
        userId: user.id,
        type: 'password_reset',
        message: token,
      },
    });

    // In a real implementation, send email here (e.g. Resend/Nodemailer).
    return { success: true, token }; // token returned for now to aid testing.
  }

  @Post('reset-password')
  async resetPassword(@Body() body: ResetPasswordDto) {
    return this.authService.resetPassword(body);
  }
}

