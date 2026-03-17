import { UserRole } from '../../generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  loginSchema,
  registerSchema,
  resetPasswordRequestSchema,
  resetPasswordSchema,
} from '../../common/validation/auth.schemas';

export class RegisterDto {
  static schema = registerSchema;

  @ApiProperty({ description: 'Full name of the user' })
  fullName!: string;

  @ApiProperty({ description: 'Email address (optional if phone provided)', required: false })
  email?: string;

  @ApiProperty({ description: 'Phone number (optional if email provided)', required: false })
  phoneNumber?: string;

  @ApiProperty({ description: 'Password (minimum 6 characters)' })
  password!: string;

  @ApiProperty({ description: 'User role', enum: UserRole })
  role!: UserRole;
}

export class AdminRegisterDto {
  static schema = registerSchema;

  @ApiProperty({ description: 'Full name of the admin' })
  fullName!: string;

  @ApiProperty({ description: 'Email address' })
  email!: string;

  @ApiProperty({ description: 'Password (minimum 6 characters)' })
  password!: string;
}

export class LoginDto {
  static schema = loginSchema;

  @ApiProperty({ description: 'Email address' })
  email!: string;

  @ApiProperty({ description: 'Password' })
  password!: string;
}

export class ResetPasswordRequestDto {
  static schema = resetPasswordRequestSchema;

  @ApiProperty({ description: 'Email address for password reset' })
  email!: string;
}

export class ResetPasswordDto {
  static schema = resetPasswordSchema;

  @ApiProperty({ description: 'Reset token' })
  token!: string;

  @ApiProperty({ description: 'New password (minimum 6 characters)' })
  newPassword!: string;
}

