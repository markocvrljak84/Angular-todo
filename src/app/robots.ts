import type { MetadataRoute } from "next";
import { localePrefixInUrl } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const host = new URL(base).host;

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
