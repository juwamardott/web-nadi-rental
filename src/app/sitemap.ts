import type { MetadataRoute } from "next";
import { AREAS } from "@/data/areas";
import { BIKES, BUSINESS_INFO } from "@/data/bikes";
import { GUIDES } from "@/data/guides";
import type { Lang } from "@/lib/types";

export const dynamic = "force-static";

const langs: Lang[] = ["id", "en"];
const domain = BUSINESS_INFO.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sharedImages = [
    `${domain}/images/og-image.jpg`,
    `${domain}/images/gallery/hero.webp`,
    `${domain}/images/gallery/about.webp`,
    ...BIKES.map((bike) => `${domain}${bike.image}`),
  ];
  const homeLanguages = {
    id: `${domain}/id/`,
    en: `${domain}/en/`,
    "x-default": `${domain}/id/`,
  };

  const homes: MetadataRoute.Sitemap = langs.map((lang) => ({
    url: `${domain}/${lang}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: lang === "id" ? 1 : 0.9,
    alternates: { languages: homeLanguages },
    images: sharedImages,
  }));

  const areas: MetadataRoute.Sitemap = AREAS.flatMap((area) =>
    langs.map((lang) => ({
      url: `${domain}/${lang}/${area.slug[lang]}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          id: `${domain}/id/${area.slug.id}/`,
          en: `${domain}/en/${area.slug.en}/`,
          "x-default": `${domain}/id/${area.slug.id}/`,
        },
      },
      images: sharedImages,
    })),
  );

  const guides: MetadataRoute.Sitemap = GUIDES.flatMap((guide) =>
    langs.map((lang) => ({
      url: `${domain}/${lang}/panduan/${guide.slug[lang]}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          id: `${domain}/id/panduan/${guide.slug.id}/`,
          en: `${domain}/en/panduan/${guide.slug.en}/`,
          "x-default": `${domain}/id/panduan/${guide.slug.id}/`,
        },
      },
      images: [`${domain}/images/og-image.jpg`],
    })),
  );

  return [...homes, ...areas, ...guides];
}
