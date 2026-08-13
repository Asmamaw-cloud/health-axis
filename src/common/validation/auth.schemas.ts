import { z } from 'zod';
import { UserRole } from '../../generated/prisma';

export const registerSchema = z
  .object({
    fullName: z.string().min(1),
    email: z.string().email().optional(),
    phoneNumber: z.string().min(3).optional(),
    password: z.string().min(6),
    role: z.nativeEnum(UserRole),

    // Provider-specific (optional)
    specialization: z.string().min(1).optional(),
    yearsExperience: z.number().int().nonnegative().optional(),
    consultationFee: z.string().optional(),
    profileDescription: z.string().optional(),
    availabilitySchedule: z.any().optional(),
    licenseUrl: z.string().url().optional(),

    // Pharmacy-specific (optional)
    pharmacyName: z.string().optional(),
    location: z.string().optional(),
    contactInfo: z.string().optional(),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: 'Either email or phoneNumber is required',
    path: ['email'],
  })
  .superRefine((data, ctx) => {
    const needsLicense = data.role === UserRole.provider || data.role === UserRole.pharmacy;
    if (!needsLicense) return;

    if (!data.licenseUrl || data.licenseUrl.trim().length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['licenseUrl'],
        message: 'License is required',
      });
    }
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
