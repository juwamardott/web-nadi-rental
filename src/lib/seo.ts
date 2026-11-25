import type { Area } from "@/data/areas";
import { BIKES, BUSINESS_INFO } from "@/data/bikes";
import type { Dictionary } from "@/data/dictionary";
import type { Guide } from "@/data/guides";
import type { Lang } from "@/lib/types";

const domain = BUSINESS_INFO.domain;
const absolute = (path: string) => `${domain}${path}`;
const phone = `+${BUSINESS_INFO.whatsappNumber}`;
const locale = (lang: Lang) => (lang === "id" ? "id-ID" : "en-US");

function buildBusiness(lang: Lang, dict: Dictionary) {
  return {
    "@type": "AutoRental",
    "@id": `${domain}/#business`,
    name: BUSINESS_INFO.name,
    url: `${domain}/${lang}/`,
    image: [
      absolute("/images/og-image.jpg"),
      absolute("/images/gallery/hero.webp"),
    ],
    logo: absolute("/icon-512.png"),
    telephone: phone,
    email: BUSINESS_INFO.email,
    priceRange: "Rp 50.000 - Rp 300.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Card, USD, Bank Transfer, QRIS",
    description: dict.meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Wana Segara",
      addressLocality: "Kuta",
      addressRegion: "Bali",
      postalCode: "80361",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.7370026,
      longitude: 115.1631249,
    },
    hasMap: BUSINESS_INFO.googleMapsLink,
    areaServed: [
      "Bali",
      "Kuta",
      "Legian",
      "Seminyak",
      "Canggu",
      "Ubud",
      "Nusa Dua",
      "Sanur",
      "Jimbaran",
      "Uluwatu",
      "Ngurah Rai Airport",
    ].map((area) => ({ "@type": "Place", name: area })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: [
      BUSINESS_INFO.instagram,
      `https://www.tiktok.com/@${BUSINESS_INFO.tiktok}`,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        availableLanguage: ["id", "en"],
        areaServed: "ID",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS_INFO.rating.value),
      reviewCount: String(BUSINESS_INFO.rating.count),
      bestRating: String(BUSINESS_INFO.rating.best),
      worstRating: String(BUSINESS_INFO.rating.worst),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.catalog.title,
      itemListElement: BIKES.map((bike) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          "@id": `${domain}/#bike-${bike.id}`,
          name: bike.name,
          image: absolute(bike.image),
          description: bike.specs[lang].join(", "),
          brand: { "@type": "Brand", name: bike.name.split(" ")[0] },
          category: dict.catalog.label,
        },
        price: bike.priceDaily,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: `${domain}/${lang}/#katalog`,
        seller: { "@id": `${domain}/#business` },
      })),
    },
  };
}

function buildWebsite(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    url: `${domain}/${lang}/`,
    name: BUSINESS_INFO.name,
    inLanguage: locale(lang),
    publisher: { "@id": `${domain}/#business` },
  };
}

function buildFaqPage(url: string, items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": url,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function buildBreadcrumb(
  items: { name: string; url: string }[],
  id: string,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function buildItemList(lang: Lang, dict: Dictionary) {
  return {
    "@type": "ItemList",
    "@id": `${domain}/${lang}/#catalog`,
    name: dict.catalog.title,
    numberOfItems: BIKES.length,
    itemListElement: BIKES.map((bike, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@id": `${domain}/#bike-${bike.id}` },
    })),
  };
}

export function buildJsonLd(lang: Lang, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBusiness(lang, dict),
      buildWebsite(lang),
      buildFaqPage(`${domain}/${lang}/#faq`, dict.faq.items),
      buildItemList(lang, dict),
    ],
  };
}

export function buildAreaJsonLd(lang: Lang, dict: Dictionary, area: Area) {
  const url = `${domain}/${lang}/${area.slug[lang]}/`;
  const home = lang === "id" ? "Beranda" : "Home";

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBusiness(lang, dict),
      buildWebsite(lang),
      buildBreadcrumb(
        [
          { name: home, url: `${domain}/${lang}/` },
          { name: area.name[lang], url },
        ],
        `${url}#breadcrumb`,
      ),
      buildFaqPage(
        `${url}#faq`,
        area.faq.map((item) => ({
          question: item.question[lang],
          answer: item.answer[lang],
        })),
      ),
    ],
  };
}

export function buildGuideJsonLd(lang: Lang, dict: Dictionary, guide: Guide) {
  const url = `${domain}/${lang}/panduan/${guide.slug[lang]}/`;
  const home = lang === "id" ? "Beranda" : "Home";

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBusiness(lang, dict),
      buildWebsite(lang),
      buildBreadcrumb(
        [
          { name: home, url: `${domain}/${lang}/` },
          { name: guide.title[lang], url },
        ],
        `${url}#breadcrumb`,
      ),
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title[lang],
        description: guide.description[lang],
        image: [absolute("/images/og-image.jpg")],
        datePublished: "2026-11-26",
        dateModified: "2026-11-26",
        author: { "@id": `${domain}/#business` },
        publisher: { "@id": `${domain}/#business` },
        mainEntityOfPage: url,
        inLanguage: locale(lang),
      },
      buildFaqPage(
        `${url}#faq`,
        guide.faq.map((item) => ({
          question: item.question[lang],
          answer: item.answer[lang],
        })),
      ),
    ],
  };
}
