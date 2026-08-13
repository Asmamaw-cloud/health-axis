-- Add patientVideoJoinAllowed boolean column to consultations (idempotent)
ALTER TABLE IF EXISTS public.consultations
  ADD COLUMN IF NOT EXISTS "patientVideoJoinAllowed" boolean NOT NULL DEFAULT false;
