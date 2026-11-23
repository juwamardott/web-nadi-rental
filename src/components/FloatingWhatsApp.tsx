import { MessageCircle } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface FloatingWhatsAppProps {
  lang: Lang;
  dict: Dictionary;
}

export function FloatingWhatsApp({ lang, dict }: FloatingWhatsAppProps) {
  return (
    <a
      href={buildGeneralWhatsAppUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.common.whatsapp}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]"
      />
      <MessageCircle className="h-6 w-6" />
      <span className="hidden pr-1 text-sm font-bold sm:inline">
        {dict.common.whatsapp}
      </span>
    </a>
  );
}
