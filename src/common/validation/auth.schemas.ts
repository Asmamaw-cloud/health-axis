import { z } from 'zod';
import { UserRole } from '../../generated/prisma/client';

export const registerSchema = z
  .object({
    fullName: z.string().min(1),
    email: z.string().email().optional(),
    phoneNumber: z.string().min(3).optional(),
    password: z.string().min(6),
    role: z.nativeEnum(UserRole),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: 'Either email or phoneNumber is required',
    path: ['email'],
  });

export const loginSchema = z
  .object({
    email: z.string().email().optional(),
    phoneNumber: z.string().min(3).optional(),
    password: z.string().min(1),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: 'Either email or phoneNumber is required',
    path: ['email'],
  });

export const resetPasswordRequestSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1),
  newPassword: z.string().min(6),
});

