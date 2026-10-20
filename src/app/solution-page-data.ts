import type { DetailPageData } from "./product-category-data";

export type SolutionPageKey =
  | "waste-management"
  | "paint-shop"
  | "coal-handling"
  | "turnkey"
  | "pet-recycling";

export type SolutionPage = DetailPageData;

export const SOLUTION_PAGES: Readonly<Record<SolutionPageKey, SolutionPage>> = {
  "waste-management": {
    title: "Waste Management Plant Manufacturers",
    breadcrumb: "WASTE MANAGEMENT PLANT",
    heading: "Integrated Waste Management Plant Solutions",
    image: "waste-management-plant.jpg",
    imageAlt: "Industrial waste management and material sorting plant",
    paragraphs: [
      "Huda Conveyors Solution designs integrated waste-management plants that bring receiving, segregation, conveying, processing, and recovery equipment into one coordinated material-flow system.",
      "Each plant can be planned around the incoming waste stream, available floor area, recovery targets, and required output. The solution supports safer handling, improved sorting efficiency, and more consistent preparation of recyclable or recoverable materials.",
    ],
    types: ["Material recovery facilities", "Municipal solid-waste sorting lines", "Plastic waste processing lines", "Refuse-derived fuel systems", "Construction-waste handling systems"],
    features: ["Integrated conveying and segregation", "Modular plant layouts", "Manual and automated sorting options", "Dust and safety control provisions"],
    applications: ["Municipal waste", "Commercial waste", "Plastic recovery", "Recycling facilities", "Industrial waste processing"],
  },
  "paint-shop": {
    title: "Industrial Paint Shop Solutions",
    breadcrumb: "PAINT SHOP",
    heading: "Complete Paint Shop and Finishing Systems",
    image: "four-wheel-overhead-conveyor.jpg",
    imageAlt: "Industrial paint shop conveyor and finishing line",
    paragraphs: [
      "Huda Conveyors Solution provides paint-shop material handling systems for controlled component movement through preparation, coating, curing, inspection, and unloading stages.",
      "Layouts can combine overhead conveyors, booths, ovens, controls, and workstations to maintain process timing and reduce manual handling. Solutions are adapted for component size, coating method, production volume, and available space.",
    ],
    types: ["Powder-coating lines", "Liquid paint lines", "Pre-treatment systems", "Curing and drying ovens", "Overhead conveyor paint lines"],
    features: ["Controlled line speed and dwell time", "Flexible carrier arrangements", "Integrated booth and oven movement", "Suitable for batch or continuous production"],
    applications: ["Automotive components", "Appliances", "Metal furniture", "Fabricated parts", "Industrial equipment"],
  },
  "coal-handling": {
    title: "Coal Handling Plant Manufacturers",
    breadcrumb: "COAL HANDLING PLANT",
    heading: "Reliable Coal Handling and Transfer Systems",
    image: "coal-handling.jpg",
    imageAlt: "Industrial coal handling conveyor plant",
    paragraphs: [
      "Huda Conveyors Solution develops coal-handling systems for receiving, crushing, screening, conveying, stacking, and controlled feeding of coal and similar bulk materials.",
      "The system layout is selected around plant capacity, material characteristics, transfer distances, dust-control requirements, and downstream equipment. Robust conveyors and transfer points support dependable operation in demanding environments.",
    ],
    types: ["Coal receiving systems", "Crushing and screening lines", "Belt conveyor transfer systems", "Stacking and reclaiming systems", "Bunker and feeder arrangements"],
    features: ["Heavy-duty construction", "Dust-control integration", "Controlled and continuous material flow", "Custom transfer chutes and supports"],
    applications: ["Power plants", "Cement plants", "Steel facilities", "Boiler feeding", "Bulk-material terminals"],
  },
  turnkey: {
    title: "Turnkey Industrial Solutions",
    breadcrumb: "TURN KEY SOLUTIONS",
    heading: "End-to-End Conveyor and Automation Projects",
    image: "hero.jpg",
    imageAlt: "Integrated industrial conveyor and automation system",
    paragraphs: [
      "Huda Conveyors Solution manages turnkey material-handling projects from requirement study and concept design through manufacturing, controls, installation, and commissioning.",
      "A single coordinated project approach keeps mechanical equipment, electrical controls, safety provisions, and site execution aligned. The result is a complete system developed around production goals, plant constraints, and operating requirements.",
    ],
    types: ["Concept and layout engineering", "Mechanical system design", "Electrical and control integration", "Manufacturing and installation", "Testing and commissioning"],
    features: ["Single-point project coordination", "Custom engineering", "Integrated mechanical and electrical scope", "Site installation and performance trials"],
    applications: ["New production lines", "Plant expansions", "Warehouse automation", "Process-line modernization", "Material-flow improvement"],
  },
  "pet-recycling": {
    title: "PET Bottle Recycling Plant Manufacturers",
    breadcrumb: "PET BOTTLE RECYCLING PLANT",
    heading: "PET Bottle Washing and Recycling Solutions",
    image: "wire-mesh-belt-conveyor.jpg",
    imageAlt: "PET bottle recycling conveyor and processing system",
    paragraphs: [
      "Huda Conveyors Solution supplies PET bottle recycling lines for sorting, label removal, size reduction, washing, separation, drying, and transfer of post-consumer plastic bottles.",
      "The process can be configured around feed quality, contamination level, required throughput, and final flake specification. Integrated conveyors connect each stage and support consistent, efficient material movement throughout the recycling line.",
    ],
    types: ["Bottle sorting conveyors", "Label-removal systems", "Crushing and flake transfer", "Hot and cold washing lines", "Separation and drying systems"],
    features: ["Modular process stages", "Water and contamination management", "Consistent material transfer", "Capacity-based equipment selection"],
    applications: ["Post-consumer PET bottles", "Plastic recovery facilities", "Washed PET flake production", "Recycling operations", "Packaging-waste processing"],
  },
};
