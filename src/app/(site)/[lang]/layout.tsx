import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingProvider } from "@/components/BookingProvider";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Navbar } from "@/components/Navbar";
import { BUSINESS_INFO } from "@/data/bikes";
import { getDictionary } from "@/data/dictionary";
import { isLang, type Lang } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: LangLayoutProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) return {};
  const lang: Lang = rawLang;
  const dict = getDictionary(lang);
  const canonical = `${BUSINESS_INFO.domain}/${lang}/`;

  return {
    metadataBase: new URL(BUSINESS_INFO.domain),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical,
      languages: {
        id: `${BUSINESS_INFO.domain}/id/`,
        en: `${BUSINESS_INFO.domain}/en/`,
        "x-default": `${BUSINESS_INFO.domain}/id/`,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      siteName: BUSINESS_INFO.name,
      title: dict.meta.title,
      description: dict.meta.description,
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
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${BUSINESS_INFO.domain}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": `${BUSINESS_INFO.domain}/#business`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.domain,
    image: `${BUSINESS_INFO.domain}/images/og-image.jpg`,
    logo: `${BUSINESS_INFO.domain}/icon.svg`,
    telephone: BUSINESS_INFO.phoneDisplay,
    email: BUSINESS_INFO.email,
    priceRange: "Rp 70.000 - Rp 250.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Bank Transfer, QRIS",
    description: dict.meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Kuta No. 88",
      addressLocality: "Kuta",
      addressRegion: "Bali",
      postalCode: "80361",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.7224,
      longitude: 115.1749,
    },
    areaServed: [
      "Bali",
      "Kuta",
      "Bandara Ngurah Rai",
      "Seminyak",
      "Canggu",
      "Ubud",
      "Nusa Dua",
      "Sanur",
      "Jimbaran",
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
      opens: "07:00",
      closes: "22:00",
    },
    sameAs: [BUSINESS_INFO.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS_INFO.rating.value),
      reviewCount: String(BUSINESS_INFO.rating.count),
      bestRating: String(BUSINESS_INFO.rating.best),
      worstRating: String(BUSINESS_INFO.rating.worst),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookingProvider lang={lang}>
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <FloatingWhatsApp lang={lang} dict={dict} />
      </BookingProvider>
    </>
  );
}
