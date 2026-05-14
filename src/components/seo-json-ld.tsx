import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { ABOUT_US_IMAGE } from "@/config/site-images";
import { getSiteUrl } from "@/lib/site-url";

type Props = { locale: Locale; messages: Messages };

/**
 * JSON-LD for homepage (LodgingBusiness + WebSite). Safe for static export.
 */
export function SeoJsonLd({ locale, messages: m }: Props) {
  const base = getSiteUrl();
  const pageUrl = `${base}/${locale}`;
  const imageUrl = `${base}/img/about-us/${ABOUT_US_IMAGE}`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${pageUrl}#website`,
      url: pageUrl,
      name: m.meta.siteName,
      description: m.meta.siteDescription,
      inLanguage: locale,
      publisher: { "@id": `${pageUrl}#lodging` },
    },
    {
      "@type": "LodgingBusiness",
      "@id": `${pageUrl}#lodging`,
      name: m.meta.siteName,
      description: m.meta.siteDescription,
      url: pageUrl,
      image: imageUrl,
      telephone: m.contact.phoneMock.replace(/\s/g, ""),
      email: m.contact.emailMock,
      address: {
        "@type": "PostalAddress",
        streetAddress: m.contact.addressMock.split(",")[0]?.trim() ?? m.contact.addressMock,
        addressCountry: "HR",
      },
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD from trusted CMS strings only
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
