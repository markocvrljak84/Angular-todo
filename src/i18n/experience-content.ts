import type { Locale } from "./config";

export type ExperienceDayStep = {
  time: string;
  title: string;
  body: string;
};

export type ExperienceContent = {
  day: {
    title: string;
    intro: string;
    imageAlt: string;
    steps: ExperienceDayStep[];
  };
  taste: {
    badge: string;
    title: string;
    intro: string;
    items: string[];
    footnote: string;
  };
  signup: {
    title: string;
    intro: string;
    detail: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    submitErrorMessage: string;
    gdprConsent: string;
    privacyNote: string;
    thankYouTitle: string;
    successMessage: string;
    backToJournalLabel: string;
    backToHomeLabel: string;
  };
};

const en: ExperienceContent = {
  day: {
    title: "From first light to nightfall",
    intro:
      "Mountain summit, Adriatic swim and starry sky — in one place, in one day. This is what life at Stars Peak feels like.",
    imageAlt:
      "Jagged limestone peaks of Velebit rising above the forest",
    steps: [
      {
        time: "07:00",
        title: "Coffee with a view of Bačić Kuk",
        body: "The day begins slowly. Coffee on the terrace as the first light reaches the peaks of Bačić Kuk.",
      },
      {
        time: "09:00",
        title: "Hike to Bačić Kuk",
        body: "The trail starts minutes from the door — a classic Velebit ascent with wide views.",
      },
      {
        time: "14:00",
        title: "Swim in Karlobag",
        body: "Half an hour downhill and you are on the Adriatic — crystal clear sea before lunch.",
      },
      {
        time: "19:00",
        title: "Dinner by the fire",
        body: "Grill on the outdoor kitchen, sunset and a good book.",
      },
      {
        time: "22:00",
        title: "Milky Way above Velebit",
        body: "No light pollution — just stars, hammocks and the majestic ridge against the night sky.",
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
  signup: {
    title: "Stories from Stars Peak",
    intro:
      "Join our mailing list for seasonal stories, hiking inspiration and quiet moments from Velebit.",
    detail:
      "Be the first to hear about new journal entries, favourite trails, stargazing nights and life on the mountain.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    submitLabel: "Join the Journal",
    submittingLabel: "Sending…",
    submitErrorMessage: "Something went wrong — please try again or contact us directly.",
    gdprConsent:
      "I agree that Stars Peak may process my personal data in accordance with GDPR.",
    privacyNote: "We write only a few times each year. No spam, just stories worth reading.",
    thankYouTitle: "You're on the list — thank you",
    successMessage:
      "The first story will land in your inbox when the next journal entry is ready. Until then, explore the trails and quiet corners of Velebit.",
    backToJournalLabel: "Back to Journal",
    backToHomeLabel: "Home",
  },
};

const hr: ExperienceContent = {
  day: {
    title: "Jedan dan na Stars Peaku",
    intro:
      "Planinski vrh, kupanje u Jadranu i zvjezdano nebo — na jednom mjestu, u jednom danu. Tako izgleda život u Bačić Dulibi.",
    imageAlt:
      "Oštro vapnenačke stijene Velebita iznad šume",
    steps: [
      {
        time: "07:00",
        title: "Kava s pogledom na Bačić kuk",
        body: "Prva jutarnja kava, dok svjetlo obasjava stijenu iznad doline.",
      },
      {
        time: "09:00",
        title: "Uspon na Bačić kuk",
        body: "Staza započinje nekoliko minuta od kuće. Korak po korak, pogled se otvara prema Velebitu.",
      },
      {
        time: "14:00",
        title: "Kupanje u Karlobagu",
        body: "Pola sata vožnje niz prekrasne padine Velebita i već ste na plaži prije ručka.",
      },
      {
        time: "19:00",
        title: "Večera uz vatru",
        body: "Povratak na planinu i odmor u hamocima dok se večera krčka na roštilju.",
      },
      {
        time: "22:00",
        title: "Promatranje Mliječne staze",
        body: "Bez svjetlosnog onečišćenja — samo zvijezde i bistro noćno nebo.",
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
  signup: {
    title: "Priče sa Stars Peaka",
    intro:
      "Prijavite se na mailing listu za sezonske priče, planinarsku inspiraciju i tihe trenutke s Velebita.",
    detail:
      "Prvi saznajte o novim zapisima u dnevniku, omiljenim stazama, noćima pod zvijezdama i životu na planini.",
    emailLabel: "E-mail adresa",
    emailPlaceholder: "vi@primjer.hr",
    submitLabel: "Pridruži se dnevniku",
    submittingLabel: "Šaljem…",
    submitErrorMessage: "Nešto nije u redu — pokušajte ponovno ili nas kontaktirajte izravno.",
    gdprConsent:
      "Slažem se da Stars Peak može obrađivati moje osobne podatke u skladu s GDPR-om.",
    privacyNote: "Pišemo samo nekoliko puta godišnje. Bez spama — samo priče koje vrijede čitanja.",
    thankYouTitle: "Uspješna prijava — hvala",
    successMessage:
      "Prva priča stiže u vaš inbox kad bude spreman sljedeći zapis u dnevniku. Do tada istražite staze i tihe kutke Velebita.",
    backToJournalLabel: "Natrag na Journal",
    backToHomeLabel: "Početna",
  },
};

const de: ExperienceContent = {
  day: {
    title: "Ein Tag auf Stars Peak",
    intro:
      "Gipfel, Adria und Sternenhimmel — an einem Ort, an einem Tag. So fühlt sich Leben in Bačić Duliba an.",
    imageAlt:
      "Zackige Kalkgipfel des Velebit über dem Wald",
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
  signup: {
    title: "Geschichten von Stars Peak",
    intro:
      "Tragen Sie sich in unsere Mailingliste ein — für saisonale Geschichten, Wanderinspiration und stille Momente am Velebit.",
    detail:
      "Erfahren Sie als Erste von neuen Journal-Einträgen, Lieblingswegen, Sternennächten und dem Leben auf dem Berg.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "sie@beispiel.de",
    submitLabel: "Journal abonnieren",
    submittingLabel: "Wird gesendet…",
    submitErrorMessage: "Etwas ist schiefgelaufen — bitte erneut versuchen oder uns direkt kontaktieren.",
    gdprConsent:
      "Ich stimme zu, dass Stars Peak meine personenbezogenen Daten gemäß DSGVO verarbeiten darf.",
    privacyNote: "Wir schreiben nur wenige Male im Jahr. Kein Spam — nur Geschichten, die sich lohnen.",
    thankYouTitle: "Geschafft — vielen Dank",
    successMessage:
      "Die erste Geschichte kommt per E-Mail, sobald der nächste Journal-Eintrag bereit ist. Bis dahin: Wege und stille Ecken des Velebit entdecken.",
    backToJournalLabel: "Zurück zum Journal",
    backToHomeLabel: "Startseite",
  },
};

const fr: ExperienceContent = {
  day: {
    title: "Une journée à Stars Peak",
    intro:
      "Sommet, baignade en Adriatique et ciel étoilé — au même endroit, le même jour. C’est la vie à Bačić Duliba.",
    imageAlt:
      "Sommets calcaires du Velebit au-dessus de la forêt",
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
  signup: {
    title: "Récits de Stars Peak",
    intro:
      "Rejoignez notre liste de diffusion pour des récits de saison, de l’inspiration randonnée et des moments calmes du Velebit.",
    detail:
      "Soyez les premiers informés des nouveaux articles du journal, des sentiers favoris, des nuits sous les étoiles et de la vie à la montagne.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.fr",
    submitLabel: "Rejoindre le journal",
    submittingLabel: "Envoi…",
    submitErrorMessage: "Une erreur s'est produite — réessayez ou contactez-nous directement.",
    gdprConsent:
      "J’accepte que Stars Peak traite mes données personnelles conformément au RGPD.",
    privacyNote: "Nous écrivons seulement quelques fois par an. Pas de spam — juste des récits qui valent la lecture.",
    thankYouTitle: "Inscription confirmée — merci",
    successMessage:
      "Le premier récit arrivera dans votre boîte mail dès que le prochain article du journal sera prêt. En attendant, explorez les sentiers et les coins tranquilles du Velebit.",
    backToJournalLabel: "Retour au journal",
    backToHomeLabel: "Accueil",
  },
};

const it: ExperienceContent = {
  day: {
    title: "Un giorno a Stars Peak",
    intro:
      "Cima, bagno in Adriatico e cielo stellato — nello stesso posto, nello stesso giorno. Così è la vita a Bačić Duliba.",
    imageAlt:
      "Picchi calcarei del Velebit sopra la foresta",
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
  signup: {
    title: "Storie da Stars Peak",
    intro:
      "Iscriviti alla mailing list per racconti di stagione, ispirazione escursionistica e momenti quieti dal Velebit.",
    detail:
      "Scopri per primo i nuovi articoli del journal, i sentieri preferiti, le notti stellate e la vita in montagna.",
    emailLabel: "Indirizzo e-mail",
    emailPlaceholder: "tu@esempio.it",
    submitLabel: "Iscriviti al journal",
    submittingLabel: "Invio…",
    submitErrorMessage: "Qualcosa è andato storto — riprova o contattaci direttamente.",
    gdprConsent:
      "Accetto che Stars Peak tratti i miei dati personali in conformità al GDPR.",
    privacyNote: "Scriviamo solo poche volte l’anno. Niente spam — solo storie che valgono la pena.",
    thankYouTitle: "Iscrizione completata — grazie",
    successMessage:
      "La prima storia arriverà via e-mail quando sarà pronto il prossimo articolo del journal. Nel frattempo, esplora i sentieri e gli angoli quieti del Velebit.",
    backToJournalLabel: "Torna al journal",
    backToHomeLabel: "Home",
  },
};

const byLocale: Record<Locale, ExperienceContent> = { en, hr, de, fr, it };

export function getExperienceContent(locale: Locale): ExperienceContent {
  return byLocale[locale];
}
