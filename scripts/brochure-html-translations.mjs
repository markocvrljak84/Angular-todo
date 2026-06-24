/** @typedef {{ value: string; label: string }} Stat */
/** @typedef {{ category: string; title: string; texts: string[]; details?: string[]; meta: string[]; imageAlt: string; image?: string; bodyClass?: string; reverse?: boolean; imgStyle?: string }} Attraction */

export const locales = ["hr", "en", "de", "fr", "it"];

/** @type {Record<string, object>} */
export const brochureContent = {
  hr: {
    lang: "hr",
    pageTitle: "Velebit — turistička brošura | Stars Peak",
    cover: {
      eyebrow: "UNESCO · Park prirode · Dva nacionalna parka",
      headline: "Planine.More.Zvijezde",
      subline:
        "Planinska kuća na 900 m nadmorske visine s pogledom na Bačić kuk – samo 30 minuta od Jadranskog mora.",
      hostDesc:
        "Privatna kuća za odmor u Bačić Dulibi — na podnožju Dabarskih kukova, u Parku prirode Velebit. Iznajmljuje se cijela kuća, do 4 gosta.",
      tagline: "Kanjoni · Grebeni · Špilje · More · Zvijezde",
      scroll: "Otkrijte Velebit ↓",
      coverAlt: "Velebit iz zraka — Nacionalni park Sjeverni Velebit",
    },
    intro: {
      label: "Dobrodošli",
      title: "Najdulji planinski masiv u Hrvatskoj",
      text:
        "Velebit se proteže 145 km duž jadranske obale — od Vratnika na sjeveru do Zrmanje na jugu. Njegovi kanjoni, šumske staze, vapnenačka polja i grebeni čine jedan od najljepših planinarskih krajolika Europe. Od Paklenice do Zavižana, od Zavratnice do Dabarskih kukova, duž Premužićeve staze i u podzemnim dvoranama Cerovačkih špilja — svaki kutak nudi drugačiju priču o planini, moru i podzemlju.",
      stats: [
        { value: "1757 m", label: "Vrh Vaganski vrh" },
        { value: "145 km", label: "Dužina masiva" },
        { value: "2", label: "Nacionalna parka" },
        { value: "UNESCO", label: "Svjetska baština" },
      ],
    },
    paklenica: {
      category: "Nacionalni park · UNESCO",
      title: "Paklenica",
      texts: [
        "UNESCO-ov zaštićeni nacionalni park s Velikom i Malom Paklenicom — uskim kanjonima urezanim u južne padine Velebita, s liticama visokim i do 400 metara. Omiljeno odredište planinara i penjača, s više od 150 km označenih staza i bujnom crnogoričnom šumom. Lako dostupno iz Starigrada i Zadra — idealan dan na planini s povratkom uz more.",
      ],
      meta: ["150+ km staza", "Penjanje", "Crnogorična šuma"],
      imageAlt: "NP Paklenica — litice i borova šuma",
    },
    zavratnica: {
      category: "Zaštićeni krajolik · Jadran",
      title: "Uvala Zavratnica",
      texts: [
        "Zaštićeni krajolik i uvala na sjevernom Jadranu, često nazivana „fjordom“ Hrvatske — strme litice, mirna tirkizna voda duga 900 metara i izleti brodom iz Jablanaca ili pješačkom stazom. Savršen spoj planine i mora.",
      ],
      meta: ["900 m duljine", "Brod ili staza", "Kupanje i ronjenje"],
      imageAlt: "Uvala Zavratnica — litice iznad mirne vode",
    },
    premuzic: {
      category: "Planinarska staza · Inženjersko djelo",
      title: "Premužićeva staza",
      texts: [
        "Premužićeva staza jedna je od najpoznatijih planinarskih ruta u Hrvatskoj i Europi. Duga je oko 57 km i vodi kroz srce Velebita — od Baških Oštarija do Ostarija, uz cijeli srednji i sjeverni greben. Izgrađena je u tridesetim godinama 20. stoljeća po ideji Ante Premužića.",
        "Ono što je stazu učinilo legendarnom jest suhozid — kameni zidovi ručno slaženi bez morta, koji sigurno vode kroz strmine i uz rub litica. Staza meandrira kroz šumu i vapnenačke grebene, s neprekidnim pogledom na Jadran, Pag i Kvarner.",
        "Za goste Stars Peaka u Bačić Dulibi staza je na dohvat ruke — kraći dnevni odsječak prema Dabarskim kukovima ili Alanu, ili višednevni prelazak s noćenjem u planinarskim domovima.",
      ],
      details: [
        "<strong>Duljina:</strong> oko 57 km (više etapa, 3–5 dana)",
        "<strong>Težina:</strong> umjerena — pogodna za iskusne i srednje spremne planinare",
        "<strong>Smjer:</strong> Baške Oštarije → Zavižan → Alan → Ostarije",
        "<strong>Ulaz s Bačić Dulibe:</strong> spoj na stazu prema Alanu i Dabarskim kukovima",
        "<strong>Najljepši odsjeci:</strong> Rozanski kukovi, Veliki Lubenovac, Alan",
      ],
      meta: ["57 km duljine", "Suhozid bez morta", "Pogled na Jadran", "Blizu Bačić Dulibe"],
      imageAlt: "Premužićeva staza — suhozidni put duž grebena",
    },
    dabarski: {
      category: "Vrhovi · Krš · Srednji Velebit",
      title: "Dabarski kukovi",
      texts: [
        "Impresivni vapnenački vrhovi srednjeg Velebita — grupa kukova iznad Bačić Dulibe i Starigrada Podravanjskog. Staze vode kroz karst s panoramskim pogledom na Liku i Jadran. Omiljena destinacija lokalnih planinara i gostiju Stars Peaka — usponi izravno s planinske baze.",
      ],
      meta: ["Karst i kukovi", "Panoramski pogledi", "Blizu Bačić Dulibe"],
      imageAlt: "Panorama Dabarskih kukova — vapnenački vrhovi i zelena dolina Velebita",
    },
    sjeverni: {
      category: "Nacionalni park",
      title: "Sjeverni Velebit",
      texts: [
        "Najmlađi nacionalni park u Hrvatskoj (1999.) štiti najviše i najdivlje dijelove Velebita. Rozanski kukovi, Štirovača, Veliki Lubenovac — staze kroz bujnu šumu, endemske vrste i ne dirnute krajolike. Dio UNESCO-ve svjetske baštine „Drevne i prašume Karpata i drugih regija Europe“.",
      ],
      imageAlt: "Nacionalni park Sjeverni Velebit",
    },
    zavizan: {
      category: "1594 m n.v. · Najposjećeniji vrh",
      title: "Zavižan",
      texts: [
        "Planinarski dom Zavižan — najviši smještaj u Hrvatskoj — stoji na 1594 m s pogledom na Jadran, Pag i cijeli sjeverni Velebit. Okolne staze vode do Rozanskih kukova i Velikog Lubenovca. Meteorološka postaja poznata je po ekstremnim uvjetima i snijegu koji traje i do svibnja.",
      ],
      meta: ["1594 m n.v.", "Planinarski dom", "Rozanski kukovi"],
      imageAlt: "Planinarski dom Zavižan",
    },
    tulove: {
      category: "Južni Velebit · Filmski krajolik",
      title: "Tulove grede",
      texts: [
        "Spektakularni greben južnog Velebita — grupa vapnenačkih stijena iznad Gračaca. Poznate kao lokacija snimanja filma o Winnetouu i nude jedne od najdramatičnijih panorama cijelog masiva. Staza vodi kroz krš s nepresretnutim pogledom na Liku.",
      ],
      meta: ["Winnetou lokacija", "Vapnenačke stijene", "Južni Velebit"],
      imageAlt: "Tulove grede na Velebitu",
    },
    speleoHero: {
      category: "Podzemni svijet Velebita",
      title: "Speleologija na Velebitu",
      texts: [
        "Velebit spada među najspeleološki bogatije područje u Europi. Vapnenački masiv krije stotine špilja, jama i podzemnih kanala — neke otvorene za posjetitelje, druge dostupne samo iskusnim speleolozima. Podzemni svijet čuva fosile jaskenskog medvjeda i arheološke ostatke iz paleolita.",
        "Najpoznatije lokacije u južnom i srednjem Velebitu — Cerovačke špilje kod Gračaca, Modrič špilja u Paklenici, Lukina jama u Parku prirode Velebit. Za goste Stars Peaka idealan je izlet u Cerovačke špilje — manje od sat vremena vožnje.",
      ],
      imageAlt: "Speleologija — Cerovačke špilje",
    },
    cerovacke: {
      category: "Cerovačke špilje · Speleološki park",
      title: "Cerovačke špilje",
      texts: [
        "Cerovačke špilje smještene su u mjestu Grab kod Gračaca, na rubu južnog Velebita. Sustav čine tri jame — Donja, Gornja i Nova špilja — s ukupno više od 7 km istraženih podzemnih kanala. Donja špilja otvorena je za javnost i obilazi se s vodičem.",
        "U špiljama su pronađeni ostaci jaskenskog medvjeda (<em>Ursus spelaeus</em>) i arheološki nalazi iz paleolita. Kapnici, stalagmiti i stalaktiti stvaraju dojmljive podzemne pejzaže — neke dvorane visoke su desetke metara.",
        "Speleološki park Cerovačke špilje jedna je od rijetkih lokacija u Hrvatskoj gdje podzemni svijet možete doživjeti bez speleološke opreme — sigurno, uz stručno vođenje. Savršen dopunski izlet nakon planinarenja ili kupanja u Karlobagu.",
      ],
      details: [
        "<strong>Lokacija:</strong> Grab, kod Gračaca — južni Velebit",
        "<strong>Obilasci:</strong> vođeni, s vodičem; potrebna toplija odjeća (10–12 °C)",
        "<strong>Trajanje:</strong> oko 60 minuta po špilji",
        "<strong>Sezona:</strong> proljeće — jesen (provjerite radno vrijeme)",
        "<strong>U blizini:</strong> Tulove grede, NP Paklenica, Modrič špilja",
      ],
      meta: ["7+ km podzemnih kanala", "Jaskenski medvjed", "Vođeni obilasci", "~60 min od Stars Peaka"],
      imageAlt: "Cerovačke špilje",
    },
    pag: {
      category: "Otok · Jadran · Gastronomija",
      title: "Otok Pag",
      texts: [
        "Jedan od najsunčanijih hrvatskih otoka, poznat po kamenitim krajolicima, plažama, paškoj ovci i siru. Mostom povezan s kopnom — idealno za jednodnevni izlet s Velebita: jutro na planini, popodne na plaži.",
      ],
      meta: ["Paški sir", "2700+ sunčanih sati", "30 min vožnje"],
      imageAlt: "Otok Pag — kamena obala i pogled na more",
    },
    karlobag: {
      category: "Obala · Kupanje · 30 minuta",
      title: "Karlobag",
      texts: [
        "Najbliži grad na moru uz velebitsku obalu — šljunčane plaže, kafići na rivi i kupanje u Jadranu prije ručka. Od Stars Peaka u Bačić Dulibi samo 30 minuta vožnje — planina ujutro, Jadran popodne.",
      ],
      meta: ["30 min od Velebita", "Šljunčane plaže", "Planina i more"],
      imageAlt: "Karlobag — riva i Jadran na velebitskoj obali",
    },
    highlights: {
      title: "Zašto posjetiti Velebit?",
      lead: "Jedinstven spoj alpskog planinstva i mediteranskog mora — u jednom danu.",
      cards: [
        { icon: "⛰", title: "Planinarenje", text: "Staze za svaku razinu — od lagane šetnje Zavratnicom do zahtjevnih uspona Dabarskih kukova i Premužićeve staze." },
        { icon: "🌊", title: "Jadran na dohvat", text: "Karlobag, Zavratnica i Pag udaljeni su pola sata — jutro na 900 m, popodne u kristalnom moru." },
        { icon: "🌲", title: "Biodiverzitet", text: "Prašume, endemske vrste, medvjedi i risovi — Velebit je jedno od najvažnijih staništa u Europi." },
        { icon: "🕳", title: "Speleologija", text: "Stotine špilja u vapnenačkom masivu — Cerovačke špilje, Modrič i Lukina jama. Podzemni svijet s fosilima jaskenskog medvjeda." },
        { icon: "✦", title: "Zvijezde", text: "Bez svjetlosnog onečišćenja — Mliječna staza, tišina grebena i noći kakve se rijetko viđaju." },
      ],
    },
    footer: {
      tagline: "Planina · More · Zvijezde",
      credits:
        "Turistička brošura — atrakcije Velebita.<br />Fotografije preuzete s <a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> (Creative Commons licence) te sa Stars Peak web stranice.<br />Bačić Duliba · Park prirode Velebit · Hrvatska",
    },
  },

  en: {
    lang: "en",
    pageTitle: "Velebit — travel brochure | Stars Peak",
    cover: {
      eyebrow: "UNESCO · Nature Park · Two national parks",
      headline: "Summit. Swim. Stargaze.",
      subline:
        "A private mountain chalet at 900 m with views of Bačić Kuk — just 30 minutes from the Adriatic.",
      hostDesc:
        "Private holiday chalet in Bačić Duliba — at the foot of Dabarski kukovi, inside Velebit Nature Park. Whole-house rental for up to 4 guests.",
      tagline: "Canyons · Ridges · Caves · Sea · Stars",
      scroll: "Discover Velebit ↓",
      coverAlt: "Aerial view of Velebit — Northern Velebit National Park",
    },
    intro: {
      label: "Welcome",
      title: "Croatia's longest mountain range",
      text:
        "Velebit stretches 145 km along the Adriatic coast — from Vratnik in the north to the Zrmanja in the south. Its canyons, forest trails, karst fields and ridges form one of Europe's finest hiking landscapes. From Paklenica to Zavižan, from Zavratnica to Dabarski kukovi, along the Premužić trail and in the underground halls of Cerovačke caves — every corner tells a different story of mountain, sea and subterranean world.",
      stats: [
        { value: "1757 m", label: "Vaganski vrh peak" },
        { value: "145 km", label: "Range length" },
        { value: "2", label: "National parks" },
        { value: "UNESCO", label: "World heritage" },
      ],
    },
    paklenica: {
      category: "National park · UNESCO",
      title: "Paklenica",
      texts: [
        "A UNESCO-listed national park with Velika and Mala Paklenica — dramatic canyons cut into the southern slopes of Velebit, with cliffs up to 400 m high. Famous among hikers and climbers, with more than 150 km of marked trails and lush pine forest. Easily reached from Starigrad and Zadar — a perfect mountain day with the sea nearby.",
      ],
      meta: ["150+ km of trails", "Climbing", "Pine forest"],
      imageAlt: "Paklenica National Park — cliffs and pine forest",
    },
    zavratnica: {
      category: "Protected landscape · Adriatic",
      title: "Zavratnica Cove",
      texts: [
        "A protected landscape and bay on the northern Adriatic, often called Croatia's fjord — steep cliffs, calm turquoise water over 900 metres long, reachable by boat from Jablanac or on foot. A perfect blend of mountain and sea.",
      ],
      meta: ["900 m long", "Boat or trail", "Swimming & diving"],
      imageAlt: "Zavratnica cove — cliffs above calm water",
    },
    premuzic: {
      category: "Hiking trail · Engineering landmark",
      title: "Premužić Trail",
      texts: [
        "The Premužić trail is one of the best-known hiking routes in Croatia and Europe. About 57 km long, it crosses the heart of Velebit — from Baške Oštarije to Ostarije along the central and northern ridge. Built in the 1930s to the design of Ante Premužić.",
        "What makes it legendary is the dry-stone walling — hand-laid stone walls without mortar that safely guide you through steep terrain and along cliff edges. The trail winds through forest and limestone ridges with constant views of the Adriatic, Pag and Kvarner.",
        "For Stars Peak guests in Bačić Duliba the trail is within easy reach — a shorter day section towards Dabarski kukovi or Alan, or a multi-day traverse with nights in mountain huts.",
      ],
      details: [
        "<strong>Length:</strong> about 57 km (several stages, 3–5 days)",
        "<strong>Difficulty:</strong> moderate — suitable for fit and experienced hikers",
        "<strong>Direction:</strong> Baške Oštarije → Zavižan → Alan → Ostarije",
        "<strong>Access from Bačić Duliba:</strong> join the trail towards Alan and Dabarski kukovi",
        "<strong>Highlights:</strong> Rozanski kukovi, Veliki Lubenovac, Alan",
      ],
      meta: ["57 km long", "Dry-stone walls", "Sea views", "Near Bačić Duliba"],
      imageAlt: "Premužić trail — dry-stone path along the ridge",
    },
    dabarski: {
      category: "Peaks · Karst · Central Velebit",
      title: "Dabarski kukovi",
      texts: [
        "Impressive limestone peaks of central Velebit — a group of towers above Bačić Duliba and Starigrad Podravanjski. Trails cross karst with panoramic views over Lika and the Adriatic. A favourite destination for local hikers and Stars Peak guests — ascents start directly from the mountain base.",
      ],
      meta: ["Karst & towers", "Panoramic views", "Near Bačić Duliba"],
      imageAlt: "Panorama of Dabarski kukovi — limestone peaks and green valley",
    },
    sjeverni: {
      category: "National park",
      title: "Northern Velebit",
      texts: [
        "Croatia's youngest national park (1999) protects the highest and wildest parts of Velebit. Rozanski kukovi, Štirovača, Veliki Lubenovac — trails through lush forest, endemic species and untouched landscapes. Part of the UNESCO World Heritage site Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe.",
      ],
      imageAlt: "Northern Velebit National Park",
    },
    zavizan: {
      category: "1594 m a.s.l. · Most visited peak",
      title: "Zavižan",
      texts: [
        "The Zavižan mountain hut — the highest accommodation in Croatia — stands at 1594 m with views of the Adriatic, Pag and all of northern Velebit. Nearby trails lead to Rozanski kukovi and Veliki Lubenovac. The weather station is known for extreme conditions and snow that can last until May.",
      ],
      meta: ["1594 m a.s.l.", "Mountain hut", "Rozanski kukovi"],
      imageAlt: "Zavižan mountain hut",
    },
    tulove: {
      category: "Southern Velebit · Film location",
      title: "Tulove grede",
      texts: [
        "A spectacular ridge of southern Velebit — a group of limestone crags above Gračac. Famous as a Winnetou filming location and offering some of the most dramatic panoramas on the range. The trail crosses sparse karst with wide views over Lika.",
      ],
      meta: ["Winnetou location", "Limestone crags", "Southern Velebit"],
      imageAlt: "Tulove grede on Velebit",
    },
    speleoHero: {
      category: "Velebit's underground world",
      title: "Speleology on Velebit",
      texts: [
        "Velebit is among the most speleologically rich areas in Europe. The limestone massif hides hundreds of caves, pits and underground channels — some open to visitors, others accessible only to equipped cavers. The underground world preserves cave-bear fossils and Palaeolithic archaeological remains.",
        "The best-known sites in southern and central Velebit include Cerovačke caves near Gračac, Modrič cave in Paklenica and Lukina jama in Velebit Nature Park. For Stars Peak guests, Cerovačke caves are an ideal outing — less than an hour's drive.",
      ],
      imageAlt: "Speleology — Cerovačke caves",
    },
    cerovacke: {
      category: "Cerovačke caves · Speleological park",
      title: "Cerovačke Caves",
      texts: [
        "Cerovačke caves lie in Grab near Gračac, on the edge of southern Velebit. The system comprises three pits — Lower, Upper and New Cave — with more than 7 km of explored underground passages. Lower Cave is open to the public with guided tours.",
        "The caves have yielded cave-bear remains (<em>Ursus spelaeus</em>) and Palaeolithic finds. Stalactites and stalagmites create impressive underground scenery — some chambers are tens of metres high.",
        "Cerovačke caves are one of the few places in Croatia where you can experience the underground world without caving equipment — safely, with expert guiding. A perfect add-on after hiking or swimming in Karlobag.",
      ],
      details: [
        "<strong>Location:</strong> Grab, near Gračac — southern Velebit",
        "<strong>Visits:</strong> guided tours; bring warm clothing (10–12 °C)",
        "<strong>Duration:</strong> about 60 minutes per cave",
        "<strong>Season:</strong> spring to autumn (check opening hours)",
        "<strong>Nearby:</strong> Tulove grede, NP Paklenica, Modrič cave",
      ],
      meta: ["7+ km of passages", "Cave bear", "Guided tours", "~60 min from Stars Peak"],
      imageAlt: "Cerovačke caves",
    },
    pag: {
      category: "Island · Adriatic · Gastronomy",
      title: "Pag Island",
      texts: [
        "One of Croatia's sunniest islands, known for stone landscapes, beaches, Pag sheep and cheese. Linked to the mainland by bridge — perfect for a day trip from Velebit: mountain morning, beach afternoon.",
      ],
      meta: ["Pag cheese", "2700+ sunny hours", "30 min drive"],
      imageAlt: "Pag island — stone shore and Adriatic view",
    },
    karlobag: {
      category: "Coast · Swimming · 30 minutes",
      title: "Karlobag",
      texts: [
        "The nearest seaside town on the Velebit coast — pebble beaches, waterfront cafés and a swim in the Adriatic before lunch. Just 30 minutes from Stars Peak in Bačić Duliba — mountain in the morning, Adriatic in the afternoon.",
      ],
      meta: ["30 min from Velebit", "Pebble beaches", "Mountain & sea"],
      imageAlt: "Karlobag — Adriatic waterfront on the Velebit coast",
    },
    highlights: {
      title: "Why visit Velebit?",
      lead: "A unique blend of alpine hiking and Mediterranean sea — in a single day.",
      cards: [
        { icon: "⛰", title: "Hiking", text: "Trails for every level — from an easy walk in Zavratnica to demanding ascents of Dabarski kukovi and the Premužić trail." },
        { icon: "🌊", title: "Adriatic within reach", text: "Karlobag, Zavratnica and Pag are half an hour away — morning at 900 m, afternoon in crystal-clear sea." },
        { icon: "🌲", title: "Biodiversity", text: "Primeval forests, endemic species, bears and lynx — Velebit is one of Europe's most important habitats." },
        { icon: "🕳", title: "Speleology", text: "Hundreds of caves in the limestone massif — Cerovačke caves, Modrič and Lukina jama. An underground world with cave-bear fossils." },
        { icon: "✦", title: "Stars", text: "No light pollution — Milky Way nights, ridge silence and skies rarely seen elsewhere." },
      ],
    },
    footer: {
      tagline: "Mountain · Sea · Stars",
      credits:
        "Travel brochure — Velebit attractions.<br />Photos from <a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> (Creative Commons) and the Stars Peak website.<br />Bačić Duliba · Velebit Nature Park · Croatia",
    },
  },

  de: {
    lang: "de",
    pageTitle: "Velebit — Reisebroschüre | Stars Peak",
    cover: {
      eyebrow: "UNESCO · Naturpark · Zwei Nationalparks",
      headline: "Gipfel. Meer. Sterne.",
      subline:
        "Privates Berghaus auf 900 m mit Blick auf Bačić Kuk — nur 30 Minuten zur Adria.",
      hostDesc:
        "Privates Ferienhaus in Bačić Duliba — am Fuße der Dabarski kukovi im Velebit-Naturpark. Gesamtes Haus, bis 4 Gäste.",
      tagline: "Schluchten · Grate · Höhlen · Meer · Sterne",
      scroll: "Velebit entdecken ↓",
      coverAlt: "Velebit aus der Luft — Nationalpark Nördlicher Velebit",
    },
    intro: {
      label: "Willkommen",
      title: "Das längste Gebirge Kroatiens",
      text:
        "Der Velebit erstreckt sich 145 km entlang der Adria — von Vratnik im Norden bis zur Zrmanja im Süden. Schluchten, Waldwege, Karstfelder und Grate bilden eine der schönsten Wandergebiete Europas. Von Paklenica bis Zavižan, von Zavratnica bis zu den Dabarski kukovi, entlang des Premužić-Wegs und in den unterirdischen Hallen der Cerovačke-Höhlen — jede Ecke erzählt eine andere Geschichte.",
      stats: [
        { value: "1757 m", label: "Gipfel Vaganski vrh" },
        { value: "145 km", label: "Gebirgslänge" },
        { value: "2", label: "Nationalparks" },
        { value: "UNESCO", label: "Welterbe" },
      ],
    },
    paklenica: {
      category: "Nationalpark · UNESCO",
      title: "Paklenica",
      texts: [
        "UNESCO-Nationalpark mit Velika und Mala Paklenica — dramatische Schluchten im südlichen Velebit mit bis zu 400 m hohen Wänden. Beliebt bei Wanderern und Kletterern, mit über 150 km markierter Wege und Kiefernwald. Gut erreichbar ab Starigrad und Zadar.",
      ],
      meta: ["150+ km Wege", "Klettern", "Kiefernwald"],
      imageAlt: "Nationalpark Paklenica — Felswände und Kiefernwald",
    },
    zavratnica: {
      category: "Geschützte Landschaft · Adria",
      title: "Bucht Zavratnica",
      texts: [
        "Geschützte Landschaft und Bucht an der nördlichen Adria, oft Kroatiens Fjord genannt — steile Klippen, ruhiges türkisfarbenes Wasser über 900 m Länge, per Boot ab Jablanac oder zu Fuß erreichbar.",
      ],
      meta: ["900 m lang", "Boot oder Weg", "Baden & Tauchen"],
      imageAlt: "Bucht Zavratnica — Steilwände über ruhigem Wasser",
    },
    premuzic: {
      category: "Wanderweg · Ingenieurskunst",
      title: "Premužić-Weg",
      texts: [
        "Der Premužić-Weg zählt zu den bekanntesten Wanderrouten Kroatiens und Europas. Etwa 57 km lang führt er durch das Herz des Velebit — von Baške Oštarije bis Ostarije entlang des mittleren und nördlichen Grates. Erbaut in den 1930er-Jahren nach Plänen von Ante Premužić.",
        "Legendär sind die Trockenmauern — handverlegte Steinwände ohne Mörtel, die sicher durch Steilgelände führen. Der Weg schlängelt sich durch Wald und Kalksteingrate mit Blick auf Adria, Pag und Kvarner.",
        "Für Gäste des Stars Peak in Bačić Duliba ist der Weg schnell erreichbar — als Tagesetappe Richtung Dabarski kukovi oder Alan oder als Mehrtagestour mit Übernachtung in Berghütten.",
      ],
      details: [
        "<strong>Länge:</strong> ca. 57 km (mehrere Etappen, 3–5 Tage)",
        "<strong>Schwierigkeit:</strong> moderat — für geübte Wanderer",
        "<strong>Richtung:</strong> Baške Oštarije → Zavižan → Alan → Ostarije",
        "<strong>Zugang ab Bačić Duliba:</strong> Anschluss Richtung Alan und Dabarski kukovi",
        "<strong>Highlights:</strong> Rozanski kukovi, Veliki Lubenovac, Alan",
      ],
      meta: ["57 km lang", "Trockenmauer", "Meerblick", "Nahe Bačić Duliba"],
      imageAlt: "Premužić-Weg — Trockenmauerweg am Grat",
    },
    dabarski: {
      category: "Gipfel · Karst · Mittlerer Velebit",
      title: "Dabarski kukovi",
      texts: [
        "Beeindruckende Kalksteingipfel des mittleren Velebit — Türme über Bačić Duliba und Starigrad Podravanjski. Wege führen durch Karst mit Panoramablick auf Lika und die Adria. Beliebt bei Wanderern und Stars-Peak-Gästen — Aufstiege direkt von der Bergbasis.",
      ],
      meta: ["Karst & Türme", "Panorama", "Nahe Bačić Duliba"],
      imageAlt: "Panorama der Dabarski kukovi",
    },
    sjeverni: {
      category: "Nationalpark",
      title: "Nördlicher Velebit",
      texts: [
        "Der jüngste Nationalpark Kroatiens (1999) schützt die höchsten und wildesten Teile des Velebit. Rozanski kukovi, Štirovača, Veliki Lubenovac — Wege durch dichten Wald, endemische Arten und unberührte Landschaften. Teil des UNESCO-Welterbes der Ur- und Altbuchenwälder.",
      ],
      imageAlt: "Nationalpark Nördlicher Velebit",
    },
    zavizan: {
      category: "1594 m · Meistbesuchter Gipfel",
      title: "Zavižan",
      texts: [
        "Die Zavižan-Hütte — die höchste Unterkunft Kroatiens — steht auf 1594 m mit Blick auf Adria, Pag und den nördlichen Velebit. Wege führen zu den Rozanski kukovi und Veliki Lubenovac. Die Wetterstation ist für extreme Bedingungen und Schnee bis in den Mai bekannt.",
      ],
      meta: ["1594 m", "Berghütte", "Rozanski kukovi"],
      imageAlt: "Berghütte Zavižan",
    },
    tulove: {
      category: "Südlicher Velebit · Filmlocation",
      title: "Tulove grede",
      texts: [
        "Spektakulärer Grat des südlichen Velebit — Kalksteinfelsen über Gračac. Bekannt als Winnetou-Drehort mit dramatischen Panoramen. Der Weg führt durch Karst mit weitem Blick auf Lika.",
      ],
      meta: ["Winnetou", "Kalksteinfelsen", "Südlicher Velebit"],
      imageAlt: "Tulove grede am Velebit",
    },
    speleoHero: {
      category: "Unterirdische Welt des Velebit",
      title: "Speleologie am Velebit",
      texts: [
        "Der Velebit gehört zu den speleologisch reichsten Gebieten Europas. Der Kalkstein verbirgt Hunderte Höhlen und unterirdische Gänge — einige für Besucher zugänglich, andere nur für ausgerüstete Höhlenforscher. Fossilien des Höhlenbären und paläolithische Funde.",
        "Bekannte Orte sind die Cerovačke-Höhlen bei Gračac, die Modrič-Höhle in Paklenica und Lukina jama. Für Stars-Peak-Gäste sind die Cerovačke-Höhlen ideal — weniger als eine Stunde Fahrt.",
      ],
      imageAlt: "Speleologie — Cerovačke-Höhlen",
    },
    cerovacke: {
      category: "Cerovačke-Höhlen · Höhlenpark",
      title: "Cerovačke-Höhlen",
      texts: [
        "Die Cerovačke-Höhlen liegen in Grab bei Gračac am Rand des südlichen Velebit. Drei Höhlen — Untere, Obere und Neue Höhle — mit über 7 km erforschten Gängen. Die Untere Höhle ist mit Führung zugänglich.",
        "Funde des Höhlenbären (<em>Ursus spelaeus</em>) und paläolithische Spuren. Tropfsteine bilden eindrucksvolle unterirdische Landschaften.",
        "Einer der wenigen Orte in Kroatien, an dem man die Unterwelt ohne Speleologie-Ausrüstung erleben kann — sicher und mit Führung.",
      ],
      details: [
        "<strong>Ort:</strong> Grab bei Gračac — südlicher Velebit",
        "<strong>Führungen:</strong> mit Guide; warme Kleidung (10–12 °C)",
        "<strong>Dauer:</strong> ca. 60 Minuten pro Höhle",
        "<strong>Saison:</strong> Frühling bis Herbst",
        "<strong>In der Nähe:</strong> Tulove grede, NP Paklenica, Modrič-Höhle",
      ],
      meta: ["7+ km Gänge", "Höhlenbär", "Führungen", "~60 Min ab Stars Peak"],
      imageAlt: "Cerovačke-Höhlen",
    },
    pag: {
      category: "Insel · Adria · Gastronomie",
      title: "Insel Pag",
      texts: [
        "Eine der sonnenreichsten Inseln Kroatiens — Steinlandschaften, Strände, Pag-Schafe und Käse. Per Brücke vom Festland — ideal für einen Tagesausflug: Berg am Morgen, Meer am Nachmittag.",
      ],
      meta: ["Pag-Käse", "2700+ Sonnenstunden", "30 Min Fahrt"],
      imageAlt: "Insel Pag — Steinküste und Adria-Panorama",
    },
    karlobag: {
      category: "Küste · Baden · 30 Minuten",
      title: "Karlobag",
      texts: [
        "Die nächste Stadt am Meer an der Velebit-Küste — Kiesstrände und Bad in der Adria vor dem Mittagessen. Nur 30 Minuten vom Stars Peak in Bačić Duliba.",
      ],
      meta: ["30 Min vom Velebit", "Kiesstrände", "Berg & Meer"],
      imageAlt: "Karlobag — Adria-Promenade",
    },
    highlights: {
      title: "Warum den Velebit besuchen?",
      lead: "Einzigartige Verbindung von Alpinwandern und mediterranem Meer — an einem Tag.",
      cards: [
        { icon: "⛰", title: "Wandern", text: "Wege für jedes Niveau — von Zavratnica bis zu den Dabarski kukovi und dem Premužić-Weg." },
        { icon: "🌊", title: "Adria in Reichweite", text: "Karlobag, Zavratnica und Pag in einer halben Stunde — Morgen auf 900 m, Nachmittag im Meer." },
        { icon: "🌲", title: "Biodiversität", text: "Urwälder, endemische Arten, Bären und Luchse — einer der wichtigsten Lebensräume Europas." },
        { icon: "🕳", title: "Speleologie", text: "Hunderte Höhlen — Cerovačke, Modrič und Lukina jama mit Höhlenbären-Fossilien." },
        { icon: "✦", title: "Sterne", text: "Keine Lichtverschmutzung — Milchstraße und Grat-Stille nach Einbruch der Dunkelheit." },
      ],
    },
    footer: {
      tagline: "Berg · Meer · Sterne",
      credits:
        "Reisebroschüre — Velebit-Attraktionen.<br />Fotos von <a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> (Creative Commons) und der Stars-Peak-Website.<br />Bačić Duliba · Velebit-Naturpark · Kroatien",
    },
  },

  fr: {
    lang: "fr",
    pageTitle: "Velebit — brochure touristique | Stars Peak",
    cover: {
      eyebrow: "UNESCO · Parc naturel · Deux parcs nationaux",
      headline: "Sommet. Mer. Étoiles.",
      subline:
        "Chalet privé à 900 m avec vue sur Bačić Kuk — à 30 minutes de l'Adriatique.",
      hostDesc:
        "Chalet de vacances privé à Bačić Duliba — au pied des Dabarski kukovi, dans le parc naturel Velebit. Location de la maison entière, jusqu'à 4 personnes.",
      tagline: "Canyons · Crêtes · Grottes · Mer · Étoiles",
      scroll: "Découvrir le Velebit ↓",
      coverAlt: "Vue aérienne du Velebit — parc national du Velebit Nord",
    },
    intro: {
      label: "Bienvenue",
      title: "Le plus long massif de Croatie",
      text:
        "Le Velebit s'étend sur 145 km le long de l'Adriatique — de Vratnik au nord à la Zrmanja au sud. Ses canyons, sentiers forestiers, karsts et crêtes composent l'un des plus beaux paysages de randonnée d'Europe. De Paklenica à Zavižan, de Zavratnica aux Dabarski kukovi, le long du sentier Premužić et dans les salles souterraines des grottes de Cerovačke — chaque coin raconte une histoire différente.",
      stats: [
        { value: "1757 m", label: "Sommet Vaganski vrh" },
        { value: "145 km", label: "Longueur du massif" },
        { value: "2", label: "Parcs nationaux" },
        { value: "UNESCO", label: "Patrimoine mondial" },
      ],
    },
    paklenica: {
      category: "Parc national · UNESCO",
      title: "Paklenica",
      texts: [
        "Parc national classé UNESCO avec Velika et Mala Paklenica — canyons spectaculaires dans le Velebit méridional, falaises jusqu'à 400 m. Prisé des randonneurs et grimpeurs, avec plus de 150 km de sentiers balisés.",
      ],
      meta: ["150+ km de sentiers", "Escalade", "Forêt de pins"],
      imageAlt: "Parc national de Paklenica — falaises et pins",
    },
    zavratnica: {
      category: "Paysage protégé · Adriatique",
      title: "Crique de Zavratnica",
      texts: [
        "Paysage protégé et anse sur l'Adriatique nord, souvent appelé le fjord croate — falaises abruptes, eau turquoise calme sur 900 m, accessible en bateau depuis Jablanac ou à pied.",
      ],
      meta: ["900 m de long", "Bateau ou sentier", "Baignade & plongée"],
      imageAlt: "Crique de Zavratnica — falaises au-dessus de l'eau calme",
    },
    premuzic: {
      category: "Sentier de randonnée · Ouvrage d'art",
      title: "Sentier Premužić",
      texts: [
        "Le sentier Premužić est l'une des routes de randonnée les plus célèbres de Croatie et d'Europe. Long d'environ 57 km, il traverse le cœur du Velebit — de Baške Oštarije à Ostarije le long de la crête. Construit dans les années 1930 selon les plans d'Ante Premužić.",
        "Sa légende vient des murs de pierre sèche — pierres posées à la main sans mortier. Le sentier serpente à travers forêts et crêtes calcaires avec vue constante sur la mer, Pag et le Kvarner.",
        "Pour les hôtes de Stars Peak à Bačić Duliba, le sentier est à portée — étape d'une journée vers les Dabarski kukovi ou Alan, ou traversée de plusieurs jours avec nuits en refuges.",
      ],
      details: [
        "<strong>Longueur :</strong> environ 57 km (plusieurs étapes, 3–5 jours)",
        "<strong>Difficulté :</strong> modérée — randonneurs entraînés",
        "<strong>Direction :</strong> Baške Oštarije → Zavižan → Alan → Ostarije",
        "<strong>Accès depuis Bačić Duliba :</strong> jonction vers Alan et Dabarski kukovi",
        "<strong>Points forts :</strong> Rozanski kukovi, Veliki Lubenovac, Alan",
      ],
      meta: ["57 km", "Pierre sèche", "Vue sur la mer", "Près de Bačić Duliba"],
      imageAlt: "Sentier Premužić — chemin en pierre sèche sur la crête",
    },
    dabarski: {
      category: "Sommets · Karst · Velebit central",
      title: "Dabarski kukovi",
      texts: [
        "Impressionnants sommets calcaires du Velebit central — tour de roche au-dessus de Bačić Duliba. Sentiers à travers le karst avec vue panoramique sur la Lika et l'Adriatique. Destination favorite des randonneurs et des hôtes de Stars Peak.",
      ],
      meta: ["Karst & tours", "Panoramas", "Près de Bačić Duliba"],
      imageAlt: "Panorama des Dabarski kukovi",
    },
    sjeverni: {
      category: "Parc national",
      title: "Velebit Nord",
      texts: [
        "Le plus jeune parc national croate (1999) protège les parties les plus hautes et sauvages du Velebit. Rozanski kukovi, Štirovača, Veliki Lubenovac — sentiers en forêt dense, espèces endémiques et paysages intacts. Site UNESCO des forêts primaires de hêtres.",
      ],
      imageAlt: "Parc national du Velebit Nord",
    },
    zavizan: {
      category: "1594 m · Sommet le plus visité",
      title: "Zavižan",
      texts: [
        "Le refuge de Zavižan — le plus haut hébergement de Croatie — se dresse à 1594 m avec vue sur l'Adriatique, Pag et tout le Velebit nord. Sentiers vers les Rozanski kukovi et Veliki Lubenovac. Station météo réputée pour ses conditions extrêmes.",
      ],
      meta: ["1594 m", "Refuge", "Rozanski kukovi"],
      imageAlt: "Refuge de Zavižan",
    },
    tulove: {
      category: "Velebit sud · Lieu de tournage",
      title: "Tulove grede",
      texts: [
        "Crête spectaculaire du Velebit sud — falaises calcaires au-dessus de Gračac. Célèbre comme décor de Winnetou avec des panoramas dramatiques. Sentier à travers le karst avec vue sur la Lika.",
      ],
      meta: ["Winnetou", "Falaises calcaires", "Velebit sud"],
      imageAlt: "Tulove grede sur le Velebit",
    },
    speleoHero: {
      category: "Monde souterrain du Velebit",
      title: "Spéléologie sur le Velebit",
      texts: [
        "Le Velebit compte parmi les régions les plus riches en spéléologie d'Europe. Le massif calcaire cache des centaines de grottes — certaines ouvertes au public, d'autres réservées aux spéléologues équipés. Fossiles d'ours des cavernes et vestiges paléolithiques.",
        "Sites connus : grottes de Cerovačke près de Gračac, grotte Modrič à Paklenica, Lukina jama. Pour les hôtes de Stars Peak, les grottes de Cerovačke sont idéales — moins d'une heure de route.",
      ],
      imageAlt: "Spéléologie — grottes de Cerovačke",
    },
    cerovacke: {
      category: "Grottes de Cerovačke · Parc spéléologique",
      title: "Grottes de Cerovačke",
      texts: [
        "Les grottes de Cerovačke se trouvent à Grab près de Gračac, à la lisière du Velebit sud. Trois grottes — Basse, Haute et Nouvelle — avec plus de 7 km de galeries explorées. La grotte basse est visitable avec guide.",
        "Restes d'ours des cavernes (<em>Ursus spelaeus</em>) et traces paléolithiques. Stalactites et stalagmites composent des paysages souterrains impressionnants.",
        "L'un des rares endroits en Croatie où découvrir le monde souterrain sans équipement de spéléologie — en toute sécurité, avec guide.",
      ],
      details: [
        "<strong>Lieu :</strong> Grab, près de Gračac — Velebit sud",
        "<strong>Visites :</strong> guidées ; vêtements chauds (10–12 °C)",
        "<strong>Durée :</strong> environ 60 minutes par grotte",
        "<strong>Saison :</strong> printemps à automne",
        "<strong>À proximité :</strong> Tulove grede, NP Paklenica, grotte Modrič",
      ],
      meta: ["7+ km de galeries", "Ours des cavernes", "Visites guidées", "~60 min de Stars Peak"],
      imageAlt: "Grottes de Cerovačke",
    },
    pag: {
      category: "Île · Adriatique · Gastronomie",
      title: "Île de Pag",
      texts: [
        "L'une des îles les plus ensoleillées de Croatie — paysages de pierre, plages, moutons et fromage de Pag. Reliée au continent par un pont — excursion idéale : matin à la montagne, après-midi à la plage.",
      ],
      meta: ["Fromage de Pag", "2700+ h de soleil", "30 min de route"],
      imageAlt: "Île de Pag — côte pierreuse et vue sur l'Adriatique",
    },
    karlobag: {
      category: "Côte · Baignade · 30 minutes",
      title: "Karlobag",
      texts: [
        "La ville côtière la plus proche du Velebit — plages de galets et baignade en Adriatique avant le déjeuner. À 30 minutes de Stars Peak à Bačić Duliba.",
      ],
      meta: ["30 min du Velebit", "Plages de galets", "Montagne & mer"],
      imageAlt: "Karlobag — front de mer sur la côte du Velebit",
    },
    highlights: {
      title: "Pourquoi visiter le Velebit ?",
      lead: "Alliance unique de montagne alpine et de mer méditerranéenne — en une journée.",
      cards: [
        { icon: "⛰", title: "Randonnée", text: "Sentiers pour tous niveaux — de Zavratnica aux Dabarski kukovi et au sentier Premužić." },
        { icon: "🌊", title: "Adriatique à portée", text: "Karlobag, Zavratnica et Pag à une demi-heure — matin à 900 m, après-midi dans une mer cristalline." },
        { icon: "🌲", title: "Biodiversité", text: "Forêts primaires, espèces endémiques, ours et lynx — l'un des habitats les plus importants d'Europe." },
        { icon: "🕳", title: "Spéléologie", text: "Des centaines de grottes — Cerovačke, Modrič et Lukina jama, avec fossiles d'ours des cavernes." },
        { icon: "✦", title: "Étoiles", text: "Pas de pollution lumineuse — Voie lactée et silence des crêtes la nuit." },
      ],
    },
    footer: {
      tagline: "Montagne · Mer · Étoiles",
      credits:
        "Brochure touristique — attractions du Velebit.<br />Photos <a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> (Creative Commons) et site Stars Peak.<br />Bačić Duliba · Parc naturel Velebit · Croatie",
    },
  },

  it: {
    lang: "it",
    pageTitle: "Velebit — brochure turistica | Stars Peak",
    cover: {
      eyebrow: "UNESCO · Parco naturale · Due parchi nazionali",
      headline: "Cima. Mare. Stelle.",
      subline:
        "Chalet privato a 900 m con vista su Bačić Kuk — a 30 minuti dall'Adriatico.",
      hostDesc:
        "Chalet per vacanze privato a Bačić Duliba — ai piedi dei Dabarski kukovi, nel parco naturale Velebit. Affitto dell'intera casa, fino a 4 ospiti.",
      tagline: "Canyon · Creste · Grotte · Mare · Stelle",
      scroll: "Scopri il Velebit ↓",
      coverAlt: "Vista aerea del Velebit — parco nazionale del Velebit settentrionale",
    },
    intro: {
      label: "Benvenuti",
      title: "Il massiccio montuoso più lungo della Croazia",
      text:
        "Il Velebit si estende per 145 km lungo la costa adriatica — da Vratnik a nord fino alla Zrmanja a sud. Canyon, sentieri forestali, karst e creste formano uno dei paesaggi escursionistici più belli d'Europa. Da Paklenica a Zavižan, da Zavratnica ai Dabarski kukovi, lungo il sentiero Premužić e nelle sale sotterranee delle grotte di Cerovačke — ogni angolo racconta una storia diversa.",
      stats: [
        { value: "1757 m", label: "Cima Vaganski vrh" },
        { value: "145 km", label: "Lunghezza del massiccio" },
        { value: "2", label: "Parchi nazionali" },
        { value: "UNESCO", label: "Patrimonio mondiale" },
      ],
    },
    paklenica: {
      category: "Parco nazionale · UNESCO",
      title: "Paklenica",
      texts: [
        "Parco nazionale UNESCO con Velika e Mala Paklenica — canyon spettacolari sul versante meridionale del Velebit, pareti fino a 400 m. Meta amata da escursionisti e arrampicatori, con oltre 150 km di sentieri segnalati.",
      ],
      meta: ["150+ km di sentieri", "Arrampicata", "Pineta"],
      imageAlt: "Parco nazionale di Paklenica — pareti rocciose e pineta",
    },
    zavratnica: {
      category: "Paesaggio protetto · Adriatico",
      title: "Baia di Zavratnica",
      texts: [
        "Area protetta e baia sull'Adriatico settentrionale, spesso chiamata il fiordo croato — scogliere ripide, acqua turchese calma per 900 m, raggiungibile in barca da Jablanac o a piedi.",
      ],
      meta: ["900 m di lunghezza", "Barca o sentiero", "Nuoto & immersioni"],
      imageAlt: "Baia di Zavratnica — scogliere sull'acqua calma",
    },
    premuzic: {
      category: "Sentiero escursionistico · Opera d'ingegneria",
      title: "Sentiero Premužić",
      texts: [
        "Il sentiero Premužić è uno degli itinerari più celebri in Croazia e in Europa. Lungo circa 57 km, attraversa il cuore del Velebit — da Baške Oštarije a Ostarije lungo la cresta. Costruito negli anni Trenta su idea di Ante Premužić.",
        "Leggendario per i muri a secco — pietre posate a mano senza malta. Il sentiero serpeggia tra boschi e creste calcaree con vista costante su mare, Pag e Quarnaro.",
        "Per gli ospiti di Stars Peak a Bačić Duliba il sentiero è vicino — tappa giornaliera verso i Dabarski kukovi o Alan, o traversata di più giorni con pernottamento in rifugi.",
      ],
      details: [
        "<strong>Lunghezza:</strong> circa 57 km (più tappe, 3–5 giorni)",
        "<strong>Difficoltà:</strong> moderata — escursionisti allenati",
        "<strong>Direzione:</strong> Baške Oštarije → Zavižan → Alan → Ostarije",
        "<strong>Accesso da Bačić Duliba:</strong> collegamento verso Alan e Dabarski kukovi",
        "<strong>Highlight:</strong> Rozanski kukovi, Veliki Lubenovac, Alan",
      ],
      meta: ["57 km", "Pietra a secco", "Vista mare", "Vicino a Bačić Duliba"],
      imageAlt: "Sentiero Premužić — percorso a secco sul crinale",
    },
    dabarski: {
      category: "Vette · Karst · Velebit centrale",
      title: "Dabarski kukovi",
      texts: [
        "Imponenti vette calcaree del Velebit centrale — torri sopra Bačić Duliba. Sentieri attraverso il karst con vista panoramica sulla Lika e l'Adriatico. Meta preferita di escursionisti e ospiti di Stars Peak.",
      ],
      meta: ["Karst & torri", "Panorami", "Vicino a Bačić Duliba"],
      imageAlt: "Panorama dei Dabarski kukovi",
    },
    sjeverni: {
      category: "Parco nazionale",
      title: "Velebit settentrionale",
      texts: [
        "Il parco nazionale più giovane della Croazia (1999) protegge le parti più alte e selvagge del Velebit. Rozanski kukovi, Štirovača, Veliki Lubenovac — sentieri in foresta fitta, specie endemiche e paesaggi intatti. Sito UNESCO delle foreste primarie di faggio.",
      ],
      imageAlt: "Parco nazionale del Velebit settentrionale",
    },
    zavizan: {
      category: "1594 m s.l.m. · Cima più visitata",
      title: "Zavižan",
      texts: [
        "Il rifugio Zavižan — la struttura ricettiva più alta della Croazia — si trova a 1594 m con vista su Adriatico, Pag e tutto il Velebit settentrionale. Sentieri verso i Rozanski kukovi e Veliki Lubenovac. Stazione meteorologica nota per condizioni estreme.",
      ],
      meta: ["1594 m s.l.m.", "Rifugio", "Rozanski kukovi"],
      imageAlt: "Rifugio Zavižan",
    },
    tulove: {
      category: "Velebit meridionale · Location cinematografica",
      title: "Tulove grede",
      texts: [
        "Spettacolare cresta del Velebit meridionale — rocce calcaree sopra Gračac. Famosa come set di Winnetou con panorami drammatici. Sentiero attraverso il karst con vista sulla Lika.",
      ],
      meta: ["Winnetou", "Rocce calcaree", "Velebit meridionale"],
      imageAlt: "Tulove grede sul Velebit",
    },
    speleoHero: {
      category: "Mondo sotterraneo del Velebit",
      title: "Speleologia sul Velebit",
      texts: [
        "Il Velebit è tra le aree speleologiche più ricche d'Europa. Il massiccio calcareo nasconde centinaia di grotte — alcune aperte al pubblico, altre solo per speleologi equipaggiati. Fossili dell'orso delle caverne e reperti paleolitici.",
        "Siti noti: grotte di Cerovačke vicino a Gračac, grotta Modrič a Paklenica, Lukina jama. Per gli ospiti di Stars Peak, le grotte di Cerovačke sono ideali — meno di un'ora di auto.",
      ],
      imageAlt: "Speleologia — grotte di Cerovačke",
    },
    cerovacke: {
      category: "Grotte di Cerovačke · Parco speleologico",
      title: "Grotte di Cerovačke",
      texts: [
        "Le grotte di Cerovačke si trovano a Grab vicino a Gračac, al margine del Velebit meridionale. Tre grotte — Bassa, Alta e Nuova — con oltre 7 km di cunicoli esplorati. La grotta bassa è visitabile con guida.",
        "Resti dell'orso delle caverne (<em>Ursus spelaeus</em>) e reperti paleolitici. Stalattiti e stalagmiti creano paesaggi sotterranei impressionanti.",
        "Uno dei pochi luoghi in Croazia dove vivere il mondo sotterraneo senza attrezzatura da speleologia — in sicurezza, con guida esperta.",
      ],
      details: [
        "<strong>Luogo:</strong> Grab, vicino a Gračac — Velebit meridionale",
        "<strong>Visite:</strong> guidate; abbigliamento caldo (10–12 °C)",
        "<strong>Durata:</strong> circa 60 minuti per grotta",
        "<strong>Stagione:</strong> primavera–autunno",
        "<strong>Vicino:</strong> Tulove grede, NP Paklenica, grotta Modrič",
      ],
      meta: ["7+ km di cunicoli", "Orso delle caverne", "Visite guidate", "~60 min da Stars Peak"],
      imageAlt: "Grotte di Cerovačke",
    },
    pag: {
      category: "Isola · Adriatico · Gastronomia",
      title: "Isola di Pag",
      texts: [
        "Una delle isole più soleggiate della Croazia — paesaggi di pietra, spiagge, pecore pag e formaggio. Collegata alla terraferma da un ponte — gita ideale: mattina in montagna, pomeriggio in spiaggia.",
      ],
      meta: ["Formaggio di Pag", "2700+ ore di sole", "30 min di auto"],
      imageAlt: "Isola di Pag — costa di pietra e vista sull'Adriatico",
    },
    karlobag: {
      category: "Costa · Nuoto · 30 minuti",
      title: "Karlobag",
      texts: [
        "La città costiera più vicina al Velebit — spiagge di ciottoli e nuoto in Adriatico prima di pranzo. A 30 minuti da Stars Peak a Bačić Duliba.",
      ],
      meta: ["30 min dal Velebit", "Spiagge di ciottoli", "Montagna & mare"],
      imageAlt: "Karlobag — lungomare sulla costa del Velebit",
    },
    highlights: {
      title: "Perché visitare il Velebit?",
      lead: "Unione unica di montagna alpina e mare mediterraneo — in un solo giorno.",
      cards: [
        { icon: "⛰", title: "Escursionismo", text: "Sentieri per ogni livello — da Zavratnica ai Dabarski kukovi e al sentiero Premužić." },
        { icon: "🌊", title: "Adriatico a portata", text: "Karlobag, Zavratnica e Pag a mezz'ora — mattina a 900 m, pomeriggio in mare cristallino." },
        { icon: "🌲", title: "Biodiversità", text: "Foreste primordiali, specie endemiche, orsi e lince — uno degli habitat più importanti d'Europa." },
        { icon: "🕳", title: "Speleologia", text: "Centinaia di grotte — Cerovačke, Modrič e Lukina jama, con fossili dell'orso delle caverne." },
        { icon: "✦", title: "Stelle", text: "Nessun inquinamento luminoso — Via Lattea e silenzio della cresta di notte." },
      ],
    },
    footer: {
      tagline: "Montagna · Mare · Stelle",
      credits:
        "Brochure turistica — attrazioni del Velebit.<br />Foto da <a href=\"https://commons.wikimedia.org/\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> (Creative Commons) e sito Stars Peak.<br />Bačić Duliba · Parco naturale Velebit · Croazia",
    },
  },
};
