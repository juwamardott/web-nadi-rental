import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingProvider } from "@/components/BookingProvider";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LanguageSwitch } from "@/components/LanguageSwitch";
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
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
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
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
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

  return (
    <>
      <BookingProvider lang={lang}>
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
        <FloatingWhatsApp lang={lang} dict={dict} />
        <LanguageSwitch lang={lang} dict={dict} />
      </BookingProvider>
    </>
  );
}
