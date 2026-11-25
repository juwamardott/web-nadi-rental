"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AREAS } from "@/data/areas";
import type { Dictionary } from "@/data/dictionary";
import { GUIDES } from "@/data/guides";
import type { Lang } from "@/lib/types";

interface LanguageSwitchProps {
  lang: Lang;
  dict: Dictionary;
}

const OPTIONS: { code: Lang; name: string; short: string }[] = [
  { code: "id", name: "Indonesia", short: "ID" },
  { code: "en", name: "English", short: "EN" },
];

function FlagId() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 30 20"
      className="block h-4 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="10" fill="#CE1126" />
      <rect y="10" width="30" height="10" fill="#FFFFFF" />
    </svg>
  );
}

function FlagGb() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 30 20"
      className="block h-4 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="language-switch-gb-clip">
        <path d="M15,10 h15 v10 z v10 h-15 z h-15 v-10 z v-10 h15 z" />
      </clipPath>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="4" />
      <path
        d="M0,0 L30,20 M30,0 L0,20"
        clipPath="url(#language-switch-gb-clip)"
        stroke="#C8102E"
        strokeWidth="2.4"
      />
      <path d="M15,0 v20 M0,10 h30" stroke="#FFFFFF" strokeWidth="6.6" />
      <path d="M15,0 v20 M0,10 h30" stroke="#C8102E" strokeWidth="4" />
    </svg>
  );
}

export function LanguageSwitch({ lang, dict }: LanguageSwitchProps) {
  const pathname = usePathname();

  const localizePath = (path: string, code: Lang) => {
    const segments = path.split("/").filter(Boolean);
    if (segments[0] !== "id" && segments[0] !== "en") return `/${code}/`;

    const currentLang: Lang = segments[0];
    const rest = segments.slice(1);
    if (rest.length === 0) return `/${code}/`;

    const area = AREAS.find((item) => item.slug[currentLang] === rest[0]);
    if (area) {
      rest[0] = area.slug[code];
      return `/${code}/${rest.join("/")}/`;
    }

    if (rest[0] === "panduan" && rest[1]) {
      const guide = GUIDES.find((item) => item.slug[currentLang] === rest[1]);
      if (guide) rest[1] = guide.slug[code];
    }

    return `/${code}/${rest.join("/")}/`;
  };

  return (
    <div
      role="group"
      aria-label={dict.nav.languageLabel}
      className="fixed bottom-5 left-4 z-40 flex items-center gap-0.5 rounded-full border border-brand-border bg-white/90 p-1 shadow-lift backdrop-blur sm:bottom-6 sm:left-6 sm:gap-1"
    >
      {OPTIONS.map(({ code, name, short }) => {
        const active = lang === code;

        return (
          <Link
            key={code}
            href={localizePath(pathname, code)}
            aria-current={active ? "true" : undefined}
            title={name}
            className={`flex items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-extrabold uppercase transition sm:px-2.5 ${
              active
                ? "bg-brand text-brand-ink shadow-sm"
                : "text-brand-muted hover:bg-brand-soft hover:text-brand-ink"
            }`}
          >
            <span className="overflow-hidden rounded-[3px] ring-1 ring-black/10">
              {code === "id" ? <FlagId /> : <FlagGb />}
            </span>
            <span className="hidden sm:inline">{short}</span>
            <span className="sr-only">{name}</span>
          </Link>
        );
      })}
    </div>
  );
}
