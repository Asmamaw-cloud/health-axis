-- DBs created from init used "imageUrl"; healthbridge-aligned DBs use "fileUrl".
-- Idempotent: only renames when the old column still exists.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'messages'
      AND column_name = 'imageUrl'
  ) THEN
    ALTER TABLE "messages" RENAME COLUMN "imageUrl" TO "fileUrl";
  END IF;
END $$;
