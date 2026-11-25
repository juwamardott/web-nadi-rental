import type { Metadata, Viewport } from "next";
import { jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nadirentalbali.com"),
  title: "Nadi Rental Bali — Sewa Motor Bali Terpercaya",
  description:
    "Sewa motor matic terbaru di Bali dengan gratis antar-jemput Bandara Ngurah Rai & Kuta. Booking cepat via WhatsApp.",
  category: "Vehicle Rental",
  authors: [{ name: "Nadi Rental Bali", url: "https://nadirentalbali.com" }],
  creator: "Nadi Rental Bali",
  publisher: "Nadi Rental Bali",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "ID-BA",
    "geo.placename": "Kuta, Bali",
    "geo.position": "-8.7370026;115.1631249",
    ICBM: "-8.7370026, 115.1631249",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FACC15",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
