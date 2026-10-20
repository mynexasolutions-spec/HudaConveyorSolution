import type { Metadata } from "next";

export const SITE_URL: string = "https://www.hudaconveyorssolution.com";
export const SITE_NAME: string = "Huda Conveyors Solution";
export const SITE_PHONE: string = "+91-9891137368";
export const SITE_EMAIL: string = "hudaconveyorsolution@gmail.com";
export const SITE_OG_IMAGE: string = "/images/hero.jpg";

type SeoPage = {
  readonly title: string;
  readonly description: string;
};

function productPage(name: string, detail: string): SeoPage {
  return {
    title: `${name} Manufacturer & Supplier in India`,
    description: `${name} manufacturer in India. Huda Conveyors Solution designs, manufactures and installs ${detail}. Call ${SITE_PHONE} for a quote.`,
  };
}

export const SEO_PAGES: Readonly<Record<string, SeoPage>> = {
  "": {
    title: "Overhead Conveyor Manufacturer in India",
    description:
      "Huda Conveyors Solution (Anoopshahar, Bulandshahr, UP) manufactures overhead conveyors, belt conveyors, roller conveyors, chain conveyors and turnkey plants since 2008.",
  },
  about: {
    title: "About Us",
    description:
      "Huda Conveyors Solution, previously Huda Engineering, has built industrial overhead and floor conveyor systems since 2008. Learn about our team and capabilities.",
  },
  blog: {
    title: "Conveyor Blog & Industry Articles",
    description:
      "Read guides on how conveyor belts work, top belt conveyor companies in India and material handling tips from Huda Conveyors Solution.",
  },
  gallery: {
    title: "Project Gallery - Conveyor Photos & Videos",
    description:
      "Photos and videos of our conveyor projects: overhead conveyor lines, sprockets, trolleys, rollers, chains and spare parts made by Huda Conveyors Solution.",
  },
  contact: {
    title: "Contact Us - Get a Conveyor Quote",
    description: `Contact Huda Conveyors Solution, Anoopshahar, Bulandshahr, Uttar Pradesh 203390. Call ${SITE_PHONE} or email ${SITE_EMAIL} for conveyor quotes.`,
  },
  "overhead-conveyors": productPage("Overhead Conveyor", "overhead conveyor systems for assembly, painting and finishing lines"),
  "enclosed-overhead-conveyor": productPage("Enclosed Overhead Conveyor 5T & 7T", "enclosed track overhead conveyors in 5T and 7T"),
  "four-wheel-overhead-conveyor": productPage("Four Wheel Overhead Conveyor", "four wheel overhead conveyors with trolleys and chains"),
  "beam-overhead-conveyors": productPage("I Beam Overhead Conveyor", "I beam overhead conveyors and take-up units"),
  "belt-conveyor": productPage("Belt Conveyor", "belt conveyor systems for packaging, logistics and production lines"),
  "flat-belt-conveyor": productPage("Flat Belt Conveyor", "flat belt conveyors for product and package handling"),
  "incline-belt-conveyor": productPage("Inclined Belt Conveyor", "inclined belt conveyors for lifting and loading"),
  "troughed-belts-conveyor": productPage("Troughed Belt Conveyor", "troughed belt conveyors for bulk material handling"),
  "telescopic-belt-conveyor": productPage("Telescopic Belt Conveyor", "telescopic belt conveyors for truck loading and unloading"),
  "sidewalls-belt-conveyor": productPage("Sidewall Belt Conveyor", "sidewall belt conveyors for steep and bulk handling"),
  "assembly-line-belt-conveyor": productPage("Assembly Line Belt Conveyor", "assembly line belt conveyors for production workstations"),
  "cleated-belt-conveyor": productPage("Cleated Belt Conveyor", "cleated belt conveyors for inclined material transfer"),
  "modular-belt-conveyor": productPage("Modular Belt Conveyor", "modular belt conveyors for food, packaging and washdown use"),
  "curve-belt-conveyor": productPage("Curved Belt Conveyor", "curved belt conveyors for compact layouts"),
  "roller-conveyors": productPage("Roller Conveyor", "roller conveyors for cartons, pallets and totes"),
  "roller-conveyor": productPage("Roller Conveyor", "gravity and powered roller conveyors"),
  "flexible-roller-conveyor": productPage("Flexible Roller Conveyor", "flexible and expandable roller conveyors"),
  "curved-roller-conveyor": productPage("Curved Roller Conveyor", "curved roller conveyors for turns and accumulation"),
  "chain-conveyors": productPage("Chain Conveyor", "chain conveyors for heavy and continuous handling"),
  "apron-conveyor": productPage("Apron Conveyor", "apron conveyors for heavy, hot and abrasive materials"),
  "slat-conveyor": productPage("Slat Conveyor", "slat conveyors for assembly and heavy products"),
  "drag-chain-conveyor": productPage("Drag Chain Conveyor", "drag chain conveyors for bulk and pallet handling"),
  "other-conveyors": productPage("Industrial Conveyor", "screw conveyors, bucket elevators, spiral and chip conveyors"),
  "screw-conveyors": productPage("Screw Conveyor", "screw conveyors for powders, grains and bulk material"),
  "bucket-elevators": productPage("Bucket Elevator", "bucket elevators for vertical bulk lifting"),
  "waste-management-plant": {
    title: "Waste Management Plant Manufacturer in India",
    description: `Waste management plant and conveyor systems by Huda Conveyors Solution for segregation, sorting and recycling lines. Call ${SITE_PHONE}.`,
  },
  "ash-handling-system": productPage("Ash Handling System", "ash handling conveyor systems for power plants"),
  "coal-handling-plant": {
    title: "Coal Handling Plant Manufacturer in India",
    description: `Coal handling plant and conveyor systems by Huda Conveyors Solution for power and industrial plants. Call ${SITE_PHONE} for a quote.`,
  },
  "baling-machine": productPage("Baling Machine", "baling machines for waste, scrap and recycling"),
  "wire-mesh-belt-conveyor": productPage("Wire Mesh Belt Conveyor", "wire mesh belt conveyors for heat treatment and washing lines"),
  "vertical-chain-conveyor": productPage("Vertical Chain Conveyor", "vertical chain conveyors for level-to-level transfer"),
  "inverted-floor-conveyours-towline": productPage("Inverted Floor Conveyor / Towline", "inverted floor conveyors and towline systems"),
  "spiral-conveyor": productPage("Spiral Conveyor", "spiral conveyors for space-saving elevation changes"),
  "chip-conveyor": productPage("Chip Conveyor", "chip conveyors for machine tool swarf removal"),
  "onveyors-truck-loading-conveyor": productPage("Truck Loading Conveyor", "truck loading and unloading conveyors"),
  "paint-shop": {
    title: "Industrial Paint Shop Solutions in India",
    description: `Complete industrial paint shop and overhead conveyor solutions by Huda Conveyors Solution. Call ${SITE_PHONE}.`,
  },
  "turn-key-solutions": {
    title: "Turnkey Conveyor & Plant Solutions in India",
    description: `Turnkey conveyor, paint shop and plant solutions from design to installation by Huda Conveyors Solution. Call ${SITE_PHONE}.`,
  },
  "pet-bottle-recycling": {
    title: "PET Bottle Recycling Plant Manufacturer in India",
    description: `PET bottle recycling plant and conveyor systems by Huda Conveyors Solution. Call ${SITE_PHONE} for a quote.`,
  },
};

export function pageMetadata(slug: string): Metadata {
  const page: SeoPage = SEO_PAGES[slug];
  const path: string = slug === "" ? "/" : `/${slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: SITE_OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      images: [SITE_OG_IMAGE],
    },
  };
}
