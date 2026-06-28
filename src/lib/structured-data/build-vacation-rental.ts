import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { BOOKING_URL, SITE_CONTACT } from "@/config/site-contact";
import { localePath } from "@/config/site-routes";
import {
  VACATION_RENTAL_IDENTIFIER,
  VACATION_RENTAL_SCHEMA_IMAGES,
  VACATION_RENTAL_STATS,
} from "@/config/site-property";
import {
  SITE_GEO,
  getPostalAddress,
  getSiteCoordinates,
} from "@/config/site-location";
import { getSeoKeywords } from "@/lib/seo-keywords";
import { getSiteUrl } from "@/lib/site-url";
import { formatSchemaCoordinate } from "./format-coordinates";

const HOST_LANGUAGES: Record<Locale, string> = {
  en: "en-US",
  hr: "hr-HR",
  de: "de-DE",
  fr: "fr-FR",
  it: "it-IT",
};

export function buildVacationRentalJsonLd(locale: Locale, messages: Messages) {
  const base = getSiteUrl();
  const pageUrl = `${base}${localePath(locale, "home")}`;
  const { latitude, longitude } = getSiteCoordinates();
  const postalAddress = getPostalAddress();
  const { "@type": _type, ...baseAddress } = postalAddress;
  void _type;
  const address = {
    ...baseAddress,
    addressLocality: SITE_GEO.locality,
    postalCode: "53288",
  };
  const keywords = getSeoKeywords(locale);

  const imageUrls = VACATION_RENTAL_SCHEMA_IMAGES.map(
    (file) => `${base}/img/gallery/${file}`
  );

  return {
    "@type": "VacationRental",
    "@id": `${pageUrl}#vacation-rental`,
    identifier: VACATION_RENTAL_IDENTIFIER,
    name: SITE_CONTACT.businessName,
    alternateName: ["Stars Peak", "Velebit mountain chalet"],
    description: messages.meta.siteDescription,
    url: pageUrl,
    image: imageUrls,
    latitude: formatSchemaCoordinate(latitude),
    longitude: formatSchemaCoordinate(longitude),
    additionalType: "Chalet",
    telephone: SITE_CONTACT.phone.replace(/\s/g, ""),
    email: SITE_CONTACT.email,
    keywords: keywords.join(", "),
    address,
    knowsLanguage: Object.values(HOST_LANGUAGES),
    sameAs: [BOOKING_URL],
    containsPlace: {
      "@type": "Accommodation",
      additionalType: "EntirePlace",
      occupancy: {
        "@type": "QuantitativeValue",
        value: VACATION_RENTAL_STATS.occupancy,
      },
      numberOfBedrooms: VACATION_RENTAL_STATS.numberOfBedrooms,
      numberOfBathroomsTotal: VACATION_RENTAL_STATS.numberOfBathroomsTotal,
      numberOfRooms: VACATION_RENTAL_STATS.numberOfRooms,
      bed: [
        { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Queen" },
        { "@type": "BedDetails", numberOfBeds: 2, typeOfBed: "Single" },
      ],
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "parkingType",
          value: "Free",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "childFriendly",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "wifi",
          value: true,
        },
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BOOKING_URL,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      name: "Book stay",
    },
    areaServed: {
      "@type": "Country",
      name: SITE_GEO.countryName,
    },
  };
}
