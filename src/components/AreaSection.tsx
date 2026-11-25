import Link from "next/link";
import { ArrowRight, Check, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { AREAS, areaPath, type Area } from "@/data/areas";
import { BIKES, BUSINESS_INFO } from "@/data/bikes";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl, formatRupiah } from "@/lib/whatsapp";

interface AreaSectionProps {
  lang: Lang;
  area: Area;
  dict: Dictionary;
}

export function AreaSection({ lang, area, dict }: AreaSectionProps) {
  const home = lang === "id" ? "Beranda" : "Home";
  const faqLabel = lang === "id" ? "Pertanyaan seputar area ini" : "Questions about this area";
  const priceTitle = lang === "id" ? "Daftar Harga Sewa Harian" : "Daily Rental Rates";
  const priceNote = lang === "id"
    ? "Harga dapat berubah saat high season. Konfirmasi ketersediaan via WhatsApp."
    : "Rates may change during high season. Confirm availability via WhatsApp.";
  const relatedTitle = lang === "id" ? "Area lain yang bisa dijangkau" : "Other areas we serve";

  return (
    <>
      <div className="border-b border-brand-border bg-brand-surface/60">
        <nav
          aria-label={lang === "id" ? "Breadcrumb" : "Breadcrumb"}
          className="container-page flex flex-wrap items-center gap-2 py-4 text-xs font-semibold text-brand-muted"
        >
          <Link href={`/${lang}/`} className="hover:text-brand-ink">
            {home}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-ink">{area.name[lang]}</span>
        </nav>
      </div>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              {area.name[lang]}
            </span>
            <h1 className="heading-xl mt-5 text-balance">{area.headline[lang]}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              {area.intro[lang]}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={buildGeneralWhatsAppUrl(lang)} className="btn-primary px-6 py-3.5 text-base">
                <MessageCircle className="h-4 w-4" />
                {dict.nav.cta}
              </a>
              <Link href={`/${lang}/#katalog`} className="btn-outline px-6 py-3.5 text-base">
                {dict.nav.prices}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="card h-fit p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">
              {lang === "id" ? "Gratis antar-jemput" : "Free delivery"}
            </p>
            <p className="mt-3 text-lg font-extrabold leading-snug text-brand-ink">
              {area.delivery[lang]}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-brand-border pt-5">
              <div>
                <dt className="text-xs text-brand-muted">{dict.hero.statUnitLabel}</dt>
                <dd className="text-xl font-extrabold text-brand-ink">{dict.hero.statUnitValue}</dd>
              </div>
              <div>
                <dt className="text-xs text-brand-muted">{dict.common.rating}</dt>
                <dd className="text-xl font-extrabold text-brand-ink">{dict.hero.ratingShort}</dd>
              </div>
              <div>
                <dt className="text-xs text-brand-muted">{dict.contact.hoursLabel}</dt>
                <dd className="text-sm font-bold text-brand-ink">{dict.contact.hours}</dd>
              </div>
              <div>
                <dt className="text-xs text-brand-muted">{lang === "id" ? "Mulai dari" : "Starting from"}</dt>
                <dd className="text-sm font-bold text-brand-ink">Rp 50.000/{dict.common.perDay.replace("/", "")}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-brand-surface">
        <div className="container-page">
          <h2 className="heading-lg">{dict.features.title}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {area.highlights.map((item) => (
              <div key={item.title[lang]} className="card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-brand-ink">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="heading-lg">{priceTitle}</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-brand-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-soft text-xs uppercase tracking-wide text-brand-muted">
                  <tr>
                    <th className="px-4 py-3">{lang === "id" ? "Unit" : "Bike"}</th>
                    <th className="px-4 py-3">CC</th>
                    <th className="px-4 py-3 text-right">{lang === "id" ? "Per hari" : "Per day"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {BIKES.map((bike) => (
                    <tr key={bike.id} className="hover:bg-brand-surface">
                      <td className="px-4 py-3 font-semibold text-brand-ink">{bike.name}</td>
                      <td className="px-4 py-3 text-brand-muted">{bike.cc}</td>
                      <td className="px-4 py-3 text-right font-extrabold text-brand-ink">
                        {formatRupiah(bike.priceDaily)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-brand-muted">{priceNote}</p>
          </div>

          <div>
            <h2 className="heading-lg">{faqLabel}</h2>
            <div className="mt-6 space-y-3">
              {area.faq.map((item) => (
                <details key={item.question[lang]} className="card group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-brand-ink">
                    {item.question[lang]}
                    <ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.answer[lang]}</p>
                </details>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-brand bg-brand-soft p-5">
              <p className="text-sm font-extrabold text-brand-ink">{dict.contact.responseNote}</p>
              <a
                href={buildGeneralWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.nav.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-border bg-white">
        <div className="container-page py-12">
          <h2 className="text-lg font-extrabold text-brand-ink">{relatedTitle}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {AREAS.filter((item) => item.key !== area.key).map((item) => (
              <Link
                key={item.key}
                href={areaPath(lang, item)}
                className="rounded-full border border-brand-border px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-brand hover:bg-brand-soft"
              >
                {item.name[lang]}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-muted">
            {BUSINESS_INFO.name} — {BUSINESS_INFO.address}
          </p>
        </div>
      </section>
    </>
  );
}
