import type { Locale } from "@/i18n/config";
import { SITE_CONTACT } from "@/config/site-contact";
import { SITE_GEO } from "@/config/site-location";

const shared = [
  SITE_CONTACT.businessName,
  "Stars Peak",
  SITE_GEO.settlement,
  SITE_GEO.mountain,
  SITE_GEO.naturePark,
  SITE_GEO.locality,
  "Došen Dabar",
  SITE_GEO.administrativeArea,
  SITE_GEO.countryName,
  SITE_GEO.countryNameHr,
] as const;

const byLocale: Record<Locale, readonly string[]> = {
  en: [
    ...shared,
    "Velebit mountain chalet",
    "Stars Peak Velebit",
    "velebit-starspeak.com",
    "mountain chalet Croatia",
    "Velebit holiday home",
    "vacation rental Velebit",
    "mountain accommodation Croatia",
    "hiking Velebit",
    "Bačić Duliba accommodation",
    "Karlobag mountains",
    "Baške Oštarije",
    "Northern Velebit",
    "holiday home Croatia",
  ],
  hr: [
    ...shared,
    "planinska kuća Velebit",
    "planinska kuća za odmor",
    "smještaj Velebit",
    "kuća za odmor Hrvatska",
    "Velebit smještaj",
    "smještaj Bačić Duliba",
    "planinarenje Velebit",
    "odmor na Velebitu",
    "planinska kuća Karlobag",
    "Baške Oštarije smještaj",
    "Park prirode Velebit",
  ],
  de: [
    ...shared,
    "Berghütte Velebit",
    "Ferienhaus Velebit",
    "Unterkunft Velebit",
    "Urlaub am Velebit",
    "Wandern Velebit",
    "Ferienhaus Kroatien",
    "Berghütte Kroatien",
    "Unterkunft Bačić Duliba",
    "Karlobag Ferienhaus",
  ],
  fr: [
    ...shared,
    "chalet montagne Velebit",
    "maison vacances Velebit",
    "hébergement Velebit",
    "location Croatie montagne",
    "randonnée Velebit",
    "hébergement Bačić Duliba",
    "Karlobag montagne",
  ],
  it: [
    ...shared,
    "chalet montagna Velebit",
    "casa vacanze Velebit",
    "alloggio Velebit",
    "vacanza montagna Croazia",
    "escursionismo Velebit",
    "alloggio Bačić Duliba",
    "Karlobag montagna",
  ],
};

export function getSeoKeywords(locale: Locale): string[] {
  return [...new Set(byLocale[locale])];
}
