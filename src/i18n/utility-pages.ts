import type { Locale } from "./config";
import type { SitePageKey } from "@/config/site-routes";

export type SitemapGroup = {
  title: string;
  pages: SitePageKey[];
};

export type UtilityPagesContent = {
  notFound: {
    title: string;
    intro: string;
    homeLabel: string;
    contactLabel: string;
    sitemapLabel: string;
    stayLabel: string;
  };
  htmlSitemap: {
    title: string;
    intro: string;
    groups: SitemapGroup[];
  };
};

const en: UtilityPagesContent = {
  notFound: {
    title: "Page not found",
    intro:
      "This path does not lead to a page on Stars Peak. Return home, open the site map, or reach us if you were looking for something specific.",
    homeLabel: "Back to home",
    contactLabel: "Contact",
    sitemapLabel: "Site map",
    stayLabel: "The house",
  },
  htmlSitemap: {
    title: "Site map",
    intro:
      "An overview of Stars Peak pages — stay, mountain experiences, journal and practical information.",
    groups: [
      {
        title: "Stay",
        pages: ["home", "accommodation", "gallery", "goodToKnow", "contact"],
      },
      {
        title: "Mountain & experiences",
        pages: [
          "experiences",
          "velebitHikingRetreat",
          "darkSkyStargazing",
          "offGridMountainCabin",
          "remoteWork",
          "photographyRetreat",
        ],
      },
      {
        title: "Stories & press",
        pages: ["journal", "about", "press"],
      },
    ],
  },
};

const hr: UtilityPagesContent = {
  notFound: {
    title: "Stranica nije pronađena",
    intro:
      "Ovaj put ne vodi do stranice na Stars Peaku. Vratite se na početnu, otvorite mapu stranica ili nas kontaktirajte ako ste tražili nešto konkretno.",
    homeLabel: "Na početnu",
    contactLabel: "Kontakt",
    sitemapLabel: "Mapa stranica",
    stayLabel: "Smještaj",
  },
  htmlSitemap: {
    title: "Mapa stranica",
    intro:
      "Pregled stranica Stars Peaka — smještaj, doživljaji, dnevnik i praktične informacije.",
    groups: en.htmlSitemap.groups.map((g, i) =>
      i === 0
        ? { ...g, title: "Boravak" }
        : i === 1
          ? { ...g, title: "Planina i doživljaji" }
          : { ...g, title: "Priče i press" },
    ),
  },
};

const de: UtilityPagesContent = {
  notFound: {
    title: "Seite nicht gefunden",
    intro:
      "Dieser Pfad führt zu keiner Seite auf Stars Peak. Zurück zur Startseite, zur Sitemap — oder kontaktieren Sie uns.",
    homeLabel: "Zur Startseite",
    contactLabel: "Kontakt",
    sitemapLabel: "Sitemap",
    stayLabel: "Unterkunft",
  },
  htmlSitemap: {
    title: "Sitemap",
    intro:
      "Übersicht der Stars-Peak-Seiten — Aufenthalt, Bergerlebnisse, Journal und praktische Infos.",
    groups: en.htmlSitemap.groups.map((g, i) =>
      i === 0
        ? { ...g, title: "Aufenthalt" }
        : i === 1
          ? { ...g, title: "Berg & Erlebnisse" }
          : { ...g, title: "Geschichten & Presse" },
    ),
  },
};

const fr: UtilityPagesContent = {
  notFound: {
    title: "Page introuvable",
    intro:
      "Ce chemin ne mène à aucune page sur Stars Peak. Revenez à l’accueil, ouvrez le plan du site, ou contactez-nous.",
    homeLabel: "Retour à l’accueil",
    contactLabel: "Contact",
    sitemapLabel: "Plan du site",
    stayLabel: "Hébergement",
  },
  htmlSitemap: {
    title: "Plan du site",
    intro:
      "Vue d’ensemble des pages Stars Peak — séjour, expériences, journal et infos pratiques.",
    groups: en.htmlSitemap.groups.map((g, i) =>
      i === 0
        ? { ...g, title: "Séjour" }
        : i === 1
          ? { ...g, title: "Montagne & expériences" }
          : { ...g, title: "Récits & presse" },
    ),
  },
};

const it: UtilityPagesContent = {
  notFound: {
    title: "Pagina non trovata",
    intro:
      "Questo percorso non porta a una pagina di Stars Peak. Torna alla home, apri la mappa del sito o contattaci.",
    homeLabel: "Torna alla home",
    contactLabel: "Contatti",
    sitemapLabel: "Mappa del sito",
    stayLabel: "Alloggio",
  },
  htmlSitemap: {
    title: "Mappa del sito",
    intro:
      "Panoramica delle pagine di Stars Peak — soggiorno, esperienze, journal e informazioni pratiche.",
    groups: en.htmlSitemap.groups.map((g, i) =>
      i === 0
        ? { ...g, title: "Soggiorno" }
        : i === 1
          ? { ...g, title: "Montagna ed esperienze" }
          : { ...g, title: "Storie e press" },
    ),
  },
};

const byLocale: Record<Locale, UtilityPagesContent> = { en, hr, de, fr, it };

export function getUtilityPagesContent(locale: Locale): UtilityPagesContent {
  return byLocale[locale];
}
