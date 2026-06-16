import type { Locale } from "./config";
import type { HikingRouteId } from "../config/hiking-routes";

export type HikingRouteContent = {
  id: HikingRouteId;
  title: string;
  aboutParagraphs: string[];
  paragraphs: string[];
  imageAlts: string[];
  difficulty: string;
  marking: string;
  activityType: string;
  seasons: string[];
};

export type HikingRoutesContent = {
  title: string;
  intro: string;
  destinationHeading: string;
  trailHeading: string;
  statsHeading: string;
  mapHeading: string;
  gpxDownloadLabel: string;
  gpxHint: string;
  routesHint: string;
  expandRouteLabel: string;
  collapseRouteLabel: string;
  statLabels: {
    duration: string;
    startElevation: string;
    endElevation: string;
    minElevation: string;
    maxElevation: string;
    ascent: string;
    descent: string;
    length: string;
    avgGrade: string;
    energy: string;
    difficulty: string;
    marking: string;
    activityType: string;
    seasons: string;
  };
  routes: HikingRouteContent[];
};

const hr: HikingRoutesContent = {
  title: "Planinarenje i hiking u blizini kuće",
  intro:
    "Izravno od kuće i u neposrednoj okolici dostupne su planinarske staze Velebita. U nastavku pronaći ćete opis rute, statistiku i GPX za preuzimanje.",
  destinationHeading: "O odredištu",
  trailHeading: "Opis staze",
  statsHeading: "Statistika i pregled staze",
  mapHeading: "Karta staze",
  gpxDownloadLabel: "Preuzmi GPX",
  gpxHint:
    "GPX datoteka sadrži zapis staze za navigaciju u aplikacijama poput Gaia GPS, Komoot ili Google Earth.",
  routesHint: "Odaberite rutu — istovremeno je otvorena samo jedna, kako stranica ne bi bila preduga.",
  expandRouteLabel: "Prikaži detalje staze",
  collapseRouteLabel: "Sakrij detalje staze",
  statLabels: {
    duration: "Vrijeme trajanja",
    startElevation: "Visina polazišta",
    endElevation: "Visina odredišta",
    minElevation: "Minimalna visina",
    maxElevation: "Maksimalna visina",
    ascent: "Uk. vis. raz. uspona",
    descent: "Uk. vis. raz. silaska",
    length: "Ukupna duljina",
    avgGrade: "Prosječni nagib",
    energy: "Utrošak energije",
    difficulty: "Zahtjevnost staze",
    marking: "Markacija staze",
    activityType: "Tip aktivnosti",
    seasons: "Sezone",
  },
  routes: [
    {
      id: "bacic-kuk",
      title: "Bačić Duliba » Bačić Kuk",
      aboutParagraphs: [
        "Bačić kuk (1304 m) sastoji se zapravo od skupine golih kamenitih kukova različite visine i strmine, zbog čega pruža mogućnost za penjačke podvige različitih stupnjeva težine.",
        "On je ujedno najviši vrh skupine Dabarskih kukova i s vrha pruža lijep i informativan pregled na njihov niz, koji poput bijeloga, nazubljenog i rastrganog grebena strši iz šumskog zelenila prema Baškim Oštarijama na jugoistoku u dužini od oko 10 km.",
        "Prilikom uspona preporuča se svakako svratiti do spomenutog ždrijela između sjeverne i južne skupine, odakle se na drugu stranu pruža jedinstven pogled niz kuloar što se ruši preko 300 m duboko prema zelenoj oazi Bačić dulibe i na impozantan kameni obelisk koji posve odvojeno od skupine strši u visinu od oko stotinu metara.",
      ],
      paragraphs: [
        "Početna točka uspona je na dabarskoj cesti kod Bačić Dulibe. Tu se nalazi i kontrolna točka Velebitskog planinarskog puta (KT VPP). Malo naprijed, na cesti je proširenje pogodno za parkiranje automobila.",
        "Od ove točke staza lijevo ide strmim, ali širokim putem 400 m do prijevoja i ulaska u Bačić Dolac. Staza se dalje uspinje kamenitim terenom do ulaska u šumu, a zatim oštro kroz šumu uzbrdo do križanja markacija za Bačić Kuk i Budakovo Brdo. Ovdje nas smjerokaz upućuje desno oštro uzbrdo, do zaklonjenog ždrijela ispod kamene galerije Bačić Kuka.",
        "U ovom zaklonjenom ždrijelu u kamen je ugrađen tuljak s upisnom knjigom, a lijevo od njega je planinarski žig. U nastavku staza vodi oštro ubrdo, kroz klekovinu do vidikovca ispod stijene te dalje uz stijenu, pomažući se sajlom do vrha. Vrh je označen natpisom imena i nadmorskom visinom na stijeni.",
        "S vrha se pružaju lijepi vidici na sve strane. Posebno se ističe onaj prema Budakovu Brdu i Kizi.",
      ],
      imageAlts: [
        "Bačić Kuk — pogled s uspona prema vrhu",
        "Bačić Kuk — kameniti kukovi Dabarskih kukova",
        "Bačić Kuk — staza i okolni krajolik",
        "Bačić Kuk — vidik na Velebit",
      ],
      difficulty: "Srednje teška",
      marking: "Dobra",
      activityType: "Planinarenje",
      seasons: ["Zima", "Proljeće", "Ljeto", "Jesen"],
    },
    {
      id: "budakovo-brdo",
      title: "Bačić Duliba » Budakovo Brdo",
      aboutParagraphs: [
        "Budakovo Brdo (1317 m) je prostran i razvučen hrbat, u svom vršnom dijelu pokriven travnatim livadama. Diže se iznad Skropovca na Premužićevoj stazi.",
        "Zbog svog smještaja i slobodnog vidika otvara pogled na primorsku i na kopnenu stranu planine. Na jugozapadnom obronku njegovog brijega Soline nalazi se nalazište velebitske degenije.",
        "S vrha se pruža pogled u svim smjerovima, a posebno se ističe onaj prema priobalju i otocima, Bačić Kuku i Šatorini.",
      ],
      paragraphs: [
        "Početna točka uspona je na dabarskoj cesti kod Bačić Dulibe. Tu se nalazi i KT PPV. Malo naprijed, na cesti je proširenje pogodno za parkiranje.",
        "Od ove točke staza lijevo ide strmim, ali širokim putem 400 m do prijevoja i ulaska u Bačić Dolac. Staza se dalje uspinje kamenitim terenom do ulaska u šumu, a zatim oštro kroz šumu uzbrdo do križanja markacija za Bačić Kuk i Budakovo Brdo.",
        "Ovdje nas smjerokaz upućuje ravno prema Budakovu Brdu. Staza nastavlja blago uzbrdo, kroz visoku bukovu šumu Soline. Zatim izlazi na travnatu zaravan, pa na travnati hrbat.",
      ],
      imageAlts: [
        "Budakovo Brdo — pogled s vrha prema priobalju",
        "Budakovo Brdo — travnati hrbat i krajolik Velebita",
      ],
      difficulty: "Srednje teška",
      marking: "Dobra",
      activityType: "Planinarenje",
      seasons: ["Zima", "Proljeće", "Ljeto", "Jesen"],
    },
    {
      id: "kiza",
      title: "Baške Oštarije » Kiza",
      aboutParagraphs: [
        "Kiza (1278 m) je vrh u Srednjem Velebitu. Nalazi se blizu Oštarijskih vrata. Do njenog podnožja lako se dolazi automobilom, a od ceste je potrebno hodati oko 1 h.",
        "Kiza pripada skupini Dabarskih kukova, neobraslih kamenih vrhova što izviru iz šume u južnom dijelu Srednjeg Velebita.",
        "Označena je natpisom imena i nadmorskom visinom vrha. S vrha puca pogled u svim smjerovima, a posebno se ističe prema Bačić Kuku i Budakovu Brdu.",
      ],
      paragraphs: [
        "Početna točka uspona je na proširenju uz makadamsku cestu. Tu treba parkirati automobil.",
        "Od ove točke ide se 200 m naprijed makadamskom cestom, dolazi se do, s desne strane, poveće kamene gromade, na kojoj je smjerokaz za Kizu.",
        "Tu staza ulazi u bukovu šumu, skreće oštro uzbrdo po djelomično kamenitom terenu. S desne strane zaobilazi Anin kuk, izlazi iz šume i dalje livadom uzbrdo do prijevoja. Prelazi ga i zaobilazi Kuk od Pečica sa sjeverne strane, gubeći malo na dosegnutoj visini. Nakon toga izbija pod vrh Kize, skreće lijevo oštro uzbrdo po siparu, kroz klekovinu, do podvršne kamene galerije. Tu u podnožju je upisna kutija, a pored nje je žig ugrađen u kamen.",
        "Verući se uz kamenu galeriju, te uz nekoliko klinova i sajle za pripomoć, dolazi se na vrh. Ovo je moguće izvesti bez rizika ako je suho vrijeme.",
        "Vrh je označen natpisom imena vrha i istaknutom nadmorskom visinom. S vrha puca pogled u svim smjerovima, a posebno se ističe prema Bačić Kuku i Budakovu Brdu.",
      ],
      imageAlts: [],
      difficulty: "Srednje teška",
      marking: "Dobra",
      activityType: "Planinarenje",
      seasons: ["Zima", "Proljeće", "Ljeto", "Jesen"],
    },
  ],
};

const en: HikingRoutesContent = {
  title: "Hiking near the house",
  intro:
    "Velebit trails start right from the house and the surrounding area. Below you will find a route description, statistics and a GPX file to download.",
  destinationHeading: "About the destination",
  trailHeading: "Trail description",
  statsHeading: "Trail statistics and overview",
  mapHeading: "Trail map",
  gpxDownloadLabel: "Download GPX",
  gpxHint:
    "The GPX file contains the trail track for navigation in apps such as Gaia GPS, Komoot or Google Earth.",
  routesHint: "Select a route — only one is open at a time to keep the page compact.",
  expandRouteLabel: "Show route details",
  collapseRouteLabel: "Hide route details",
  statLabels: {
    duration: "Duration",
    startElevation: "Start elevation",
    endElevation: "End elevation",
    minElevation: "Minimum elevation",
    maxElevation: "Maximum elevation",
    ascent: "Total ascent",
    descent: "Total descent",
    length: "Total length",
    avgGrade: "Average grade",
    energy: "Energy expenditure",
    difficulty: "Trail difficulty",
    marking: "Trail marking",
    activityType: "Activity type",
    seasons: "Seasons",
  },
  routes: [
    {
      id: "bacic-kuk",
      title: "Bačić Duliba » Bačić Kuk",
      aboutParagraphs: [
        "Bačić Kuk (1304 m) is in fact a group of bare rocky peaks of varying height and steepness, offering climbing challenges at different difficulty levels.",
        "It is also the highest summit of the Dabarske Kukovi group, and from the top there is a fine, informative view of their chain — like a white, jagged, torn ridge rising from the forest green towards Baške Oštarije to the southeast for about 10 km.",
        "On the ascent, be sure to visit the gully between the northern and southern group, where a unique view opens on the other side down a couloir plunging more than 300 m towards the green oasis of Bačić Duliba and an impressive stone obelisk that stands about a hundred metres high, quite separate from the main group.",
      ],
      paragraphs: [
        "The ascent starts on the Dabarska road at Bačić Duliba. Here you will also find a checkpoint of the Velebit Hiking Trail (KT VPP). A little further along the road there is a widening suitable for parking.",
        "From this point the trail turns left along a steep but wide path for 400 m to the pass and the entrance to Bačić Dolac. It then climbs over rocky terrain to the forest, continues sharply uphill through the woods to the junction of markers for Bačić Kuk and Budakovo Brdo. Here the signpost points sharply right uphill to a sheltered gully below the rock gallery of Bačić Kuk.",
        "In this sheltered gully a register box is built into the rock, with a hiking stamp to its left. The trail then leads sharply uphill through dwarf pine to a viewpoint below the cliff, then along the rock face with a fixed rope to the summit. The top is marked with the name and elevation inscribed on the rock.",
        "From the summit there are fine views in all directions. The view towards Budakovo Brdo and Kiza is especially striking.",
      ],
      imageAlts: [
        "Bačić Kuk — view on the ascent towards the summit",
        "Bačić Kuk — rocky peaks of Dabarske Kukovi",
        "Bačić Kuk — trail and surrounding landscape",
        "Bačić Kuk — vista over Velebit",
      ],
      difficulty: "Moderately difficult",
      marking: "Good",
      activityType: "Hiking",
      seasons: ["Winter", "Spring", "Summer", "Autumn"],
    },
    {
      id: "budakovo-brdo",
      title: "Bačić Duliba » Budakovo Brdo",
      aboutParagraphs: [
        "Budakovo Brdo (1317 m) is a wide, elongated ridge with grassy meadows on its summit section. It rises above Skropovac on the Premužić Trail.",
        "Thanks to its position and open views, it offers panoramas towards both the coastal and inland sides of the mountain. On the southwestern slope of its Soline ridge there is a habitat of Velebit degenia.",
        "From the summit the view extends in all directions, especially towards the coast and islands, Bačić Kuk and Šatorina.",
      ],
      paragraphs: [
        "The ascent starts on the Dabarska road at Bačić Duliba. Here you will also find KT VPP. A little further along the road there is a widening suitable for parking.",
        "From this point the trail turns left along a steep but wide path for 400 m to the pass and the entrance to Bačić Dolac. It then climbs over rocky terrain to the forest, continues sharply uphill through the woods to the junction of markers for Bačić Kuk and Budakovo Brdo.",
        "Here the signpost points straight towards Budakovo Brdo. The trail continues gently uphill through the tall beech forest of Soline, then emerges onto a grassy plateau and the grassy ridge.",
      ],
      imageAlts: [
        "Budakovo Brdo — view from the summit towards the coast",
        "Budakovo Brdo — grassy ridge and Velebit landscape",
      ],
      difficulty: "Moderately difficult",
      marking: "Good",
      activityType: "Hiking",
      seasons: ["Winter", "Spring", "Summer", "Autumn"],
    },
    {
      id: "kiza",
      title: "Baške Oštarije » Kiza",
      aboutParagraphs: [
        "Kiza (1278 m) is a summit in the Middle Velebit, close to Oštarija Pass. Its base is easily reached by car; from the road the walk takes about 1 hour.",
        "Kiza belongs to the Dabarske Kukovi group — bare rocky peaks rising from the forest in the southern part of the Middle Velebit.",
        "The summit is marked with the name and elevation. From the top the view opens in all directions, especially towards Bačić Kuk and Budakovo Brdo.",
      ],
      paragraphs: [
        "The ascent starts at a widening beside the gravel road. Park your car here.",
        "From this point continue 200 m along the gravel road to a large rock pile on the right with a signpost for Kiza.",
        "The trail enters beech forest and turns sharply uphill over partly rocky terrain. It passes Anin Kuk on the right, leaves the forest and continues uphill across meadows to a pass. It crosses the pass and bypasses Kuk od Pečica from the north, losing a little elevation. Then it reaches the foot of Kiza, turns left sharply uphill over scree and through dwarf pine to the rock gallery below the summit. At the base there is a register box and a hiking stamp set in the rock.",
        "Following the rock gallery, with a few pitons and fixed ropes for assistance, you reach the summit. This can be done safely in dry weather.",
        "The summit is marked with the peak name and elevation. From the top the view opens in all directions, especially towards Bačić Kuk and Budakovo Brdo.",
      ],
      imageAlts: [],
      difficulty: "Moderately difficult",
      marking: "Good",
      activityType: "Hiking",
      seasons: ["Winter", "Spring", "Summer", "Autumn"],
    },
  ],
};

const de: HikingRoutesContent = {
  title: "Wandern in der Nähe des Hauses",
  intro:
    "Velebit-Wanderwege beginnen direkt am Haus und in der näheren Umgebung. Unten finden Sie eine Routenbeschreibung, Statistiken und eine GPX-Datei zum Download.",
  destinationHeading: "Über das Ziel",
  trailHeading: "Streckenbeschreibung",
  statsHeading: "Statistik und Streckenübersicht",
  mapHeading: "Streckenkarte",
  gpxDownloadLabel: "GPX herunterladen",
  gpxHint:
    "Die GPX-Datei enthält den Streckenverlauf zur Navigation in Apps wie Gaia GPS, Komoot oder Google Earth.",
  routesHint: "Route auswählen — es ist jeweils nur eine geöffnet, damit die Seite kompakt bleibt.",
  expandRouteLabel: "Streckendetails anzeigen",
  collapseRouteLabel: "Streckendetails ausblenden",
  statLabels: {
    duration: "Dauer",
    startElevation: "Starthöhe",
    endElevation: "Zielhöhe",
    minElevation: "Minimale Höhe",
    maxElevation: "Maximale Höhe",
    ascent: "Gesamter Anstieg",
    descent: "Gesamter Abstieg",
    length: "Gesamtlänge",
    avgGrade: "Durchschnittliche Steigung",
    energy: "Energieverbrauch",
    difficulty: "Schwierigkeit",
    marking: "Markierung",
    activityType: "Aktivitätstyp",
    seasons: "Saison",
  },
  routes: [
    {
      id: "bacic-kuk",
      title: "Bačić Duliba » Bačić Kuk",
      aboutParagraphs: [
        "Der Bačić Kuk (1304 m) besteht eigentlich aus einer Gruppe kahler Felsgipfel unterschiedlicher Höhe und Steilheit und bietet Klettermöglichkeiten verschiedener Schwierigkeitsgrade.",
        "Er ist zugleich der höchste Gipfel der Dabarske Kukovi und bietet vom Gipfel einen schönen, informativen Blick auf ihre Kette — wie ein weißer, gezackter, zerrissener Grat, der etwa 10 km weit aus dem Waldgrün Richtung Baške Oštarije im Südosten aufragt.",
        "Beim Aufstieg empfiehlt sich unbedingt ein Abstecher zur erwähnten Schlucht zwischen der nördlichen und südlichen Gruppe, von wo aus sich auf der anderen Seite ein einzigartiger Blick in einen Kouluar öffnet, der über 300 m tief zur grünen Oase Bačić Duliba abfällt, und auf einen imposanten Felsobelisken, der etwa hundert Meter hoch, deutlich abgesetzt von der Gruppe aufragt.",
      ],
      paragraphs: [
        "Der Aufstieg beginnt an der Dabarska Straße bei Bačić Duliba. Hier befindet sich auch eine Kontrollstelle des Velebit-Wanderwegs (KT VPP). Etwas weiter auf der Straße gibt es eine Ausbuchtung zum Parken.",
        "Von diesem Punkt führt der Weg links auf einem steilen, aber breiten Pfad 400 m zum Pass und zum Eingang in Bačić Dolac. Anschließend steigt er über felsiges Gelände zum Wald auf, dann steil durch den Wald zur Markierungskreuzung für Bačić Kuk und Budakovo Brdo. Hier weist der Wegweiser scharf rechts bergauf in eine geschützte Schlucht unter der Felsgalerie des Bačić Kuk.",
        "In dieser Schlucht ist eine Eintragungsbox in den Fels eingelassen, links davon befindet sich ein Wanderstempel. Der Weg führt steil weiter durch Zwergkiefer zu einem Aussichtspunkt unter der Wand und dann entlang der Felswand mit Seilsicherung zum Gipfel. Der Gipfel ist mit Namen und Höhe auf dem Fels markiert.",
        "Vom Gipfel bieten sich schöne Ausblicke in alle Richtungen. Besonders eindrucksvoll ist der Blick auf Budakovo Brdo und Kiza.",
      ],
      imageAlts: [
        "Bačić Kuk — Blick beim Aufstieg zum Gipfel",
        "Bačić Kuk — Felsgipfel der Dabarske Kukovi",
        "Bačić Kuk — Weg und Umgebung",
        "Bačić Kuk — Ausblick über den Velebit",
      ],
      difficulty: "Mittelschwer",
      marking: "Gut",
      activityType: "Wandern",
      seasons: ["Winter", "Frühling", "Sommer", "Herbst"],
    },
    {
      id: "budakovo-brdo",
      title: "Bačić Duliba » Budakovo Brdo",
      aboutParagraphs: [
        "Das Budakovo Brdo (1317 m) ist ein weitläufiger, langgestreckter Grat, dessen Gipfelbereich von grasigen Wiesen bedeckt ist. Es erhebt sich über Skropovac am Premužić-Weg.",
        "Dank seiner Lage und freien Sicht bietet es Ausblicke auf die Küsten- und Landseite des Gebirges. Am südwestlichen Hang seines Soline-Grats befindet sich ein Habitat der Velebit-Degenie.",
        "Vom Gipfel eröffnet sich die Aussicht in alle Richtungen, besonders eindrucksvoll Richtung Küste und Inseln, Bačić Kuk und Šatorina.",
      ],
      paragraphs: [
        "Der Aufstieg beginnt an der Dabarska Straße bei Bačić Duliba. Hier befindet sich auch KT VPP. Etwas weiter auf der Straße gibt es eine Ausbuchtung zum Parken.",
        "Von diesem Punkt führt der Weg links auf einem steilen, aber breiten Pfad 400 m zum Pass und zum Eingang in Bačić Dolac. Anschließend steigt er über felsiges Gelände zum Wald auf, dann steil durch den Wald zur Markierungskreuzung für Bačić Kuk und Budakovo Brdo.",
        "Hier weist der Wegweiser geradeaus zum Budakovo Brdo. Der Weg führt sanft bergauf durch den hohen Buchenwald von Soline, tritt dann auf eine grasige Hochfläche und den grasigen Grat hinaus.",
      ],
      imageAlts: [
        "Budakovo Brdo — Blick vom Gipfel Richtung Küste",
        "Budakovo Brdo — grasiger Grat und Velebit-Landschaft",
      ],
      difficulty: "Mittelschwer",
      marking: "Gut",
      activityType: "Wandern",
      seasons: ["Winter", "Frühling", "Sommer", "Herbst"],
    },
    {
      id: "kiza",
      title: "Baške Oštarije » Kiza",
      aboutParagraphs: [
        "Die Kiza (1278 m) ist ein Gipfel im Mittleren Velebit, nahe den Oštarija-Pass. Ihr Fuß ist leicht mit dem Auto erreichbar; von der Straße sind etwa 1 Stunde zu Fuß nötig.",
        "Die Kiza gehört zur Gruppe der Dabarske Kukovi — kahle Felsgipfel, die im südlichen Teil des Mittleren Velebit aus dem Wald aufragen.",
        "Der Gipfel ist mit Namen und Höhe markiert. Von oben eröffnet sich die Aussicht in alle Richtungen, besonders eindrucksvoll Richtung Bačić Kuk und Budakovo Brdo.",
      ],
      paragraphs: [
        "Der Aufstieg beginnt an einer Ausbuchtung neben der Schotterstraße. Hier parkt man das Auto.",
        "Von diesem Punkt geht es 200 m weiter die Schotterstraße entlang zu einem größeren Felsblock rechts mit Wegweiser zur Kiza.",
        "Der Weg tritt in den Buchenwald ein und biegt steil bergauf über teils felsiges Gelände ab. Er umgeht rechts den Anin Kuk, verlässt den Wald und steigt weiter über Wiesen zum Pass auf. Er überquert den Pass und umgeht den Kuk od Pečica von Norden, wobei etwas Höhe verloren geht. Anschließend erreicht er den Fuß der Kiza, biegt links steil bergauf über Geröll und durch Zwergkiefer zur Felsgalerie unter dem Gipfel. Am Fuß befinden sich eine Eintragungsbox und ein Wanderstempel im Fels.",
        "Entlang der Felsgalerie, mit einigen Haken und Seilsicherungen zur Hilfe, gelangt man zum Gipfel. Bei trockenem Wetter ist dies unbedenklich möglich.",
        "Der Gipfel ist mit Namen und Höhe markiert. Von oben eröffnet sich die Aussicht in alle Richtungen, besonders eindrucksvoll Richtung Bačić Kuk und Budakovo Brdo.",
      ],
      imageAlts: [],
      difficulty: "Mittelschwer",
      marking: "Gut",
      activityType: "Wandern",
      seasons: ["Winter", "Frühling", "Sommer", "Herbst"],
    },
  ],
};

const fr: HikingRoutesContent = {
  title: "Randonnée à proximité de la maison",
  intro:
    "Les sentiers du Velebit partent directement de la maison et des environs. Vous trouverez ci-dessous la description de l’itinéraire, les statistiques et un fichier GPX à télécharger.",
  destinationHeading: "À propos de la destination",
  trailHeading: "Description du sentier",
  statsHeading: "Statistiques et aperçu du sentier",
  mapHeading: "Carte du sentier",
  gpxDownloadLabel: "Télécharger le GPX",
  gpxHint:
    "Le fichier GPX contient le tracé du sentier pour la navigation dans des applications comme Gaia GPS, Komoot ou Google Earth.",
  routesHint: "Choisissez un itinéraire — un seul est ouvert à la fois pour limiter le défilement.",
  expandRouteLabel: "Afficher les détails du sentier",
  collapseRouteLabel: "Masquer les détails du sentier",
  statLabels: {
    duration: "Durée",
    startElevation: "Altitude de départ",
    endElevation: "Altitude d’arrivée",
    minElevation: "Altitude minimale",
    maxElevation: "Altitude maximale",
    ascent: "Dénivelé positif total",
    descent: "Dénivelé négatif total",
    length: "Longueur totale",
    avgGrade: "Pente moyenne",
    energy: "Dépense énergétique",
    difficulty: "Difficulté",
    marking: "Balisage",
    activityType: "Type d’activité",
    seasons: "Saisons",
  },
  routes: [
    {
      id: "bacic-kuk",
      title: "Bačić Duliba » Bačić Kuk",
      aboutParagraphs: [
        "Le Bačić Kuk (1304 m) est en réalité un groupe de sommets rocheux dénudés de hauteurs et de pentes variées, offrant des défis d’escalade de différents niveaux.",
        "C’est aussi le plus haut sommet du groupe des Dabarske Kukovi, et du sommet on découvre une belle vue instructive sur leur chaîne — comme une crête blanche, dentelée et déchirée qui s’élève du vert de la forêt vers Baške Oštarije au sud-est sur environ 10 km.",
        "Lors de l’ascension, il est fortement recommandé de s’arrêter au goulet mentionné entre les groupes nord et sud, d’où s’ouvre de l’autre côté une vue unique sur un couloir qui plonge de plus de 300 m vers l’oasis verte de Bačić Duliba et sur un imposant obélisque de pierre d’environ cent mètres de haut, nettement séparé du groupe.",
      ],
      paragraphs: [
        "Le départ se situe sur la route de Dabar, à Bačić Duliba. On y trouve aussi un point de contrôle du sentier randonnée du Velebit (KT VPP). Un peu plus loin, un élargissement de la route convient au stationnement.",
        "De ce point, le sentier part à gauche sur un chemin raide mais large sur 400 m jusqu’au col et à l’entrée de Bačić Dolac. Il monte ensuite sur terrain rocheux jusqu’à la forêt, puis fortement en forêt jusqu’à la croisée des balises pour Bačić Kuk et Budakovo Brdo. Le panneau indique alors fortement à droite vers un goulet abrité sous la galerie rocheuse du Bačić Kuk.",
        "Dans ce goulet, une boîte à registre est encastrée dans la roche, avec un tampon de randonnée à gauche. Le sentier continue fortement à travers la lande jusqu’à un belvédère sous la paroi, puis le long de la falaise avec une main courante jusqu’au sommet. Le sommet est marqué du nom et de l’altitude gravés sur la roche.",
        "Du sommet, la vue s’étend magnifiquement dans toutes les directions. Celle vers Budakovo Brdo et Kiza est particulièrement remarquable.",
      ],
      imageAlts: [
        "Bačić Kuk — vue lors de l’ascension vers le sommet",
        "Bačić Kuk — sommets rocheux des Dabarske Kukovi",
        "Bačić Kuk — sentier et paysage environnant",
        "Bačić Kuk — panorama sur le Velebit",
      ],
      difficulty: "Modérément difficile",
      marking: "Bon",
      activityType: "Randonnée",
      seasons: ["Hiver", "Printemps", "Été", "Automne"],
    },
    {
      id: "budakovo-brdo",
      title: "Bačić Duliba » Budakovo Brdo",
      aboutParagraphs: [
        "Le Budakovo Brdo (1317 m) est un long et large crêtage dont la partie sommitale est couverte de prairies. Il s’élève au-dessus de Skropovac sur le sentier Premužić.",
        "Grâce à sa position et à ses vues dégagées, il offre des panoramas vers les côtés maritime et continental de la montagne. Sur le versant sud-ouest de son crêt de Soline se trouve un habitat de dégénie du Velebit.",
        "Du sommet, la vue s’étend dans toutes les directions, notamment vers le littoral et les îles, le Bačić Kuk et la Šatorina.",
      ],
      paragraphs: [
        "Le départ se situe sur la route de Dabar, à Bačić Duliba. On y trouve aussi le KT VPP. Un peu plus loin, un élargissement de la route convient au stationnement.",
        "De ce point, le sentier part à gauche sur un chemin raide mais large sur 400 m jusqu’au col et à l’entrée de Bačić Dolac. Il monte ensuite sur terrain rocheux jusqu’à la forêt, puis fortement en forêt jusqu’à la croisée des balises pour Bačić Kuk et Budakovo Brdo.",
        "Le panneau indique alors tout droit vers Budakovo Brdo. Le sentier continue en pente douce à travers la haute futaie de Soline, puis débouche sur un plateau herbeux et le crêtage.",
      ],
      imageAlts: [
        "Budakovo Brdo — vue depuis le sommet vers le littoral",
        "Budakovo Brdo — crêtage herbeux et paysage du Velebit",
      ],
      difficulty: "Modérément difficile",
      marking: "Bon",
      activityType: "Randonnée",
      seasons: ["Hiver", "Printemps", "Été", "Automne"],
    },
    {
      id: "kiza",
      title: "Baške Oštarije » Kiza",
      aboutParagraphs: [
        "La Kiza (1278 m) est un sommet du Velebit moyen, près du col d’Oštarija. Son pied est facilement accessible en voiture ; depuis la route, compter environ 1 h de marche.",
        "La Kiza appartient au groupe des Dabarske Kukovi — des sommets rocheux dénudés qui émergent de la forêt dans la partie sud du Velebit moyen.",
        "Le sommet est marqué du nom et de l’altitude. Du haut, la vue s’ouvre dans toutes les directions, notamment vers le Bačić Kuk et le Budakovo Brdo.",
      ],
      paragraphs: [
        "Le départ se situe sur un élargissement le long de la route en gravier. Il faut y garer la voiture.",
        "De ce point, on avance de 200 m sur la route en gravier jusqu’à un gros amas rocheux à droite, où un panneau indique la Kiza.",
        "Le sentier entre dans la hêtraie et monte fortement sur un terrain partiellement rocheux. Il contourne l’Anin Kuk par la droite, sort de la forêt et continue en montée à travers les prairies jusqu’à un col. Il le franchit et contourne le Kuk od Pečica par le nord, perdant un peu d’altitude. Ensuite, il arrive au pied de la Kiza, tourne brusquement à gauche sur l’éboulis, à travers la lande, jusqu’à la galerie rocheuse sous le sommet. Au pied se trouvent une boîte à registre et un tampon de randonnée encastré dans la roche.",
        "En suivant la galerie rocheuse, avec quelques pitons et cordes fixes, on atteint le sommet. C’est faisable sans risque par temps sec.",
        "Le sommet est marqué du nom et de l’altitude. Du haut, la vue s’ouvre dans toutes les directions, notamment vers le Bačić Kuk et le Budakovo Brdo.",
      ],
      imageAlts: [],
      difficulty: "Modérément difficile",
      marking: "Bon",
      activityType: "Randonnée",
      seasons: ["Hiver", "Printemps", "Été", "Automne"],
    },
  ],
};

const it: HikingRoutesContent = {
  title: "Escursionismo nei dintorni della casa",
  intro:
    "I sentieri del Velebit partono direttamente dalla casa e dai dintorni. Di seguito trovate la descrizione del percorso, le statistiche e un file GPX da scaricare.",
  destinationHeading: "La destinazione",
  trailHeading: "Descrizione del sentiero",
  statsHeading: "Statistiche e panoramica del sentiero",
  mapHeading: "Mappa del sentiero",
  gpxDownloadLabel: "Scarica GPX",
  gpxHint:
    "Il file GPX contiene il tracciato del sentiero per la navigazione in app come Gaia GPS, Komoot o Google Earth.",
  routesHint: "Seleziona un percorso — ne è aperto uno alla volta per ridurre lo scorrimento.",
  expandRouteLabel: "Mostra dettagli del sentiero",
  collapseRouteLabel: "Nascondi dettagli del sentiero",
  statLabels: {
    duration: "Durata",
    startElevation: "Quota di partenza",
    endElevation: "Quota di arrivo",
    minElevation: "Quota minima",
    maxElevation: "Quota massima",
    ascent: "Dislivello totale in salita",
    descent: "Dislivello totale in discesa",
    length: "Lunghezza totale",
    avgGrade: "Pendenza media",
    energy: "Consumo energetico",
    difficulty: "Difficoltà",
    marking: "Segnaletica",
    activityType: "Tipo di attività",
    seasons: "Stagioni",
  },
  routes: [
    {
      id: "bacic-kuk",
      title: "Bačić Duliba » Bačić Kuk",
      aboutParagraphs: [
        "Il Bačić Kuk (1304 m) è in realtà un gruppo di cime rocciose spoglie di diversa altezza e pendenza, che offre possibilità di arrampicata di vari gradi di difficoltà.",
        "È anche la vetta più alta del gruppo dei Dabarske Kukovi e dalla cima si gode di una bella vista panoramica sulla loro catena — come un crinale bianco, frastagliato e lacerato che emerge dal verde della foresta verso Baške Oštarije a sud-est per circa 10 km.",
        "Durante l’ascesa conviene assolutamente fare tappa nel canale menzionato tra il gruppo settentrionale e quello meridionale, da dove sull’altro lato si apre una vista unica su un canalone che scende per oltre 300 m verso l’oasi verde di Bačić Duliba e su un imponente obelisco di pietra alto circa cento metri, nettamente separato dal gruppo.",
      ],
      paragraphs: [
        "La partenza dell’ascesa è sulla strada Dabarska a Bačić Duliba. Qui si trova anche un punto di controllo del sentiero escursionistico del Velebit (KT VPP). Poco più avanti, un allargamento della strada è adatto al parcheggio.",
        "Da questo punto il sentiero gira a sinistra su un sentiero ripido ma ampio per 400 m fino al passo e all’ingresso di Bačić Dolac. Poi sale su terreno roccioso fino al bosco e continua ripidamente attraverso la foresta fino all’incrocio delle marcature per Bačić Kuk e Budakovo Brdo. Qui il cartello indica bruscamente a destra verso un canale riparato sotto la galleria rocciosa del Bačić Kuk.",
        "In questo canale è incastonata una cassetta dei registri nella roccia, con un timbro escursionistico alla sinistra. Il sentiero prosegue ripidamente attraverso il pino mugo fino a un belvedere sotto la parete, poi lungo la roccia con una corda fissa fino alla vetta. La cima è segnata con nome e quota incisi sulla roccia.",
        "Dalla vetta si aprono belle vedute in tutte le direzioni. Particolarmente suggestiva è quella verso Budakovo Brdo e Kiza.",
      ],
      imageAlts: [
        "Bačić Kuk — vista durante l’ascesa verso la vetta",
        "Bačić Kuk — cime rocciose dei Dabarske Kukovi",
        "Bačić Kuk — sentiero e paesaggio circostante",
        "Bačić Kuk — panorama sul Velebit",
      ],
      difficulty: "Moderatamente difficile",
      marking: "Buona",
      activityType: "Escursionismo",
      seasons: ["Inverno", "Primavera", "Estate", "Autunno"],
    },
    {
      id: "budakovo-brdo",
      title: "Bačić Duliba » Budakovo Brdo",
      aboutParagraphs: [
        "Il Budakovo Brdo (1317 m) è un ampio e allungato crinale, nella parte sommitale coperto da prati erbosi. Si eleva sopra Skropovac sul sentiero Premužić.",
        "Grazie alla posizione e alle viste libere, offre panorami verso il lato costiero e continentale della montagna. Sul versante sud-occidentale del crinale di Soline si trova un habitat della degenia del Velebit.",
        "Dalla vetta la vista si apre in tutte le direzioni, in particolare verso la costa e le isole, Bačić Kuk e Šatorina.",
      ],
      paragraphs: [
        "La partenza dell’ascesa è sulla strada Dabarska a Bačić Duliba. Qui si trova anche il KT VPP. Poco più avanti, un allargamento della strada è adatto al parcheggio.",
        "Da questo punto il sentiero gira a sinistra su un sentiero ripido ma ampio per 400 m fino al passo e all’ingresso di Bačić Dolac. Poi sale su terreno roccioso fino al bosco e continua ripidamente attraverso la foresta fino all’incrocio delle marcature per Bačić Kuk e Budakovo Brdo.",
        "Qui il cartello indica dritto verso Budakovo Brdo. Il sentiero prosegue dolcemente in salita attraverso l’alta faggeta di Soline, poi esce su un altopiano erboso e sul crinale.",
      ],
      imageAlts: [
        "Budakovo Brdo — vista dalla vetta verso la costa",
        "Budakovo Brdo — crinale erboso e paesaggio del Velebit",
      ],
      difficulty: "Moderatamente difficile",
      marking: "Buona",
      activityType: "Escursionismo",
      seasons: ["Inverno", "Primavera", "Estate", "Autunno"],
    },
    {
      id: "kiza",
      title: "Baške Oštarije » Kiza",
      aboutParagraphs: [
        "La Kiza (1278 m) è una vetta del Velebit centrale, vicino al passo di Oštarija. La base si raggiunge facilmente in auto; dalla strada servono circa 1 h a piedi.",
        "La Kiza appartiene al gruppo dei Dabarske Kukovi — cime rocciose spoglie che emergono dalla foresta nella parte meridionale del Velebit centrale.",
        "La vetta è segnata con nome e quota. Dalla cima la vista si apre in tutte le direzioni, in particolare verso Bačić Kuk e Budakovo Brdo.",
      ],
      paragraphs: [
        "La partenza dell’ascesa è su un allargamento lungo la strada sterrata. Qui va parcheggiata l’auto.",
        "Da questo punto si prosegue per 200 m sulla strada sterrata fino a un grosso masso a destra con il cartello per la Kiza.",
        "Il sentiero entra nella faggeta e gira bruscamente in salita su terreno parzialmente roccioso. Contorna l’Anin Kuk a destra, esce dal bosco e continua in salita attraverso i prati fino a un passo. Lo attraversa e aggira il Kuk od Pečica da nord, perdendo un po’ di quota. Poi giunge ai piedi della Kiza, gira bruscamente a sinistra sul ghiaione, attraverso il pino mugo, fino alla galleria rocciosa sotto la vetta. Ai piedi si trovano la cassetta dei registri e un timbro escursionistico incastonato nella roccia.",
        "Seguendo la galleria rocciosa, con alcuni chiodi e corde fisse di aiuto, si raggiunge la vetta. È fattibile senza rischi con tempo asciutto.",
        "La vetta è segnata con nome e quota. Dalla cima la vista si apre in tutte le direzioni, in particolare verso Bačić Kuk e Budakovo Brdo.",
      ],
      imageAlts: [],
      difficulty: "Moderatamente difficile",
      marking: "Buona",
      activityType: "Escursionismo",
      seasons: ["Inverno", "Primavera", "Estate", "Autunno"],
    },
  ],
};

const byLocale: Record<Locale, HikingRoutesContent> = { en, hr, de, fr, it };

export function getHikingRoutes(locale: Locale): HikingRoutesContent {
  return byLocale[locale];
}
