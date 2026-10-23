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
    heading: "High-Efficiency Integrated Waste Management & Material Recovery Plant Solutions",
    image: "waste-management-plant.jpg",
    imageAlt: "Industrial waste management and material sorting plant",
    paragraphs: [
      "Huda Conveyors Solution engineers and manufactures turnkey waste management and material recovery facilities (MRFs) designed for high-throughput receiving, multi-stage segregation, secondary sorting, and automated baling. Our heavy-duty material-flow systems integrate robust sorting belt conveyors, magnetic overband separators, trommel screens, and shredder infeed lines to optimize resource recovery and streamline municipal, commercial, and industrial waste handling.",
      "Every plant layout is custom-tailored to site dimensions, incoming waste composition (MSW, dry recyclables, industrial plastic, RDF), and targeted purity rates. Featuring heavy-duty impact beds, anti-wrapping roller assemblies, variable-speed VFD drive control, and ergonomic elevated sorting platforms, our waste processing plants deliver continuous operational reliability, minimal downtime, and elevated recycling recovery margins.",
    ],
    types: [
      "Municipal Solid Waste (MSW) Sorting Lines",
      "Material Recovery Facilities (MRF) & Sorting Platforms",
      "Refuse-Derived Fuel (RDF) Processing Conveyors",
      "Plastic & Polymer Recycling Infeed Systems",
      "Industrial & Commercial Bulk Waste Handling Lines",
    ],
    features: [
      "Ergonomic elevated picking belts with safety pull-cords",
      "Heavy-duty anti-rip belts with cleats & chevron profiles",
      "Automated magnetic separator & screening integration",
      "Variable-speed VFD automation & centralized control panels",
    ],
    applications: [
      "Municipal Solid Waste (MSW) Treatment Plants",
      "Material Recovery & Commercial Recycling Facilities",
      "Cement Kiln Co-Processing & RDF Production Lines",
      "Plastic Washing, Flaking & Pelletizing Infeed",
      "Scrap Material & Bulk Industrial Waste Stations",
    ],
  },
  "paint-shop": {
    title: "Industrial Paint Shop Solutions",
    breadcrumb: "PAINT SHOP",
    heading: "Automated Paint Shop Conveyors & Surface Finishing Lines",
    image: "four-wheel-overhead-conveyor.jpg",
    imageAlt: "Industrial paint shop conveyor and finishing line",
    paragraphs: [
      "Huda Conveyors Solution manufactures high-precision conveyor systems and turnkey material handling setups for modern industrial paint shops, powder coating plants, and automated finishing lines. We deliver seamless component transport across every stage—including multi-stage chemical pre-treatment, liquid spray booths, powder application chambers, high-temperature curing ovens, and cooling zones.",
      "Our paint shop installations feature heavy-duty I-beam monorails, enclosed track conveyors, and power-and-free overhead loops engineered to withstand continuous operating temperatures up to 250°C. With smooth variable-speed drive controls, customized component carriers, and explosion-safe electrical designs, our systems ensure uniform coating thickness, zero contamination, and maximum production throughput.",
    ],
    types: [
      "Overhead Monorail & Enclosed Track Paint Lines",
      "Power & Free Accumulating Conveyor Systems",
      "Automated Powder Coating & Spray Booth Conveyors",
      "Multi-Stage Dip & Tunnel Pre-Treatment Systems",
      "Continuous High-Temperature Curing Oven Conveyors",
    ],
    features: [
      "Heat-resistant forged alloy chains & sealed bearings (up to 250°C)",
      "Variable-speed VFD control with automated index & dwell timing",
      "Cleanroom-grade enclosed tracks preventing oil drips and contamination",
      "Modular structural supports, curves, and custom hanging jigs",
    ],
    applications: [
      "Automotive Chassis & Body Component Finishing",
      "Sheet Metal Enclosures, Server Racks & Control Panels",
      "Heavy Machinery, Agricultural & Structural Steel Coating",
      "Consumer Appliances, White Goods & Metal Furniture",
      "Architectural Aluminum Extrusion & Profile Powder Coating",
    ],
  },
  "coal-handling": {
    title: "Coal Handling Plant Manufacturers",
    breadcrumb: "COAL HANDLING PLANT",
    heading: "High-Capacity Coal Handling & Bulk Material Transfer Systems",
    image: "coal-handling.jpg",
    imageAlt: "Industrial coal handling conveyor plant",
    paragraphs: [
      "Huda Conveyors Solution engineers and manufactures high-performance coal handling plants designed for continuous, heavy-duty duty cycles across power plants, steel mills, and process facilities. Our systems provide complete end-to-end bulk material movement—from automated receiving and primary/secondary crushing to high-capacity screening, overland conveying, stacking, and regulated bunker feeding.",
      "Every turnkey layout is precision-engineered around hourly throughput demands, lump size characteristics, elevation profiles, and stringent dust suppression standards. Built with heavy-duty structural trusses, wear-resistant transfer chutes, and intelligent PLC automation, our installations ensure maximum throughput, minimal spillage, and uninterrupted uptime in abrasive operating environments.",
    ],
    types: [
      "Wagon Receiving & Track Hoppers",
      "Crushing & Multi-Deck Screening Lines",
      "Heavy-Duty Belt Conveyor Transfer Systems",
      "Stacker & Reclaimer Conveyor Lines",
      "Automated Bunker & Boiler Feeder Systems",
    ],
    features: [
      "Heavy-duty structural steel galleries & trusses",
      "Integrated dust suppression & dry-fog extraction",
      "Intelligent PLC controls & automated flow regulation",
      "Abrasion-resistant liners, skirtboards & transfer chutes",
    ],
    applications: [
      "Thermal Power Generation Plants",
      "Steel & Metallurgical Facilities",
      "Cement & Mineral Processing Plants",
      "Industrial Boiler Feeding Systems",
      "Bulk Material Port & Rail Terminals",
    ],
  },
  turnkey: {
    title: "Turnkey Industrial Solutions",
    breadcrumb: "TURN KEY SOLUTIONS",
    heading: "Turnkey Conveyor Systems & End-to-End Plant Automation",
    image: "hero.jpg",
    imageAlt: "Integrated industrial conveyor and automation system",
    paragraphs: [
      "Huda Conveyors Solution delivers complete turnkey material handling and plant automation projects from initial engineering analysis and 3D simulation through precision manufacturing, electrical controls integration, site erection, and final performance commissioning.",
      "Our unified project execution model coordinates heavy structural fabrication, mechanical drive trains, variable-speed motor controls, and intelligent PLC/SCADA automation into a single cohesive delivery. Designed around your throughput targets, footprint constraints, and safety standards, our turnkey installations provide dependable long-term performance and rapid return on capital investment.",
    ],
    types: [
      "Complete Assembly & Production Line Conveyors",
      "Overland Bulk Material Handling Systems",
      "Automated Warehousing & Distribution Conveyors",
      "Multi-Tier Packaging, Sorting & Dispatch Lines",
      "Retrofitting & Brownfield Line Modernization",
    ],
    features: [
      "Single-point engineering, fabrication & site commissioning",
      "Tailored mechanical architecture & structural galleries",
      "Centralized PLC/SCADA automation & real-time monitoring",
      "Rigorous load-cell testing, safety interlocks & CE compliance",
    ],
    applications: [
      "Automotive & Heavy Engineering Plants",
      "FMCG, Food & Beverage Packaging Lines",
      "E-Commerce, Logistics & Cargo Hubs",
      "Heavy Industrial & Mineral Processing Plants",
      "Pharmaceutical & Cleanroom Assembly Lines",
    ],
  },
  "pet-recycling": {
    title: "PET Bottle Recycling Plant Manufacturers",
    breadcrumb: "PET BOTTLE RECYCLING PLANT",
    heading: "High-Capacity PET Bottle Washing & Polymer Recycling Plants",
    image: "wire-mesh-belt-conveyor.jpg",
    imageAlt: "PET bottle recycling conveyor and processing system",
    paragraphs: [
      "Huda Conveyors Solution engineers and manufactures high-throughput PET bottle recycling and washing lines designed for automated sorting, label de-laminating, wet/dry granulating, multi-stage hot washing, centrifugal drying, and pneumatic transfer of post-consumer plastic bottles.",
      "Engineered to handle varying bale contamination levels, our robust conveyor circuits and stainless-steel processing units maximize flake purity and bottle-to-bottle food-grade recyclability. With integrated water clarification recirculators and heavy-duty dewatering augers, our plants ensure low operational consumption and maximum polymer recovery.",
    ],
    types: [
      "Bale Breaking & De-Baling Infeed Conveyors",
      "Trommel Screening & Optical Sorting Feed Lines",
      "High-Speed Mechanical Label Separator Units",
      "Continuous Hot Wash, Friction Washer & Float-Sink Tanks",
      "Flake Dewatering, Turbo Drying & Pneumatic Silo Conveying",
    ],
    features: [
      "Heavy-duty corrosion-resistant SS304/SS316 contact surfaces",
      "High-efficiency label extraction and heavy contaminant separation",
      "Automated closed-loop hot water & chemical dosing integration",
      "Continuous high-capacity throughput with minimal flake loss",
    ],
    applications: [
      "Post-Consumer Bottle-to-Bottle Recycling Facilities",
      "High-Purity Polyester Staple Fiber (PSF) Production",
      "Thermoforming Sheet & Strapping Grade Flake Lines",
      "Commercial Plastics Recovery & Aggregation Hubs",
      "Circular Economy Municipal Sorting Centers",
    ],
  },
};
