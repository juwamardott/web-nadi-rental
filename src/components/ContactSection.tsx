import { Clock3, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/bikes";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface ContactSectionProps {
  lang: Lang;
  dict: Dictionary;
}

export function ContactSection({ lang, dict }: ContactSectionProps) {
  return (
    <section id="kontak" className="section-padding bg-brand-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.contact.label}</span>
          <h2 className="heading-lg mt-4">{dict.contact.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-white p-5 shadow-card">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                    {dict.contact.addressLabel}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold leading-relaxed text-brand-ink">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                    {dict.contact.whatsappLabel}
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm font-semibold text-brand-ink hover:text-brand-hover"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                    {dict.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="mt-0.5 block text-sm font-semibold text-brand-ink hover:text-brand-hover"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
                    {dict.contact.hoursLabel}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-ink">
                    {dict.contact.hours}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {dict.contact.hoursNote}
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={buildGeneralWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              <MessageCircle className="h-4 w-4" />
              {dict.nav.cta}
            </a>
            <p className="mt-2 text-center text-[11px] text-brand-muted">
              {dict.contact.responseNote}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
            <iframe
              src={BUSINESS_INFO.mapEmbed}
              title={dict.contact.mapTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-72 w-full border-0 lg:h-full"
            />

            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <p className="text-xs font-bold text-brand-ink">
                {dict.contact.mapTitle}
              </p>

              <a
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-hover hover:text-brand-ink"
              >
                <Navigation className="h-3.5 w-3.5" />
                {dict.contact.mapCta}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
