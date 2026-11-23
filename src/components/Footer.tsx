"use client";

import {
  Bike,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
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
            {dict.footer.areas.map((area) => (
              <li key={area}>
                <a
                  href="#katalog"
                  className="text-sm transition hover:text-brand"
                >
                  {area}
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
