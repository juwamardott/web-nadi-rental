"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  Flame,
  Gift,
  MessageCircle,
  Star,
} from "lucide-react";
import { BIKES, BUSINESS_INFO } from "@/data/bikes";
import type { Dictionary } from "@/data/dictionary";
import type { Bike, BikeCategory, Lang } from "@/lib/types";
import { buildQuickChatUrl, formatRupiah } from "@/lib/whatsapp";
import { useBooking } from "./BookingProvider";

interface CatalogSectionProps {
  lang: Lang;
  dict: Dictionary;
}

type Filter = "all" | BikeCategory;

export function CatalogSection({ lang, dict }: CatalogSectionProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const { openBooking } = useBooking();

  const bikes = useMemo(
    () =>
      filter === "all"
        ? BIKES
        : BIKES.filter((bike) => bike.category === filter),
    [filter]
  );

  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: dict.catalog.filterAll },
    { id: "daily", label: dict.catalog.filterDaily },
    { id: "maxi", label: dict.catalog.filterMaxi },
  ];

  return (
    <section id="katalog" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.catalog.label}</span>
          <h2 className="heading-lg mt-4">{dict.catalog.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {dict.catalog.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl items-start gap-3 rounded-2xl border border-brand bg-brand-soft px-5 py-4">
          <Gift className="mt-0.5 h-5 w-5 shrink-0 text-brand-hover" />
          <p className="text-sm font-bold leading-relaxed text-brand-ink">
            {dict.catalog.freeBanner}
          </p>
        </div>

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1 sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              aria-pressed={filter === tab.id}
              className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                filter === tab.id
                  ? "border-brand bg-brand text-brand-ink shadow-glow"
                  : "border-brand-border bg-white text-zinc-600 hover:border-brand hover:text-brand-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {bikes.length === 0 ? (
          <p className="mt-10 text-center text-sm font-semibold text-brand-muted">
            {dict.catalog.empty}
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bikes.map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
                lang={lang}
                dict={dict}
                onBook={() => openBooking(bike.id)}
              />
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-xs font-medium text-brand-muted">
          {dict.catalog.note}
        </p>
      </div>
    </section>
  );
}

interface BikeCardProps {
  bike: Bike;
  lang: Lang;
  dict: Dictionary;
  onBook: () => void;
}

function BikeCard({ bike, lang, dict, onBook }: BikeCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {bike.popular ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-ink shadow-sm">
              <Flame className="h-3 w-3" />
              {dict.catalog.popular}
            </span>
          ) : (
            <span />
          )}
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-brand-ink shadow-sm">
            {bike.cc}cc
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-extrabold leading-snug text-brand-ink">
          {bike.name}
        </h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-muted">
          {dict.catalog.year} {bike.year}
        </p>

        <ul className="mt-3 space-y-1.5">
          {bike.specs[lang].map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-1.5 text-xs font-medium text-zinc-600"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-1 text-brand-hover">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} className="h-3 w-3 fill-current" />
          ))}
          <span className="ml-1 text-[11px] font-bold text-brand-muted">
            {BUSINESS_INFO.rating.value.toFixed(1)}
          </span>
        </div>

        <div className="mt-3 rounded-xl bg-brand-surface px-3 py-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-lg font-extrabold leading-none text-brand-ink">
              {formatRupiah(bike.priceDaily)}
            </span>
            <span className="text-[10px] font-semibold text-brand-muted">
              {dict.catalog.perDay}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
          <button type="button" onClick={onBook} className="btn-primary w-full">
            <CalendarDays className="h-4 w-4" />
            {dict.catalog.book}
          </button>
          <a
            href={buildQuickChatUrl(bike, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full"
          >
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            {dict.catalog.quickChat}
          </a>
        </div>
      </div>
    </article>
  );
}
