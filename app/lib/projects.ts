export type ProjectGalleryItem = {
  src?: string;
  alt: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  location: string;
  timeframe: string;
  scope: string[];
  description: string[];
  keywords: string[];
  cover: string;
  coverAlt: string;
  gallery: ProjectGalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "garden-patio",
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
    cover: "/images/garden-patio-exterior.png",
    coverAlt:
      "Salon extension and renovated garden at a brick home in the Netherlands, with patio paving, garden doors and a finished backyard.",
    gallery: [
      {
        src: "/images/garden-patio-exterior.png",
        alt: "Rear salon extension with patio doors opening onto a rebuilt garden with grey paving and artificial grass.",
        label: "Salon and garden",
      },
      {
        src: "/images/garden-patio-open-plan.png",
        alt: "Open-plan living space after the interior renovation, with light wood flooring and recessed ceiling lighting.",
        label: "Open-plan living",
      },
      {
        src: "/images/garden-patio-living-room.png",
        alt: "Renovated living area with new flooring, lighting and a clearer layout through the home.",
        label: "Living area",
      },
      {
        src: "/images/garden-patio-feature-wall.png",
        alt: "Finished feature wall in the salon with wood slat panelling, marble TV panel and built-in bench seating.",
        label: "Salon feature wall",
      },
      {
        src: "/images/garden-patio-dining-area.png",
        alt: "Dining area in the renovated open-plan space with new flooring and floor-to-ceiling windows.",
        label: "Dining area",
      },
      {
        src: "/images/garden-patio-backyard.png",
        alt: "Finished backyard with grey paving, artificial grass, pebble paths, planting and a wooden bridge detail.",
        label: "Finished garden",
      },
    ],
  },
  {
    slug: "rear-extension",
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
    cover: "/images/rear-extension-patio-evening.png",
    coverAlt:
      "Finished garden and outdoor living area at a home in the Netherlands, with stone paving and integrated lighting at dusk.",
    gallery: [
      {
        src: "/images/rear-extension-garden-room.png",
        alt: "Finished outdoor living space with stone paving, marble-lined walls and recessed ceiling lighting.",
        label: "Garden and outdoor area",
      },
      {
        src: "/images/rear-extension-patio-evening.png",
        alt: "Rebuilt garden with stone paving, artificial grass and warm outdoor lighting at dusk.",
        label: "Garden at dusk",
      },
      {
        src: "/images/rear-extension-backyard-evening.png",
        alt: "Finished backyard with paved terrace, lawn, planting and garden lighting.",
        label: "Backyard overview",
      },
      {
        src: "/images/rear-extension-kitchen.png",
        alt: "Renovated kitchen and living space with new flooring, cabinetry and ceiling finishes.",
        label: "Interior renovation",
      },
      {
        src: "/images/rear-extension-bathroom-vanity.png",
        alt: "Renovated bathroom with new wall tiling and a floating vanity.",
        label: "Bathroom renovation",
      },
      {
        src: "/images/rear-extension-bathroom-shower.png",
        alt: "Renovated toilet and shower room with floor-to-ceiling tiling and a walk-in shower.",
        label: "Toilet and shower",
      },
    ],
  },
  {
    slug: "bathroom-renovation",
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
    cover: "/images/renovation-garden-patio.png",
    coverAlt:
      "Renovated garden and patio at a home in the Netherlands, with paving, artificial grass and outdoor lighting at dusk.",
    gallery: [
      {
        src: "/images/renovation-garden-patio.png",
        alt: "Finished garden with paved patio, artificial grass, brick wall and warm outdoor lighting at dusk.",
        label: "Garden and patio",
      },
      {
        src: "/images/renovation-garden-evening.png",
        alt: "Backyard renovation with paving, lawn, planting and wall lights along a brick boundary.",
        label: "Garden at dusk",
      },
      {
        src: "/images/renovation-lounge.png",
        alt: "Renovated lounge with new flooring, white walls and patio doors opening to the garden.",
        label: "Living room",
      },
      {
        src: "/images/renovation-living-room.png",
        alt: "Finished interior room with gypsum board walls, wood flooring and recessed ceiling lighting.",
        label: "Interior renovation",
      },
      {
        src: "/images/renovation-bathroom.png",
        alt: "Renovated bathroom and toilet with marble-effect wall tiles, walk-in shower and matte-black fixtures.",
        label: "Bathroom renovation",
      },
      {
        src: "/images/renovation-shower.png",
        alt: "Walk-in shower with built-in bench, glass partition and black rainfall shower fittings.",
        label: "Walk-in shower",
      },
    ],
  },
  {
    slug: "floor-heating-marble",
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
    cover: "/images/floor-heating-finished-marble.png",
    coverAlt:
      "Finished marble floor in a renovated room in the Netherlands, with underfloor heating beneath and cove lighting in the ceiling.",
    gallery: [
      {
        src: "/images/floor-heating-underfloor-installation.png",
        alt: "Underfloor heating pipes laid on studded insulation boards before the screed is poured.",
        label: "Underfloor heating",
      },
      {
        src: "/images/floor-heating-pipe-layout.png",
        alt: "Heating pipe circuits clipped into floor panels across a renovated room.",
        label: "Pipe layout",
      },
      {
        src: "/images/floor-heating-tile-installation.png",
        alt: "Large marble-effect tiles being laid on a prepared floor with spacers and adhesive.",
        label: "Tile installation",
      },
      {
        src: "/images/floor-heating-marble-laying.png",
        alt: "Marble slabs placed with a tile levelling system during installation.",
        label: "Marble slab laying",
      },
      {
        src: "/images/floor-heating-finished-marble.png",
        alt: "Completed marble floor with polished tiles, cove lighting and finished walls.",
        label: "Finished floor",
      },
    ],
  },
  {
    slug: "toilet-renovation",
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
    cover: "/images/toilet-renovation-finished.png",
    coverAlt:
      "Finished toilet and bathroom renovation in the Netherlands with walk-in shower, wall-hung toilet and beige marble-effect tiling.",
    gallery: [
      {
        src: "/images/toilet-renovation-demolition.png",
        alt: "Bathroom stripped back during demolition, with old tiles removed and debris cleared.",
        label: "Strip-out",
      },
      {
        src: "/images/toilet-renovation-stripped.png",
        alt: "Bare bathroom walls and floor prepared for new plumbing and waterproofing.",
        label: "Prepared room",
      },
      {
        src: "/images/toilet-renovation-waterproofing.png",
        alt: "Blue waterproof membrane applied to walls and floor with a concealed toilet frame installed.",
        label: "Waterproofing",
      },
      {
        src: "/images/toilet-renovation-tiling.png",
        alt: "Large-format tiles being laid on walls and floor with a levelling system and linear drain.",
        label: "Tiling",
      },
      {
        src: "/images/toilet-renovation-vanity.png",
        alt: "Floating wood vanity fitted with a double basin and large-format grey wall tiles.",
        label: "Vanity fitted",
      },
      {
        src: "/images/toilet-renovation-finished.png",
        alt: "Completed bathroom with walk-in shower, wall-hung toilet and continuous beige tiling.",
        label: "Finished bathroom",
      },
    ],
  },
  {
    slug: "kitchen-extension",
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
    cover: "/images/kitchen-extension-exterior-finished.png",
    coverAlt:
      "Completed kitchen extension on a brick terraced home in the Netherlands, with patio doors, grey porcelain tiles and a small garden lawn.",
    gallery: [
      {
        src: "/images/kitchen-extension-before.png",
        alt: "Original cramped kitchen before the extension work started.",
        label: "Kitchen before",
      },
      {
        src: "/images/kitchen-extension-structure.png",
        alt: "Rear wall opened with a steel lintel and extension foundations laid in the garden.",
        label: "Structure and foundations",
      },
      {
        src: "/images/kitchen-extension-build-progress.png",
        alt: "Extension shell with plasterboard walls, screed floor and opening prepared for patio doors.",
        label: "Build in progress",
      },
      {
        src: "/images/kitchen-extension-kitchen-finished.png",
        alt: "Finished kitchen-diner with white handleless units, herringbone flooring and a roof lantern.",
        label: "Finished kitchen-diner",
      },
      {
        src: "/images/kitchen-extension-exterior-finished.png",
        alt: "Completed rear extension exterior with brickwork, patio doors and a grey porcelain patio.",
        label: "Extension and patio",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
