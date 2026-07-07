import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">
            Testimonios
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-navy/70">
            Lo que dicen quienes han confiado en mi metodología de preparación.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="relative rounded-lg border border-navy/10 bg-cream p-6 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-gold/40" />
              <p className="text-sm leading-relaxed text-navy/80">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-navy/10 pt-4">
                <p className="font-serif font-semibold text-navy">
                  {testimonial.name}
                </p>
                <p className="text-xs text-navy/60">
                  {testimonial.university} · {testimonial.year}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
