import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideSection } from "@/components/GuideSection";
import { BUSINESS_INFO } from "@/data/bikes";
import { getDictionary } from "@/data/dictionary";
import { GUIDES, getGuideBySlug } from "@/data/guides";
import { buildGuideJsonLd } from "@/lib/seo";
import { isLang, type Lang } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  const lang: Lang = params.lang === "en" ? "en" : "id";
  return GUIDES.map((guide) => ({ slug: guide.slug[lang] }));
}

interface GuidePageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  if (!isLang(rawLang)) return {};
  const lang = rawLang;
  const guide = getGuideBySlug(lang, slug);
  if (!guide) return {};

  const canonical = `${BUSINESS_INFO.domain}/${lang}/panduan/${guide.slug[lang]}/`;
  const dict = getDictionary(lang);

  return {
    title: guide.title[lang],
    description: guide.description[lang],
    alternates: {
      canonical,
      languages: {
        id: `${BUSINESS_INFO.domain}/id/panduan/${guide.slug.id}/`,
        en: `${BUSINESS_INFO.domain}/en/panduan/${guide.slug.en}/`,
        "x-default": `${BUSINESS_INFO.domain}/id/panduan/${guide.slug.id}/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "article",
      siteName: BUSINESS_INFO.name,
      title: guide.title[lang],
      description: guide.description[lang],
      url: canonical,
      locale: lang === "id" ? "id_ID" : "en_US",
      alternateLocale: lang === "id" ? "en_US" : "id_ID",
      images: [
        {
          url: `${BUSINESS_INFO.domain}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title[lang],
      description: guide.description[lang],
      images: [`${BUSINESS_INFO.domain}/images/og-image.jpg`],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { lang: rawLang, slug } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;
  const guide = getGuideBySlug(lang, slug);
  if (!guide) notFound();

  const dict = getDictionary(lang);
  const jsonLd = buildGuideJsonLd(lang, dict, guide);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideSection lang={lang} guide={guide} dict={dict} />
    </>
  );
}
