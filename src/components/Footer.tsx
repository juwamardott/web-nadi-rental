"use client";

import {
  Bike,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { AREAS } from "@/data/areas";
import { BUSINESS_INFO, POPULAR_BIKES } from "@/data/bikes";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl, formatRupiah } from "@/lib/whatsapp";
import { useBooking } from "./BookingProvider";

interface FooterProps {
  lang: Lang;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const { openBooking } = useBooking();
  const year = new Date().getFullYear();

  const links = [
    { href: "#hero", label: dict.nav.home },
    { href: "#katalog", label: dict.nav.prices },
    { href: "#tentang", label: dict.nav.about },
    { href: "#galeri", label: dict.nav.gallery },
    { href: "#faq", label: dict.nav.faq },
    { href: "#kontak", label: dict.nav.contact },
  ];

  return (
    <footer className="bg-brand-ink text-zinc-400">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-brand-ink">
              <Bike className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="leading-none">
              <span className="block text-base font-extrabold tracking-tight text-white">
                Nadi Rental
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                Bali
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{dict.footer.description}</p>

          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-zinc-400">
            <p className="flex items-start gap-2">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
              />
              <span>{BUSINESS_INFO.address}</span>
            </p>
            <a
              href={`tel:+${BUSINESS_INFO.whatsappNumber}`}
              className="flex items-center gap-2 transition hover:text-brand"
            >
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </address>

          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              {dict.footer.followUs}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={buildGeneralWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.common.whatsapp}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition hover:bg-brand hover:text-brand-ink"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition hover:bg-brand hover:text-brand-ink"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`https://www.tiktok.com/@${BUSINESS_INFO.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition hover:bg-brand hover:text-brand-ink"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.09-.13 1.63.1 1.08.65 2.08 1.48 2.74.79.63 1.86.97 2.9.87 1.6-.18 2.94-1.4 3.16-3 .05-.39.04-.79.04-1.19V.02z" />
                </svg>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition hover:bg-brand hover:text-brand-ink"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            {dict.footer.popularTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {POPULAR_BIKES.map((bike) => (
              <li key={bike.id}>
                <button
                  type="button"
                  onClick={() => openBooking(bike.id)}
                  className="group flex w-full items-center justify-between gap-3 text-left text-sm transition hover:text-brand"
                >
                  <span>{bike.name}</span>
                  <span className="text-xs font-semibold text-zinc-500 group-hover:text-brand">
                    {formatRupiah(bike.priceDaily)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            {dict.footer.navigationTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            {dict.footer.areasTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {AREAS.map((area, index) => (
              <li key={area.key}>
                <a
                  href={`/${lang}/${area.slug[lang]}/`}
                  className="text-sm transition hover:text-brand"
                >
                  {dict.footer.areas[index]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BUSINESS_INFO.name}. {dict.footer.rights}
          </p>
          <p className="text-zinc-500">
            <a
              href="/image-credits.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-600 underline-offset-2 transition hover:text-zinc-300"
            >
              {dict.footer.credit}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-4 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {BUSINESS_INFO.address}
          </p>
          <p className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            {BUSINESS_INFO.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
