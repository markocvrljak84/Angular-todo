import type { Locale } from "./config";

export type ExperienceDayStep = {
  time: string;
  title: string;
  body: string;
};

export type ExperienceGuidesArticle = {
  title: string;
  teaser: string;
  /** Internal anchor or path — blog posts coming later */
  href: string;
};

export type ExperienceContent = {
  day: {
    title: string;
    intro: string;
    steps: ExperienceDayStep[];
  };
  taste: {
    badge: string;
    title: string;
    intro: string;
    items: string[];
    footnote: string;
  };
  guides: {
    title: string;
    intro: string;
    comingSoonLabel: string;
    viewAllLabel: string;
    articles: ExperienceGuidesArticle[];
  };
  signup: {
    title: string;
    intro: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    submitErrorMessage: string;
    privacyNote: string;
    brochureLanguageNote: string;
    thankYouTitle: string;
    successMessage: string;
    downloadLabel: string;
    backToGuidesLabel: string;
    backToHomeLabel: string;
  };
};

const en: ExperienceContent = {
  day: {
    title: "One day at Stars Peak",
    intro:
      "Mountain summit, Adriatic swim and starry sky — in one place, in one day. This is what life at Bačić Duliba feels like.",
    steps: [
      {
        time: "07:00",
        title: "Coffee with a view of Bačić Kuk",
        body: "Steam rises from the cup while the morning light hits the rock face above the valley.",
      },
      {
        time: "09:00",
        title: "Hike to Bačić Kuk",
        body: "The trail starts minutes from the door — a classic Velebit ascent with wide views.",
      },
      {
        time: "14:00",
        title: "Swim in Karlobag",
        body: "Half an hour downhill and you are on the Adriatic — crystal water before lunch.",
      },
      {
        time: "19:00",
        title: "Dinner by the fire",
        body: "Grill on the terrace, pine-scented air and silence broken only by the crackle of wood.",
      },
      {
        time: "22:00",
        title: "Milky Way above Velebit",
        body: "No light pollution — just stars, hammocks and the ridge silhouetted against the night sky.",
      },
    ],
  },
  taste: {
    badge: "Coming soon",
    title: "Taste of Velebit",
    intro:
      "We are building something more than a place to sleep — a small window into Velebit’s nature and traditions.",
    items: [
      "Mountain herbal teas",
      "Local honey",
      "Medicinal plants of Velebit",
      "Guided herb walks",
      "Workshops & tastings",
    ],
    footnote:
      "Agrotourism is on the way. Until then, ask us about wild herbs, local producers and seasonal flavours.",
  },
  guides: {
    title: "Guides & stories",
    intro:
      "Practical know-how from the mountain — written for hikers, slow travellers and anyone planning time on Velebit.",
    comingSoonLabel: "Coming soon",
    viewAllLabel: "All stories",
    articles: [
      {
        title: "How to reach Bačić Kuk from Stars Peak",
        teaser: "Trailhead, timing and what to expect on the ascent.",
        href: "/experiences#exp-hiking",
      },
      {
        title: "Best trails around Baške Oštarije",
        teaser: "Day hikes and ridge walks within easy reach of the house.",
        href: "/experiences#exp-hiking",
      },
      {
        title: "What to do on Velebit when it rains",
        teaser: "Fireside days, short walks and coastal escapes.",
        href: "/experiences#exp-sea",
      },
      {
        title: "Mountain and sea in one day",
        teaser: "From Bačić Duliba to Karlobag, Pag and Zavratnica.",
        href: "/experiences#exp-sea",
      },
      {
        title: "Stargazing guide on Velebit",
        teaser: "Dark skies, best seasons and simple tips for night skies.",
        href: "#experience-day",
      },
    ],
  },
  signup: {
    title: "5 unforgettable experiences on Velebit",
    intro:
      "Leave your email and download our free Velebit brochure — routes, sea-and-mountain days and stargazing tips from Stars Peak.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    submitLabel: "Get the brochure",
    submittingLabel: "Sending…",
    submitErrorMessage: "Something went wrong — please try again or contact us directly.",
    privacyNote:
      "We only use your email for the brochure and occasional Stars Peak updates. Unsubscribe anytime.",
    brochureLanguageNote: "PDF brochure is in Croatian.",
    thankYouTitle: "You're in — enjoy the guide",
    successMessage:
      "Thanks for signing up. Your Velebit brochure is ready — download it below and start planning.",
    downloadLabel: "Download Velebit brochure (PDF)",
    backToGuidesLabel: "Back to guides",
    backToHomeLabel: "Home",
  },
};

const hr: ExperienceContent = {
  day: {
    title: "Jedan dan na Stars Peaku",
    intro:
      "Planinski vrh, kupanje u Jadranu i zvjezdano nebo — na jednom mjestu, u jednom danu. Tako izgleda život u Bačić Dulibi.",
    steps: [
      {
        time: "07:00",
        title: "Kava s pogledom na Bačić kuk",
        body: "Para iz šalice dok jutarnje svjetlo obasjava stijenu iznad doline.",
      },
      {
        time: "09:00",
        title: "Uspon na Bačić kuk",
        body: "Staza kreće minutama od kuće — klasičan velebitski uspon s širokim pogledom.",
      },
      {
        time: "14:00",
        title: "Kupanje u Karlobagu",
        body: "Pola sata nizbrdo i već ste u Jadranu — kristalno more prije ručka.",
      },
      {
        time: "19:00",
        title: "Večera uz vatru",
        body: "Roštilj na terasi, miris bora i tišina koju prekida samo pucketanje drva.",
      },
      {
        time: "22:00",
        title: "Promatranje Mliječne staze",
        body: "Bez svjetlosnog onečišćenja — samo zvijezde, hamaci i greben u noćnoj tišini.",
      },
    ],
  },
  taste: {
    badge: "Uskoro",
    title: "Okus Velebita",
    intro:
      "Gradimo više od mjesta za noćenje — mali prozor u prirodu i tradiciju Velebita.",
    items: [
      "Planinski čajevi",
      "Med s Velebita",
      "Ljekovito bilje",
      "Vođene šetnje biljem",
      "Radionice i degustacije",
    ],
    footnote:
      "Agroturizam je u pripremi. Do tada pitajte nas o divljem bilju, lokalnim proizvođačima i sezonskim okusima.",
  },
  guides: {
    title: "Vodiči i priče",
    intro:
      "Praktične informacije s planine — za planinare, sporije putnike i sve koji planiraju boravak na Velebitu.",
    comingSoonLabel: "Uskoro",
    viewAllLabel: "Sve priče",
    articles: [
      {
        title: "Kako doći do Bačić kuka sa Stars Peaka",
        teaser: "Polaziste, trajanje i što očekivati na usponu.",
        href: "/experiences#exp-hiking",
      },
      {
        title: "Najljepše staze oko Baških Oštarija",
        teaser: "Dnevne šetnje i grebeni u blizini kuće.",
        href: "/experiences#exp-hiking",
      },
      {
        title: "Što raditi na Velebitu kad pada kiša",
        teaser: "Dani uz kamin, kratke šetnje i izleti prema moru.",
        href: "/experiences#exp-sea",
      },
      {
        title: "Planina i more u jednom danu",
        teaser: "Od Bačić Dulibe do Karlobaga, Paga i Zavratnice.",
        href: "/experiences#exp-sea",
      },
      {
        title: "Vodič za promatranje zvijezda na Velebitu",
        teaser: "Tamno nebo, najbolje sezone i jednostavni savjeti.",
        href: "#experience-day",
      },
    ],
  },
  signup: {
    title: "5 nezaboravnih iskustava na Velebitu",
    intro:
      "Ostavite e-mail i preuzmite besplatnu Velebit brošuru — rute, dani na planini i moru te savjeti za promatranje zvijezda sa Stars Peaka.",
    emailLabel: "E-mail adresa",
    emailPlaceholder: "vi@primjer.hr",
    submitLabel: "Preuzmi brošuru",
    submittingLabel: "Šaljem…",
    submitErrorMessage: "Nešto nije u redu — pokušajte ponovno ili nas kontaktirajte izravno.",
    privacyNote:
      "E-mail koristimo samo za brošuru i povremene novosti o Stars Peaku. Odjava je uvijek moguća.",
    brochureLanguageNote: "PDF brošura na hrvatskom jeziku.",
    thankYouTitle: "Uspješna prijava — uživajte u vodiču",
    successMessage:
      "Hvala na prijavi. Vaša Velebit brošura spremna je za preuzimanje — kliknite gumb ispod i krenite u planiranje.",
    downloadLabel: "Preuzmi Velebit brošuru (PDF)",
    backToGuidesLabel: "Natrag na vodiče",
    backToHomeLabel: "Početna",
  },
};

const de: ExperienceContent = {
  day: {
    title: "Ein Tag auf Stars Peak",
    intro:
      "Gipfel, Adria und Sternenhimmel — an einem Ort, an einem Tag. So fühlt sich Leben in Bačić Duliba an.",
    steps: [
      {
        time: "07:00",
        title: "Kaffee mit Blick auf Bačić Kuk",
        body: "Dampf aus der Tasse, während das Morgenlicht die Felswand über dem Tal trifft.",
      },
      {
        time: "09:00",
        title: "Aufstieg zum Bačić Kuk",
        body: "Der Weg beginnt wenige Minuten von der Tür — ein klassischer Velebit-Aufstieg mit weitem Blick.",
      },
      {
        time: "14:00",
        title: "Baden in Karlobag",
        body: "Eine halbe Stunde bergab — und Sie sind an der Adria, im kristallklaren Wasser vor dem Mittagessen.",
      },
      {
        time: "19:00",
        title: "Abendessen am Feuer",
        body: "Grill auf der Terrasse, Duft nach Kiefer und Stille, unterbrochen nur vom Knistern des Holzes.",
      },
      {
        time: "22:00",
        title: "Milchstraße über dem Velebit",
        body: "Keine Lichtverschmutzung — nur Sterne, Hängematten und der Grat in der Nacht.",
      },
    ],
  },
  taste: {
    badge: "Demnächst",
    title: "Geschmack des Velebit",
    intro:
      "Wir bauen mehr als eine Unterkunft — ein kleines Fenster zur Natur und Tradition des Velebit.",
    items: [
      "Bergkräutertees",
      "Honig aus der Region",
      "Heilpflanzen des Velebit",
      "Geführte Kräuterwanderungen",
      "Workshops & Verkostungen",
    ],
    footnote:
      "Agrotourismus ist in Vorbereitung. Fragen Sie uns bis dahin nach Wildkräutern, lokalen Produzenten und saisonalen Aromen.",
  },
  guides: {
    title: "Guides & Geschichten",
    intro:
      "Praxiswissen vom Berg — für Wanderer, Slow Traveller und alle, die Zeit am Velebit planen.",
    comingSoonLabel: "Demnächst",
    viewAllLabel: "Alle Beiträge",
    articles: [
      {
        title: "So erreichen Sie Bačić Kuk von Stars Peak",
        teaser: "Startpunkt, Dauer und was Sie auf dem Aufstieg erwartet.",
        href: "/experiences#exp-hiking",
      },
      {
        title: "Die schönsten Wege um Baške Oštarije",
        teaser: "Tageswanderungen und Gratwege in der Nähe des Hauses.",
        href: "/experiences#exp-hiking",
      },
      {
        title: "Velebit bei Regen",
        teaser: "Tage am Kamin, kurze Spaziergänge und Ausflüge ans Meer.",
        href: "/experiences#exp-sea",
      },
      {
        title: "Berg und Meer an einem Tag",
        teaser: "Von Bačić Duliba nach Karlobag, Pag und Zavratnica.",
        href: "/experiences#exp-sea",
      },
      {
        title: "Sternenhimmel-Guide am Velebit",
        teaser: "Dunkler Himmel, beste Jahreszeiten und einfache Tipps.",
        href: "#experience-day",
      },
    ],
  },
  signup: {
    title: "5 unvergessliche Erlebnisse am Velebit",
    intro:
      "E-Mail hinterlassen und unsere kostenlose Velebit-Broschüre laden — Routen, Berg-und-Meer-Tage und Sternenhimmel-Tipps von Stars Peak.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "sie@beispiel.de",
    submitLabel: "Broschüre erhalten",
    submittingLabel: "Wird gesendet…",
    submitErrorMessage: "Etwas ist schiefgelaufen — bitte erneut versuchen oder uns direkt kontaktieren.",
    privacyNote:
      "Wir nutzen Ihre E-Mail nur für die Broschüre und gelegentliche Stars-Peak-Updates. Abmeldung jederzeit möglich.",
    brochureLanguageNote: "PDF-Broschüre auf Kroatisch.",
    thankYouTitle: "Geschafft — viel Spaß beim Planen",
    successMessage:
      "Danke für Ihre Anmeldung. Die Velebit-Broschüre steht bereit — laden Sie sie unten herunter.",
    downloadLabel: "Velebit-Broschüre herunterladen (PDF)",
    backToGuidesLabel: "Zurück zu Guides",
    backToHomeLabel: "Startseite",
  },
};

const fr: ExperienceContent = {
  day: {
    title: "Une journée à Stars Peak",
    intro:
      "Sommet, baignade en Adriatique et ciel étoilé — au même endroit, le même jour. C’est la vie à Bačić Duliba.",
    steps: [
      { time: "07:00", title: "Café face au Bačić Kuk", body: "La vapeur s’élève tandis que la lumière du matin touche la paroi rocheuse." },
      { time: "09:00", title: "Ascension du Bačić Kuk", body: "Le sentier part à quelques minutes — classique du Velebit avec vues ouvertes." },
      { time: "14:00", title: "Baignade à Karlobag", body: "Une demi-heure de descente et vous voici en Adriatique — eau claire avant le déjeuner." },
      { time: "19:00", title: "Dîner au feu", body: "Grill sur la terrasse, air de pin et silence rompu par le crépitement du bois." },
      { time: "22:00", title: "Voie lactée au-dessus du Velebit", body: "Pas de pollution lumineuse — étoiles, hamacs et crête dans la nuit." },
    ],
  },
  taste: {
    badge: "Bientôt",
    title: "Saveurs du Velebit",
    intro: "Nous construisons plus qu’un logement — une fenêtre sur la nature et les traditions du Velebit.",
    items: ["Thés de montagne", "Miel local", "Plantes médicinales", "Balades botaniques guidées", "Ateliers & dégustations"],
    footnote: "L’agrotourisme arrive bientôt. En attendant, demandez-nous plantes sauvages et producteurs locaux.",
  },
  guides: {
    title: "Guides & récits",
    intro: "Savoir pratique de la montagne — pour randonneurs et voyageurs lents.",
    comingSoonLabel: "Bientôt",
    viewAllLabel: "Tous les articles",
    articles: [
      { title: "Comment atteindre Bačić Kuk depuis Stars Peak", teaser: "Départ, durée et attentes sur l’ascension.", href: "/experiences#exp-hiking" },
      { title: "Plus beaux sentiers autour de Baške Oštarije", teaser: "Randonnées à la journée près de la maison.", href: "/experiences#exp-hiking" },
      { title: "Que faire sur le Velebit quand il pleut", teaser: "Journées au coin du feu et escapades côtières.", href: "/experiences#exp-sea" },
      { title: "Montagne et mer en une journée", teaser: "De Bačić Duliba à Karlobag, Pag et Zavratnica.", href: "/experiences#exp-sea" },
      { title: "Guide d’observation des étoiles", teaser: "Ciel noir, saisons idéales et conseils simples.", href: "#experience-day" },
    ],
  },
  signup: {
    title: "5 expériences inoubliables sur le Velebit",
    intro:
      "Laissez votre e-mail et téléchargez notre brochure Velebit gratuite — itinéraires, mer et montagne, astrologie depuis Stars Peak.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.fr",
    submitLabel: "Recevoir la brochure",
    submittingLabel: "Envoi…",
    submitErrorMessage: "Une erreur s'est produite — réessayez ou contactez-nous directement.",
    privacyNote:
      "Votre e-mail sert uniquement à la brochure et aux nouvelles occasionnelles de Stars Peak.",
    brochureLanguageNote: "Brochure PDF en croate.",
    thankYouTitle: "Inscription confirmée",
    successMessage:
      "Merci pour votre inscription. La brochure Velebit est prête — téléchargez-la ci-dessous.",
    downloadLabel: "Télécharger la brochure Velebit (PDF)",
    backToGuidesLabel: "Retour aux guides",
    backToHomeLabel: "Accueil",
  },
};

const it: ExperienceContent = {
  day: {
    title: "Un giorno a Stars Peak",
    intro:
      "Cima, bagno in Adriatico e cielo stellato — nello stesso posto, nello stesso giorno. Così è la vita a Bačić Duliba.",
    steps: [
      { time: "07:00", title: "Caffè con vista su Bačić Kuk", body: "Il vapore sale mentre la luce del mattino colpisce la parete rocciosa." },
      { time: "09:00", title: "Salita al Bačić Kuk", body: "Il sentiero parte a pochi minuti — classico del Velebit con viste ampie." },
      { time: "14:00", title: "Bagno a Karlobag", body: "Mezz’ora in discesa e siete in Adriatico — acqua cristallina prima di pranzo." },
      { time: "19:00", title: "Cena al fuoco", body: "Griglia in terrazza, profumo di pino e silenzio rotto dal crepitio del legno." },
      { time: "22:00", title: "Via Lattea sul Velebit", body: "Nessuna inquinamento luminoso — stelle, amache e cresta nella notte." },
    ],
  },
  taste: {
    badge: "In arrivo",
    title: "Sapori del Velebit",
    intro: "Stiamo costruendo più di un alloggio — una finestra sulla natura e le tradizioni del Velebit.",
    items: ["Tè di montagna", "Miele locale", "Erbe medicinali", "Passeggiate botaniche", "Workshop e degustazioni"],
    footnote: "L’agriturismo è in preparazione. Nel frattempo chiedeteci erbe selvatiche e produttori locali.",
  },
  guides: {
    title: "Guide e storie",
    intro: "Conoscenza pratica dalla montagna — per escursionisti e viaggiatori lenti.",
    comingSoonLabel: "In arrivo",
    viewAllLabel: "Tutti gli articoli",
    articles: [
      { title: "Come raggiungere Bačić Kuk da Stars Peak", teaser: "Partenza, tempi e cosa aspettarsi in salita.", href: "/experiences#exp-hiking" },
      { title: "I sentieri più belli intorno a Baške Oštarije", teaser: "Escursioni giornaliere vicino alla casa.", href: "/experiences#exp-hiking" },
      { title: "Cosa fare sul Velebit quando piove", teaser: "Giornate al camino ed escursioni verso il mare.", href: "/experiences#exp-sea" },
      { title: "Montagna e mare in un giorno", teaser: "Da Bačić Duliba a Karlobag, Pag e Zavratnica.", href: "/experiences#exp-sea" },
      { title: "Guida all’osservazione delle stelle", teaser: "Cielo scuro, stagioni migliori e consigli semplici.", href: "#experience-day" },
    ],
  },
  signup: {
    title: "5 esperienze indimenticabili sul Velebit",
    intro:
      "Lascia la tua e-mail e scarica la brochure Velebit gratuita — percorsi, mare e montagna, osservazione stelle da Stars Peak.",
    emailLabel: "Indirizzo e-mail",
    emailPlaceholder: "tu@esempio.it",
    submitLabel: "Scarica la brochure",
    submittingLabel: "Invio…",
    submitErrorMessage: "Qualcosa è andato storto — riprova o contattaci direttamente.",
    privacyNote:
      "Usiamo la tua e-mail solo per la brochure e aggiornamenti occasionali su Stars Peak.",
    brochureLanguageNote: "Brochure PDF in croato.",
    thankYouTitle: "Iscrizione completata",
    successMessage:
      "Grazie per l'iscrizione. La brochure Velebit è pronta — scaricala qui sotto.",
    downloadLabel: "Scarica brochure Velebit (PDF)",
    backToGuidesLabel: "Torna alle guide",
    backToHomeLabel: "Home",
  },
};

const byLocale: Record<Locale, ExperienceContent> = { en, hr, de, fr, it };

export function getExperienceContent(locale: Locale): ExperienceContent {
  return byLocale[locale];
}
