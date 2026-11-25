import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaSection } from "@/components/AreaSection";
import { AREAS, getAreaBySlug } from "@/data/areas";
import { BUSINESS_INFO } from "@/data/bikes";
import { getDictionary } from "@/data/dictionary";
import { buildAreaJsonLd } from "@/lib/seo";
import { isLang, type Lang } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  const lang: Lang = params.lang === "en" ? "en" : "id";
  return AREAS.map((area) => ({ area: area.slug[lang] }));
}

interface AreaPageProps {
  params: Promise<{ lang: string; area: string }>;
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { lang: rawLang, area: slug } = await params;
  if (!isLang(rawLang)) return {};
  const lang = rawLang;
  const area = getAreaBySlug(lang, slug);
  if (!area) return {};

  const canonical = `${BUSINESS_INFO.domain}/${lang}/${area.slug[lang]}/`;
  const dict = getDictionary(lang);

  return {
    title: area.seoTitle[lang],
    description: area.seoDescription[lang],
    alternates: {
      canonical,
      languages: {
        id: `${BUSINESS_INFO.domain}/id/${area.slug.id}/`,
        en: `${BUSINESS_INFO.domain}/en/${area.slug.en}/`,
        "x-default": `${BUSINESS_INFO.domain}/id/${area.slug.id}/`,
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
      title: area.seoTitle[lang],
      description: area.seoDescription[lang],
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
      title: area.seoTitle[lang],
      description: area.seoDescription[lang],
      images: [`${BUSINESS_INFO.domain}/images/og-image.jpg`],
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { lang: rawLang, area: slug } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;
  const area = getAreaBySlug(lang, slug);
  if (!area) notFound();

  const dict = getDictionary(lang);
  const jsonLd = buildAreaJsonLd(lang, dict, area);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AreaSection lang={lang} area={area} dict={dict} />
    </>
  );
}
