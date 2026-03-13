import { UserRole } from '../../generated/prisma/client';
import {
  loginSchema,
  registerSchema,
  resetPasswordRequestSchema,
  resetPasswordSchema,
} from '../../common/validation/auth.schemas';

export class RegisterDto {
  static schema = registerSchema;

  fullName!: string;
  email?: string;
  phoneNumber?: string;
  password!: string;
  role!: UserRole;
}

export class LoginDto {
  static schema = loginSchema;

  email?: string;
  phoneNumber?: string;
  password!: string;
}

export class ResetPasswordRequestDto {
  static schema = resetPasswordRequestSchema;

  email!: string;
}

export class ResetPasswordDto {
  static schema = resetPasswordSchema;

  token!: string;
  newPassword!: string;
}

