import Image from "next/image";

type LawyerPortraitProps = {
  src: string | null;
  alt: string;
  priority?: boolean;
  sizes?: string;
  decoration?: "left" | "right" | "none";
  placeholderLabel?: string;
};

export function LawyerPortrait({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
  decoration = "none",
  placeholderLabel = "[FOTO IGNACIA — REEMPLAZAR]",
}: LawyerPortraitProps) {
  const decorationClass =
    decoration === "left"
      ? "absolute -bottom-4 -left-4 hidden h-24 w-24 border-2 border-gold/40 md:block"
      : decoration === "right"
        ? "absolute -bottom-4 -right-4 hidden h-24 w-24 border-2 border-gold/40 md:block"
        : null;

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-lg border-2 border-gold/30 shadow-2xl shadow-navy/10">
        <div className="relative aspect-[4/5] w-full bg-beige">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority={priority}
              sizes={sizes}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-3 text-center">
              <span className="text-xs font-medium text-navy/40">
                {placeholderLabel}
              </span>
            </div>
          )}
        </div>
      </div>
      {decorationClass ? <div className={decorationClass} aria-hidden /> : null}
    </div>
  );
}
