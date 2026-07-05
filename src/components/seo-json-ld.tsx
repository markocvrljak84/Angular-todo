import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { JsonLdScript } from "@/components/json-ld-script";
import { localePath } from "@/config/site-routes";
import { buildVacationRentalJsonLd } from "@/lib/structured-data/build-vacation-rental";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

type Props = { locale: Locale; messages: Messages };

/**
 * Site-wide JSON-LD: WebSite + VacationRental (Google vacation rental listing markup).
 */
export function SeoJsonLd({ locale, messages: m }: Props) {
  const homeUrl = canonicalAbsoluteUrl(localePath(locale, "home"));

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${homeUrl}#website`,
      url: homeUrl,
      name: m.meta.siteName,
      description: m.meta.siteDescription,
      inLanguage: "en-US",
      publisher: { "@id": `${homeUrl}#vacation-rental` },
    },
    buildVacationRentalJsonLd(locale, m),
  ];

  return <JsonLdScript id="site-json-ld" data={graph} />;
}
