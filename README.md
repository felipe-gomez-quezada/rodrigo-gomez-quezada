# Rodrigo Quezada — Sitio Personal

Landing page para Rodrigo Quezada, abogado especializado en Derecho Civil y tutor de examen de grado.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (formulario de contacto)
- Resend (notificaciones por email)
- Lucide React

## Desarrollo local

```bash
npm install
cp .env.local.example .env.local
# Configurar variables de Supabase y Resend
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (solo servidor) |
| `RESEND_API_KEY` | API key de Resend |
| `RESEND_FROM_EMAIL` | Email remitente verificado en Resend |
| `NOTIFICATION_EMAIL` | Email donde Rodrigo recibe notificaciones |

## Base de datos

Proyecto Supabase: **rodrigo-quezada** (`fbcxkyzftywcuhugwxbs`)

Dashboard: https://supabase.com/dashboard/project/fbcxkyzftywcuhugwxbs

La migración `supabase/migrations/20260308230000_create_contact_requests.sql` crea la tabla `contact_requests` con RLS habilitado.

Para aplicar migraciones en remoto:

```bash
supabase link --project-ref fbcxkyzftywcuhugwxbs
supabase db push
```

### MCP de Supabase en Cursor

El plugin está configurado en [`.cursor/mcp.json`](.cursor/mcp.json). Si no aparece en el chat, habilítalo en **Cursor Settings → MCP** y autentícate con Supabase.

## Estructura

```
app/           → layout, page, actions, estilos globales
components/    → secciones modulares (Header, Hero, About, etc.)
lib/           → constantes, validación y cliente Supabase
supabase/      → scripts SQL
public/images/ → assets
```

## Despliegue

Compatible con Vercel. Configurar todas las variables de entorno en el proyecto.
