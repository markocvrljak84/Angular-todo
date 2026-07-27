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
  externalLinks?: { href: string; label: string }[];
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
          externalLinks: [
            {
              href: "https://www.hps.hr/info/hrvatski-vrhovi/bacic-kuk-vrh/",
              label: "Croatian Mountaineering Association: Bačić Kuk",
            },
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
          teaser:
            "Half an hour downhill — Adriatic swim, lunch on the waterfront, then back to the ridge before dark.",
          categoryId: "places",
          status: "published",
          seoDescription:
            "Karlobag day trip from Stars Peak — beaches, shops and waterfront lunch about 30 minutes from Bačić Duliba on Velebit.",
          paragraphs: [
            "When guests ask where the sea is, we point downhill. Karlobag sits on the Adriatic at the foot of Velebit, roughly half an hour by car from Stars Peak. One morning you wake under Bačić Kuk; by early afternoon you can be swimming in clear water with the same mountain rising behind the town. That contrast — limestone ridge and salt air in a single day — is why many stays here feel larger than the map suggests.",
            "Karlobag is a small coastal town, not a resort strip. The promenade faces Pag across the channel; cafés and restaurants sit along the water. For groceries before a mountain week we usually send people to Konzum, Tommy or Studenac in the centre. For a simple meal by the sea, Pizzeria Šušanj, Bistro Adriatik and Carlito’s on the waterfront are the places we mention most often — local names, not a long list of recommendations.",
            "For swimming we like Tatinja for a scenic pebble cove north of the centre, the town beach along the promenade when you want to stay close, and quieter stretches toward Ribarica and Cesarica when the day feels slower. None of these need a complicated plan: park, walk, swim, coffee, drive home. In summer start earlier if you want shade and an easier parking spot; in shoulder season the waterfront is quieter and the mountain air meets the sea without the heat.",
            "We treat Karlobag as the practical door to the Adriatic — shops when the fridge runs low, a swim when the ridge is too hot, a late lunch before the climb back to Bačić Duliba. The road up is the same gravel and asphalt you arrived on. By evening you are under the stars again, with salt still on your skin and the peaks of Velebit closing the horizon.",
          ],
          externalLinks: [
            {
              href: "https://www.tz-karlobag.hr/?lang=en-GB",
              label: "Tourist Board of Karlobag",
            },
          ],
        },
        {
          slug: "zavratnica",
          title: "Zavratnica",
          teaser:
            "A narrow inlet under Velebit often compared to a fjord — calm water, steep rock, and a short walk from Jablanac.",
          categoryId: "places",
          status: "published",
          seoDescription:
            "Zavratnica cove day trip from Stars Peak — protected landscape near Jablanac in Velebit Nature Park, fjord-like inlet with steep cliffs.",
          paragraphs: [
            "Zavratnica is the cove guests remember from photographs: a long, narrow arm of the sea cut into the base of Velebit, with steep sides and water that looks almost still. It sits about a kilometre south of Jablanac, on the northern Adriatic opposite the island of Rab. From Stars Peak it is a coastal day trip — drive toward the Karlobag–Senj road, then leave the car and walk into the bay.",
            "The inlet is roughly 900 metres long and between 50 and 150 metres wide. Cliffs rise as high as about 100 metres. It is often called a fjord, but geologically it is different: a torrential valley flooded when the sea rose after the last ice age. That is why it feels enclosed and quiet rather than open like a beach resort. Dry-stone terraces were built to slow mountain torrents; cypress, pine, fig and holm oak now soften the rock faces.",
            "Because of its landscape value, Zavratnica was declared a protected landscape in 1964 and has been part of Velebit Nature Park since 1981. It also belongs to the Natura 2000 network. The official park guidance is simple: reach the cove on foot along the sea from Jablanac in about twenty minutes, or descend by hiking trail from the village of Zavratnica if you want a steeper approach. Treat it as a natural site, not a beach club — water, shoes with grip, and time for the walk in and out.",
            "We suggest Zavratnica when guests want something between a mountain day and a town swim: dramatic rock, clear water, and a short coastal path instead of a long ferry plan. Go early in high season if you can. Swim, look back at the Velebit wall above the inlet, then return to Stars Peak with the feeling that mountain and sea really do share the same day.",
          ],
          externalLinks: [
            {
              href: "https://pp-velebit.hr/en/plan-your-visit/zavratnica-cove",
              label: "Velebit Nature Park: Zavratnica Cove",
            },
          ],
        },
        {
          slug: "pag",
          title: "Pag",
          teaser:
            "Stone, wind and island light — a day across the bridge when you want a different Adriatic face from Karlobag.",
          categoryId: "places",
          status: "published",
          seoDescription:
            "Pag island day trip from Stars Peak — Paški most bridge, lunar stone landscapes, sheep cheese and Adriatic views from Velebit.",
          paragraphs: [
            "Pag is the island you see from the Karlobag waterfront — pale stone, wind-shaped slopes, and a different light from the green forest around Stars Peak. For us it is the longer Adriatic day: morning coffee under Bačić Kuk, drive down to the coast, then south toward the bridge that links the mainland to the island. You do not need a ferry for a simple day trip; the road takes you across.",
            "Paški most opened in 1968. The bridge is about 301 metres long and carries the D106 across the Ljubačka Vrata strait. It is also famous for the bura — the strong wind that funnels along Velebit. On calm days the crossing is part of the view; on windy days you check conditions before you go. Once on the island the landscape shifts: bare karst and salt air on one side, softer green pockets on the other. Pag is often described as an island with two faces, and that is how it feels after a week in the mountain woods.",
            "What guests usually come for is the atmosphere as much as a single beach. Sheep graze herbs salted by sea spray; Paški sir — Pag cheese — is the flavour most people want to taste. Salt pans, lace and stone towns sit in the same open light. We do not try to pack the whole island into one visit. A loop through the rocky north or a stop in Pag town, a swim where the shore opens, cheese or lunch, and time to drive home before dark is enough.",
            "From Stars Peak, Pag works best as a full day with an early start. Pair it with Karlobag only if you keep both stops short. When the bura is strong, stay on the mainland coast or on the mountain — the ridge will still be there tomorrow. When the air is clear, the drive back up to Bačić Duliba, with Pag fading behind you and Velebit rising ahead, is half the pleasure of the trip.",
          ],
          externalLinks: [
            {
              href: "https://www.pag-outdoor.com/en/otok-pag-ili-mjesec-podno-velebita/",
              label: "Pag Outdoor: Pag island in pictures",
            },
          ],
        },
        {
          slug: "baske-ostarije",
          title: "Baške Oštarije",
          teaser:
            "The mountain pass above Karlobag — Premužić’s southern door, views to Pag, and a cool stop between sea and ridge.",
          categoryId: "places",
          status: "published",
          seoDescription:
            "Baške Oštarije from Stars Peak — Velebit mountain pass near Karlobag, southern end of the Premužić trail, views to Pag and hiking base.",
          paragraphs: [
            "Baške Oštarije is the mountain village most hikers know by name even if they have never slept there. It sits on the Gospić–Karlobag road at roughly 924 metres, about nineteen kilometres from the sea at Karlobag and a little over twenty from Gospić. From Stars Peak it feels like a neighbour on the ridge: same limestone world, same cool air, and a natural place to start or end a longer walk.",
            "Oštarijska Vrata, the pass a short way from the village at about 927 metres, opens a classic Velebit view toward Pag and the Adriatic islands. On a clear day you understand why this saddle has always been a gateway — continental Lika on one side, the sea road on the other. In summer the altitude still feels fresh when the coast is hot. That is why many people combine a mountain morning here with an afternoon swim in Karlobag.",
            "For walkers, Baške Oštarije matters as the southern end of the Premužić Trail. The famous dry-stone ridge path, built between 1930 and 1933, runs from the northern massif down to this pass. You do not need to walk all fifty-odd kilometres to feel it: a day section from Oštarije into the ridge is enough for most guests. Nearby peaks of central and southern Velebit are also reached from here, including routes toward Kiza and the wider Dabarski Kukovi line that ends above our own valley.",
            "We send guests to Baške Oštarije when they want a mountain day that is not only Bačić Kuk from the door — a pass, a view to the sea, and the sense of standing on the spine of Velebit. Stop for the panorama at Oštarijska Vrata, walk as far as the legs allow, then return to Stars Peak for dinner under the same stars. Sea and summit remain close; this is simply the place where the road crosses between them.",
          ],
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
          teaser:
            "Snow still clinging to the higher ridge, flowers in the meadows, and trails that open week by week.",
          categoryId: "seasons",
          status: "published",
          seoDescription:
            "Spring at Stars Peak on Velebit — lingering snow, wildflowers, quiet trails from Bačić Duliba and early Adriatic days before summer heat.",
          paragraphs: [
            "Spring on Velebit does not arrive all at once. In Bačić Duliba the meadows can already smell of green while higher ridges still hold snow in the hollows. From Stars Peak you watch the change day by day: longer light on Bačić Kuk, softer mornings, and the first guests who want to walk before the summer heat. It is one of our favourite times to host — quiet roads, cool air, and a mountain that feels newly awake.",
            "For hiking, the broad season on Velebit is generally May to October. Earlier in spring, shaded slopes and higher ground can still be icy or blocked; by late spring the marked paths around Bačić Duliba and Dabarski Kukovi open more reliably. We always tell guests to check conditions before a summit day — spring weather here can turn quickly, with wind, fog and cold even when Karlobag already feels mild. Layers matter more than a big backpack.",
            "This is also when the valley shows its softer side. Wild herbs and flowers return to the karst meadows; the forest smells wet and clean after rain. You do not need a long itinerary. A morning walk below the kukovi, coffee on the terrace, and an afternoon drive to the coast if the sea day looks good is enough. The Adriatic is still cooler than in July, but a short swim or a walk on the Karlobag promenade already belongs to the same stay.",
            "If you come in spring, come for patience rather than a checklist. Some days are made for Bačić Kuk; others for reading by the window while cloud moves across the ridge. That slower rhythm is why we built Stars Peak — and spring is when the mountain teaches it first.",
          ],
        },
        {
          slug: "summer",
          title: "Summer",
          teaser:
            "Cool ridge mornings, Adriatic afternoons, and long evenings under a dark Velebit sky.",
          categoryId: "seasons",
          status: "published",
          seoDescription:
            "Summer at Stars Peak on Velebit — mountain mornings, Karlobag swims, outdoor kitchen evenings and stargazing above Bačić Duliba.",
          paragraphs: [
            "Summer is when the Stars Peak idea becomes obvious in a single day. Coffee with a view of Bačić Kuk, a hike while the air is still cool, then half an hour downhill to Karlobag for a swim before lunch. By evening you are back on the terrace — grill in the outdoor kitchen, pine scent, and a sky dark enough for stars. Summit, swim, stargaze is not a slogan here; it is a timetable that works.",
            "On Velebit, summer usually brings the most stable stretch for longer walks, which is why mountain guides often prefer May to October and call summer the surest window. Even then the mountain keeps its rules. Bare coastal approaches can be punishing in midday heat, and sudden wind or rain is still possible — so we start early, carry water, and keep a layer for the ridge. Around the house the upper floor can warm in the hottest hours; a fan and a slower afternoon indoors are part of an honest summer stay.",
            "Life moves outdoors. Meals on the terrace, hammocks under the trees, firewood ready for cooler nights. Guests shop in Karlobag, swim at Tatinja or Cesarica, and come home salty and quiet. On clear August nights the Perseids and the Milky Way are reasons enough to stay up late. There is almost no light pollution above Bačić Duliba — only the silhouette of the kukovi against the dark.",
            "Book summer if you want the full mountain-and-sea rhythm. Come ready for heat on the coast and cool nights on the ridge. Leave room in the day for doing less than you planned. The best summer hours at Stars Peak are often the ones between plans — when the grill is warm and Bačić Kuk turns gold.",
          ],
        },
        {
          slug: "autumn",
          title: "Autumn",
          teaser:
            "Clear air, coloured forest, empty trails — and evenings that belong to the fireplace.",
          categoryId: "seasons",
          status: "published",
          seoDescription:
            "Autumn at Stars Peak on Velebit — clear views, quieter trails, fireplace evenings and mountain-to-sea days before winter.",
          paragraphs: [
            "Autumn may be the season that suits Stars Peak best. The crowds thin, the light sharpens, and Velebit shows its colours — beech and mixed forest turning while the limestone of Dabarski Kukovi stays pale against blue sky. Mornings are crisp; afternoons can still hold enough warmth for a walk without summer haste. From the terrace, Bačić Kuk looks closer somehow, as if the air itself had been cleaned.",
            "Hiking remains strong into early autumn within the usual May–October window, though days grow shorter and higher ground can see early snow or ice as the season advances. We favour clear September and October days for ridge views toward the Adriatic and Pag — visibility is often excellent. Start earlier than in June; finish earlier too. A flask of tea and a careful eye on the forecast matter more than speed.",
            "Evenings return to the house. The fireplace becomes the centre of the stay — local wood, soft light from the gallery, and time to talk about the next trail or simply listen to the wind. The outdoor kitchen still works on milder days; when the bura rises, indoors feels like the right place. Karlobag is quieter than in August. A short sea trip is still possible, but many guests are happy to stay on the mountain and let the season slow them down.",
            "Come in autumn if you want space. Fewer cars on the gravel road, fewer footprints on the paths, more sky. Stars Peak was built for that quieter measure of time — and autumn delivers it without asking you to rush.",
          ],
        },
        {
          slug: "winter",
          title: "Winter",
          teaser:
            "Snow on the peaks, deep quiet in the valley, and the house at its warmest.",
          categoryId: "seasons",
          status: "published",
          seoDescription:
            "Winter at Stars Peak on Velebit — snow and silence in Bačić Duliba, fireplace stays, and why high ridge hiking waits for better conditions.",
          paragraphs: [
            "Winter changes the sound of Bačić Duliba. Snow can lie on Bačić Kuk and the higher kukovi while the valley holds a deep quiet — fewer engines, longer nights, stars that feel closer above white ground. Inside Stars Peak the fireplace earns its place. This is when the house feels most like what we hoped it would be: wood, warmth, and a mountain just beyond the glass.",
            "We are honest about winter walking. The Velebit Hiking Trail and high ridge routes are not recommended in winter months for ordinary guests — deep snow, fog, ice, low temperatures and harsh wind are common on the mountain. Higher park roads and trails further north often close or stay difficult under snow. Around the house, short walks in settled weather can still be beautiful, but summit days with cables and exposure wait for spring. If you are not an experienced winter mountaineer, treat this season as a stay, not a peak-bagging trip.",
            "Access still matters. The gravel road to Bačić Duliba is maintained for passenger cars, yet snow and ice ask for caution, good tyres and daylight driving. We share conditions when guests book, and we keep the practical side of the house clear — generator for oven and hot water when needed, quiet evenings, and no pressure to fill the day with kilometres. Netflix by the fire, a book, a slow breakfast with the ridge in cloud — that is a good winter day here.",
            "Come in winter for stillness. Come if you want Velebit without the summer timetable of swim-and-summit. The Adriatic is close when the road allows, but the real gift is the silence after dark and the glow of the fire while snow holds the peaks. That is Stars Peak in its quietest season — and for some guests, its truest one.",
          ],
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
