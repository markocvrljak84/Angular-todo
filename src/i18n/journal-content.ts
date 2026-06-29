import type { Locale } from "./config";
import { localePath } from "@/config/site-routes";

export const JOURNAL_CATEGORY_IDS = [
  "hiking",
  "nature",
  "stargazing",
  "places",
  "seasons",
] as const;

export type JournalCategoryId = (typeof JOURNAL_CATEGORY_IDS)[number];

export type JournalArticleStatus = "published" | "coming-soon";

export type JournalArticle = {
  slug: string;
  title: string;
  teaser: string;
  categoryId: JournalCategoryId;
  status: JournalArticleStatus;
  seoDescription?: string;
  paragraphs?: string[];
};

export type JournalCategory = {
  id: JournalCategoryId;
  title: string;
  intro: string;
  articles: JournalArticle[];
};

export type JournalContent = {
  title: string;
  intro: string;
  comingSoonLabel: string;
  readArticleLabel: string;
  viewCategoryLabel: string;
  backToJournalLabel: string;
  relatedExperiencesLabel: string;
  categories: JournalCategory[];
};

const en: JournalContent = {
  title: "Journal",
  intro:
    "Stories, guides and quiet notes from Velebit — hiking trails, wild nature, dark skies, nearby places and the rhythm of the seasons around Stars Peak.",
  comingSoonLabel: "Coming soon",
  readArticleLabel: "Read article",
  viewCategoryLabel: "View all",
  backToJournalLabel: "Back to Journal",
  relatedExperiencesLabel: "Plan your days on Velebit",
  categories: [
    {
      id: "hiking",
      title: "Hiking",
      intro: "Trails, ridges and day walks on southern Velebit from Bačić Duliba.",
      articles: [
        {
          slug: "hiking-on-velebit",
          title: "Hiking on Velebit",
          teaser:
            "Why the mountain rewards a longer stay — forests, limestone ridges and trails that begin minutes from the door.",
          categoryId: "hiking",
          status: "published",
          seoDescription:
            "An introduction to hiking on Velebit from Stars Peak — southern trails, Bačić Kuk, Dabarski Kukovi and the Premužić ridge path.",
          paragraphs: [
            "Velebit is not a single peak but a long limestone world of ridges, forests and empty plateaus above the Adriatic. From Stars Peak in Bačić Duliba you are already inside that landscape. Marked trails leave almost from the doorstep, and within a few hours you can stand on open karst with views toward the sea.",
            "Southern Velebit around Bačić Duliba is quieter than the famous northern national park, but no less rewarding. Paths climb through beech and pine toward Bačić Kuk, cross the rocky Dabarski Kukovi group, and connect to longer routes such as the Premužić Trail along the main ridge.",
            "What makes hiking here special is the rhythm of the day. Mornings often begin in cool forest air. By midday the limestone glows white against deep blue sky. In the evening the ridge softens — and on clear nights the stars return before you are back at the house.",
            "You do not need extreme equipment for most day hikes: good boots, water, layers and time are enough. Some routes are steep and exposed; others are gentle forest walks. Detailed trail notes, maps and GPX files are on our Experiences page so you can choose according to mood and weather.",
            "Whether you come for one long ascent or several shorter walks across a long stay, Velebit reveals itself slowly. That is precisely why it is worth staying more than one night — and why the best hikes here are not rushed.",
          ],
        },
        {
          slug: "best-hikes-on-velebit",
          title: "Best hikes on Velebit",
          teaser: "Day walks and longer routes near Stars Peak and Baške Oštarije.",
          categoryId: "hiking",
          status: "coming-soon",
        },
        {
          slug: "bacic-kuk-hike",
          title: "Bačić Kuk hike",
          teaser: "The classic summit walk from Bačić Duliba — timing, terrain and views.",
          categoryId: "hiking",
          status: "coming-soon",
        },
        {
          slug: "premuzic-trail-guide",
          title: "Premužić Trail guide",
          teaser: "Croatia's great ridge path — access, highlights and planning from the south.",
          categoryId: "hiking",
          status: "coming-soon",
        },
        {
          slug: "dabarski-kukovi",
          title: "Dabarski Kukovi",
          teaser: "A dramatic line of limestone peaks above the forest near Stars Peak.",
          categoryId: "hiking",
          status: "coming-soon",
        },
      ],
    },
    {
      id: "nature",
      title: "Nature",
      intro: "Wild herbs, alpine flowers and the quiet life of the mountain.",
      articles: [
        {
          slug: "wild-herbs-of-velebit",
          title: "Wild herbs of Velebit",
          teaser: "Foraging seasons, traditional uses and plants of the karst meadows.",
          categoryId: "nature",
          status: "coming-soon",
        },
        {
          slug: "flowers-of-velebit",
          title: "Flowers of Velebit",
          teaser: "From spring orchids to summer meadows on the southern slopes.",
          categoryId: "nature",
          status: "coming-soon",
        },
        {
          slug: "wildlife",
          title: "Wildlife",
          teaser: "Hares, horses, birds and the animals that share the high pastures.",
          categoryId: "nature",
          status: "coming-soon",
        },
      ],
    },
    {
      id: "stargazing",
      title: "Stargazing",
      intro: "Dark skies above Velebit — when to look up and what you can see.",
      articles: [
        {
          slug: "milky-way-croatia",
          title: "Milky Way Croatia",
          teaser: "Where and when to see the Milky Way arc above the Adriatic ridge.",
          categoryId: "stargazing",
          status: "coming-soon",
        },
        {
          slug: "dark-sky-croatia",
          title: "Dark Sky Croatia",
          teaser: "Why Velebit offers some of Croatia's clearest night skies.",
          categoryId: "stargazing",
          status: "coming-soon",
        },
        {
          slug: "perseids",
          title: "Perseids",
          teaser: "Watching the meteor shower from the mountain — dates and tips.",
          categoryId: "stargazing",
          status: "coming-soon",
        },
      ],
    },
    {
      id: "places",
      title: "Places",
      intro: "Day trips from the mountain to the coast, islands and nearby towns.",
      articles: [
        {
          slug: "karlobag",
          title: "Karlobag",
          teaser: "The nearest Adriatic town — beaches, lunch and an easy half-day escape.",
          categoryId: "places",
          status: "coming-soon",
        },
        {
          slug: "zavratnica",
          title: "Zavratnica",
          teaser: "A sheltered bay often called Croatia's fjord — calm water beneath cliffs.",
          categoryId: "places",
          status: "coming-soon",
        },
        {
          slug: "pag",
          title: "Pag",
          teaser: "Island stone, wind and light — a day trip linked by bridge from the mountain.",
          categoryId: "places",
          status: "coming-soon",
        },
        {
          slug: "baske-ostarije",
          title: "Baške Oštarije",
          teaser: "The mountain pass gateway — trails, views and the road across Velebit.",
          categoryId: "places",
          status: "coming-soon",
        },
      ],
    },
    {
      id: "seasons",
      title: "Seasons",
      intro: "How Velebit changes through the year — and when to visit.",
      articles: [
        {
          slug: "spring",
          title: "Spring",
          teaser: "Wildflowers, lingering snow and quiet trails before summer.",
          categoryId: "seasons",
          status: "coming-soon",
        },
        {
          slug: "summer",
          title: "Summer",
          teaser: "Cool mornings on the ridge and Adriatic swims by afternoon.",
          categoryId: "seasons",
          status: "coming-soon",
        },
        {
          slug: "autumn",
          title: "Autumn",
          teaser: "Golden light, empty trails and long evenings by the fire.",
          categoryId: "seasons",
          status: "coming-soon",
        },
        {
          slug: "winter",
          title: "Winter",
          teaser: "Snow on the peaks, silence in the forest and the cosiest time at the house.",
          categoryId: "seasons",
          status: "coming-soon",
        },
      ],
    },
  ],
};

export function getJournalContent(_locale: Locale): JournalContent {
  return en;
}

export function journalCategoryPath(
  locale: Locale,
  categoryId: JournalCategoryId
): string {
  return `${localePath(locale, "journal")}/${categoryId}`;
}

export function journalArticlePath(
  locale: Locale,
  categoryId: JournalCategoryId,
  slug: string
): string {
  return `${journalCategoryPath(locale, categoryId)}/${slug}`;
}

export function getJournalCategory(
  locale: Locale,
  categoryId: string
): JournalCategory | undefined {
  return getJournalContent(locale).categories.find((c) => c.id === categoryId);
}

export function getJournalArticle(
  locale: Locale,
  categoryId: string,
  slug: string
): JournalArticle | undefined {
  const category = getJournalCategory(locale, categoryId);
  const article = category?.articles.find((a) => a.slug === slug);
  if (!article || article.categoryId !== categoryId) return undefined;
  return article;
}

export function getPublishedJournalArticles(locale: Locale): JournalArticle[] {
  return getJournalContent(locale).categories.flatMap((category) =>
    category.articles.filter((article) => article.status === "published")
  );
}

export function isJournalCategoryId(id: string): id is JournalCategoryId {
  return (JOURNAL_CATEGORY_IDS as readonly string[]).includes(id);
}
