import type { Locale } from "@/app/lib/i18n";

export type ProjectContent = {
  title: string;
  eyebrow: string;
  summary: string;
  location: string;
  timeframe: string;
  scope: string[];
  description: string[];
  keywords: string[];
  coverAlt: string;
};

export type GalleryItemSource = {
  src?: string;
  nl: { alt: string; label: string };
  en: { alt: string; label: string };
};

export type ProjectSource = {
  slug: string;
  cover: string;
  gallery: GalleryItemSource[];
  nl: ProjectContent;
  en: ProjectContent;
};

export const projectSources: ProjectSource[] = [
  {
    slug: "garden-patio",
    cover: "/images/garden-patio-exterior.png",
    gallery: [
      {
        src: "/images/garden-patio-exterior.png",
        nl: {
          alt: "Aanbouw aan de salon met openslaande deuren naar een vernieuwde tuin met grijze bestrating en kunstgras.",
          label: "Salon en tuin",
        },
        en: {
          alt: "Rear salon extension with patio doors opening onto a rebuilt garden with grey paving and artificial grass.",
          label: "Salon and garden",
        },
      },
      {
        src: "/images/garden-patio-open-plan.png",
        nl: {
          alt: "Open leefruimte na de interieurverbouwing, met lichte houten vloer en ingebouwde plafondverlichting.",
          label: "Open leefruimte",
        },
        en: {
          alt: "Open-plan living space after the interior renovation, with light wood flooring and recessed ceiling lighting.",
          label: "Open-plan living",
        },
      },
      {
        src: "/images/garden-patio-living-room.png",
        nl: {
          alt: "Vernieuwde woonkamer met nieuwe vloer, verlichting en een duidelijkere indeling door de woning.",
          label: "Woonruimte",
        },
        en: {
          alt: "Renovated living area with new flooring, lighting and a clearer layout through the home.",
          label: "Living area",
        },
      },
      {
        src: "/images/garden-patio-feature-wall.png",
        nl: {
          alt: "Afgewerkte accentwand in de salon met houten latten, marmeren tv-paneel en ingebouwde zitbank.",
          label: "Accentwand salon",
        },
        en: {
          alt: "Finished feature wall in the salon with wood slat panelling, marble TV panel and built-in bench seating.",
          label: "Salon feature wall",
        },
      },
      {
        src: "/images/garden-patio-dining-area.png",
        nl: {
          alt: "Eethoek in de vernieuwde open ruimte met nieuwe vloer en vloer-tot-plafond ramen.",
          label: "Eethoek",
        },
        en: {
          alt: "Dining area in the renovated open-plan space with new flooring and floor-to-ceiling windows.",
          label: "Dining area",
        },
      },
      {
        src: "/images/garden-patio-backyard.png",
        nl: {
          alt: "Afgewerkte achtertuin met grijze bestrating, kunstgras, grindpaden, beplanting en een houten brugdetail.",
          label: "Afgewerkte tuin",
        },
        en: {
          alt: "Finished backyard with grey paving, artificial grass, pebble paths, planting and a wooden bridge detail.",
          label: "Finished garden",
        },
      },
    ],
    nl: {
      title: "Salonuitbreiding, interieurverbouwing en tuin",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Een complete woningupgrade: vernieuwde leefruimtes binnen, een nieuwe uitbreiding van de salon met tuintoegang, en een achtertuin opnieuw ingericht met bestrating, niveaus en beplanting.",
      location: "Nederland",
      timeframe: "Verbouwing, aanbouw en tuinproject",
      scope: [
        "Interieurverbouwing en afwerking",
        "Salonuitbreiding met openslaande deuren",
        "Terrasbestrating en niveaus",
        "Tuinontwerp en drainage",
      ],
      description: [
        "De eigenaren wilden meer bruikbare ruimte zonder de verbinding met de tuin te verliezen. Binnen vernieuwden we de leefruimtes met nieuwe vloeren, verlichting en afwerkingswerk zodat de woning weer open en netjes afgewerkt aanvoelde.",
        "We bouwden een aanbouw aan de salon, met grote openslaande deuren die direct op de tuin uitkomen. Dat gaf het gezin meer leefruimte en een duidelijke overgang van binnen naar buiten.",
        "Buiten pakten we de tuin goed aan: nieuwe bestrating, gecorrigeerde niveaus voor drainage, kunstgras en plantenborders, en een indeling die het hele jaar door makkelijk te onderhouden is.",
      ],
      keywords: [
        "woningverbouwing Nederland",
        "salonuitbreiding Nederland",
        "interieurverbouwing Nederland",
        "tuinrenovatie Nederland",
        "terras bestrating Nederland",
      ],
      coverAlt:
        "Salonuitbreiding en vernieuwde tuin bij een bakstenen woning in Nederland, met terrasbestrating, tuindeuren en een afgewerkte achtertuin.",
    },
    en: {
      title: "Salon extension, interior renovation and garden",
      eyebrow: "Renovation and garden",
      summary:
        "A full home upgrade: refreshed living spaces inside, a new extension to the salon with garden access, and a backyard rebuilt with paving, levels and planting.",
      location: "Netherlands",
      timeframe: "Renovation, extension and garden project",
      scope: [
        "Interior renovation and finishing",
        "Salon extension with patio doors",
        "Patio paving and levels",
        "Garden landscaping and drainage",
      ],
      description: [
        "The owners wanted more usable space without losing the connection to the garden. Inside, we refreshed the living areas with new flooring, lighting and finish work so the home felt open and properly finished again.",
        "We built a rear extension to the salon, with large patio doors that open straight onto the garden. That gave the family more room to live in and a clear step from inside to outside.",
        "Outside, we fixed the garden properly: new paving, corrected levels for drainage, artificial grass and planting borders, and a layout that is easy to maintain through the year.",
      ],
      keywords: [
        "home renovation Netherlands",
        "salon extension Netherlands",
        "interior renovation Netherlands",
        "garden renovation Netherlands",
        "patio paving Netherlands",
      ],
      coverAlt:
        "Salon extension and renovated garden at a brick home in the Netherlands, with patio paving, garden doors and a finished backyard.",
    },
  },
  {
    slug: "rear-extension",
    cover: "/images/rear-extension-patio-evening.png",
    gallery: [
      {
        src: "/images/rear-extension-garden-room.png",
        nl: {
          alt: "Afgewerkte buitenruimte met stenen bestrating, marmeren wanden en ingebouwde plafondverlichting.",
          label: "Tuin en buitenruimte",
        },
        en: {
          alt: "Finished outdoor living space with stone paving, marble-lined walls and recessed ceiling lighting.",
          label: "Garden and outdoor area",
        },
      },
      {
        src: "/images/rear-extension-patio-evening.png",
        nl: {
          alt: "Vernieuwde tuin met stenen bestrating, kunstgras en warme buitenverlichting bij schemer.",
          label: "Tuin bij schemer",
        },
        en: {
          alt: "Rebuilt garden with stone paving, artificial grass and warm outdoor lighting at dusk.",
          label: "Garden at dusk",
        },
      },
      {
        src: "/images/rear-extension-backyard-evening.png",
        nl: {
          alt: "Afgewerkte achtertuin met verhard terras, gazon, beplanting en tuinverlichting.",
          label: "Achtertuin overzicht",
        },
        en: {
          alt: "Finished backyard with paved terrace, lawn, planting and garden lighting.",
          label: "Backyard overview",
        },
      },
      {
        src: "/images/rear-extension-kitchen.png",
        nl: {
          alt: "Vernieuwde keuken en woonruimte met nieuwe vloer, keukeninrichting en plafondafwerking.",
          label: "Interieurverbouwing",
        },
        en: {
          alt: "Renovated kitchen and living space with new flooring, cabinetry and ceiling finishes.",
          label: "Interior renovation",
        },
      },
      {
        src: "/images/rear-extension-bathroom-vanity.png",
        nl: {
          alt: "Vernieuwde badkamer met nieuw wandtegelwerk en een zwevende wastafel.",
          label: "Badkamerrenovatie",
        },
        en: {
          alt: "Renovated bathroom with new wall tiling and a floating vanity.",
          label: "Bathroom renovation",
        },
      },
      {
        src: "/images/rear-extension-bathroom-shower.png",
        nl: {
          alt: "Vernieuwde toilet- en doucheruimte met tegelwerk van vloer tot plafond en een inloopdouche.",
          label: "Toilet en douche",
        },
        en: {
          alt: "Renovated toilet and shower room with floor-to-ceiling tiling and a walk-in shower.",
          label: "Toilet and shower",
        },
      },
    ],
    nl: {
      title: "Tuin, verbouwing en badkamerupgrade",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Een complete woningvernieuwing: tuin opnieuw ingericht met bestrating en verlichting, vloerverwarming, toilet- en badkamerrenovatie, gipsplaatafwerking en algemeen interieurwerk.",
      location: "Nederland",
      timeframe: "Verbouwing en tuinproject",
      scope: [
        "Tuinbestrating, beplanting en buitenverlichting",
        "Vloerverwarming",
        "Toilet- en badkamerrenovatie",
        "Gipsplaatwanden en plafonds",
        "Algemene interieurverbouwing",
      ],
      description: [
        "Dit was een brede verbouwing, niet alleen één kamer. Binnen vernieuwden we wanden en plafonds met gipsplaat, legden we vloerverwarming aan en werkten we de ruimtes af zodat de woning weer echt vernieuwd aanvoelde — inclusief keuken en woonruimtes.",
        "Het toilet en de badkamer werden volledig gerenoveerd: nieuw tegelwerk, een inloopdouche, vernieuwd sanitair en nette, doorlopende afwerking van vloer tot plafond.",
        "Buiten bouwden we de tuin opnieuw op met verharde terrassen, gazon, beplanting en geïntegreerde verlichting. Het resultaat is een woning die dagelijks beter werkt, met warme vloeren binnen en een tuin die 's avonds ook bruikbaar is.",
      ],
      keywords: [
        "woningverbouwing Nederland",
        "tuinrenovatie Nederland",
        "vloerverwarming Nederland",
        "vloerverwarming",
        "toiletrenovatie Nederland",
        "gipsplaat verbouwing",
      ],
      coverAlt:
        "Afgewerkte tuin en buitenruimte bij een woning in Nederland, met stenen bestrating en geïntegreerde verlichting bij schemer.",
    },
    en: {
      title: "Garden, renovation and bathroom upgrade",
      eyebrow: "Renovation and garden",
      summary:
        "A full home refresh: garden rebuilt with paving and lighting, underfloor heating, toilet and bathroom renovation, gypsum board finishes and general interior work.",
      location: "Netherlands",
      timeframe: "Renovation and garden project",
      scope: [
        "Garden paving, planting and outdoor lighting",
        "Underfloor heating (vloerverwarming)",
        "Toilet and bathroom renovation",
        "Gypsum board walls and ceilings",
        "General interior renovation",
      ],
      description: [
        "This was a broad renovation job, not just one room. Inside, we renewed walls and ceilings with gypsum board, laid underfloor heating and finished the spaces so the home felt properly updated again — including the kitchen and living areas.",
        "The toilet and bathroom were fully renovated: new tiling, a walk-in shower, updated sanitary ware and clean, continuous finishes from floor to ceiling.",
        "Outside, we rebuilt the garden with paved terraces, lawn, planting and integrated lighting. The result is a home that works better day to day, with warm floors inside and a garden that is usable in the evening too.",
      ],
      keywords: [
        "home renovation Netherlands",
        "garden renovation Netherlands",
        "underfloor heating Netherlands",
        "vloerverwarming",
        "toilet renovation Netherlands",
        "gypsum board renovation",
      ],
      coverAlt:
        "Finished garden and outdoor living area at a home in the Netherlands, with stone paving and integrated lighting at dusk.",
    },
  },
  {
    slug: "bathroom-renovation",
    cover: "/images/renovation-garden-patio.png",
    gallery: [
      {
        src: "/images/renovation-garden-patio.png",
        nl: {
          alt: "Afgewerkte tuin met verhard terras, kunstgras, bakstenen muur en warme buitenverlichting bij schemer.",
          label: "Tuin en terras",
        },
        en: {
          alt: "Finished garden with paved patio, artificial grass, brick wall and warm outdoor lighting at dusk.",
          label: "Garden and patio",
        },
      },
      {
        src: "/images/renovation-garden-evening.png",
        nl: {
          alt: "Achtertuinrenovatie met bestrating, gazon, beplanting en wandverlichting langs een bakstenen erfafscheiding.",
          label: "Tuin bij schemer",
        },
        en: {
          alt: "Backyard renovation with paving, lawn, planting and wall lights along a brick boundary.",
          label: "Garden at dusk",
        },
      },
      {
        src: "/images/renovation-lounge.png",
        nl: {
          alt: "Vernieuwde lounge met nieuwe vloer, witte muren en openslaande deuren naar de tuin.",
          label: "Woonkamer",
        },
        en: {
          alt: "Renovated lounge with new flooring, white walls and patio doors opening to the garden.",
          label: "Living room",
        },
      },
      {
        src: "/images/renovation-living-room.png",
        nl: {
          alt: "Afgewerkte interieurruimte met gipsplaatwanden, houten vloer en ingebouwde plafondverlichting.",
          label: "Interieurverbouwing",
        },
        en: {
          alt: "Finished interior room with gypsum board walls, wood flooring and recessed ceiling lighting.",
          label: "Interior renovation",
        },
      },
      {
        src: "/images/renovation-bathroom.png",
        nl: {
          alt: "Vernieuwde badkamer en toilet met marmerlook wandtegels, inloopdouche en matzwarte kranen.",
          label: "Badkamerrenovatie",
        },
        en: {
          alt: "Renovated bathroom and toilet with marble-effect wall tiles, walk-in shower and matte-black fixtures.",
          label: "Bathroom renovation",
        },
      },
      {
        src: "/images/renovation-shower.png",
        nl: {
          alt: "Inloopdouche met ingebouwde zitbank, glazen wand en zwarte regendouche.",
          label: "Inloopdouche",
        },
        en: {
          alt: "Walk-in shower with built-in bench, glass partition and black rainfall shower fittings.",
          label: "Walk-in shower",
        },
      },
    ],
    nl: {
      title: "Tuin, verbouwing en badkamer",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Tuin opnieuw ingericht met bestrating en verlichting, toilet en badkamer volledig gerenoveerd, gipsplaatafwerking en algemeen interieurwerk door de hele woning.",
      location: "Nederland",
      timeframe: "Verbouwing en tuinproject",
      scope: [
        "Tuinbestrating, beplanting en buitenverlichting",
        "Toilet- en badkamerrenovatie",
        "Gipsplaatwanden en plafonds",
        "Algemene interieurverbouwing",
      ],
      description: [
        "Binnen vernieuwden we wanden en plafonds met gipsplaat en werkten we de leefruimtes af met nieuwe vloeren, verlichting en nette details zodat de woning weer echt vernieuwd aanvoelde.",
        "Het toilet en de badkamer werden volledig gerenoveerd: nieuw tegelwerk, een inloopdouche met ingebouwde zitbank, vernieuwd sanitair en matzwarte kranen en accessoires.",
        "Buiten bouwden we de tuin opnieuw op met verharde terrassen, kunstgras, beplanting en wandverlichting. Een praktische afwerking — hetzelfde soort werk als onze andere verbouwingsprojecten, maar zonder vloerverwarming bij deze klus.",
      ],
      keywords: [
        "woningverbouwing Nederland",
        "tuinrenovatie Nederland",
        "toiletrenovatie Nederland",
        "badkamer renovatie Nederland",
        "gipsplaat verbouwing",
        "badkamer renovatie",
      ],
      coverAlt:
        "Vernieuwde tuin en terras bij een woning in Nederland, met bestrating, kunstgras en buitenverlichting bij schemer.",
    },
    en: {
      title: "Garden, renovation and bathroom",
      eyebrow: "Renovation and garden",
      summary:
        "Garden rebuilt with paving and lighting, toilet and bathroom fully renovated, gypsum board finishes and general interior work throughout the home.",
      location: "Netherlands",
      timeframe: "Renovation and garden project",
      scope: [
        "Garden paving, planting and outdoor lighting",
        "Toilet and bathroom renovation",
        "Gypsum board walls and ceilings",
        "General interior renovation",
      ],
      description: [
        "Inside, we renewed walls and ceilings with gypsum board and finished the living spaces with new flooring, lighting and clean details so the home felt properly updated again.",
        "The toilet and bathroom were fully renovated: new tiling, a walk-in shower with a built-in bench, updated sanitary ware and matte-black fixtures throughout.",
        "Outside, we rebuilt the garden with paved terraces, artificial grass, planting and wall lighting. A practical finish — the same kind of work as our other renovation projects, but without underfloor heating on this job.",
      ],
      keywords: [
        "home renovation Netherlands",
        "garden renovation Netherlands",
        "toilet renovation Netherlands",
        "bathroom renovation Netherlands",
        "gypsum board renovation",
        "badkamer renovatie Netherlands",
      ],
      coverAlt:
        "Renovated garden and patio at a home in the Netherlands, with paving, artificial grass and outdoor lighting at dusk.",
    },
  },
  {
    slug: "floor-heating-marble",
    cover: "/images/floor-heating-finished-marble.png",
    gallery: [
      {
        src: "/images/floor-heating-underfloor-installation.png",
        nl: {
          alt: "Vloerverwarmingsleidingen gelegd op noppenplaten vóór het storten van de dekvloer.",
          label: "Vloerverwarming",
        },
        en: {
          alt: "Underfloor heating pipes laid on studded insulation boards before the screed is poured.",
          label: "Underfloor heating",
        },
      },
      {
        src: "/images/floor-heating-pipe-layout.png",
        nl: {
          alt: "Verwarmingsleidingcircuits bevestigd in vloerpanelen door een vernieuwde ruimte.",
          label: "Leidingindeling",
        },
        en: {
          alt: "Heating pipe circuits clipped into floor panels across a renovated room.",
          label: "Pipe layout",
        },
      },
      {
        src: "/images/floor-heating-tile-installation.png",
        nl: {
          alt: "Grote marmerlook tegels worden gelegd op een voorbereide vloer met afstandhouders en lijm.",
          label: "Tegelwerk",
        },
        en: {
          alt: "Large marble-effect tiles being laid on a prepared floor with spacers and adhesive.",
          label: "Tile installation",
        },
      },
      {
        src: "/images/floor-heating-marble-laying.png",
        nl: {
          alt: "Marmeren platen geplaatst met een nivelleersysteem tijdens de installatie.",
          label: "Marmer leggen",
        },
        en: {
          alt: "Marble slabs placed with a tile levelling system during installation.",
          label: "Marble slab laying",
        },
      },
      {
        src: "/images/floor-heating-finished-marble.png",
        nl: {
          alt: "Afgewerkte marmeren vloer met gepolijste tegels, koofverlichting en afgewerkte wanden.",
          label: "Afgewerkte vloer",
        },
        en: {
          alt: "Completed marble floor with polished tiles, cove lighting and finished walls.",
          label: "Finished floor",
        },
      },
    ],
    nl: {
      title: "Vloerverwarming en marmeren vloeren",
      eyebrow: "Vloeren en verbouwing",
      summary:
        "Complete vloeropbouw: vloerverwarming geïnstalleerd, betonvloer gestort en grote marmeren tegels gelegd in vernieuwde leefruimtes.",
      location: "Nederland",
      timeframe: "Vloerverwarming en tegelproject",
      scope: [
        "Vloerverwarming",
        "Betonvloer storten",
        "Grote marmeren tegels leggen",
        "Gipsplaatwanden en plafondafwerking",
      ],
      description: [
        "De vloer moest vanaf de basis goed worden opgebouwd. We installeerden vloerverwarming op isolatieplaten, legden de leidingcircuits aan en bereidden de ondervloer voor op de dekvloer.",
        "Nadat de betonvloer was gestort en uitgehard, egaliseerden we het oppervlak en legden we grote marmeren tegels met een nivelleersysteem zodat de afwerking over de hele ruimte vlak blijft.",
        "Het resultaat is een warme, stevige vloer met een nette marmeren afwerking — klaar voor de rest van de interieurverbouwing, inclusief nieuwe wanden, verlichting en koofdetails.",
      ],
      keywords: [
        "vloerverwarming Nederland",
        "vloerverwarming",
        "marmeren vloer leggen",
        "betonvloer storten",
        "vloerrenovatie Nederland",
      ],
      coverAlt:
        "Afgewerkte marmeren vloer in een vernieuwde ruimte in Nederland, met vloerverwarming eronder en koofverlichting in het plafond.",
    },
    en: {
      title: "Underfloor heating and marble floors",
      eyebrow: "Floors and renovation",
      summary:
        "Full floor build-up: underfloor heating installed, concrete screed poured and large-format marble tiles laid across renovated living spaces.",
      location: "Netherlands",
      timeframe: "Floor heating and tiling project",
      scope: [
        "Underfloor heating (vloerverwarming)",
        "Concrete screed pouring",
        "Large-format marble tile installation",
        "Gypsum board walls and ceiling finishes",
      ],
      description: [
        "The floor needed to be rebuilt properly from the ground up. We installed underfloor heating on insulation boards, laid the pipe circuits and prepared the subfloor for screed.",
        "Once the concrete screed was poured and cured, we levelled the surface and laid large-format marble tiles with a levelling system so the finish stays flat across the full room.",
        "The result is a warm, solid floor with a clean marble finish — ready for the rest of the interior renovation, including new walls, lighting and cove details.",
      ],
      keywords: [
        "underfloor heating Netherlands",
        "vloerverwarming Netherlands",
        "marble floor installation",
        "concrete screed pouring",
        "floor renovation Netherlands",
      ],
      coverAlt:
        "Finished marble floor in a renovated room in the Netherlands, with underfloor heating beneath and cove lighting in the ceiling.",
    },
  },
  {
    slug: "toilet-renovation",
    cover: "/images/toilet-renovation-finished.png",
    gallery: [
      {
        src: "/images/toilet-renovation-demolition.png",
        nl: {
          alt: "Badkamer gestript tijdens de sloop, met oude tegels verwijderd en puin opgeruimd.",
          label: "Sloop",
        },
        en: {
          alt: "Bathroom stripped back during demolition, with old tiles removed and debris cleared.",
          label: "Strip-out",
        },
      },
      {
        src: "/images/toilet-renovation-stripped.png",
        nl: {
          alt: "Kale badkamerwanden en -vloer voorbereid voor nieuwe leidingen en waterdichting.",
          label: "Voorbereide ruimte",
        },
        en: {
          alt: "Bare bathroom walls and floor prepared for new plumbing and waterproofing.",
          label: "Prepared room",
        },
      },
      {
        src: "/images/toilet-renovation-waterproofing.png",
        nl: {
          alt: "Blauw waterdicht membraan aangebracht op wanden en vloer met ingebouwd toiletframe.",
          label: "Waterdichting",
        },
        en: {
          alt: "Blue waterproof membrane applied to walls and floor with a concealed toilet frame installed.",
          label: "Waterproofing",
        },
      },
      {
        src: "/images/toilet-renovation-tiling.png",
        nl: {
          alt: "Grootformaat tegels worden gelegd op wanden en vloer met nivelleersysteem en lineaire afvoer.",
          label: "Tegelwerk",
        },
        en: {
          alt: "Large-format tiles being laid on walls and floor with a levelling system and linear drain.",
          label: "Tiling",
        },
      },
      {
        src: "/images/toilet-renovation-vanity.png",
        nl: {
          alt: "Zwevende houten wastafel geplaatst met dubbele wastafel en grootformaat grijze wandtegels.",
          label: "Wastafel geplaatst",
        },
        en: {
          alt: "Floating wood vanity fitted with a double basin and large-format grey wall tiles.",
          label: "Vanity fitted",
        },
      },
      {
        src: "/images/toilet-renovation-finished.png",
        nl: {
          alt: "Afgewerkte badkamer met inloopdouche, hangend toilet en doorlopend beige tegelwerk.",
          label: "Afgewerkte badkamer",
        },
        en: {
          alt: "Completed bathroom with walk-in shower, wall-hung toilet and continuous beige tiling.",
          label: "Finished bathroom",
        },
      },
    ],
    nl: {
      title: "Toilet- en badkamerrenovatie",
      eyebrow: "Badkamer",
      summary:
        "Een complete toilet- en natte-ruimterenovatie: gestript, waterdicht gemaakt, opnieuw betegeld van wand tot vloer en afgewerkt met inloopdouche, hangend toilet en zwevende wastafel.",
      location: "Nederland",
      timeframe: "Badkamerrenovatieproject",
      scope: [
        "Sloop en strippen",
        "Waterdichte natte-ruimte",
        "Hangend toilet installeren",
        "Grootformaat wand- en vloertegels",
        "Inloopdouche en wastafel plaatsen",
      ],
      description: [
        "De oude badkamer was verouderd en slecht ingedeeld. We strippten alles terug tot de constructie, verwijderden het oude tegelwerk en bereidden de ruimte goed voor op een natte-ruimteafwerking.",
        "We tankten wanden en vloer met een waterdicht membraan, bouwden het verborgen toiletframe in en legden grootformaat tegels met een nivelleersysteem zodat wanden en vloer netjes op elkaar aansluiten.",
        "De ruimte werd afgewerkt met een hangend toilet, inloopdouche met glazen wand, lineaire afvoer en een zwevende wastafel — een compacte ruimte die groter aanvoelt en gebouwd is om lang mee te gaan.",
      ],
      keywords: [
        "toiletrenovatie Nederland",
        "badkamer renovatie Nederland",
        "natte ruimte renovatie",
        "inloopdouche plaatsen",
        "badkamer renovatie",
      ],
      coverAlt:
        "Afgewerkte toilet- en badkamerrenovatie in Nederland met inloopdouche, hangend toilet en beige marmerlook tegels.",
    },
    en: {
      title: "Toilet and bathroom renovation",
      eyebrow: "Bathroom",
      summary:
        "A full toilet and wet-room renovation: stripped back, waterproofed, retiled wall to floor and finished with a walk-in shower, wall-hung toilet and floating vanity.",
      location: "Netherlands",
      timeframe: "Bathroom renovation project",
      scope: [
        "Strip-out and demolition",
        "Wet-room waterproofing",
        "Wall-hung toilet installation",
        "Large-format wall and floor tiling",
        "Walk-in shower and vanity fitting",
      ],
      description: [
        "The old bathroom was tired and poorly laid out. We stripped it back to the structure, cleared the old tiles and prepared the room properly for a wet-room finish.",
        "We tanked the walls and floor with waterproof membrane, built in the concealed toilet frame and laid large-format tiles with a levelling system so walls and floor line up cleanly.",
        "The room was finished with a wall-hung toilet, walk-in shower with a glass partition, linear drain and a floating vanity — a compact space that feels bigger and is built to last.",
      ],
      keywords: [
        "toilet renovation Netherlands",
        "bathroom renovation Netherlands",
        "wet room renovation",
        "walk-in shower installation",
        "badkamer renovatie Netherlands",
      ],
      coverAlt:
        "Finished toilet and bathroom renovation in the Netherlands with walk-in shower, wall-hung toilet and beige marble-effect tiling.",
    },
  },
  {
    slug: "kitchen-extension",
    cover: "/images/kitchen-extension-exterior-finished.png",
    gallery: [
      {
        src: "/images/kitchen-extension-before.png",
        nl: {
          alt: "Originele krappe keuken vóór de start van de aanbouw.",
          label: "Keuken vóór",
        },
        en: {
          alt: "Original cramped kitchen before the extension work started.",
          label: "Kitchen before",
        },
      },
      {
        src: "/images/kitchen-extension-structure.png",
        nl: {
          alt: "Achtergevel geopend met stalen latei en funderingen van de aanbouw in de tuin.",
          label: "Constructie en fundering",
        },
        en: {
          alt: "Rear wall opened with a steel lintel and extension foundations laid in the garden.",
          label: "Structure and foundations",
        },
      },
      {
        src: "/images/kitchen-extension-build-progress.png",
        nl: {
          alt: "Aanbouwschil met gipsplaatwanden, dekvloer en opening voorbereid voor tuindeuren.",
          label: "Bouw in uitvoering",
        },
        en: {
          alt: "Extension shell with plasterboard walls, screed floor and opening prepared for patio doors.",
          label: "Build in progress",
        },
      },
      {
        src: "/images/kitchen-extension-kitchen-finished.png",
        nl: {
          alt: "Afgewerkte keuken-woonruimte met witte greeploze keuken, visgraatvloer en lichtkoepel.",
          label: "Afgewerkte keuken-woonruimte",
        },
        en: {
          alt: "Finished kitchen-diner with white handleless units, herringbone flooring and a roof lantern.",
          label: "Finished kitchen-diner",
        },
      },
      {
        src: "/images/kitchen-extension-exterior-finished.png",
        nl: {
          alt: "Afgewerkte aanbouw aan de achterzijde met metselwerk, tuindeuren en een grijs porselein terras.",
          label: "Aanbouw en terras",
        },
        en: {
          alt: "Completed rear extension exterior with brickwork, patio doors and a grey porcelain patio.",
          label: "Extension and patio",
        },
      },
    ],
    nl: {
      title: "Keukenaanbouw, terras en toilet beneden",
      eyebrow: "Aanbouw",
      summary:
        "Een lichtere keuken-woonruimte met een kleine aanbouw aan de achterzijde, nieuwe tuindeuren, grijs porselein terras en een net toilet beneden — zonder de voorkant van het huis te veranderen.",
      location: "Nederland",
      timeframe: "Keukenaanbouwproject",
      scope: [
        "Aanbouw aan de keuken",
        "Stalen latei en passend metselwerk",
        "Tuindeuren en lichtkoepel",
        "Eikenlook vloer en keukenafwerking",
        "Grijs porselein terras met drainage",
      ],
      description: [
        "De oude keuken was krap en donker. We openden de achtergevel, plaatsten een stalen latei en bouwden een eenlaagse aanbouw om ruimte toe te voegen en daglicht vanuit de tuin binnen te laten.",
        "Binnen betimmerden we wanden en plafonds met gipsplaat, stortten we een nieuwe dekvloer en werkten we de ruimte af als open keuken-woonruimte met een lichtkoepel, tuindeuren en eikenlook visgraatvloer.",
        "Buiten legden we een grijs porselein terras met een trede, afvoer en een eenvoudige gazonrand zodat het gezin direct vanuit de nieuwe keuken naar buiten kon lopen.",
      ],
      keywords: [
        "keukenaanbouw Nederland",
        "aanbouw aannemer",
        "terras aanleggen Nederland",
        "keukenrenovatie Nederland",
        "aanbouw keuken",
      ],
      coverAlt:
        "Afgewerkte keukenaanbouw aan een bakstenen rijwoning in Nederland, met tuindeuren, grijs porselein terras en een klein gazon.",
    },
    en: {
      title: "Kitchen extension, patio and cloakroom",
      eyebrow: "Extension",
      summary:
        "A brighter kitchen-diner with a small rear extension, new patio doors, grey porcelain patio and a proper downstairs toilet — without changing the front of the house.",
      location: "Netherlands",
      timeframe: "Kitchen extension project",
      scope: [
        "Rear kitchen extension",
        "Steel lintel and matching brickwork",
        "Patio doors and roof lantern",
        "Oak-effect flooring and kitchen finish",
        "Grey porcelain patio with drainage",
      ],
      description: [
        "The old kitchen was cramped and dark. We opened the rear wall, installed a steel lintel and built a single-storey extension to add space and bring daylight in from the garden.",
        "Inside, we boarded walls and ceilings with gypsum board, poured a new screed floor and finished the room as an open kitchen-diner with a roof lantern, patio doors and oak-effect herringbone flooring.",
        "Outside, we laid a grey porcelain patio with a step, drain and simple lawn border so the family could walk straight out from the new kitchen.",
      ],
      keywords: [
        "kitchen extension Netherlands",
        "rear extension builder",
        "patio installation Netherlands",
        "kitchen renovation Netherlands",
        "aanbouw keuken Netherlands",
      ],
      coverAlt:
        "Completed kitchen extension on a brick terraced home in the Netherlands, with patio doors, grey porcelain tiles and a small garden lawn.",
    },
  },
];

export function localizeProject(source: ProjectSource, locale: Locale) {
  const content = source[locale];
  return {
    slug: source.slug,
    cover: source.cover,
    ...content,
    gallery: source.gallery.map((item) => ({
      src: item.src,
      alt: item[locale].alt,
      label: item[locale].label,
    })),
  };
}
