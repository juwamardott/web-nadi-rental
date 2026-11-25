"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface FaqSectionProps {
  lang: Lang;
  dict: Dictionary;
}

export function FaqSection({ lang, dict }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <span className="eyebrow">{dict.faq.label}</span>
          <h2 className="heading-lg mt-4">{dict.faq.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {dict.faq.subtitle}
          </p>

          <div className="mt-8 rounded-2xl border border-brand bg-brand-soft p-6">
            <p className="text-base font-extrabold text-brand-ink">
              {dict.contact.responseNote}
            </p>
            <a
              href={buildGeneralWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              {dict.nav.cta}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {dict.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-brand shadow-card"
                    : "border-brand-border hover:border-brand/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <h3 className="text-sm font-extrabold text-brand-ink sm:text-base">
                    {item.question}
                  </h3>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "rotate-180 bg-brand text-brand-ink"
                        : "bg-brand-surface text-brand-muted"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
