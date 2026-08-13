-- Add licenseUrl columns to providers and pharmacies (idempotent)
ALTER TABLE IF EXISTS public.providers
  ADD COLUMN IF NOT EXISTS "licenseUrl" TEXT;

ALTER TABLE IF EXISTS public.pharmacies
  ADD COLUMN IF NOT EXISTS "licenseUrl" TEXT;
