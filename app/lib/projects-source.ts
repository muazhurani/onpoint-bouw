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
  beforeCoverAlt?: string;
};

export type GalleryItemSource = {
  src?: string;
  nl: { alt: string; label: string };
  en: { alt: string; label: string };
};

export type GallerySectionId = "before" | "after";

export type GallerySectionSource = {
  id: GallerySectionId;
  items: GalleryItemSource[];
};

export type GalleryPairSource = {
  before: string;
  after: string;
  nl: { label: string; beforeAlt: string; afterAlt: string };
  en: { label: string; beforeAlt: string; afterAlt: string };
};

export type ProjectSource = {
  slug: string;
  cover: string;
  /** "Before" state for the card toggle; omit to show a placeholder */
  beforeCover?: string;
  gallery?: GalleryItemSource[];
  gallerySections?: GallerySectionSource[];
  /** Before/after pairs rendered as comparison sliders on the detail page */
  galleryPairs?: GalleryPairSource[];
  nl: ProjectContent;
  en: ProjectContent;
};

export const projectSources: ProjectSource[] = [
  {
    slug: "garden-patio",
    cover: "/images/garden-patio/garden-patio-exterior.png",
    beforeCover: "/images/garden-patio/garden-patio-before-garden.png",
    gallerySections: [
      {
        id: "after",
        items: [
      {
        src: "/images/garden-patio/garden-patio-exterior.png",
        nl: {
          alt: "Woonkameruitbouw met openslaande deuren naar een vernieuwde tuin met grijze bestrating en kunstgras.",
          label: "Woonkamer en tuin",
        },
        en: {
          alt: "Rear living room extension with patio doors opening onto a rebuilt garden with grey paving and artificial grass.",
          label: "Living room and garden",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-open-plan.png",
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
        src: "/images/garden-patio/garden-patio-living-room.png",
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
        src: "/images/garden-patio/garden-patio-feature-wall.png",
        nl: {
          alt: "Afgewerkte accentwand in de woonkamer met houten latten, marmeren tv-paneel en ingebouwde zitbank.",
          label: "Accentwand woonkamer",
        },
        en: {
          alt: "Finished living room feature wall with wood slat panelling, marble TV panel and built-in bench seating.",
          label: "Living room feature wall",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-dining-area.png",
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
        src: "/images/garden-patio/garden-patio-backyard.png",
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
      },
      {
        id: "before",
        items: [
      {
        src: "/images/garden-patio/garden-patio-before-garden.png",
        nl: {
          alt: "Originele achtertuin vóór de renovatie, met grasveld, tegelterras en beplanting langs de woning.",
          label: "Tuin vóór",
        },
        en: {
          alt: "Original backyard before the renovation, with a lawn, tiled patio and planting along the house.",
          label: "Garden before",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-before-exterior.png",
        nl: {
          alt: "Achtergevel van de woning vóór de aanbouw, met bestaande dakramen, zonnescherm en tuindeuren.",
          label: "Achtergevel vóór",
        },
        en: {
          alt: "Rear elevation of the home before the extension, with existing roof windows, awning and patio doors.",
          label: "Rear elevation before",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-before-dormer-construction.png",
        nl: {
          alt: "Dakkapel in aanbouw op het dak, met houten frame, OSB-bekleding en ladder langs de gevel.",
          label: "Dakkapel in aanbouw",
        },
        en: {
          alt: "Dormer under construction on the roof, with timber frame, OSB sheathing and a ladder against the wall.",
          label: "Dormer construction",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-before-dormer-interior.png",
        nl: {
          alt: "Interieur van de nieuwe dakkapelruimte tijdens de afbouwfase, met kale muren, betonnen vloer en ingebouwde verlichting.",
          label: "Dakkapel interieur",
        },
        en: {
          alt: "Interior of the new dormer room during fit-out, with bare walls, concrete floor and recessed lighting cut-outs.",
          label: "Dormer interior",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-before-extension-shell.png",
        nl: {
          alt: "Woonkameruitbouw in ruwbouwfase, met houten dakconstructie, glazen schuifdeur en onafgewerkt terras.",
          label: "Aanbouw in ruwbouw",
        },
        en: {
          alt: "Living room extension at shell stage, with timber roof structure, sliding glass door and unfinished patio.",
          label: "Extension shell",
        },
      },
      {
        src: "/images/garden-patio/garden-patio-before-patio-construction.png",
        nl: {
          alt: "Achtertuin tijdens de bouw, met nieuwe tuindeuren, tegelterras in aanleg en bouwmateriaal op het terrein.",
          label: "Terras in aanleg",
        },
        en: {
          alt: "Back garden during construction, with new patio doors, paving being laid and building materials on site.",
          label: "Patio in progress",
        },
      },
        ],
      },
    ],
    nl: {
      title: "Woonkameruitbouw, interieur en tuin",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Meer leefruimte aan de achterzijde, vernieuwde ruimtes binnen en een tuin die opnieuw is opgebouwd met bestrating, gecorrigeerde niveaus en beplanting.",
      location: "Eindhoven, Nederland",
      timeframe: "Verbouwing, aanbouw en tuinproject",
      scope: [
        "Interieurverbouwing en afwerking",
        "Woonkameruitbouw met openslaande deuren",
        "Terrasbestrating en niveaus",
        "Tuinontwerp en drainage",
      ],
      description: [
        "De eigenaren wilden meer bruikbare ruimte zonder de verbinding met de tuin te verliezen. Binnen vernieuwden we vloeren, verlichting en afwerking, zodat de leefruimtes weer één geheel vormen.",
        "Aan de woonkamer bouwden we een uitbouw met grote openslaande deuren naar de tuin. Zo ontstond meer vloeroppervlak en een directe overgang van binnen naar buiten.",
        "Buiten pakten we de tuin goed aan: nieuwe bestrating, gecorrigeerde niveaus voor drainage, kunstgras en plantenborders, en een indeling die het hele jaar door makkelijk te onderhouden is.",
      ],
      keywords: [
        "woningverbouwing Nederland",
        "woonkameruitbouw Nederland",
        "interieurverbouwing Nederland",
        "tuinrenovatie Nederland",
        "terras bestrating Nederland",
      ],
      coverAlt:
        "Woonkameruitbouw en vernieuwde tuin bij een bakstenen woning in Nederland, met terrasbestrating, tuindeuren en een afgewerkte achtertuin.",
      beforeCoverAlt:
        "Originele achtertuin vóór de renovatie, met grasveld, tegelterras en beplanting langs de woning.",
    },
    en: {
      title: "Living room extension, interior and garden",
      eyebrow: "Renovation and garden",
      summary:
        "More living space at the rear, refreshed interiors and a garden rebuilt with new paving, corrected levels and planting.",
      location: "Eindhoven, Netherlands",
      timeframe: "Renovation, extension and garden project",
      scope: [
        "Interior renovation and finishing",
        "Living room extension with patio doors",
        "Patio paving and levels",
        "Garden landscaping and drainage",
      ],
      description: [
        "The owners wanted more usable space without losing the connection to the garden. Inside, we renewed the flooring, lighting and finishes so the living areas read as one coherent space.",
        "We added a living room extension with large patio doors opening onto the garden. This created more floor area and a direct transition between inside and out.",
        "Outside, we rebuilt the garden with new paving, corrected levels for drainage, artificial grass and planting borders in a layout that is easier to maintain.",
      ],
      keywords: [
        "home renovation Netherlands",
        "living room extension Netherlands",
        "interior renovation Netherlands",
        "garden renovation Netherlands",
        "patio paving Netherlands",
      ],
      coverAlt:
        "Living room extension and renovated garden at a brick home in the Netherlands, with patio paving, garden doors and a finished backyard.",
      beforeCoverAlt:
        "Original backyard before the renovation, with a lawn, tiled patio and planting along the house.",
    },
  },
  {
    slug: "rear-extension",
    cover: "/images/rear-extension/rear-extension-patio-evening.png",
    beforeCover: "/images/rear-extension/rear-extension-before-garden.png",
    gallerySections: [
      {
        id: "after",
        items: [
      {
        src: "/images/rear-extension/rear-extension-garden-room.png",
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
        src: "/images/rear-extension/rear-extension-patio-evening.png",
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
        src: "/images/rear-extension/rear-extension-backyard-evening.png",
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
        src: "/images/rear-extension/rear-extension-kitchen.png",
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
        src: "/images/rear-extension/floor-heating-finished-marble.png",
        nl: {
          alt: "Afgewerkte marmeren vloer met gepolijste tegels, koofverlichting en afgewerkte wanden.",
          label: "Afgewerkte vloer",
        },
        en: {
          alt: "Completed marble floor with polished tiles, cove lighting and finished walls.",
          label: "Finished floor",
        },
      },
      {
        src: "/images/rear-extension/toilet-renovation-vanity.png",
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
        src: "/images/rear-extension/toilet-renovation-finished.png",
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
      },
      {
        id: "before",
        items: [
      {
        src: "/images/rear-extension/rear-extension-before-garden.png",
        nl: {
          alt: "Originele achtertuin vóór de verbouwing, met gebakken tegels, houten gazebo en speeltoestel.",
          label: "Tuin vóór",
        },
        en: {
          alt: "Original backyard before the renovation, with brick pavers, a wooden gazebo and play equipment.",
          label: "Garden before",
        },
      },
      {
        src: "/images/rear-extension/rear-extension-before-roof-framing.png",
        nl: {
          alt: "Houten dakconstructie van de aanbouw in aanbouw, met balken, joist hangers en zicht op de achtergevel.",
          label: "Dakconstructie",
        },
        en: {
          alt: "Timber roof structure of the extension under construction, with joists, hangers and the rear elevation visible.",
          label: "Roof framing",
        },
      },
      {
        src: "/images/rear-extension/rear-extension-before-extension-shell.png",
        nl: {
          alt: "Aanbouw in ruwbouwfase, met houten dakbalken, lichtkoepelopening, tuindeuren en tijdelijke afdekking.",
          label: "Aanbouw in ruwbouw",
        },
        en: {
          alt: "Extension at shell stage, with timber roof joists, roof lantern opening, patio doors and temporary weatherproofing.",
          label: "Extension shell",
        },
      },
      {
        src: "/images/rear-extension/rear-extension-before-roof-membrane.png",
        nl: {
          alt: "Plat dak van de aanbouw tijdens de waterdichting, met dakbedekking en houten frame voor een lichtkoepel.",
          label: "Dakbedekking",
        },
        en: {
          alt: "Flat roof of the extension during waterproofing, with roofing membrane and a timber roof lantern frame.",
          label: "Roof membrane",
        },
      },
      {
        src: "/images/rear-extension/rear-extension-before-roof-lantern.png",
        nl: {
          alt: "Lichtkoepel en plat dak in aanbouw, gezien van bovenaf met zicht op de tuin en omliggende bebouwing.",
          label: "Lichtkoepel in aanbouw",
        },
        en: {
          alt: "Roof lantern and flat roof under construction, viewed from above with the garden and surrounding homes visible.",
          label: "Roof lantern in progress",
        },
      },
      {
        src: "/images/rear-extension/toilet-renovation-demolition.png",
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
        src: "/images/rear-extension/toilet-renovation-stripped.png",
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
        src: "/images/rear-extension/toilet-renovation-waterproofing.png",
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
        src: "/images/rear-extension/floor-heating-underfloor-installation.png",
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
        src: "/images/rear-extension/floor-heating-pipe-layout.png",
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
        src: "/images/rear-extension/toilet-renovation-tiling.png",
        nl: {
          alt: "Grootformaat tegels worden gelegd op wanden en vloer met nivelleersysteem en lineaire afvoer.",
          label: "Tegelwerk badkamer",
        },
        en: {
          alt: "Large-format tiles being laid on walls and floor with a levelling system and linear drain.",
          label: "Bathroom tiling",
        },
      },
      {
        src: "/images/rear-extension/floor-heating-tile-installation.png",
        nl: {
          alt: "Grote marmerlook tegels worden gelegd op een voorbereide vloer met afstandhouders en lijm.",
          label: "Vloertegels leggen",
        },
        en: {
          alt: "Large marble-effect tiles being laid on a prepared floor with spacers and adhesive.",
          label: "Floor tiling",
        },
      },
      {
        src: "/images/rear-extension/floor-heating-marble-laying.png",
        nl: {
          alt: "Marmeren platen geplaatst met een nivelleersysteem tijdens de installatie.",
          label: "Marmer leggen",
        },
        en: {
          alt: "Marble slabs placed with a tile levelling system during installation.",
          label: "Marble slab laying",
        },
      },
        ],
      },
    ],
    nl: {
      title: "Aanbouw, tuin, vloeren en badkamer",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Een complete woningvernieuwing: achteraanbouw en tuin, vloerverwarming met marmeren vloeren, toilet- en badkamerrenovatie, gipsplaatafwerking en algemeen interieurwerk.",
      location: "Eindhoven, Nederland",
      timeframe: "Verbouwing en tuinproject",
      scope: [
        "Achteraanbouw en dakwerk",
        "Tuinbestrating, beplanting en buitenverlichting",
        "Vloerverwarming en marmeren vloeren",
        "Toilet- en badkamerrenovatie",
        "Gipsplaatwanden en plafonds",
        "Algemene interieurverbouwing",
      ],
      description: [
        "Dit was een brede verbouwing over de hele woning. We bouwden een aanbouw aan de achterzijde, vernieuwden keuken en woonruimtes met gipsplaat en legden vloerverwarming aan met een marmeren vloerafwerking.",
        "Het toilet en de badkamer werden volledig gestript en opnieuw opgebouwd: waterdichte natte-ruimte, grootformaat tegels, inloopdouche, hangend toilet en een zwevende wastafel.",
        "Buiten bouwden we de tuin opnieuw op met verharde terrassen, gazon, beplanting en geïntegreerde verlichting. Het resultaat is een woning die dagelijks beter werkt, met warme vloeren binnen en een tuin die 's avonds ook bruikbaar is.",
      ],
      keywords: [
        "woningverbouwing Nederland",
        "achteraanbouw Nederland",
        "tuinrenovatie Nederland",
        "vloerverwarming Nederland",
        "marmeren vloer leggen",
        "toiletrenovatie Nederland",
        "badkamer renovatie Nederland",
      ],
      coverAlt:
        "Afgewerkte tuin en buitenruimte bij een woning in Nederland, met stenen bestrating en geïntegreerde verlichting bij schemer.",
      beforeCoverAlt:
        "Originele achtertuin vóór de verbouwing, met gebakken tegels, houten gazebo en speeltoestel.",
    },
    en: {
      title: "Extension, garden, floors and bathroom",
      eyebrow: "Renovation and garden",
      summary:
        "A full home renovation: rear extension and garden, underfloor heating with marble floors, toilet and bathroom renovation, gypsum board finishes and general interior work.",
      location: "Eindhoven, Netherlands",
      timeframe: "Renovation and garden project",
      scope: [
        "Rear extension and roofing",
        "Garden paving, planting and outdoor lighting",
        "Underfloor heating and marble floors",
        "Toilet and bathroom renovation",
        "Gypsum board walls and ceilings",
        "General interior renovation",
      ],
      description: [
        "This was a broad renovation across the whole home. We built a rear extension, refreshed the kitchen and living spaces with gypsum board and laid underfloor heating with a marble floor finish.",
        "The toilet and bathroom were fully stripped and rebuilt: waterproof wet-room tanking, large-format tiling, a walk-in shower, wall-hung toilet and a floating vanity.",
        "Outside, we rebuilt the garden with paved terraces, lawn, planting and integrated lighting. The result is a home that works better day to day, with warm floors inside and a garden that is usable in the evening too.",
      ],
      keywords: [
        "home renovation Netherlands",
        "rear extension Netherlands",
        "garden renovation Netherlands",
        "underfloor heating Netherlands",
        "marble floor installation",
        "toilet renovation Netherlands",
        "bathroom renovation Netherlands",
      ],
      coverAlt:
        "Finished garden and outdoor living area at a home in the Netherlands, with stone paving and integrated lighting at dusk.",
      beforeCoverAlt:
        "Original backyard before the renovation, with brick pavers, a wooden gazebo and play equipment.",
    },
  },
  {
    slug: "bathroom-renovation",
    cover: "/images/bathroom-renovation/renovation-garden-patio.png",
    beforeCover: "/images/bathroom-renovation/garden-before.png",
    gallerySections: [
      {
        id: "after",
        items: [
      {
        src: "/images/bathroom-renovation/renovation-garden-patio.png",
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
        src: "/images/bathroom-renovation/renovation-garden-evening.png",
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
        src: "/images/bathroom-renovation/renovation-lounge.png",
        nl: {
          alt: "Vernieuwde lounge met nieuwe vloer, witte muren en openslaande deuren naar de tuin.",
          label: "Lounge",
        },
        en: {
          alt: "Renovated lounge with new flooring, white walls and patio doors opening to the garden.",
          label: "Lounge",
        },
      },
      {
        src: "/images/bathroom-renovation/renovation-living-room.png",
        nl: {
          alt: "Afgewerkte woonkamer met gipsplaatwanden, houten vloer en ingebouwde plafondverlichting.",
          label: "Woonkamer",
        },
        en: {
          alt: "Finished living room with gypsum board walls, wood flooring and recessed ceiling lighting.",
          label: "Living room",
        },
      },
      {
        src: "/images/bathroom-renovation/renovation-bathroom.png",
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
        src: "/images/bathroom-renovation/renovation-shower.png",
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
      },
      {
        id: "before",
        items: [
      {
        src: "/images/bathroom-renovation/garden-before.png",
        nl: {
          alt: "Originele achtertuin vóór de renovatie, met grijze tegels, grasstrook, houten schutting en buitenverlichting bij schemer.",
          label: "Tuin vóór",
        },
        en: {
          alt: "Original backyard before the renovation, with grey paving, a grass strip, wooden fencing and exterior lighting at dusk.",
          label: "Garden before",
        },
      },
        ],
      },
    ],
    nl: {
      title: "Badkamer, tuin en woonkamerrenovatie",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Badkamer en toilet volledig gerenoveerd, woonkamer en leefruimtes vernieuwd met nieuwe vloeren en afwerking, en de tuin opnieuw ingericht met bestrating en verlichting.",
      location: "Eindhoven, Nederland",
      timeframe: "Verbouwing en tuinproject",
      scope: [
        "Toilet- en badkamerrenovatie",
        "Woonkamer- en leefruimteverbouwing",
        "Tuinbestrating, beplanting en buitenverlichting",
        "Gipsplaatwanden en plafonds",
      ],
      description: [
        "Het toilet en de badkamer werden volledig gerenoveerd: nieuw tegelwerk, een inloopdouche met ingebouwde zitbank, vernieuwd sanitair en matzwarte kranen en accessoires.",
        "Binnen vernieuwden we de woonkamer en leefruimtes met gipsplaat, nieuwe vloeren, verlichting en nette details zodat de woning weer open en afgewerkt aanvoelde.",
        "Buiten bouwden we de tuin opnieuw op met verharde terrassen, kunstgras, beplanting en wandverlichting — een duidelijke verbinding tussen binnen en buiten.",
      ],
      keywords: [
        "badkamer renovatie Nederland",
        "woonkamer renovatie Nederland",
        "tuinrenovatie Nederland",
        "toiletrenovatie Nederland",
        "woningverbouwing Nederland",
        "gipsplaat verbouwing",
      ],
      coverAlt:
        "Vernieuwde tuin en terras bij een woning in Nederland, met bestrating, kunstgras en buitenverlichting bij schemer.",
      beforeCoverAlt:
        "Originele achtertuin vóór de renovatie, met grijze tegels, grasstrook, houten schutting en buitenverlichting bij schemer.",
    },
    en: {
      title: "Bathroom, garden and living room renovation",
      eyebrow: "Renovation and garden",
      summary:
        "Bathroom and toilet fully renovated, living room and interior spaces refreshed with new flooring and finishes, and the garden rebuilt with paving and lighting.",
      location: "Eindhoven, Netherlands",
      timeframe: "Renovation and garden project",
      scope: [
        "Toilet and bathroom renovation",
        "Living room and interior renovation",
        "Garden paving, planting and outdoor lighting",
        "Gypsum board walls and ceilings",
      ],
      description: [
        "The toilet and bathroom were fully renovated: new tiling, a walk-in shower with a built-in bench, updated sanitary ware and matte-black fixtures throughout.",
        "Inside, we refreshed the living room and interior spaces with gypsum board, new flooring, lighting and clean details so the home felt open and properly finished again.",
        "Outside, we rebuilt the garden with paved terraces, artificial grass, planting and wall lighting — a clear connection between inside and out.",
      ],
      keywords: [
        "bathroom renovation Netherlands",
        "living room renovation Netherlands",
        "garden renovation Netherlands",
        "toilet renovation Netherlands",
        "home renovation Netherlands",
        "gypsum board renovation",
      ],
      coverAlt:
        "Renovated garden and patio at a home in the Netherlands, with paving, artificial grass and outdoor lighting at dusk.",
      beforeCoverAlt:
        "Original backyard before the renovation, with grey paving, a grass strip, wooden fencing and exterior lighting at dusk.",
    },
  },
  {
    slug: "kitchen-extension",
    cover: "/images/kitchen-extension/kitchen-extension-exterior-finished.png",
    beforeCover: "/images/kitchen-extension/kitchen-extension-before.png",
    gallery: [
      {
        src: "/images/kitchen-extension/kitchen-extension-before.png",
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
        src: "/images/kitchen-extension/kitchen-extension-structure.png",
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
        src: "/images/kitchen-extension/kitchen-extension-build-progress.png",
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
        src: "/images/kitchen-extension/kitchen-extension-kitchen-finished.png",
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
        src: "/images/kitchen-extension/kitchen-extension-exterior-finished.png",
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
      location: "Tilburg, Nederland",
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
      beforeCoverAlt:
        "Originele krappe keuken vóór de start van de aanbouw.",
    },
    en: {
      title: "Kitchen extension, patio and cloakroom",
      eyebrow: "Extension",
      summary:
        "A brighter kitchen-diner with a small rear extension, new patio doors, grey porcelain patio and a proper downstairs toilet — without changing the front of the house.",
      location: "Tilburg, Netherlands",
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
      beforeCoverAlt:
        "Original cramped kitchen before the extension work started.",
    },
  },
  {
    slug: "under-stair-storage",
    cover: "/images/under-stair-storage/under-stair-storage-finished.png",
    beforeCover: "/images/under-stair-storage/under-stair-storage-before.png",
    gallery: [
      {
        src: "/images/under-stair-storage/under-stair-storage-before.png",
        nl: {
          alt: "Ongebruikte ruimte onder de trap vóór de verbouwing, met losse schoenen en spullen op de vloer.",
          label: "Vóór de verbouwing",
        },
        en: {
          alt: "Unused space under the stairs before the renovation, with loose shoes and items on the floor.",
          label: "Before renovation",
        },
      },
      {
        src: "/images/under-stair-storage/under-stair-storage-assembly.png",
        nl: {
          alt: "Op maat gemaakte kaststructuur onder de trap in opbouw, met klemmen en houten schappen.",
          label: "Opbouw kastwerk",
        },
        en: {
          alt: "Custom cabinet structure under the stairs during assembly, with clamps and wooden shelves.",
          label: "Cabinet assembly",
        },
      },
      {
        src: "/images/under-stair-storage/under-stair-storage-finishing.png",
        nl: {
          alt: "Trapkast in de afwerkingsfase met gegronde kastdeuren, laden en schilderspullen op de vloer.",
          label: "Afwerking",
        },
        en: {
          alt: "Under-stair storage in the finishing phase with primed doors, drawers and painting supplies on the floor.",
          label: "Finishing",
        },
      },
      {
        src: "/images/under-stair-storage/under-stair-storage-finished.png",
        nl: {
          alt: "Afgewerkte maatwerk trapkast met drie hoge kastdeuren en drie laden onder een houten trap.",
          label: "Afgewerkte trapkast",
        },
        en: {
          alt: "Finished custom under-stair storage with three tall cupboard doors and three drawers beneath a wooden staircase.",
          label: "Finished storage",
        },
      },
    ],
    nl: {
      title: "Maatwerk trapkast",
      eyebrow: "Interieur en maatwerk",
      summary:
        "Een op maat gemaakte opbergkast onder de trap: van rommelige nis naar drie hoge kasten en laden die perfect de helling van de trap volgen.",
      location: "'s-Hertogenbosch, Nederland",
      timeframe: "Maatwerk timmerwerkproject",
      scope: [
        "Inmeten en ontwerp op maat",
        "Kastconstructie onder de trap",
        "Hoge kastdeuren en laden",
        "Afwerking en schilderwerk",
        "Bescherming van vloer en hal",
      ],
      description: [
        "Onder de trap lag een onbenutte nis die al snel vol liep met schoenen en losse spullen. De huiseigenaren wilden daar nette, vaste opbergruimte zonder de hal smaller te laten aanvoelen.",
        "We maten de ruimte nauwkeurig in en bouwden een kast die de schuine lijn van de trap volgt: drie hoge deuren boven en drie laden onder. Tijdens de bouw beschermden we de vloer en werkten we stap voor stap in de hal.",
        "Het resultaat is een strakke, op maat gemaakte trapkast die de hal rustiger maakt en dagelijks gebruikte spullen uit het zicht houdt — zonder dat het een los meubel aanvoelt.",
      ],
      keywords: [
        "trapkast Nederland",
        "opbergruimte onder trap",
        "maatwerk kasten Nederland",
        "interieurverbouwing Nederland",
        "timmerwerk op maat",
      ],
      coverAlt:
        "Afgewerkte maatwerk trapkast onder een houten trap in een Nederlandse woning, met kastdeuren en laden in een lichte afwerking.",
      beforeCoverAlt:
        "Ongebruikte ruimte onder de trap vóór de verbouwing, met losse schoenen en spullen op de vloer.",
    },
    en: {
      title: "Custom under-stair storage",
      eyebrow: "Interior and custom work",
      summary:
        "A bespoke storage cupboard under the stairs: from a cluttered nook to three tall doors and drawers that follow the slope of the staircase.",
      location: "'s-Hertogenbosch, Netherlands",
      timeframe: "Custom carpentry project",
      scope: [
        "Survey and bespoke design",
        "Under-stair cabinet construction",
        "Tall cupboard doors and drawers",
        "Finishing and painting",
        "Floor and hallway protection",
      ],
      description: [
        "The space under the stairs was an unused nook that quickly filled with shoes and loose items. The homeowners wanted proper built-in storage without making the hallway feel smaller.",
        "We measured the space carefully and built a cabinet that follows the diagonal line of the stairs: three tall doors above and three drawers below. During the build we protected the floor and worked step by step in the hallway.",
        "The result is a clean, custom under-stair cupboard that calms the hallway and keeps everyday items out of sight — without feeling like a freestanding piece of furniture.",
      ],
      keywords: [
        "under stair storage Netherlands",
        "staircase cupboard Netherlands",
        "custom cabinetry Netherlands",
        "home renovation Netherlands",
        "bespoke carpentry",
      ],
      coverAlt:
        "Finished custom under-stair storage beneath a wooden staircase in a Dutch home, with cupboard doors and drawers in a light finish.",
      beforeCoverAlt:
        "Unused space under the stairs before the renovation, with loose shoes and items on the floor.",
    },
  },
  {
    slug: "backyard-garden-renovation",
    cover: "/images/backyard-garden-renovation/backyard-garden-finished-evening.png",
    beforeCover: "/images/backyard-garden-renovation/backyard-garden-before.png",
    gallery: [
      {
        src: "/images/backyard-garden-renovation/backyard-garden-before.png",
        nl: {
          alt: "Verwaarloosde achtertuin vóór de renovatie, met ongelijke tegels, onkruid en een verouderd tuinhuisje.",
          label: "Tuin vóór",
        },
        en: {
          alt: "Neglected backyard before the renovation, with uneven paving, weeds and a weathered garden shed.",
          label: "Garden before",
        },
      },
      {
        src: "/images/backyard-garden-renovation/backyard-garden-excavation.png",
        nl: {
          alt: "Graafwerk en drainage in de achtertuin, met sleuven, buizen en stapels bestrating tegen de gevel.",
          label: "Graafwerk en riolering",
        },
        en: {
          alt: "Excavation and drainage in the backyard, with trenches, pipes and stacks of paving slabs against the house.",
          label: "Excavation and drainage",
        },
      },
      {
        src: "/images/backyard-garden-renovation/backyard-garden-build-progress.png",
        nl: {
          alt: "Tuinrenovatie in uitvoering met grootformaat tegels, houten pergola en een maatwerk zithoek in opbouw.",
          label: "Bouw in uitvoering",
        },
        en: {
          alt: "Garden renovation in progress with large-format tiles, a wooden pergola frame and a custom seating area under construction.",
          label: "Build in progress",
        },
      },
      {
        src: "/images/backyard-garden-renovation/backyard-garden-finished-evening.png",
        nl: {
          alt: "Moderne achtertuin bij schemer met verlichting in de plantenbakken, pergola en beplanting.",
          label: "Tuin bij schemer",
        },
        en: {
          alt: "Modern backyard at dusk with lighting in the planters, pergola and planting beds.",
          label: "Garden at dusk",
        },
      },
    ],
    nl: {
      title: "Moderne achtertuinrenovatie",
      eyebrow: "Tuin en bestrating",
      summary:
        "Een complete achtertuintransformatie: van verwaarloosde tegels en rommel naar een strak terras, verhoogde plantenbakken, pergola, maatwerk zithoek en tuinverlichting.",
      location: "Arnhem, Nederland",
      timeframe: "Tuinrenovatieproject",
      scope: [
        "Sloop en graafwerk",
        "Drainage en lijnafvoer",
        "Grootformaat keramische bestrating",
        "Verhoogde plantenbakken en stucwerk",
        "Houten pergola en zithoek",
        "Tuinverlichting en beplanting",
      ],
      description: [
        "De achtertuin was toe aan een echte opknapbeurt: ongelijke tegels, onkruid tussen de voegen, een kale grasstrook en een verouderd tuinhuisje. De eigenaren wilden een moderne buitenruimte die dagelijks bruikbaar is.",
        "We begonnen met het vrijmaken van de tuin, legden drainage en lijnafvoer aan langs de gevel en bouwden een stevige ondergrond voor grootformaat grijze tegels. Daarna realiseerden we verhoogde plantenbakken, een houten pergola en een ingebouwde zithoek.",
        "Het eindresultaat is een rustige, onderhoudsvriendelijke tuin met beplanting, verlichting en een duidelijke indeling — bruikbaar overdag en 's avonds, direct vanuit de woondeuren.",
      ],
      keywords: [
        "tuinrenovatie Nederland",
        "achtertuin verbouwing",
        "terras bestrating Nederland",
        "pergola tuin Nederland",
        "tuinverlichting Nederland",
      ],
      coverAlt:
        "Afgewerkte moderne achtertuin in Nederland met grijze tegels, verhoogde plantenbakken, pergola en tuinverlichting bij schemer.",
      beforeCoverAlt:
        "Verwaarloosde achtertuin vóór de renovatie, met ongelijke tegels, onkruid en een verouderd tuinhuisje.",
    },
    en: {
      title: "Modern backyard garden renovation",
      eyebrow: "Garden and paving",
      summary:
        "A full backyard transformation: from tired paving and clutter to a clean patio, raised planters, pergola, custom seating and garden lighting.",
      location: "Arnhem, Netherlands",
      timeframe: "Garden renovation project",
      scope: [
        "Strip-out and excavation",
        "Drainage and linear drain",
        "Large-format ceramic paving",
        "Raised planters and render finish",
        "Wooden pergola and seating area",
        "Garden lighting and planting",
      ],
      description: [
        "The backyard needed a proper refresh: uneven slabs, weeds in the joints, a patchy lawn and a tired garden shed. The homeowners wanted a modern outdoor space they could use every day.",
        "We cleared the garden, installed drainage and a linear drain along the house, and built a solid base for large-format grey tiles. We then added raised planters, a wooden pergola and a built-in seating area.",
        "The finished garden is calm, low-maintenance and clearly laid out — with planting, lighting and a space that works in the day and in the evening, straight from the patio doors.",
      ],
      keywords: [
        "garden renovation Netherlands",
        "backyard renovation Netherlands",
        "patio paving Netherlands",
        "garden pergola Netherlands",
        "garden lighting Netherlands",
      ],
      coverAlt:
        "Finished modern backyard in the Netherlands with grey paving, raised planters, a pergola and garden lighting at dusk.",
      beforeCoverAlt:
        "Neglected backyard before the renovation, with uneven paving, weeds and a weathered garden shed.",
    },
  },
  {
    slug: "garden-renovations",
    cover: "/images/garden-renovations/garden-marble-tiles-lawn-after.png",
    beforeCover:
      "/images/garden-renovations/garden-marble-tiles-lawn-before.png",
    galleryPairs: [
      {
        before: "/images/garden-renovations/garden-marble-tiles-lawn-before.png",
        after: "/images/garden-renovations/garden-marble-tiles-lawn-after.png",
        nl: {
          label: "Tegels en kunstgras",
          beforeAlt:
            "Verouderde tuin vóór de renovatie, met kapotte natuurstenen bestrating, mos en onkruid.",
          afterAlt:
            "Vernieuwde stadstuin met marmerlook keramische tegels en een strak kunstgrasgazon tussen houten schuttingen.",
        },
        en: {
          label: "Tiles and artificial grass",
          beforeAlt:
            "Tired garden before the renovation, with broken natural stone paving, moss and weeds.",
          afterAlt:
            "Renovated city garden with marble-look ceramic tiles and a neat artificial grass lawn between wooden fences.",
        },
      },
      {
        before:
          "/images/garden-renovations/garden-accent-tiles-planter-before.png",
        after:
          "/images/garden-renovations/garden-accent-tiles-planter-after.png",
        nl: {
          label: "Accenttegels en plantenbak",
          beforeAlt:
            "Versleten en begroeide bestrating vóór de heraanleg van de tuin.",
          afterAlt:
            "Afgewerkte tuin met lichte bestrating, decoratieve accenttegels, verhoogde plantenbak en een kunstgrasstrook.",
        },
        en: {
          label: "Accent tiles and planter",
          beforeAlt: "Worn, overgrown paving before the garden rebuild.",
          afterAlt:
            "Finished garden with light paving, decorative accent tiles, a raised planter and a strip of artificial grass.",
        },
      },
      {
        before: "/images/garden-renovations/courtyard-accent-tiles-before.png",
        after: "/images/garden-renovations/courtyard-accent-tiles-after.png",
        nl: {
          label: "Siertegel-tapijt",
          beforeAlt:
            "Stadstuin vóór de renovatie, met kale grond, puin en opgebroken bestrating.",
          afterAlt:
            "Stadstuin na de renovatie, met een ingelegd tapijt van Delfts blauwe siertegels in lichte keramische bestrating.",
        },
        en: {
          label: "Pattern tile inlay",
          beforeAlt:
            "Courtyard before the renovation, with bare soil, rubble and broken-up paving.",
          afterAlt:
            "Courtyard garden after the renovation, with an inlaid carpet of Delft-blue pattern tiles set in light ceramic paving.",
        },
      },
      {
        before: "/images/garden-renovations/front-garden-planters-before.png",
        after: "/images/garden-renovations/front-garden-planters-after.png",
        nl: {
          label: "Voortuin met plantenbakken",
          beforeAlt:
            "Voortuin vóór de verbouwing, met donkere tegels, een uitgebloeide haag en opgeslagen materiaal.",
          afterAlt:
            "Vernieuwde voortuin met witte bestrating, gemetselde plantenbakken met beplanting en nieuwe traptreden naar de voordeur.",
        },
        en: {
          label: "Front garden planters",
          beforeAlt:
            "Front garden before the works, with dark slabs, a dried-out hedge and stored materials.",
          afterAlt:
            "Renovated front garden with white paving, built planters with fresh planting and new steps to the front door.",
        },
      },
      {
        before: "/images/garden-renovations/garden-two-tone-tiles-before.png",
        after: "/images/garden-renovations/garden-two-tone-tiles-after.png",
        nl: {
          label: "Twee-kleurig terras",
          beforeAlt:
            "Oude gebakken klinkers met onkruid en verzakkingen vóór de nieuwe bestrating.",
          afterAlt:
            "Afgewerkt terras met een strak vlak van donkere en lichte keramische tegels naast een kunstgrasgazon.",
        },
        en: {
          label: "Two-tone patio",
          beforeAlt:
            "Old brick pavers with weeds and settlement before the new paving was laid.",
          afterAlt:
            "Finished patio with a clean plane of dark and light ceramic tiles next to an artificial grass lawn.",
        },
      },
      {
        before:
          "/images/garden-renovations/garden-artificial-grass-trampoline-before.png",
        after:
          "/images/garden-renovations/garden-artificial-grass-trampoline-after.png",
        nl: {
          label: "Kunstgras met trampoline",
          beforeAlt:
            "Opbreken van de oude betonnen ondergrond in de achtertuin tijdens de sloopfase.",
          afterAlt:
            "Kindvriendelijke achtertuin na de renovatie, met kunstgras en een verzonken trampoline.",
        },
        en: {
          label: "Grass with trampoline",
          beforeAlt:
            "Breaking out the old concrete base in the backyard during the strip-out phase.",
          afterAlt:
            "Family-friendly backyard after the renovation, with artificial grass and a sunken trampoline.",
        },
      },
      {
        before: "/images/garden-renovations/waterside-terrace-before.png",
        after: "/images/garden-renovations/waterside-terrace-after.png",
        nl: {
          label: "Terras aan het water",
          beforeAlt:
            "Terras aan het water vóór de renovatie, met verweerde tegels en losse plantenpotten.",
          afterAlt:
            "Nieuw aangelegd terras aan het water, met grote keramische tegels, kunstgras en een sierlijke tuinboog.",
        },
        en: {
          label: "Waterside terrace",
          beforeAlt:
            "Waterside patio before the renovation, with weathered slabs and loose plant pots.",
          afterAlt:
            "Newly laid waterside terrace with large ceramic tiles, artificial grass and a decorative garden arch.",
        },
      },
      {
        before: "/images/garden-renovations/garden-veranda-before.png",
        after: "/images/garden-renovations/garden-veranda-after.png",
        nl: {
          label: "Tuin met overkapping",
          beforeAlt:
            "Achtertuin vóór de heraanleg, met begroeide gebakken klinkers en achterstallig groen.",
          afterAlt:
            "Achtertuin met nieuwe overkapping, lichte bestrating en groenstroken langs de gemetselde tuinmuur.",
        },
        en: {
          label: "Garden with veranda",
          beforeAlt:
            "Backyard before the rebuild, with overgrown brick paving and neglected planting.",
          afterAlt:
            "Backyard with a new veranda canopy, light paving and planting strips along the brick garden wall.",
        },
      },
      {
        before: "/images/garden-renovations/garden-raised-bed-before.png",
        after: "/images/garden-renovations/garden-raised-bed-after.png",
        nl: {
          label: "Verhoogde border",
          beforeAlt:
            "Kale tuin met puin en zand vóór de aanleg van de nieuwe bestrating en border.",
          afterAlt:
            "Vernieuwde tuin met keramische bestrating en een verhoogde border, klaar voor beplanting.",
        },
        en: {
          label: "Raised border",
          beforeAlt:
            "Bare garden with rubble and sand before the new paving and border were built.",
          afterAlt:
            "Renovated garden with ceramic paving and a raised border, ready for planting.",
        },
      },
      {
        before: "/images/garden-renovations/garden-lounge-corner-before.png",
        after: "/images/garden-renovations/garden-lounge-corner-after.png",
        nl: {
          label: "Zithoek",
          beforeAlt:
            "Kale grond met bladafval langs de tuinmuur vóór de aanleg van de zithoek.",
          afterAlt:
            "Afgewerkte zithoek in de tuin, van boven gezien, met nieuwe wandtegels, grindstrook en loungeset.",
        },
        en: {
          label: "Lounge corner",
          beforeAlt:
            "Bare soil and leaf litter along the garden wall before the lounge corner was built.",
          afterAlt:
            "Finished garden lounge corner seen from above, with new wall tiling, a gravel strip and lounge seating.",
        },
      },
      {
        before: "/images/garden-renovations/garden-path-before.png",
        after: "/images/garden-renovations/garden-path-after.png",
        nl: {
          label: "Nieuw looppad",
          beforeAlt:
            "Uitgegraven strook door het gazon als voorbereiding voor het nieuwe looppad.",
          afterAlt:
            "Nieuw looppad van grote antracietkleurige tegels met strakke opsluitbanden door de tuin.",
        },
        en: {
          label: "New garden path",
          beforeAlt:
            "Strip excavated through the lawn in preparation for the new walkway.",
          afterAlt:
            "New walkway of large anthracite tiles with clean edging bands running through the garden.",
        },
      },
      {
        before: "/images/garden-renovations/front-garden-border-before.png",
        after: "/images/garden-renovations/front-garden-border-after.png",
        nl: {
          label: "Voortuin opgeknapt",
          beforeAlt:
            "Overwoekerde voortuin met uitgegroeide struiken vóór de opknapbeurt.",
          afterAlt:
            "Voortuin na de opknapbeurt, met gesnoeide beplanting, kunstgrasstrook en nette bestratingsranden.",
        },
        en: {
          label: "Front garden refreshed",
          beforeAlt:
            "Overgrown front garden with sprawling shrubs before the refresh.",
          afterAlt:
            "Front garden after the refresh, with trimmed planting, an artificial grass strip and tidy paving borders.",
        },
      },
      {
        before: "/images/garden-renovations/garden-gazebo-paving-before.png",
        after: "/images/garden-renovations/garden-gazebo-paving-after.png",
        nl: {
          label: "Bestrating en prieel",
          beforeAlt:
            "Verwaarloosde achtertuin met mos, bladafval en oude tegels vóór de renovatie.",
          afterAlt:
            "Achtertuin na de renovatie, met grijze keramische bestrating, kunstgras en een tuinprieel.",
        },
        en: {
          label: "Paving and gazebo",
          beforeAlt:
            "Neglected backyard with moss, leaf litter and old slabs before the renovation.",
          afterAlt:
            "Backyard after the renovation, with grey ceramic paving, artificial grass and a garden gazebo.",
        },
      },
      {
        before: "/images/garden-renovations/side-path-paving-before.png",
        after: "/images/garden-renovations/side-path-paving-after.png",
        nl: {
          label: "Zijpad bestraat",
          beforeAlt:
            "Zijpad langs de woning uitgevlakt met straatzand, klaar voor de nieuwe tegels.",
          afterAlt:
            "Nieuw bestraat zijpad langs de woning, met grote grijze tegels en een strakke haagrand.",
        },
        en: {
          label: "Side path paved",
          beforeAlt:
            "Side path along the house levelled with paving sand, ready for the new tiles.",
          afterAlt:
            "Newly paved side path along the house, with large grey tiles and a clean hedge line.",
        },
      },
      {
        before:
          "/images/garden-renovations/garden-grass-tile-steps-before.png",
        after: "/images/garden-renovations/garden-grass-tile-steps-after.png",
        nl: {
          label: "Kunstgras met staptegels",
          beforeAlt:
            "Achtertuin tijdens het grondwerk, met uitgegraven ondergrond en opgebroken tegels.",
          afterAlt:
            "Achtertuin met kunstgras en staptegels na de heraanleg, direct aan de achtergevel.",
        },
        en: {
          label: "Grass with stepping tiles",
          beforeAlt:
            "Backyard during groundworks, with excavated subsoil and lifted slabs.",
          afterAlt:
            "Backyard with artificial grass and stepping tiles after the rebuild, right off the rear elevation.",
        },
      },
      {
        before:
          "/images/garden-renovations/garden-grass-sand-infill-before.png",
        after: "/images/garden-renovations/garden-grass-sand-infill-after.png",
        nl: {
          label: "Kunstgras gelegd",
          beforeAlt:
            "Geëgaliseerde ondergrond in de achtertuin, voorbereid voor kunstgras en bestrating.",
          afterAlt:
            "Vers gelegd kunstgras met invulzand naast natuursteen bestrating in de achtertuin.",
        },
        en: {
          label: "Artificial grass laid",
          beforeAlt:
            "Levelled base in the backyard, prepared for artificial grass and paving.",
          afterAlt:
            "Freshly laid artificial grass with sand infill next to natural stone paving in the backyard.",
        },
      },
      {
        before: "/images/garden-renovations/garden-mossy-paving-before.png",
        after:
          "/images/garden-renovations/garden-white-tiles-grass-after.png",
        nl: {
          label: "Smalle stadstuin",
          beforeAlt:
            "Smalle stadstuin vóór de renovatie, met kapotte flagstones vol mos en onkruid.",
          afterAlt:
            "Smalle stadstuin na de renovatie, met lichte bestrating, kunstgrasstrook en verhoogde plantenbak.",
        },
        en: {
          label: "Narrow city garden",
          beforeAlt:
            "Narrow city garden before the renovation, with broken flagstones covered in moss and weeds.",
          afterAlt:
            "Narrow city garden after the renovation, with light paving, an artificial grass strip and a raised planter.",
        },
      },
      {
        before: "/images/garden-renovations/garden-old-tiles-before.png",
        after: "/images/garden-renovations/garden-grey-tiles-after.png",
        nl: {
          label: "Keramisch terras",
          beforeAlt:
            "Achtertuin vóór de heraanleg, met verouderde betontegels en opgeslagen spullen.",
          afterAlt:
            "Ruim terras met grote grijze keramische tegels over de volle breedte van de achtertuin.",
        },
        en: {
          label: "Ceramic patio",
          beforeAlt:
            "Backyard before the rebuild, with dated concrete slabs and stored belongings.",
          afterAlt:
            "Spacious patio with large grey ceramic tiles across the full width of the backyard.",
        },
      },
    ],
    nl: {
      title: "Tuinrenovaties: bestrating, kunstgras en schuttingen",
      eyebrow: "Tuin en bestrating",
      summary:
        "Een selectie tuinprojecten: oude, verzakte tuinen omgebouwd naar strakke buitenruimtes met keramische bestrating, kunstgras, borders, schuttingen en overkappingen.",
      location: "Regio Eindhoven, Nederland",
      timeframe: "Doorlopende tuinprojecten",
      scope: [
        "Sloop, grondwerk en afvoer",
        "Keramische en natuursteen bestrating",
        "Kunstgras en gazonranden",
        "Verhoogde borders en plantenbakken",
        "Schuttingen en erfafscheidingen",
        "Overkappingen en pergola's",
      ],
      description: [
        "Deze pagina bundelt een reeks tuinen die we van begin tot eind hebben aangepakt. Het startpunt is bijna altijd hetzelfde: verzakte of kapotte bestrating, onkruid, slechte afwatering en een tuin die niet meer gebruikt wordt.",
        "Per tuin beginnen we met sloop- en grondwerk: oude bestrating eruit, de ondergrond uitgraven en egaliseren, en waar nodig drainage aanleggen. Daarna bouwen we op met een stevig zandbed en grootformaat keramische of natuurstenen tegels.",
        "Afhankelijk van de wensen combineren we de bestrating met kunstgras, verhoogde borders, siertegels, nieuwe schuttingen of een overkapping. Het resultaat is telkens een onderhoudsarme tuin die direct vanaf de achterdeur bruikbaar is.",
      ],
      keywords: [
        "tuinrenovatie Nederland",
        "tuin bestrating Nederland",
        "kunstgras aanleggen Nederland",
        "schutting plaatsen Nederland",
        "terras aanleggen Nederland",
        "tuinaanleg Eindhoven",
      ],
      coverAlt:
        "Vernieuwde stadstuin in Nederland met marmerlook keramische tegels en een strak kunstgrasgazon.",
      beforeCoverAlt:
        "Verouderde tuin vóór de renovatie, met kapotte natuurstenen bestrating, mos en onkruid.",
    },
    en: {
      title: "Garden renovations: paving, artificial grass and fencing",
      eyebrow: "Garden and paving",
      summary:
        "A selection of garden projects: tired, sunken gardens rebuilt into clean outdoor spaces with ceramic paving, artificial grass, borders, fencing and canopies.",
      location: "Eindhoven region, Netherlands",
      timeframe: "Ongoing garden projects",
      scope: [
        "Strip-out, groundworks and disposal",
        "Ceramic and natural stone paving",
        "Artificial grass and lawn edging",
        "Raised borders and planters",
        "Fencing and boundaries",
        "Canopies and pergolas",
      ],
      description: [
        "This page brings together a series of gardens we rebuilt from start to finish. The starting point is almost always the same: sunken or broken paving, weeds, poor drainage and a garden that no longer gets used.",
        "For each garden we start with strip-out and groundworks: old paving removed, the base excavated and levelled, and drainage added where needed. We then build up a solid sand bed and lay large-format ceramic or natural stone tiles.",
        "Depending on the brief, we combine the paving with artificial grass, raised borders, decorative tiles, new fencing or a canopy. The result is always a low-maintenance garden that is usable straight from the back door.",
      ],
      keywords: [
        "garden renovation Netherlands",
        "garden paving Netherlands",
        "artificial grass installation Netherlands",
        "fence installation Netherlands",
        "patio installation Netherlands",
        "garden landscaping Eindhoven",
      ],
      coverAlt:
        "Renovated city garden in the Netherlands with marble-look ceramic tiles and a neat artificial grass lawn.",
      beforeCoverAlt:
        "Tired garden before the renovation, with broken natural stone paving, moss and weeds.",
    },
  },
];

function localizeGalleryItems(items: GalleryItemSource[], locale: Locale) {
  return items.map((item) => ({
    src: item.src,
    alt: item[locale].alt,
    label: item[locale].label,
  }));
}

export function localizeProject(source: ProjectSource, locale: Locale) {
  const content = source[locale];
  const gallerySections = source.gallerySections?.map((section) => ({
    id: section.id,
    items: localizeGalleryItems(section.items, locale),
  }));
  const gallery = source.gallery
    ? localizeGalleryItems(source.gallery, locale)
    : (gallerySections?.flatMap((section) => section.items) ?? []);
  const galleryPairs = source.galleryPairs?.map((pair) => ({
    before: pair.before,
    after: pair.after,
    ...pair[locale],
  }));

  return {
    slug: source.slug,
    cover: source.cover,
    beforeCover: source.beforeCover,
    ...content,
    gallery,
    gallerySections,
    galleryPairs,
  };
}
