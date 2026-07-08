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

Ejecutar el script SQL en Supabase:

```
supabase/contact_requests.sql
```

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
