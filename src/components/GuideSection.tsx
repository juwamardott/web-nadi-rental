import Link from "next/link";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { AREAS, areaPath } from "@/data/areas";
import type { Dictionary } from "@/data/dictionary";
import type { Guide } from "@/data/guides";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface GuideSectionProps {
  lang: Lang;
  guide: Guide;
  dict: Dictionary;
}

export function GuideSection({ lang, guide, dict }: GuideSectionProps) {
  const home = lang === "id" ? "Beranda" : "Home";
  const guideLabel = lang === "id" ? "Panduan" : "Guides";
  const faqLabel = lang === "id" ? "Pertanyaan umum" : "Common questions";
  const ctaTitle = lang === "id"
    ? "Siap sewa motor di Bali?"
    : "Ready to rent a scooter in Bali?";
  const relatedTitle = lang === "id" ? "Area populer" : "Popular areas";

  return (
    <>
      <div className="border-b border-brand-border bg-brand-surface/60">
        <nav
          aria-label="Breadcrumb"
          className="container-page flex flex-wrap items-center gap-2 py-4 text-xs font-semibold text-brand-muted"
        >
          <Link href={`/${lang}/`} className="hover:text-brand-ink">
            {home}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-ink">{guideLabel}</span>
        </nav>
      </div>

      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{guideLabel}</span>
          <h1 className="heading-xl mt-5 text-balance">{guide.headline[lang]}</h1>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            {guide.intro[lang]}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={buildGeneralWhatsAppUrl(lang)} className="btn-primary px-6 py-3.5 text-base">
              <MessageCircle className="h-4 w-4" />
              {dict.nav.cta}
            </a>
            <Link href={`/${lang}/#faq`} className="btn-outline px-6 py-3.5 text-base">
              {dict.nav.faq}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-surface">
        <div className="container-page max-w-3xl space-y-10">
          {guide.sections.map((section) => (
            <article key={section.heading[lang]}>
              <h2 className="heading-lg">{section.heading[lang]}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph[lang]} className="mt-4 text-base leading-relaxed text-brand-muted">
                  {paragraph[lang]}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet[lang]} className="flex items-start gap-2 text-sm text-brand-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-hover" />
                      {bullet[lang]}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="heading-lg">{faqLabel}</h2>
            <div className="mt-6 space-y-3">
              {guide.faq.map((item) => (
                <details key={item.question[lang]} className="card group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-brand-ink">
                    {item.question[lang]}
                    <ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.answer[lang]}</p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <div className="card h-fit p-6">
              <p className="text-lg font-extrabold text-brand-ink">{ctaTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {dict.contact.subtitle}
              </p>
              <a
                href={buildGeneralWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.nav.cta}
              </a>
              <p className="mt-3 text-center text-xs text-brand-muted">{dict.contact.responseNote}</p>
            </div>

            <h3 className="mt-8 text-sm font-extrabold uppercase tracking-wide text-brand-muted">
              {relatedTitle}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {AREAS.slice(0, 5).map((area) => (
                <Link
                  key={area.key}
                  href={areaPath(lang, area)}
                  className="rounded-full border border-brand-border px-3 py-1.5 text-sm font-semibold text-brand-ink transition hover:border-brand hover:bg-brand-soft"
                >
                  {area.name[lang]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
