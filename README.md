# Rodrigo Gómez Quezada — Sitio Personal

Landing page estática para Rodrigo Gómez Quezada, abogado y tutor de examen de grado.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React

## Desarrollo local

```bash
npm install
cp .env.local.example .env.local
# Editar NEXT_PUBLIC_CALENDAR_URL con el enlace real de Google Calendar
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_CALENDAR_URL` | URL de Google Calendar para agendar asesorías |

## Estructura

```
app/           → layout, page, estilos globales
components/    → secciones modulares (Header, Hero, About, etc.)
lib/           → constantes y datos estáticos
public/images/ → assets (reemplazar portrait.svg con foto real)
```

## Despliegue

Compatible con Vercel. Configurar `NEXT_PUBLIC_CALENDAR_URL` en las variables de entorno del proyecto.
