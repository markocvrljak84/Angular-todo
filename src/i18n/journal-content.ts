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
          teaser:
            "The summit above the house — how we climb it from Bačić Duliba, what the final rocks ask of you, and why we still go back.",
          categoryId: "hiking",
          status: "published",
          seoDescription:
            "Bačić Kuk hike from Stars Peak in Bačić Duliba — 1,304 m summit of Dabarski Kukovi, timing, approaches and the demanding final section with cables.",
          paragraphs: [
            "Most mornings at Stars Peak begin the same way. Coffee on the terrace, and Bačić Kuk already catching the first light. The wall rises west of Bačić Duliba — bare limestone above the forest — and it is hard not to look at it. Sooner or later almost every guest asks the same question: can we go up?",
            "Bačić Kuk stands at 1,304 metres. It is the highest and northernmost rocky peak in the Dabarski Kukovi group, a sharp line of stone that runs south toward Baške Oštarije. The summit itself is not a wide plateau but a narrow, elongated ridge of rock. On a clear day the view opens over Bačić Duliba, the neighbouring kukovi and, when the air is clean, toward the Adriatic.",
            "From the house you do not need a long drive. Marked trails leave from Bačić Duliba. One common approach follows the markings toward Došen Dabar, then branches west for Bačić Kuk, climbs toward Bačić Dolac and reaches the Ripinovac saddle. From there a forest path leads to the amphitheatre below the peak — a natural place to leave heavier packs before the final climb. Another, steeper option is the Brđina path, which enters the same amphitheatre from the other side and demands sure footing on scree.",
            "Plan roughly an hour and a half from Bačić Duliba to the summit in good conditions, longer if you move slowly or wait for weather. The lower part is a proper mountain walk: grassland, forest, then steeper ground. The last minutes are different. Above the amphitheatre the route becomes a short, exposed scramble with fixed cables. It is not a via ferrata in the alpine sense, but it is real climbing terrain. The Croatian Mountaineering Association is clear on this: the ascent to the peak is difficult and not recommended for hikers without climbing experience. We tell guests the same — if heights unsettle you, turn around at the amphitheatre. The view from there is already worth the walk.",
            "If you want a longer day, the ridge continues beyond Bačić Kuk toward Budakovo Brdo and back to Bačić Duliba — a loop of around nine kilometres and several hours on the mountain. We usually suggest that only when the weather is stable and legs still feel strong after the summit. Otherwise an out-and-back from Duliba is enough: summit, rest, descend the same way, and be home for a late lunch or an early dinner by the outdoor kitchen.",
            "Water, boots with grip, gloves for the cable section and an early start matter more here than fancy gear. In summer the rock heats quickly; in spring and autumn the wind on the ridge can be sharp. We keep GPX files and route notes on the Experiences page for guests who want the track on their phone. And when you come back down, Bačić Kuk is still there above the house — the same silhouette you woke up to, only now you know how the stone feels under your hands.",
          ],
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
          teaser:
            "The limestone wall above Bačić Duliba — how the ridge shapes our days, which walks suit a quiet stay, and why the view matters even if you never touch the summit.",
          categoryId: "hiking",
          status: "published",
          seoDescription:
            "Dabarski Kukovi on central Velebit from Stars Peak — limestone peaks above Bačić Duliba, walks toward Baške Oštarije, Budakovo Brdo and life under the ridge.",
          paragraphs: [
            "From Stars Peak you do not look at a single mountain. You look at a wall. Dabarski Kukovi rise west of Bačić Duliba as a jagged line of bare limestone — peaks of different height and steepness, rooted in forest and running southeast toward Baške Oštarije. On clear mornings the rock turns white; in evening light it softens to grey and gold. Guests often photograph it before they ask its name.",
            "In Croatian mountain writing the group is described as a series of rocky peaks that protrude from the green forest like a wall. Bačić Kuk (1,304 m) is the highest and northernmost of them, and the one you see most clearly from the house. Beyond it the ridge continues; grassy Budakovo Brdo opens to the west of the kuk, and marked paths link the saddles and valleys below. You do not have to climb every peak to feel the landscape — standing in Bačić Duliba is already standing inside it.",
            "The valleys under the kukovi are part of the story. Around here lie the dabri — karst hollows and meadows such as Bačić Duliba, Došen Dabar and Ravni Dabar — once among the rare places of lasting settlement on this side of Velebit. Bačić Duliba sits at about 860 metres: open meadows, forested hills on three sides, and the west closed by the wall of Bačić Kuk. Further along, the mountain hut at Ravni Dabar (723 m), beneath the rock of Čelinac, has long been a base for walks around the group. Near Ravni Dabar there is also a sport-climbing area — another reason climbers know these cliffs by name.",
            "For a stay at Stars Peak we usually suggest reading the ridge in layers. A short walk into the meadows and forest already changes the light and the sound of the wind. A half-day on marked paths toward Ripinovac or Budakovo Brdo gives height without the exposed scramble of Bačić Kuk’s final metres. The full summit of Bačić Kuk remains for guests who want rock under their hands and are comfortable with cables — we wrote that climb in a separate note. Longer days can follow the Velebit Hiking Trail through this section, or simply turn back when the legs say enough. Maps and GPX for the nearby marked routes are on the Experiences page.",
            "What we love about Dabarski Kukovi is not a checklist of peaks. It is the way the ridge holds the valley: quiet mornings, the smell of pine after rain, the silhouette that stays with you when you drive down to Karlobag for a swim and come home again. Southern and central Velebit here feel less crowded than the famous northern park, yet the stone is the same Velebit — sharp, bright and close. Live under it for a few days and you stop treating it as a backdrop. It becomes the measure of the day.",
          ],
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
