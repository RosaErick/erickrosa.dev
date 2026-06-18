-- Guestbook schema
-- profiles: one row per signed-in user (created/updated on sign-in via the API)
-- messages: guestbook entries, linked to a profile by email (FK enables the
--           embedded join `profiles (username, image_url)` used by /api/messages)

create table if not exists public.profiles (
  email      text primary key,
  username   text,
  image_url  text,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id         bigint generated always as identity primary key,
  content    text not null,
  user_email text not null references public.profiles (email) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists messages_created_at_idx
  on public.messages (created_at desc);

-- RLS on: no direct client access. The Next.js server uses the service_role
-- key (which bypasses RLS) and enforces auth via the NextAuth session.
alter table public.profiles enable row level security;
alter table public.messages enable row level security;
