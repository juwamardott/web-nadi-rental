import { notFound } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { CatalogSection } from "@/components/CatalogSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GalleryReviews } from "@/components/GalleryReviews";
import { HeroSection } from "@/components/HeroSection";
import { getDictionary } from "@/data/dictionary";
import { buildJsonLd } from "@/lib/seo";
import { isLang } from "@/lib/types";

interface LangPageProps {
  params: Promise<{ lang: string }>;
}

export default async function LangPage({ params }: LangPageProps) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;
  const dict = getDictionary(lang);

  const jsonLd = buildJsonLd(lang, dict);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection lang={lang} dict={dict} />
      <AboutSection dict={dict} />
      <FeaturesSection dict={dict} />
      <CatalogSection lang={lang} dict={dict} />
      <GalleryReviews dict={dict} />
      <FaqSection lang={lang} dict={dict} />
      <ContactSection lang={lang} dict={dict} />
    </>
  );
}
