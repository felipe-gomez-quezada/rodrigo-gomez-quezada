import { LawyerPortrait } from "@/components/lawyer-portrait";
import type { Partner } from "@/lib/constants";

type LawyerBioCardProps = {
  partner: Partner;
};

export function LawyerBioCard({ partner }: LawyerBioCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-navy/10 bg-cream p-6 shadow-sm">
      <LawyerPortrait
        src={partner.image}
        alt={partner.imageAlt}
        sizes="(max-width: 768px) 100vw, 50vw"
        decoration="none"
      />
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-semibold text-navy">
          {partner.fullName}
        </h3>
        <p className="text-sm text-navy/60">{partner.university}</p>
        <p className="text-sm font-medium text-navy">
          {partner.specialization}
        </p>
        <p className="text-sm text-navy/70">
          {partner.yearsExperience} años de ejercicio profesional
        </p>
        <p className="pt-1 leading-relaxed text-navy/80">{partner.bio}</p>
      </div>
    </article>
  );
}
