/**
 * Writes src/i18n/locales/fr.json and it.json from en in messages.ts.
 * Run: node scripts/gen-fr-it-messages.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const root = path.dirname(fileURLToPath(import.meta.url));
const messagesPath = path.join(root, "../src/i18n/messages.ts");
const src = readFileSync(messagesPath, "utf8");
const enMatch = src.match(/const en: Messages = (\{[\s\S]*?\n\});\n\nconst hr:/);
if (!enMatch) {
  console.error("Could not parse en block");
  process.exit(1);
}
const enObj = enMatch[1];
// eslint-disable-next-line no-eval -- build script only
const en = eval(`(${enObj})`);

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

const fr = deepClone(en);
fr.meta = {
  siteName: "Maison de vacances Stars Peak",
  siteDescription:
    "Une retraite de montagne au calme — site vitrine de démonstration. Remplacez textes et photos quand vous voulez.",
};
fr.header = { bookCta: "Voir les disponibilités" };
fr.nav = {
  home: "Accueil",
  about: "À propos",
  gallery: "Galerie",
  film: "Vidéo",
  nearby: "À proximité",
  contact: "Contact",
};
fr.langSwitcher = { aria: "Langue" };
fr.footer = {
  tagline:
    "Site vitrine de location — remplacez textes et photos lorsque vous êtes prêt.",
  rights: "© Stars Peak — placeholder",
  exploreTitle: "Explorer",
  contactTitle: "Contactez-nous",
};
fr.home.heroBadge = "Velebit · Croatie (démo)";
fr.home.heroTitle = "Votre refuge au-dessus des cimes";
fr.home.heroLead =
  "Réveillez-vous avec l’air des pins et un grand ciel. Cette page de démonstration décrit un chalet fictif pour prévisualiser mise en page et navigation.";
fr.home.heroCenterLine =
  "Toujours des sentiers calmes pour marcher et une maison chaleureuse pour rentrer — votre base dans les collines du Velebit.";
fr.home.heroSubscribeLine = "Recevez les offres spéciales directement par e-mail.";
fr.home.heroEmailPlaceholder = "Adresse e-mail";
fr.home.heroSubscribeButton = "S’abonner";
fr.home.heroSubscribeNote = "Démo uniquement — connectez ce champ à votre newsletter.";
fr.home.heroSubscribeThanks = "Merci — démo uniquement. Connectez votre outil newsletter.";
fr.home.nearbyTitle = "À proximité";
fr.home.nearbyLead =
  "Paklenica, Pag, Zavratnica et le sentier Premužić — excursions depuis votre base dans le Velebit.";
fr.home.itineraryImageAlts = [
  "Parc national de Paklenica — canyons karstiques et sentiers",
  "Île de Pag — côte et paysages de pierre",
  "Crique de Zavratnica — falaises et eau turquoise",
  "Sentier Premužić — chemin de pierre au-dessus de l’Adriatique",
  "Crête du Velebit — forêt et vue sur la mer",
];
fr.home.itineraryDays = [
  {
    label: "NP Paklenica",
    headline: "CANYONS ET SENTIERS AU PIED DU VELEBIT",
    body:
      "Paklenica est l’un des fleurons des parcs nationaux croates — gorges étroites, falaises et itinéraires balisés pour tous niveaux. Prévoyez une demi-journée ou une journée et vérifiez les horaires d’ouverture.",
  },
  {
    label: "Île de Pag",
    headline: "JOURNÉE ÎLE — MER, VENT ET PIERRE « LUNAIRE »",
    body:
      "Pag est facile d’accès pour les plages, le vélo et les saveurs locales (fromage, agneau). Pont depuis le continent ou route côtière — idéal une belle journée.",
  },
  {
    label: "Crique Zavratnica",
    headline: "ANSE ABRITÉE AUX FALAISES DRAMATIQUES",
    body:
      "Zavratnica est une baie célèbre aux falaises abruptes et à l’eau calme — parfait pour une sortie en bateau ou une halte panoramique sur l’Adriatique nord. Vérifiez les règles d’accès et de baignade.",
  },
  {
    label: "Sentier Premužić",
    headline: "LE CHEMIN DE PIERRE D’ANTE PREMUŽIĆ SUR LA CRÊTE",
    body:
      "Le sentier Premužić est une icône du Velebit — tracé en pierre sèche à pentes douces avec vue immense sur la mer et les îles du Kvarner. Choisissez un tronçon adapté, emportez de l’eau et surveillez la météo en montagne.",
  },
];
fr.home.filmTitle = "Un instant sur le sentier";
fr.home.filmCaption =
  "Court extrait de la région — lancez la lecture avec les commandes du lecteur.";
fr.home.heroCtaPill = "À partir de 129 € / nuit · tarif démo";
fr.home.heroSlideAlts = [
  "Maison de vacances — photo 1",
  "Maison de vacances — photo 2",
  "Maison de vacances — photo 3",
  "Maison de vacances — photo 4",
];
fr.home.statsLine = "Logement entier · 6 couchages · 3 chambres · 2 salles de bain";
fr.home.heroImageAlt = "Photo extérieure de démonstration de la maison";
fr.home.ctaPrimary = "Voir la galerie";
fr.home.ctaSecondary = "Nous écrire";
fr.home.amenitiesLabel = "En bref";
fr.home.amenities = [
  { label: "Jusqu’à 6 personnes" },
  { label: "Cuisine équipée" },
  { label: "Parking gratuit" },
  { label: "Wi‑Fi" },
];
fr.home.welcomeTitle = "Pourquoi réserver en direct";
fr.home.welcomeBody =
  "Les maisons de vacances indépendantes offrent souvent plus de flexibilité et des règles plus claires lorsque vous écrivez directement au propriétaire. Remplacez ce bloc par votre histoire, vos offres saisonnières ou un lien vers votre calendrier.";
fr.home.featuresSectionLabel = "À quoi vous attendre";
fr.home.features = [
  {
    title: "6 couchages (démo)",
    body: "Trois chambres, deux salles de bain — chiffres indicatifs jusqu’à confirmation.",
  },
  {
    title: "Terrasse extérieure",
    body: "Café du matin avec vue de démonstration. Photo à venir.",
  },
  {
    title: "Soirées tranquilles",
    body: "Cheminée, jeux de société — texte marketing à réécrire.",
  },
];
fr.home.quote =
  "« Nous avons aimé le silence. » — Avis invité de démonstration. Remplacez par un vrai témoignage.";
fr.about = {
  title: "À propos de ce lieu",
  lead: "Stars Peak est un nom d’exemple pour votre maison de vacances. Le texte ci-dessous est un texte de démonstration.",
  p1:
    "Construite en pierre locale (fictif), la maison est imaginée comme un refuge week-end pour les familles qui randonnent le jour et cuisinent le soir. Remplacez par votre histoire.",
  p2:
    "À dix minutes d’un départ de sentier (fictif), vingt de la boulangerie la plus proche (fictif), loin du stress des e-mails. Mettez à jour distances et accès pour vos hôtes.",
  highlights: [
    "Arrivée autonome avec boîte à clés (exemple — adaptez)",
    "Parking pour deux voitures sur gravier (démo)",
    "Animaux acceptés sur demande — définissez votre règle",
    "Starlink / Wi-Fi — indiquez seulement si c’est vrai",
  ],
  highlightsTitle: "Points forts",
  sideImageAlt: "Maison de vacances et paysage de montagne — photo de démonstration",
};
fr.gallery = {
  ...fr.gallery,
  title: "Galerie",
  intro:
    "Huit carrés sans espace — cliquez une photo pour l’agrandir et faire défiler. Flèches du clavier ou boutons latéraux.",
  lightboxClose: "Fermer la galerie",
  lightboxPrev: "Image précédente",
  lightboxNext: "Image suivante",
  lightboxAria: "Galerie agrandie",
  lightboxOpenThumb: "Ouvrir en grand",
};
fr.contact = {
  title: "Contact",
  intro: "Joignez-nous par téléphone ou e-mail, ou rendez-vous à l’adresse ci-dessous.",
  nameLabel: "Nom",
  contactName: "Velebit Stars Peak",
  addressLabel: "Adresse",
  addressMock: "Došen Dabar 1, Croatie",
  phoneLabel: "Téléphone",
  phoneMock: "+385 99 000 0000",
  emailLabel: "E-mail",
  emailMock: "info@velebit-starspeak.com",
  detailsHeading: "Coordonnées",
  mapHeading: "Carte",
  mapIframeTitle: "Google Maps — Došen Dabar 1, Croatie",
  mapOpenGoogle: "Ouvrir dans Google Maps pour obtenir l’itinéraire",
};
fr.a11y = { scrollToTop: "Retour en haut" };

const it = deepClone(en);
it.meta = {
  siteName: "Casa vacanze Stars Peak",
  siteDescription:
    "Un rifugio di montagna tranquillo — sito dimostrativo. Sostituisci testi e foto quando vuoi.",
};
it.header = { bookCta: "Verifica disponibilità" };
it.nav = {
  home: "Home",
  about: "Chi siamo",
  gallery: "Galleria",
  film: "Video",
  nearby: "Nei dintorni",
  contact: "Contatti",
};
it.langSwitcher = { aria: "Lingua" };
it.footer = {
  tagline: "Sito dimostrativo per affitti — sostituisci testi e foto quando sei pronto.",
  rights: "© Stars Peak — placeholder",
  exploreTitle: "Esplora",
  contactTitle: "Contattaci",
};
it.home.heroBadge = "Velebit · Croazia (demo)";
it.home.heroTitle = "Il tuo rifugio sopra la linea degli alberi";
it.home.heroLead =
  "Svegliati con profumo di pino e cieli larghi. Questa homepage dimostrativa descrive una baita fittizia per anteprima di layout e navigazione.";
it.home.heroCenterLine =
  "Avrai sempre sentieri tranquilli da percorrere e una casa calda a cui tornare — la tua base sulle colline del Velebit.";
it.home.heroSubscribeLine = "Ricevi le offerte speciali direttamente via e-mail.";
it.home.heroEmailPlaceholder = "Indirizzo e-mail";
it.home.heroSubscribeButton = "Iscriviti";
it.home.heroSubscribeNote = "Solo demo — collega questo campo al tuo strumento newsletter.";
it.home.heroSubscribeThanks = "Grazie — solo demo. Collega il tuo strumento newsletter.";
it.home.nearbyTitle = "Nei dintorni";
it.home.nearbyLead =
  "Paklenica, Pag, Zavratnica e il sentiero Premužić — gite in giornata dalla tua base sul Velebit.";
it.home.itineraryImageAlts = [
  "Parco nazionale di Paklenica — canyon carsici e sentieri",
  "Isola di Pag — costa e paesaggi di pietra",
  "Baia di Zavratnica — scogliere e acqua turchese",
  "Sentiero Premužić — percorso in pietra sopra l’Adriatico",
  "Cresta del Velebit — foresta e vista sul mare",
];
it.home.itineraryDays = [
  {
    label: "NP Paklenica",
    headline: "CANYON E SENTIERI AI PIEDI DEL VELEBIT",
    body:
      "Paklenica è uno dei parchi nazionali simbolo della Croazia — gole strette, pareti rocciose e percorsi segnalati per ogni preparazione. Pianifica mezza o intera giornata e verifica gli orari di apertura.",
  },
  {
    label: "Isola di Pag",
    headline: "GIORNATA IN ISOLA — MARE, VENTO E PIETRA «LUNARE»",
    body:
      "Pag è facile da raggiungere per spiagge, bici e sapori locali (formaggio, agnello). Ponte dalla terraferma o giro in auto sulla costa — ideale in una giornata di sole.",
  },
  {
    label: "Baia di Zavratnica",
    headline: "INSENATURA RIPARATA CON SCOSCESE SPETTACOLARI",
    body:
      "Zavratnica è una baia famosa con scogliere drammatiche e acqua calma — perfetta per un’uscita in barca o una sosta panoramica sull’Adriatico settentrionale. Controlla regole di accesso e balneazione.",
  },
  {
    label: "Sentiero Premužić",
    headline: "IL PERCORSO IN PIETRA DI ANTE PREMUŽIĆ SULLA CRESTA",
    body:
      "Il sentiero Premužić è un’icona del Velebit — tracciato a secco con pendenze dolci e viste immense sul mare e sulle isole del Quarnaro. Scegli un tratto adatto, porta acqua e controlla il meteo in montagna.",
  },
];
it.home.filmTitle = "Un attimo sul sentiero";
it.home.filmCaption =
  "Breve clip dalla zona — avvia la riproduzione con i controlli del player.";
it.home.heroCtaPill = "Da 129 € / notte · tariffa demo";
it.home.heroSlideAlts = [
  "Casa vacanze — foto 1",
  "Casa vacanze — foto 2",
  "Casa vacanze — foto 3",
  "Casa vacanze — foto 4",
];
it.home.statsLine = "Intera casa · 6 posti letto · 3 camere · 2 bagni";
it.home.heroImageAlt = "Foto esterna dimostrativa della casa vacanze";
it.home.ctaPrimary = "Apri galleria";
it.home.ctaSecondary = "Contattaci";
it.home.amenitiesLabel = "In sintesi";
it.home.amenities = [
  { label: "Fino a 6 ospiti" },
  { label: "Cucina completa" },
  { label: "Parcheggio gratuito" },
  { label: "Wi‑Fi" },
];
it.home.welcomeTitle = "Perché prenotare direttamente";
it.home.welcomeBody =
  "Le case vacanza indipendenti offrono spesso più flessibilità e regole più chiare quando scrivi direttamente al proprietario. Sostituisci questo testo con la tua storia, offerte stagionali o un link al calendario.";
it.home.featuresSectionLabel = "Cosa aspettarsi";
it.home.features = [
  {
    title: "6 posti (demo)",
    body: "Tre camere, due bagni — numeri indicativi fino a conferma capacità.",
  },
  {
    title: "Terrazza esterna",
    body: "Caffè al mattino con vista di esempio. Foto in arrivo.",
  },
  {
    title: "Sere lente",
    body: "Camino, giochi da tavolo — testo marketing da riscrivere.",
  },
];
it.home.quote =
  "«Abbiamo amato il silenzio.» — Recensione ospite demo. Sostituisci con una testimonianza reale.";
it.about = {
  title: "Su questo posto",
  lead: "Stars Peak è un nome di esempio per la tua casa vacanze. Il testo seguente è dimostrativo.",
  p1:
    "Costruita in pietra locale (fittizio), la casa è pensata come rifugio weekend per famiglie che camminano di giorno e cucinano la sera. Sostituisci con la tua storia.",
  p2:
    "Dieci minuti da un sentiero (distanza demo), venti dal panificio più vicino (demo), lontano dallo stress della posta. Aggiorna distanze e parcheggio per gli ospiti.",
  highlights: [
    "Check-in autonomo con cassetta chiavi (esempio — adatta)",
    "Parcheggio per due auto su ghiaia (demo)",
    "Animali su richiesta — imposta la tua policy",
    "Starlink / Wi-Fi — indica solo se vero",
  ],
  highlightsTitle: "In sintesi",
  sideImageAlt: "Casa vacanze e paesaggio montano — foto dimostrativa",
};
it.gallery = {
  ...it.gallery,
  title: "Galleria",
  intro:
    "Otto quadrati senza spazi — tocca una foto per ingrandire e scorrere. Frecce della tastiera o pulsanti laterali.",
  lightboxClose: "Chiudi galleria",
  lightboxPrev: "Immagine precedente",
  lightboxNext: "Immagine successiva",
  lightboxAria: "Galleria ingrandita",
  lightboxOpenThumb: "Apri vista grande",
};
it.contact = {
  title: "Contatti",
  intro: "Contattaci per telefono o e-mail, oppure visitaci all’indirizzo sotto.",
  nameLabel: "Nome",
  contactName: "Velebit Stars Peak",
  addressLabel: "Indirizzo",
  addressMock: "Došen Dabar 1, Croazia",
  phoneLabel: "Telefono",
  phoneMock: "+385 99 000 0000",
  emailLabel: "E-mail",
  emailMock: "info@velebit-starspeak.com",
  detailsHeading: "Dettagli",
  mapHeading: "Mappa",
  mapIframeTitle: "Google Maps — Došen Dabar 1, Croazia",
  mapOpenGoogle: "Apri in Google Maps per le indicazioni stradali",
};
it.a11y = { scrollToTop: "Torna su" };

const outDir = path.join(root, "../src/i18n/locales");
mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "fr.json"), JSON.stringify(fr, null, 2), "utf8");
writeFileSync(path.join(outDir, "it.json"), JSON.stringify(it, null, 2), "utf8");
console.log("Wrote src/i18n/locales/fr.json and it.json");
