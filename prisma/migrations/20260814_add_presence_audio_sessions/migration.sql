-- Add Presence (user_presence) and AudioSession (audio_sessions) tables
CREATE TABLE IF NOT EXISTS public.user_presence (
  id UUID NOT NULL,
  "userId" UUID NOT NULL,
  status TEXT NOT NULL DEFAULT 'online',
  meta JSONB,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_presence_pkey PRIMARY KEY (id)
);

CREATE UNIQUE INDEX IF NOT EXISTS user_presence_userId_key ON public.user_presence("userId");

CREATE TABLE IF NOT EXISTS public.audio_sessions (
  id UUID NOT NULL,
  "initiatorId" UUID NOT NULL,
  "receiverId" UUID NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  "meetingLink" TEXT,
  "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT audio_sessions_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS audio_sessions_initiatorId_idx ON public.audio_sessions("initiatorId");
CREATE INDEX IF NOT EXISTS audio_sessions_receiverId_idx ON public.audio_sessions("receiverId");
