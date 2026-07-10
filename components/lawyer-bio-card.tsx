import Image from "next/image";
import { LawyerPortrait } from "@/components/lawyer-portrait";
import type { Partner } from "@/lib/constants";

type LawyerBioCardProps = {
  partner: Partner;
};

export function LawyerBioCard({ partner }: LawyerBioCardProps) {
  return (
    <article className="relative flex flex-col gap-4 rounded-lg border border-navy/10 bg-cream p-6 shadow-sm">
      <div className="relative">
        <span className="absolute top-3 left-3 z-10 rounded-sm border border-navy/10 bg-cream px-2.5 py-1 font-serif text-[0.65rem] font-medium uppercase tracking-[0.2em] text-navy shadow-sm">
          {partner.associateLabel}
        </span>

        <div
          className="absolute top-3 right-3 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border border-gold/40 bg-cream/95 text-center shadow-sm backdrop-blur-sm"
          aria-label={`${partner.yearsExperience} años de experiencia`}
        >
          <span className="font-serif text-sm font-semibold leading-none text-navy">
            {partner.yearsExperience}
          </span>
          <span className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-wide text-navy/60">
            años
          </span>
        </div>

        <LawyerPortrait
          src={partner.image}
          alt={partner.imageAlt}
          sizes="(max-width: 768px) 100vw, 50vw"
          decoration="none"
        />

        <div className="absolute bottom-3 left-3 z-10">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-cream/95 p-1.5 shadow-sm backdrop-blur-sm"
            title={partner.university}
          >
            <Image
              src="/images/utalca.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-3 text-navy/80">
        <h3 className="font-serif text-xl font-semibold text-navy">
          {partner.fullName}
        </h3>

        <p className="text-sm leading-relaxed font-medium">{partner.headline}</p>

        <div className="flex max-h-[4.5rem] flex-wrap gap-2 overflow-hidden">
          {partner.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-navy/15 bg-beige px-3 py-1 text-xs font-medium text-navy/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-navy/10 pt-4">
          <a
            href={`/?preferencia=${partner.id}#contacto`}
            className="inline-flex w-full items-center justify-center rounded-md bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Contactar
          </a>
        </div>
      </div>
    </article>
  );
}
