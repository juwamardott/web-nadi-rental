import Image from "next/image";
import { ArrowRight, BadgeCheck, MapPin, MessageCircle, Star } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl, formatRupiah } from "@/lib/whatsapp";
import { BIKES } from "@/data/bikes";

interface HeroSectionProps {
  lang: Lang;
  dict: Dictionary;
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
  const cheapest = Math.min(...BIKES.map((bike) => bike.priceDaily));

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-soft/40 to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <MapPin className="h-3.5 w-3.5" />
            {dict.hero.badge}
          </span>

          <h1 className="heading-xl mt-5 text-balance">
            {dict.hero.titleLead}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{dict.hero.titleHighlight}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 rounded-full bg-brand/60"
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#katalog" className="btn-primary px-6 py-3.5 text-base">
              {dict.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={buildGeneralWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-6 py-3.5 text-base"
            >
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-hover">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-bold text-brand-ink">
                {dict.hero.rating}
              </p>
            </div>
            <span className="hidden h-5 w-px bg-brand-border sm:block" />
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-muted">
              <BadgeCheck className="h-4 w-4 text-emerald-500" />
              {dict.hero.trustTitle}
            </div>
          </div>

          <dl className="mt-8 grid max-w-md grid-cols-2 gap-3">
            <div className="rounded-2xl border border-brand-border bg-white/80 px-4 py-3 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
                {dict.hero.statUnitLabel}
              </dt>
              <dd className="text-xl font-extrabold text-brand-ink">
                {dict.hero.statUnitValue}
              </dd>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white/80 px-4 py-3 backdrop-blur">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
                {dict.hero.statAreaLabel}
              </dt>
              <dd className="text-xl font-extrabold text-brand-ink">
                {dict.hero.statAreaValue}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-2 rounded-[2rem] border-2 border-brand/70 bg-brand/20"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-brand-surface shadow-lift">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/gallery/hero.webp"
                alt={dict.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-brand-ink">
                    {dict.hero.floatTitle}
                  </p>
                  <p className="text-[11px] text-brand-muted">
                    {dict.hero.floatNote}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                  {dict.hero.floatPriceLabel}
                </p>
                <p className="text-sm font-extrabold text-brand-ink">
                  {formatRupiah(cheapest)}
                  <span className="text-[10px] font-semibold text-brand-muted">
                    {dict.common.perDay}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 -top-4 hidden animate-float rounded-2xl border border-brand-border bg-white px-4 py-3 shadow-card sm:block">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-hover">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-xs font-extrabold text-brand-ink">
                {dict.hero.ratingShort}
              </span>
            </div>
            <p className="mt-0.5 text-[10px] font-medium text-brand-muted">
              {dict.hero.ratingLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
