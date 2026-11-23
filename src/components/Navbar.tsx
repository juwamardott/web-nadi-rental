"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Bike, Menu, MessageCircle, X } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface NavbarProps {
  lang: Lang;
  dict: Dictionary;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero", label: dict.nav.home },
    { href: "#katalog", label: dict.nav.prices },
    { href: "#tentang", label: dict.nav.about },
    { href: "#galeri", label: dict.nav.gallery },
    { href: "#faq", label: dict.nav.faq },
    { href: "#kontak", label: dict.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-brand-border bg-white/90 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-brand-ink shadow-glow">
            <Bike className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="leading-none">
            <span className="block text-base font-extrabold tracking-tight text-brand-ink">
              Nadi Rental
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-brand-muted">
              Bali
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-brand-soft hover:text-brand-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="hidden items-center rounded-full border border-brand-border bg-brand-surface p-1 sm:flex"
            aria-label={dict.nav.languageLabel}
          >
            {(["id", "en"] as Lang[]).map((code) => (
              <Link
                key={code}
                href={`/${code}/`}
                aria-current={lang === code ? "true" : undefined}
                className={`rounded-full px-2.5 py-1 text-xs font-extrabold uppercase transition ${
                  lang === code
                    ? "bg-brand text-brand-ink shadow-sm"
                    : "text-brand-muted hover:text-brand-ink"
                }`}
              >
                {code}
              </Link>
            ))}
          </div>

          <a
            href={buildGeneralWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-4 !py-2.5 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-ink transition hover:bg-brand-soft lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-brand-border bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-brand-soft hover:text-brand-ink"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-brand-border pt-4">
              <div className="flex items-center rounded-full border border-brand-border bg-brand-surface p-1">
                {(["id", "en"] as Lang[]).map((code) => (
                  <Link
                    key={code}
                    href={`/${code}/`}
                    className={`rounded-full px-3 py-1.5 text-xs font-extrabold uppercase transition ${
                      lang === code
                        ? "bg-brand text-brand-ink shadow-sm"
                        : "text-brand-muted"
                    }`}
                  >
                    {code}
                  </Link>
                ))}
              </div>
              <a
                href={buildGeneralWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-2.5"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.nav.cta}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
