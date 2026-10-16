export type ProductCategoryKey =
  | "overhead"
  | "belt"
  | "roller"
  | "chain"
  | "other";

export type DetailPageData = {
  title: string;
  breadcrumb: string;
  heading: string;
  image: string;
  imageAlt: string;
  paragraphs: readonly string[];
  types: readonly string[];
  features: readonly string[];
  applications: readonly string[];
};

export type ProductCategory = DetailPageData;

export const PRODUCT_CATEGORIES: Readonly<Record<ProductCategoryKey, ProductCategory>> = {
  overhead: {
    title: "Overhead Conveyor Manufacturers",
    breadcrumb: "OVERHEAD CONVEYORS",
    heading: "Overhead Conveyor Systems for Efficient Material Handling",
    image: "four-wheel-overhead-conveyor.jpg",
    imageAlt: "Industrial overhead conveyor system",
    paragraphs: [
      "Huda Conveyors Solution designs overhead conveyor systems that move components above the production floor, keeping valuable working space clear while maintaining a dependable material flow.",
      "These systems can be configured for assembly, painting, finishing, storage, and transfer operations. Our dummy category overview highlights the common layouts and capabilities available for industrial overhead handling projects.",
    ],
    types: ["Enclosed track conveyors", "Four-wheel conveyors", "I-beam conveyors", "Power and free conveyors", "Overhead monorail systems"],
    features: ["Uses otherwise unused overhead space", "Flexible routing around production areas", "Suitable for continuous or indexed movement", "Configurable load carriers and controls"],
    applications: ["Automotive assembly", "Paint and finishing lines", "Warehousing", "Appliance manufacturing", "Component transfer"],
  },
  belt: {
    title: "Belt Conveyor Manufacturers",
    breadcrumb: "BELT CONVEYORS",
    heading: "Belt Conveyor Manufacturer in India",
    image: "belt-conveyor.jpg",
    imageAlt: "Industrial belt conveyor system",
    paragraphs: [
      "Huda Conveyors Solution supplies belt conveyor systems for smooth and controlled movement of products, packages, and bulk materials across production and distribution facilities.",
      "Belt width, speed, incline, side guides, supports, and control options can be selected for the material and process. This category overview presents common belt conveyor formats for manufacturing, logistics, food handling, and packaging applications.",
    ],
    types: ["Flat belt conveyors", "Inclined and declined conveyors", "Troughed belt conveyors", "Telescopic conveyors", "Cleated and sidewall conveyors", "Modular and curved conveyors"],
    features: ["Quiet and smooth operation", "Modular construction", "Multiple belt material options", "Easy integration with production lines"],
    applications: ["Packaging lines", "Food and beverage", "Warehousing and logistics", "Pharmaceuticals", "Assembly operations"],
  },
  roller: {
    title: "Roller Conveyor Manufacturers",
    breadcrumb: "ROLLER CONVEYORS",
    heading: "Roller Conveyor Solutions for Reliable Product Flow",
    image: "roller-conveyor.jpg",
    imageAlt: "Industrial roller conveyor system",
    paragraphs: [
      "Huda Conveyors Solution offers roller conveyor layouts for cartons, pallets, totes, and rigid products that require stable and repeatable movement between workstations.",
      "Gravity, powered, flexible, and curved arrangements can be combined to suit floor plans and throughput targets. The systems are suitable for accumulation, sorting, inspection, packing, and dispatch areas.",
    ],
    types: ["Gravity roller conveyors", "Powered roller conveyors", "Flexible roller conveyors", "Curved roller conveyors", "Chain-driven roller conveyors"],
    features: ["Low-friction product movement", "Straight and curved configurations", "Manual or powered operation", "Suitable for modular line extensions"],
    applications: ["Carton handling", "Pallet transfer", "Order fulfilment", "Packing stations", "Loading and dispatch"],
  },
  chain: {
    title: "Chain Conveyor Manufacturers",
    breadcrumb: "CHAIN CONVEYORS",
    heading: "Heavy-Duty Chain Conveyor Systems",
    image: "apron-conveyor.jpg",
    imageAlt: "Heavy-duty industrial chain conveyor",
    paragraphs: [
      "Huda Conveyors Solution develops chain conveyor systems for heavy, hot, abrasive, or irregular loads that need positive drive and robust mechanical construction.",
      "Chain pitch, slats, aprons, flights, frames, and drive assemblies can be selected around the load and operating environment. These conveyors support demanding material-transfer duties where conventional belt systems may not be suitable.",
    ],
    types: ["Apron conveyors", "Slat conveyors", "Drag chain conveyors", "Multi-strand chain conveyors", "Vertical chain conveyors"],
    features: ["Positive-drive material movement", "Heavy-duty frame construction", "Handles high loads and harsh conditions", "Custom flights, slats, and attachments"],
    applications: ["Automotive components", "Metal processing", "Bulk material transfer", "Foundries", "Heavy assembly lines"],
  },
  other: {
    title: "Other Conveyor Solutions",
    breadcrumb: "OTHER CONVEYORS",
    heading: "Special-Purpose Conveyor and Handling Systems",
    image: "wire-mesh-belt-conveyor.jpg",
    imageAlt: "Special-purpose industrial conveyor",
    paragraphs: [
      "Huda Conveyors Solution provides special-purpose conveyors and complementary material-handling equipment for processes that fall outside standard belt, roller, overhead, or chain configurations.",
      "Solutions can be adapted for elevation, cooling, washing, waste movement, bulk transfer, truck loading, and restricted floor space. This category groups the engineered systems used for unusual products and operating conditions.",
    ],
    types: ["Screw conveyors", "Bucket elevators", "Wire-mesh conveyors", "Spiral conveyors", "Chip conveyors", "Truck-loading conveyors"],
    features: ["Purpose-built mechanical layouts", "Options for elevation and confined spaces", "Material-specific construction", "Integration with upstream and downstream equipment"],
    applications: ["Waste management", "Bulk solids handling", "Cooling and drying", "Machine-chip removal", "Loading and unloading"],
  },
};
