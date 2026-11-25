import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/data/bikes";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BUSINESS_INFO.domain}/sitemap.xml`,
    host: BUSINESS_INFO.domain,
  };
}
