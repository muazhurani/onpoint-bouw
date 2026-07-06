import type { Locale } from "@/app/lib/i18n";

export type ProjectContent = {
  title: string;
  eyebrow: string;
  summary: string;
  location: string;
  timeframe: string;
  /** Shown as a tag chip on the project card, e.g. "7 weken" */
  duration: string;
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

export type ProjectSource = {
  slug: string;
  cover: string;
  /** "Before" state for the card toggle; omit to show a placeholder */
  beforeCover?: string;
  gallery?: GalleryItemSource[];
  gallerySections?: GallerySectionSource[];
  nl: ProjectContent;
  en: ProjectContent;
};

export const projectSources: ProjectSource[] = [
  // TODO: Replace placeholder `duration` values below with real project durations.
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
          alt: "Aanbouw aan de salon met openslaande deuren naar een vernieuwde tuin met grijze bestrating en kunstgras.",
          label: "Salon en tuin",
        },
        en: {
          alt: "Rear salon extension with patio doors opening onto a rebuilt garden with grey paving and artificial grass.",
          label: "Salon and garden",
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
          alt: "Afgewerkte accentwand in de salon met houten latten, marmeren tv-paneel en ingebouwde zitbank.",
          label: "Accentwand salon",
        },
        en: {
          alt: "Finished feature wall in the salon with wood slat panelling, marble TV panel and built-in bench seating.",
          label: "Salon feature wall",
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
          alt: "Salonuitbreiding in ruwbouwfase, met houten dakconstructie, glazen schuifdeur en onafgewerkt terras.",
          label: "Aanbouw in ruwbouw",
        },
        en: {
          alt: "Salon extension at shell stage, with timber roof structure, sliding glass door and unfinished patio.",
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
      title: "Salonuitbreiding, interieurverbouwing en tuin",
      eyebrow: "Verbouwing en tuin",
      summary:
        "Een complete woningupgrade: vernieuwde leefruimtes binnen, een nieuwe uitbreiding van de salon met tuintoegang, en een achtertuin opnieuw ingericht met bestrating, niveaus en beplanting.",
      location: "Nederland",
      timeframe: "Verbouwing, aanbouw en tuinproject",
      duration: "10 weken",
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
      beforeCoverAlt:
        "Originele achtertuin vóór de renovatie, met grasveld, tegelterras en beplanting langs de woning.",
    },
    en: {
      title: "Salon extension, interior renovation and garden",
      eyebrow: "Renovation and garden",
      summary:
        "A full home upgrade: refreshed living spaces inside, a new extension to the salon with garden access, and a backyard rebuilt with paving, levels and planting.",
      location: "Netherlands",
      timeframe: "Renovation, extension and garden project",
      duration: "10 weeks",
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
      location: "Nederland",
      timeframe: "Verbouwing en tuinproject",
      duration: "12 weken",
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
      location: "Netherlands",
      timeframe: "Renovation and garden project",
      duration: "12 weeks",
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
      location: "Nederland",
      timeframe: "Verbouwing en tuinproject",
      duration: "8 weken",
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
      location: "Netherlands",
      timeframe: "Renovation and garden project",
      duration: "8 weeks",
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
      location: "Nederland",
      timeframe: "Keukenaanbouwproject",
      duration: "9 weken",
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
      location: "Netherlands",
      timeframe: "Kitchen extension project",
      duration: "9 weeks",
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
      location: "Nederland",
      timeframe: "Maatwerk timmerwerkproject",
      duration: "1 daag",
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
      location: "Netherlands",
      timeframe: "Custom carpentry project",
      duration: "1 day",
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
      location: "Nederland",
      timeframe: "Tuinrenovatieproject",
      duration: "6 weken",
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
      location: "Netherlands",
      timeframe: "Garden renovation project",
      duration: "6 weeks",
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

  return {
    slug: source.slug,
    cover: source.cover,
    beforeCover: source.beforeCover,
    ...content,
    gallery,
    gallerySections,
  };
}
