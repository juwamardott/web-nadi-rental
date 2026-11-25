import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/data/bikes";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_INFO.name,
    short_name: "Nadi Rental",
    description:
      "Sewa motor matic terbaru di Bali dengan gratis antar-jemput Bandara Ngurah Rai & Kuta.",
    id: "/id/",
    start_url: "/id/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FACC15",
    lang: "id",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
