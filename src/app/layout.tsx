import type { Metadata, Viewport } from "next";
import { jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nadirentalbali.com"),
  title: "Nadi Rental Bali — Sewa Motor Bali Terpercaya",
  description:
    "Sewa motor matic terbaru di Bali dengan gratis antar-jemput Bandara Ngurah Rai & Kuta. Booking cepat via WhatsApp.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
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
