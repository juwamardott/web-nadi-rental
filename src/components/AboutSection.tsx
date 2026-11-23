import Image from "next/image";
import { CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";

interface AboutSectionProps {
  dict: Dictionary;
}

export function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-lift">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/gallery/handover-kuta.jpg"
                alt={dict.about.imageMainAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-2 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block lg:-right-6">
            <div className="relative aspect-square">
              <Image
                src="/images/gallery/riding-beach.jpg"
                alt={dict.about.imageSecondaryAlt}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-2 -top-5 flex items-center gap-3 rounded-2xl border border-brand bg-white px-4 py-3 shadow-card lg:-left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-brand-ink">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-brand-ink">
                {dict.about.badge}
              </p>
              <p className="text-[11px] font-medium text-brand-muted">
                {dict.about.badgeNote}
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">{dict.about.label}</span>
          <h2 className="heading-lg mt-4">{dict.about.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted">
            {dict.about.description1}
          </p>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            {dict.about.description2}
          </p>

          <ul className="mt-6 space-y-3">
            {[dict.about.check1, dict.about.check2, dict.about.check3].map(
              (item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm font-semibold text-zinc-700">
                    {item}
                  </span>
                </li>
              )
            )}
          </ul>

          <div className="mt-8 rounded-2xl border border-brand-border bg-brand-surface p-5">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted">
              <MapPin className="h-4 w-4 text-brand-hover" />
              {dict.about.areasTitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {dict.about.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-brand-border bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
