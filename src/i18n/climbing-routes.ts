import type { Locale } from "./config";

export type ClimbingRouteId =
  | "agin-kuk"
  | "celina-kuk"
  | "rujicin-kuk"
  | "via-ferrata-bat";

export type ClimbingRouteStat = {
  label: string;
  value: string;
};

export type ClimbingRouteContent = {
  id: ClimbingRouteId;
  title: string;
  subtitle: string;
  pills: string[];
  stats: ClimbingRouteStat[];
};

export type ClimbingRoutesContent = {
  title: string;
  intro: string;
  expandRouteLabel: string;
  collapseRouteLabel: string;
  statsHeading: string;
  sourceLabel: string;
  sourceHref: string;
  routes: ClimbingRouteContent[];
};

const PP_VELEBIT_ACTIVITIES_URL =
  "https://pp-velebit.hr/en/plan-your-visit/activities";

const hr: ClimbingRoutesContent = {
  title: "Alpinizam i penjanje",
  intro:
    "Kukovi Velebita cijenjena su i omiljena penjališta iskusnih penjača i alpinista. Agin kuk, Rujičin kuk i Čelina kuk u Dabarskim kukovima, kao i via ferrata Bat podno Crnopca, otvoreni su za penjanje od travnja do studenog. Radi se o dugim penjačkim smjerovima za koje je potrebno znanje, iskustvo i dobra oprema.",
  expandRouteLabel: "Prikaži detalje",
  collapseRouteLabel: "Sakrij detalje",
  statsHeading: "Informacije o penjalištu",
  sourceLabel: "More on alpinism — Velebit Nature Park",
  sourceHref: PP_VELEBIT_ACTIVITIES_URL,
  routes: [
    {
      id: "agin-kuk",
      title: "Visibaba / Agin kuk",
      subtitle: "Alpinistički dugi smjerovi",
      pills: ["6 smjerova", "5c+ – 6c+", "Tra – Stu"],
      stats: [
        { label: "Broj smjerova", value: "6" },
        { label: "Preporučeni period", value: "Od travnja do studenog" },
        { label: "Ocjene smjera", value: "Od 5c+ do 6c+" },
      ],
    },
    {
      id: "celina-kuk",
      title: "Čelina kuk",
      subtitle: "Alpinistički dugi smjerovi",
      pills: ["3 smjera", "6a – 7a+", "Tra – Stu"],
      stats: [
        { label: "Broj smjerova", value: "3" },
        { label: "Preporučeni period", value: "Od travnja do studenog" },
        { label: "Ocjene smjera", value: "Od 6a do 7a+" },
      ],
    },
    {
      id: "rujicin-kuk",
      title: "Rujičin kuk",
      subtitle: "Alpinistički dugi smjerovi",
      pills: ["17 smjerova", "4c – 6c+", "Tra – Stu"],
      stats: [
        { label: "Broj smjerova", value: "17" },
        { label: "Preporučeni period", value: "Od travnja do studenog" },
        { label: "Ocjene smjera", value: "Od 4c do 6c+" },
      ],
    },
    {
      id: "via-ferrata-bat",
      title: "Via ferrata Bat",
      subtitle: "Via ferrata",
      pills: ["1040 m", "P/D", "Zahtjevnost 2/3"],
      stats: [
        { label: "Dužina sajle", value: "756 m" },
        { label: "Ukupna dužina", value: "1040 m" },
        { label: "Ocjena", value: "P/D" },
        { label: "Fizička zahtjevnost (1–3)", value: "2" },
      ],
    },
  ],
};

const en: ClimbingRoutesContent = {
  title: "Alpinism & climbing",
  intro:
    "Rocky peaks of Velebit are favourite destinations for experienced hikers and rock climbers. Agin kuk, Rujičin kuk and Čelina kuk in Dabarski kukovi, and the Bat via ferrata below Crnopac, are open for climbing from April until November. These long routes require knowledge, experience and good equipment.",
  expandRouteLabel: "Show details",
  collapseRouteLabel: "Hide details",
  statsHeading: "Crag information",
  sourceLabel: "More on alpinism — Velebit Nature Park",
  sourceHref: PP_VELEBIT_ACTIVITIES_URL,
  routes: [
    {
      id: "agin-kuk",
      title: "Visibaba / Agin kuk",
      subtitle: "Long climbing routes",
      pills: ["6 routes", "5c+ – 6c+", "Apr – Nov"],
      stats: [
        { label: "Number of routes", value: "6" },
        { label: "Recommended season", value: "April to November" },
        { label: "Route grades", value: "From 5c+ to 6c+" },
      ],
    },
    {
      id: "celina-kuk",
      title: "Čelina kuk",
      subtitle: "Long climbing routes",
      pills: ["3 routes", "6a – 7a+", "Apr – Nov"],
      stats: [
        { label: "Number of routes", value: "3" },
        { label: "Recommended season", value: "April to November" },
        { label: "Route grades", value: "From 6a to 7a+" },
      ],
    },
    {
      id: "rujicin-kuk",
      title: "Rujičin kuk",
      subtitle: "Long climbing routes",
      pills: ["17 routes", "4c – 6c+", "Apr – Nov"],
      stats: [
        { label: "Number of routes", value: "17" },
        { label: "Recommended season", value: "April to November" },
        { label: "Route grades", value: "From 4c to 6c+" },
      ],
    },
    {
      id: "via-ferrata-bat",
      title: "Via ferrata Bat",
      subtitle: "Via ferrata",
      pills: ["1040 m", "P/D", "Engagement 2/3"],
      stats: [
        { label: "Cable length", value: "756 m" },
        { label: "Total length", value: "1040 m" },
        { label: "Scale", value: "P/D" },
        { label: "Physical engagement (1–3)", value: "2" },
      ],
    },
  ],
};

const de: ClimbingRoutesContent = {
  ...en,
  title: "Alpinismus & Klettern",
  intro:
    "Die Felsgipfel des Velebit sind beliebte Ziele für erfahrene Wanderer und Kletterer. Agin kuk, Rujičin kuk und Čelina kuk in den Dabarski kukovi sowie die Via ferrata Bat am Crnopac sind von April bis November geöffnet. Diese langen Routen erfordern Können, Erfahrung und gute Ausrüstung.",
  expandRouteLabel: "Details anzeigen",
  collapseRouteLabel: "Details ausblenden",
  statsHeading: "Klettergebiet",
  sourceLabel: "More on alpinism — Velebit Nature Park",
  sourceHref: PP_VELEBIT_ACTIVITIES_URL,
  routes: en.routes.map((route) => ({
    ...route,
    subtitle:
      route.id === "via-ferrata-bat" ? "Via ferrata" : "Lange Kletterrouten",
    pills:
      route.id === "agin-kuk"
        ? ["6 Routen", "5c+ – 6c+", "Apr – Nov"]
        : route.id === "celina-kuk"
          ? ["3 Routen", "6a – 7a+", "Apr – Nov"]
          : route.id === "rujicin-kuk"
            ? ["17 Routen", "4c – 6c+", "Apr – Nov"]
            : ["1040 m", "P/D", "Anstrengung 2/3"],
    stats: route.stats.map((stat) => ({
      label:
        stat.label === "Number of routes"
          ? "Anzahl Routen"
          : stat.label === "Recommended season"
            ? "Empfohlene Saison"
            : stat.label === "Route grades"
              ? "Schwierigkeitsgrade"
              : stat.label === "Cable length"
                ? "Seillänge"
                : stat.label === "Total length"
                  ? "Gesamtlänge"
                  : stat.label === "Scale"
                    ? "Skala"
                    : stat.label === "Physical engagement (1–3)"
                      ? "Körperliche Anstrengung (1–3)"
                      : stat.label,
      value: stat.value,
    })),
  })),
};

const fr: ClimbingRoutesContent = {
  ...en,
  title: "Alpinisme & escalade",
  intro:
    "Les sommets rocheux du Velebit sont des destinations prisées des randonneurs et grimpeurs expérimentés. Agin kuk, Rujičin kuk et Čelina kuk dans les Dabarski kukovi, ainsi que la via ferrata Bat au pied du Crnopac, sont ouverts d’avril à novembre. Ces longues voies demandent savoir-faire, expérience et bon équipement.",
  expandRouteLabel: "Afficher les détails",
  collapseRouteLabel: "Masquer les détails",
  statsHeading: "Informations sur le site",
  sourceLabel: "More on alpinism — Velebit Nature Park",
  sourceHref: PP_VELEBIT_ACTIVITIES_URL,
  routes: en.routes.map((route) => ({
    ...route,
    subtitle:
      route.id === "via-ferrata-bat" ? "Via ferrata" : "Voies longues",
    pills:
      route.id === "agin-kuk"
        ? ["6 voies", "5c+ – 6c+", "Avr – Nov"]
        : route.id === "celina-kuk"
          ? ["3 voies", "6a – 7a+", "Avr – Nov"]
          : route.id === "rujicin-kuk"
            ? ["17 voies", "4c – 6c+", "Avr – Nov"]
            : ["1040 m", "P/D", "Effort 2/3"],
    stats: route.stats.map((stat) => ({
      label:
        stat.label === "Number of routes"
          ? "Nombre de voies"
          : stat.label === "Recommended season"
            ? "Saison recommandée"
            : stat.label === "Route grades"
              ? "Cotation"
              : stat.label === "Cable length"
                ? "Longueur du câble"
                : stat.label === "Total length"
                  ? "Longueur totale"
                  : stat.label === "Scale"
                    ? "Échelle"
                    : stat.label === "Physical engagement (1–3)"
                      ? "Engagement physique (1–3)"
                      : stat.label,
      value: stat.value,
    })),
  })),
};

const it: ClimbingRoutesContent = {
  ...en,
  title: "Alpinismo & arrampicata",
  intro:
    "Le cime rocciose del Velebit sono mete amate da escursionisti e arrampicatori esperti. Agin kuk, Rujičin kuk e Čelina kuk nei Dabarski kukovi, e la via ferrata Bat ai piedi del Crnopac, sono aperti da aprile a novembre. Queste vie lunghe richiedono competenza, esperienza e buona attrezzatura.",
  expandRouteLabel: "Mostra dettagli",
  collapseRouteLabel: "Nascondi dettagli",
  statsHeading: "Informazioni sul sito",
  sourceLabel: "More on alpinism — Velebit Nature Park",
  sourceHref: PP_VELEBIT_ACTIVITIES_URL,
  routes: en.routes.map((route) => ({
    ...route,
    subtitle:
      route.id === "via-ferrata-bat" ? "Via ferrata" : "Vie lunghe",
    pills:
      route.id === "agin-kuk"
        ? ["6 vie", "5c+ – 6c+", "Apr – Nov"]
        : route.id === "celina-kuk"
          ? ["3 vie", "6a – 7a+", "Apr – Nov"]
          : route.id === "rujicin-kuk"
            ? ["17 vie", "4c – 6c+", "Apr – Nov"]
            : ["1040 m", "P/D", "Impegno 2/3"],
    stats: route.stats.map((stat) => ({
      label:
        stat.label === "Number of routes"
          ? "Numero di vie"
          : stat.label === "Recommended season"
            ? "Periodo consigliato"
            : stat.label === "Route grades"
              ? "Gradi delle vie"
              : stat.label === "Cable length"
                ? "Lunghezza cavo"
                : stat.label === "Total length"
                  ? "Lunghezza totale"
                  : stat.label === "Scale"
                    ? "Scala"
                    : stat.label === "Physical engagement (1–3)"
                      ? "Impegno fisico (1–3)"
                      : stat.label,
      value: stat.value,
    })),
  })),
};

const byLocale: Record<Locale, ClimbingRoutesContent> = { en, hr, de, fr, it };

export function getClimbingRoutes(locale: Locale): ClimbingRoutesContent {
  return byLocale[locale];
}
