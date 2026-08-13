-- Create enum type if missing, then add column with default
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'ConsultationType') THEN
    CREATE TYPE "ConsultationType" AS ENUM ('video','audio','chat');
  END IF;
END$$;

ALTER TABLE IF EXISTS public.consultations
  ADD COLUMN IF NOT EXISTS "consultationType" "ConsultationType" NOT NULL DEFAULT 'video';
