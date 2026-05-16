import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { SITE_CONTACT } from "@/config/site-contact";
import {
  SITE_GEO,
  getPostalAddress,
  getSiteCoordinates,
} from "@/config/site-location";
import { ABOUT_US_IMAGE } from "@/config/site-images";
import { getSiteUrl } from "@/lib/site-url";

type Props = { locale: Locale; messages: Messages };

/**
 * JSON-LD: WebSite, Place, LodgingBusiness — helps Google map the property to Croatia/Velebit.
 */
export function SeoJsonLd({ locale, messages: m }: Props) {
  const base = getSiteUrl();
  const pageUrl = `${base}/${locale}`;
  const imageUrl = `${base}/img/about-us/${ABOUT_US_IMAGE}`;
  const { latitude, longitude } = getSiteCoordinates();
  const postalAddress = getPostalAddress();

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
      "@type": "Place",
      "@id": `${pageUrl}#place`,
      name: SITE_GEO.brandName,
      description: m.meta.siteDescription,
      url: pageUrl,
      image: imageUrl,
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
      containedInPlace: {
        "@type": "Place",
        name: SITE_GEO.naturePark,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_GEO.locality,
          addressCountry: SITE_GEO.regionCode,
        },
      },
    },
    {
      "@type": ["LodgingBusiness", "VacationRental"],
      "@id": `${pageUrl}#lodging`,
      name: SITE_CONTACT.businessName,
      description: m.meta.siteDescription,
      url: pageUrl,
      image: imageUrl,
      telephone: SITE_CONTACT.phone.replace(/\s/g, ""),
      email: SITE_CONTACT.email,
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
      containedInPlace: { "@id": `${pageUrl}#place` },
      areaServed: {
        "@type": "Country",
        name: SITE_GEO.countryName,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
