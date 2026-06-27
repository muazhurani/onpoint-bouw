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
    location: "Eindhoven area",
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
      "home renovation Eindhoven",
      "salon extension Eindhoven",
      "interior renovation Netherlands",
      "garden renovation Eindhoven",
      "patio paving Eindhoven",
    ],
    cover: "/images/garden-patio-exterior.png",
    coverAlt:
      "Salon extension and renovated garden at a brick home in the Eindhoven area, with patio paving, garden doors and a finished backyard.",
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
    location: "Eindhoven area",
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
      "home renovation Eindhoven",
      "garden renovation Eindhoven",
      "underfloor heating Eindhoven",
      "vloerverwarming",
      "toilet renovation Eindhoven",
      "gypsum board renovation",
    ],
    cover: "/images/rear-extension-patio-evening.png",
    coverAlt:
      "Finished garden and outdoor living area at a home in the Eindhoven area, with stone paving and integrated lighting at dusk.",
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
    location: "Eindhoven area",
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
      "home renovation Eindhoven",
      "garden renovation Eindhoven",
      "toilet renovation Eindhoven",
      "bathroom renovation Eindhoven",
      "gypsum board renovation",
      "badkamer renovatie Eindhoven",
    ],
    cover: "/images/renovation-garden-patio.png",
    coverAlt:
      "Renovated garden and patio at a home in the Eindhoven area, with paving, artificial grass and outdoor lighting at dusk.",
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
