-- Ejecutar en Supabase SQL Editor
create table public.contact_requests (
  id         uuid primary key default gen_random_uuid(),
  nombre     text not null,
  telefono   text not null,
  email      text not null,
  mensaje    text,
  created_at timestamptz not null default now()
);

create index contact_requests_created_at_idx
  on public.contact_requests (created_at desc);

alter table public.contact_requests enable row level security;

-- No crear políticas RLS públicas.
-- El Server Action usa SUPABASE_SERVICE_ROLE_KEY para insertar.
