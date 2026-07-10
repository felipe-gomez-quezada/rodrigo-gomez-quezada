"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="es">
      <body className="flex min-h-screen items-center justify-center bg-cream px-6 font-sans text-navy">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="font-serif text-2xl">Algo salió mal</h1>
          <p className="text-navy/70">
            Ocurrió un error al cargar la página. Puedes intentar nuevamente.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
