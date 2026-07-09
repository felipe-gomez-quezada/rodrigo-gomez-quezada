alter table public.contact_requests
  add column correo_enviado boolean not null default false;

update public.contact_requests
set correo_enviado = false
where correo_enviado is distinct from false;
