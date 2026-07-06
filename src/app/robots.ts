import type { MetadataRoute } from "next";
import { localePrefixInUrl } from "@/i18n/config";
import {
  CANONICAL_SITE_HOST,
  CANONICAL_SITE_ORIGIN,
  getSiteUrl,
} from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
  const base = isProduction ? CANONICAL_SITE_ORIGIN : getSiteUrl();
  const host = isProduction ? CANONICAL_SITE_HOST : new URL(base).host;

  const disallow = ["/api/", "/journal/thank-you"];

  if (!localePrefixInUrl) {
    disallow.push("/en", "/en/");
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${base}/sitemap.xml`,
    host,
  };
}
