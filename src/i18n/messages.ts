import type { Locale } from "./config";

export type Messages = {
  meta: { siteName: string; siteDescription: string };
  header: { bookCta: string };
  nav: { home: string; things: string; about: string; gallery: string; contact: string };
  langSwitcher: { aria: string };
  footer: {
    tagline: string;
    rights: string;
    exploreTitle: string;
    contactTitle: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroLead: string;
    /** Large script-style headline on fullscreen hero */
    heroScriptTitle: string;
    /** Italic serif line under headline */
    heroCenterLine: string;
    /** Pill CTA under hero text (e.g. price teaser) */
    heroCtaPill: string;
    /** Alt text for each fullscreen slide (same order as seeds in page) */
    heroSlideAlts: string[];
    /** Sans line under script (e.g. newsletter teaser) */
    heroSubscribeLine: string;
    heroEmailPlaceholder: string;
    heroSubscribeButton: string;
    heroSubscribeNote: string;
    heroSubscribeThanks: string;
    thingsTitle: string;
    thingsHeadBefore: string;
    thingsHeadAccent: string;
    thingsHeadAfter: string;
    /** Checkerboard “days” grid (3×2) below Things intro */
    itineraryTitle: string;
    itineraryImageAlts: string[];
    itineraryDays: { label: string; headline: string; body: string }[];
    /** Full-viewport film strip (#film) */
    filmTitle: string;
    filmHint: string;
    filmUnmute: string;
    statsLine: string;
    heroImageAlt: string;
    ctaPrimary: string;
    ctaSecondary: string;
    amenities: { label: string }[];
    amenitiesLabel: string;
    welcomeTitle: string;
    welcomeBody: string;
    featuresSectionLabel: string;
    features: { title: string; body: string }[];
    quote: string;
  };
  about: {
    title: string;
    lead: string;
    p1: string;
    p2: string;
    highlights: string[];
    highlightsTitle: string;
    asideTitle: string;
    asideBody: string;
  };
  gallery: {
    title: string;
    intro: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
    lightboxAria: string;
    lightboxOpenThumb: string;
    images: { alt: string; caption: string }[];
  };
  contact: {
    title: string;
    intro: string;
    nameLabel: string;
    contactName: string;
    addressLabel: string;
    addressMock: string;
    phoneLabel: string;
    phoneMock: string;
    emailLabel: string;
    emailMock: string;
    detailsHeading: string;
    mapHeading: string;
    mapIframeTitle: string;
    mapOpenGoogle: string;
  };
  a11y: { scrollToTop: string };
};

const en: Messages = {
  meta: {
    siteName: "Stars Peak Holiday Home",
    siteDescription:
      "A quiet mountain retreat — mock brochure site. Replace text and images anytime.",
  },
  header: {
    bookCta: "Check availability",
  },
  nav: {
    home: "Home",
    things: "Things to do",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
  },
  langSwitcher: { aria: "Language" },
  footer: {
    tagline: "Mock vacation rental site — swap copy & photos when ready.",
    rights: "© Stars Peak — placeholder",
    exploreTitle: "Explore",
    contactTitle: "Contact us",
  },
  home: {
    heroBadge: "Velebit · Croatia (mock)",
    heroTitle: "Your hideaway above the treeline",
    heroLead:
      "Wake up to pine-scented air and wide skies. This mock homepage describes a fictional cabin so you can preview layout, typography, and navigation before adding your real story.",
    heroScriptTitle: "Stars Peak",
    heroCenterLine:
      "You will always have quiet trails to walk and a warm house to return to — your base in the Velebit hills.",
    heroSubscribeLine: "Get the special offers directly in your email.",
    heroEmailPlaceholder: "Enter email address",
    heroSubscribeButton: "Subscribe",
    heroSubscribeNote: "Demo only — wire this field to your newsletter or CRM.",
    heroSubscribeThanks: "Thanks — demo only. Connect to your newsletter tool.",
    thingsTitle: "Things to do",
    thingsHeadBefore: "DISCOVER WHAT",
    thingsHeadAccent: "Velebit dawn",
    thingsHeadAfter: "LOOKS LIKE",
    itineraryTitle: "Your long weekend — mock itinerary",
    itineraryImageAlts: [
      "Garden path near the house — placeholder",
      "Sunset over the valley — placeholder",
      "Local table setting — placeholder",
    ],
    itineraryDays: [
      {
        label: "Day 1",
        headline: "TRAIL TO THE RIDGE AT DAWN",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mock copy — replace with your real route and timing.",
      },
      {
        label: "Day 2",
        headline: "COFFEE ON THE DECK, THEN HIKE",
        body: "Sed do eiusmod tempor incididunt ut labore. Placeholder text for day two highlights and rest stops.",
      },
      {
        label: "Day 3",
        headline: "FIREPLACE AND QUIET EVENING",
        body: "Ut enim ad minim veniam quis nostrud. Swap for checkout day, markets, or one last viewpoint.",
      },
    ],
    filmTitle: "A moment on the trail",
    filmHint:
      "The clip starts when this block is on screen. Many browsers mute autoplay until you interact — tap Enable sound if you do not hear audio.",
    filmUnmute: "Enable sound",
    heroCtaPill: "From €129 / night · mock rate",
    heroSlideAlts: [
      "Holiday home — photo 1",
      "Holiday home — photo 2",
      "Holiday home — photo 3",
      "Holiday home — photo 4",
    ],
    statsLine: "Entire home · Sleeps 6 · 3 bedrooms · 2 bathrooms",
    heroImageAlt: "Placeholder exterior photo of the holiday home",
    ctaPrimary: "View gallery",
    ctaSecondary: "Get in touch",
    amenitiesLabel: "At a glance",
    amenities: [
      { label: "Up to 6 guests" },
      { label: "Full kitchen" },
      { label: "Free parking" },
      { label: "Wi‑Fi" },
    ],
    welcomeTitle: "Why book direct",
    welcomeBody:
      "Independent holiday homes like this one often offer better flexibility and clearer house rules when you message the owner directly. Replace this block with your own story, seasonal offers, or a link to your live calendar when you connect a booking tool.",
    featuresSectionLabel: "What to expect",
    features: [
      {
        title: "Sleeps 6 (mock)",
        body: "Three bedrooms, two bathrooms — placeholder numbers until you confirm capacity.",
      },
      {
        title: "Outdoor deck",
        body: "Morning coffee spot with pretend mountain views. Photo coming soon.",
      },
      {
        title: "Slow evenings",
        body: "Fireplace, board games, and zero itinerary. Marketing fluff you can rewrite.",
      },
    ],
    quote:
      "“We loved the silence.” — Guest review placeholder. Replace with a real testimonial.",
  },
  about: {
    title: "About this place",
    lead: "Stars Peak is a sample name for your holiday house. The text below is lorem-style vacation copy.",
    p1:
      "Built from local stone (fictional), the house was imagined as a weekend escape for families who hike by day and cook together at night. Swap this paragraph with your history: when you bought the land, what you renovated, and what makes your home special.",
    p2:
      "We are ten minutes from a trailhead (mock distance), twenty from the nearest bakery (also mock), and a world away from inbox stress. Update distances, road type, and parking notes for real guests.",
    highlights: [
      "Self check-in with lockbox (example — change if inaccurate)",
      "Parking for two cars on gravel (mock)",
      "Pet-friendly on request — set your real policy",
      "Starlink / Wi-Fi — mention only if true",
    ],
    highlightsTitle: "Highlights",
    asideTitle: "House rules (sample)",
    asideBody:
      "Quiet hours after 10 p.m., no parties, leave shoes in the mudroom. Replace with your actual rules and local regulations.",
  },
  gallery: {
    title: "Gallery",
    intro:
      "Eight square tiles in a seamless grid — click any photo for a larger carousel. Use arrow keys or the side buttons to browse.",
    lightboxClose: "Close gallery",
    lightboxPrev: "Previous image",
    lightboxNext: "Next image",
    lightboxAria: "Enlarged photo gallery",
    lightboxOpenThumb: "Open larger view",
    images: [
      { alt: "Placeholder ridge and forest from above", caption: "Ridge trail — replace" },
      { alt: "Placeholder mist over the valley", caption: "Morning valley — replace" },
      { alt: "Placeholder stone wall and path", caption: "Approach path — replace" },
      { alt: "Placeholder interior window seat", caption: "Window nook — replace" },
      { alt: "Placeholder wood stove corner", caption: "Evening warmth — replace" },
      { alt: "Placeholder deck with mountain view", caption: "Deck view — replace" },
      { alt: "Placeholder wildflowers meadow", caption: "Meadow nearby — replace" },
      { alt: "Placeholder starry sky over peaks", caption: "Night sky — replace" },
    ],
  },
  contact: {
    title: "Contact",
    intro: "Reach us by phone or email, or visit us at the address below.",
    nameLabel: "Name",
    contactName: "Velebit Stars Peak",
    addressLabel: "Address",
    addressMock: "Došen Dabar 1, Croatia",
    phoneLabel: "Phone",
    phoneMock: "+385 99 000 0000",
    emailLabel: "Email",
    emailMock: "info@velebit-starspeak.com",
    detailsHeading: "Details",
    mapHeading: "Map",
    mapIframeTitle: "Google Map — Došen Dabar 1, Croatia",
    mapOpenGoogle: "Open in Google Maps",
  },
  a11y: { scrollToTop: "Back to top" },
};

const hr: Messages = {
  meta: {
    siteName: "Kuća za odmor Stars Peak",
    siteDescription:
      "Tihi planinski boravak — probna stranica. Kasnije zamijenite tekst i slike.",
  },
  header: {
    bookCta: "Provjeri dostupnost",
  },
  nav: {
    home: "Početna",
    things: "Što raditi",
    about: "O nama",
    gallery: "Galerija",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Jezik" },
  footer: {
    tagline: "Probna stranica za najam — zamijenite tekst i fotografije.",
    rights: "© Stars Peak — placeholder",
    exploreTitle: "Poveznice",
    contactTitle: "Kontakt",
  },
  home: {
    heroBadge: "Velebit · Hrvatska (mock)",
    heroTitle: "Skriveno mjesto iznad krošnji",
    heroLead:
      "Probudite se uz miris bora i široko nebo. Ovaj mock opisuje izmišljenu kolibu kako biste vidjeli raspored i tipografiju prije pravog sadržaja.",
    heroScriptTitle: "Stars Peak",
    heroCenterLine:
      "Uvijek imate tihe staze za šetnju i topli dom za povratak — vaša baza u velebitskim bregima.",
    heroCtaPill: "Od 129 € / noć · mock cijena",
    heroSlideAlts: [
      "Kuća za odmor — fotografija 1",
      "Kuća za odmor — fotografija 2",
      "Kuća za odmor — fotografija 3",
      "Kuća za odmor — fotografija 4",
    ],
    heroSubscribeLine: "Posebne ponude stižu izravno na vašu e-poštu.",
    heroEmailPlaceholder: "Unesite e-adresu",
    heroSubscribeButton: "Pretplati se",
    heroSubscribeNote: "Samo demo — kasnije povežite s newsletter servisom.",
    heroSubscribeThanks: "Hvala — samo demo. Povežite s alatom za newsletter.",
    thingsTitle: "Što raditi",
    thingsHeadBefore: "OTKRIJTE KAKO",
    thingsHeadAccent: "zora na velebitu",
    thingsHeadAfter: "IZGLEDA",
    itineraryTitle: "Predloženi vikend — probni raspored",
    itineraryImageAlts: [
      "Staza uz kuću — probna slika",
      "Zalazak iznad doline — probna slika",
      "Stol s lokalnim jelima — probna slika",
    ],
    itineraryDays: [
      {
        label: "1. dan",
        headline: "STAZA NA GREBEN U ZORU",
        body: "Lorem ipsum — zamijenite stvarnim opisom prve etape, udaljenostima i vremenom polaska.",
      },
      {
        label: "2. dan",
        headline: "KAVA NA TERASI, PA PLANINARENJE",
        body: "Mock tekst za drugi dan: odmor, ručak, druga staza — prilagodite svom području.",
      },
      {
        label: "3. dan",
        headline: "KAMIN I TIHA VEČER",
        body: "Zadnji dan: odjava, suvenir ili još jedan kratki izlet — probni sadržaj za zamjenu.",
      },
    ],
    filmTitle: "Trenutak na stazi",
    filmHint:
      "Video kreće kad je ovaj blok u kadru. Preglednici često utišaju automatsku reprodukciju dok ne dodirnete zaslon — dodirnite Uključi zvuk ako ne čujete ton.",
    filmUnmute: "Uključi zvuk",
    statsLine: "Cijela kuća · Do 6 osoba · 3 spavaće sobe · 2 kupaonice",
    heroImageAlt: "Probna vanjska fotografija kuće za odmor",
    ctaPrimary: "Galerija",
    ctaSecondary: "Kontakt",
    amenitiesLabel: "Ukratko",
    amenities: [
      { label: "Do 6 gostiju" },
      { label: "Puna kuhinja" },
      { label: "Besplatan parking" },
      { label: "Wi‑Fi" },
    ],
    welcomeTitle: "Zašto izravno kod vlasnika",
    welcomeBody:
      "Često dobijete jasnija pravila i fleksibilnije dogovore kad pišete vlasniku izravno. Ovaj tekst zamijenite svojom pričom, sezonskim ponudama ili poveznicom na kalendar kad ga povežete.",
    featuresSectionLabel: "Što vas čeka",
    features: [
      {
        title: "Do 6 osoba (mock)",
        body: "Tri spavaće sobe, dvije kupaonice — brojke su primjer dok ne potvrdite kapacitet.",
      },
      {
        title: "Terasa na otvorenom",
        body: "Jutarnja kava s izmišljenim pogledom. Fotografija dolazi kasnije.",
      },
      {
        title: "Spora večer",
        body: "Kamin, društvene igre, bez rasporeda — marketing tekst za zamjenu.",
      },
    ],
    quote:
      "„Voljeli smo tišinu.“ — primjer recenzije. Zamijenite pravim iskustvom gosta.",
  },
  about: {
    title: "O ovom mjestu",
    lead: "Stars Peak je primjer naziva za vašu kuću. Tekst ispod je probni opis za odmor.",
    p1:
      "Od lokalnog kamena (izmišljeno), kuća je zamišljena kao vikend bijeg za obitelji koje danju planinare, a navečer kuhaju zajedno. Ovdje opišite pravu povijest: kada ste kupili zemlju, što ste renovirali.",
    p2:
      "Deset minuta do staze (mock udaljenost), dvadeset do najbliže pekare (također mock), i daleko od stresa pretinca. Ažurirajte udaljenosti, cestu i parking za stvarne goste.",
    highlights: [
      "Samostalni check-in s lockboxom (primjer — prilagodite)",
      "Parking za dva auta na šljunčanom (mock)",
      "Kućni ljubimci na upit — postavite pravilo",
      "Starlink / Wi-Fi — navedite samo ako vrijedi",
    ],
    highlightsTitle: "Sažeto",
    asideTitle: "Kućni red (primjer)",
    asideBody:
      "Tišina nakon 22 h, bez žurki, obuća u predsoblju. Zamijenite stvarnim pravilima i lokalnim propisima.",
  },
  gallery: {
    title: "Galerija",
    intro:
      "Osam kvadrata u mozaiku bez razmaka — dodirnite bilo koju sliku za veći pregled i carousel. Strelicama na tipkovnici ili gumbima listate dalje.",
    lightboxClose: "Zatvori galeriju",
    lightboxPrev: "Prethodna slika",
    lightboxNext: "Sljedeća slika",
    lightboxAria: "Povećani prikaz galerije",
    lightboxOpenThumb: "Otvori veći prikaz",
    images: [
      { alt: "Probni pogled na greben i šumu odozgo", caption: "Staza na grebenu — zamijeniti" },
      { alt: "Probna magla iznad doline u zoru", caption: "Jutarnja dolina — zamijeniti" },
      { alt: "Probni kameni zid i staza", caption: "Staza do ulaza — zamijeniti" },
      { alt: "Probni kutak uz prozor", caption: "Kut uz prozor — zamijeniti" },
      { alt: "Probni kutak s peć na drva", caption: "Večer uz kamin — zamijeniti" },
      { alt: "Probna terasa s planinskim pogledom", caption: "Pogled s terase — zamijeniti" },
      { alt: "Probna livada s cvijećem", caption: "Livada u blizini — zamijeniti" },
      { alt: "Probno zvjezdano nebo iznad vrhova", caption: "Noćno nebo — zamijeniti" },
    ],
  },
  contact: {
    title: "Kontakt",
    intro: "Javite se telefonom ili e-poštom ili nas posjetite na adresi.",
    nameLabel: "Naziv",
    contactName: "Velebit Stars Peak",
    addressLabel: "Adresa",
    addressMock: "Došen Dabar 1, Hrvatska",
    phoneLabel: "Telefon",
    phoneMock: "+385 99 000 0000",
    emailLabel: "E-pošta",
    emailMock: "info@velebit-starspeak.com",
    detailsHeading: "Podaci",
    mapHeading: "Karta",
    mapIframeTitle: "Google karta — Došen Dabar 1, Hrvatska",
    mapOpenGoogle: "Otvori u Google Kartama",
  },
  a11y: { scrollToTop: "Natrag na vrh" },
};

const de: Messages = {
  meta: {
    siteName: "Ferienhaus Stars Peak",
    siteDescription:
      "Ruhiger Bergurlaub — Demoseite. Texte und Bilder später austauschen.",
  },
  header: {
    bookCta: "Verfügbarkeit prüfen",
  },
  nav: {
    home: "Start",
    things: "Aktivitäten",
    about: "Über uns",
    gallery: "Galerie",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Sprache" },
  footer: {
    tagline: "Demo-Ferienhaus-Website — Inhalte und Fotos ersetzen.",
    rights: "© Stars Peak — Platzhalter",
    exploreTitle: "Navigation",
    contactTitle: "Kontakt",
  },
  home: {
    heroBadge: "Velebit · Kroatien (Mock)",
    heroTitle: "Ihr Rückzugsort über den Baumwipfeln",
    heroLead:
      "Wachen Sie auf mit Kiefernduft und weitem Himmel. Diese Demo-Startseite beschreibt eine fiktive Hütte, damit Sie Layout und Navigation testen können.",
    heroScriptTitle: "Stars Peak",
    heroCenterLine:
      "Immer ruhige Wege zum Wandern und ein warmes Haus zum Zurückkehren — Ihre Basis in den Velebit-Hügeln.",
    heroCtaPill: "Ab 129 € / Nacht · Platzhalterpreis",
    heroSlideAlts: [
      "Ferienhaus — Foto 1",
      "Ferienhaus — Foto 2",
      "Ferienhaus — Foto 3",
      "Ferienhaus — Foto 4",
    ],
    heroSubscribeLine: "Spezialangebote direkt in Ihrer E-Mail.",
    heroEmailPlaceholder: "E-Mail-Adresse eingeben",
    heroSubscribeButton: "Abonnieren",
    heroSubscribeNote: "Nur Demo — später mit Newsletter-Tool verbinden.",
    heroSubscribeThanks: "Danke — nur Demo. Mit Newsletter-Tool verbinden.",
    thingsTitle: "Aktivitäten",
    thingsHeadBefore: "ENTDECKEN SIE",
    thingsHeadAccent: "Velebit-Morgen",
    thingsHeadAfter: "AUSSIEHT",
    itineraryTitle: "Langes Wochenende — Beispielplan",
    itineraryImageAlts: [
      "Weg im Garten — Platzhalter",
      "Sonnenuntergang über dem Tal — Platzhalter",
      "Gedeckter Tisch — Platzhalter",
    ],
    itineraryDays: [
      {
        label: "Tag 1",
        headline: "PFAD ZUM KAMM BEI SONNENAUFGANG",
        body: "Lorem ipsum — ersetzen Sie durch echte Route, Dauer und Startzeit.",
      },
      {
        label: "Tag 2",
        headline: "KAFFEE AUF DER TERRASSE, DANN WANDERN",
        body: "Platzhalter für Tag zwei: Pausen, Einkehr, zweite Etappe — anpassen.",
      },
      {
        label: "Tag 3",
        headline: "KAMIN UND RUHIGER ABEND",
        body: "Abreisetag: Markt, Souvenir oder letzter Ausblick — Mock-Text zum Ersetzen.",
      },
    ],
    filmTitle: "Ein Moment auf dem Weg",
    filmHint:
      "Das Video startet, wenn dieser Block sichtbar ist. Viele Browser stellen Autoplay stumm, bis Sie tippen — auf Ton aktivieren tippen, falls Sie nichts hören.",
    filmUnmute: "Ton aktivieren",
    statsLine: "Gesamtes Haus · 6 Gäste · 3 Schlafzimmer · 2 Bäder",
    heroImageAlt: "Platzhalter-Außenfoto des Ferienhauses",
    ctaPrimary: "Zur Galerie",
    ctaSecondary: "Kontakt",
    amenitiesLabel: "Kurzinfo",
    amenities: [
      { label: "Bis zu 6 Gäste" },
      { label: "Voll ausgestattete Küche" },
      { label: "Gratis Parkplatz" },
      { label: "WLAN" },
    ],
    welcomeTitle: "Direkt beim Gastgeber buchen",
    welcomeBody:
      "Oft erhalten Sie persönliche Antworten und klarere Hausregeln, wenn Sie direkt beim Eigentümer anfragen. Ersetzen Sie diesen Text durch Ihre Geschichte, Saisonangebote oder einen Kalender-Link.",
    featuresSectionLabel: "Das erwartet Sie",
    features: [
      {
        title: "6 Personen (Mock)",
        body: "Drei Schlafzimmer, zwei Bäder — Platzhalter bis Sie die Kapazität festlegen.",
      },
      {
        title: "Außenterrasse",
        body: "Kaffee am Morgen mit erfundener Aussicht. Foto folgt.",
      },
      {
        title: "Ruhige Abende",
        body: "Kamin, Gesellschaftsspiele, kein Plan — Marketingtext zum Überarbeiten.",
      },
    ],
    quote:
      "„Wir liebten die Stille.“ — Beispielbewertung. Durch echtes Feedback ersetzen.",
  },
  about: {
    title: "Über dieses Haus",
    lead: "Stars Peak ist ein Beispielname. Der folgende Text ist Platzhalter für Ihr Ferienhaus.",
    p1:
      "Aus regionalem Stein (fiktiv) — gedacht als Wochenendrefugium für Familien, die tags wandern und abends gemeinsam kochen. Ersetzen Sie dies mit Ihrer Geschichte.",
    p2:
      "Zehn Minuten zum Wanderparkplatz (Mock), zwanzig zur Bäckerei (Mock), und weit weg vom Posteingang. Entfernungen und Zufahrt real beschreiben.",
    highlights: [
      "Self-Check-in mit Schlüsselbox (Beispiel)",
      "Parkplatz für zwei Autos auf Schotter (Mock)",
      "Haustiere auf Anfrage — Ihre Regel",
      "Starlink / WLAN — nur wenn vorhanden",
    ],
    highlightsTitle: "Auf einen Blick",
    asideTitle: "Hausregeln (Beispiel)",
    asideBody:
      "Ruhe ab 22 Uhr, keine Partys, Schuhe im Hausflur. Durch Ihre echten Regeln ersetzen.",
  },
  gallery: {
    title: "Galerie",
    intro:
      "Acht quadratische Kacheln ohne Zwischenraum — Foto antippen für Vollbild-Carousel. Pfeiltasten oder Seitenknöpfe zum Blättern.",
    lightboxClose: "Galerie schließen",
    lightboxPrev: "Vorheriges Bild",
    lightboxNext: "Nächstes Bild",
    lightboxAria: "Vergrößerte Galerie",
    lightboxOpenThumb: "Größere Ansicht öffnen",
    images: [
      { alt: "Platzhalter Grat und Wald von oben", caption: "Gratweg — ersetzen" },
      { alt: "Platzhalter Morgennebel im Tal", caption: "Morgental — ersetzen" },
      { alt: "Platzhalter Steinmauer und Pfad", caption: "Zugangspfad — ersetzen" },
      { alt: "Platzhalter Fensterecke innen", caption: "Leseecke — ersetzen" },
      { alt: "Platzhalter Ofenecke", caption: "Abend am Ofen — ersetzen" },
      { alt: "Platzhalter Terrasse mit Aussicht", caption: "Terrassenblick — ersetzen" },
      { alt: "Platzhalter Blumenwiese", caption: "Wiese in der Nähe — ersetzen" },
      { alt: "Platzhalter Sternenhimmel über Gipfeln", caption: "Nachthimmel — ersetzen" },
    ],
  },
  contact: {
    title: "Kontakt",
    intro: "Erreichen Sie uns telefonisch oder per E-Mail, oder besuchen Sie uns vor Ort.",
    nameLabel: "Name",
    contactName: "Velebit Stars Peak",
    addressLabel: "Adresse",
    addressMock: "Došen Dabar 1, Kroatien",
    phoneLabel: "Telefon",
    phoneMock: "+385 99 000 0000",
    emailLabel: "E-Mail",
    emailMock: "info@velebit-starspeak.com",
    detailsHeading: "Kontaktdaten",
    mapHeading: "Karte",
    mapIframeTitle: "Google Karte — Došen Dabar 1, Kroatien",
    mapOpenGoogle: "In Google Maps öffnen",
  },
  a11y: { scrollToTop: "Nach oben" },
};

export const messages: Record<Locale, Messages> = { en, hr, de };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
