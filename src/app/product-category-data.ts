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
    heading: "Precision Overhead Conveyor Systems & Automated Handling",
    image: "four-wheel-overhead-conveyor.jpg",
    imageAlt: "Industrial overhead conveyor system",
    paragraphs: [
      "Huda Conveyors Solution engineers and manufactures high-efficiency overhead conveyor systems that utilize overhead plant space to optimize floor area, improve ergonomics, and maintain continuous, synchronized material flow through demanding industrial processes.",
      "Configured for assembly lines, electrostatic paint booths, powder coating lines, curing ovens, and multi-tier accumulation loops, our overhead systems feature heavy-duty drop-forged chains, enclosed tracks, and intelligent power-and-free controls for dependable continuous duty.",
    ],
    types: [
      "Enclosed Track Monorail Conveyors",
      "Heavy-Duty Four-Wheel Conveyors",
      "Structural I-Beam Trolley Conveyors",
      "Power & Free Overhead Accumulation Lines",
      "Automated Overhead Dispatch & Cooling Loops",
    ],
    features: [
      "Maximizes available floor area with aerial routing",
      "Continuous or indexed variable-speed VFD control",
      "Heat-treated forged chain links & sealed trolley bearings",
      "Configurable custom carriers, hooks, and automated drop sections",
    ],
    applications: [
      "Automotive & Two-Wheeler Assembly Lines",
      "Electrostatic Paint Shop & Powder Coating Lines",
      "Industrial Curing Ovens & Cooling Galleries",
      "White Goods & Home Appliance Manufacturing",
      "Overhead Buffer Storage & Order Fulfillment",
    ],
  },
  belt: {
    title: "Belt Conveyor Manufacturers",
    breadcrumb: "BELT CONVEYORS",
    heading: "Heavy-Duty Industrial Belt Conveyor Systems in India",
    image: "belt-conveyor.jpg",
    imageAlt: "Industrial belt conveyor system",
    paragraphs: [
      "Huda Conveyors Solution is a premier manufacturer and supplier of heavy-duty industrial belt conveyor systems, delivering precision-engineered solutions for automated transfer of unit loads, packaged goods, cartons, and bulk materials across modern manufacturing and distribution facilities.",
      "With over 25 years of engineering expertise, our belt conveyor systems are custom-fabricated in modular stainless steel, mild steel, and aluminum extruded profiles. Equipped with premium vulcanized rubber, PVC, PU, or modular plastic belting, variable-speed VFD drives, and adjustable side guides, our conveyors guarantee smooth transit, low energy consumption, and maximum operational uptime.",
    ],
    types: [
      "Heavy-Duty Flat Belt Conveyors",
      "Inclined & Declined Cleated Conveyors",
      "High-Capacity Troughed Belt Conveyors",
      "Telescopic Truck & Container Loading Conveyors",
      "Corrugated Sidewall & Steep-Angle Conveyors",
      "Modular Plastic Belt & Radius Curve Systems",
    ],
    features: [
      "Robust modular frame construction in MS, SS304 & anodized aluminum",
      "Energy-efficient gearmotors with variable-speed VFD automation",
      "Low-friction bed plates, self-aligning bearings & crowned pulleys",
      "Ergonomic emergency stop pull-cords & integrated safety interlocks",
    ],
    applications: [
      "Automotive Assembly & Parts Transfer",
      "Food, Beverage & Pharmaceutical Processing",
      "E-Commerce Fulfillment, Warehousing & Distribution",
      "Packaging Lines, Inspection & Carton Sorting",
      "Bulk Material Handling & Aggregates Transfer",
    ],
  },
  roller: {
    title: "Roller Conveyor Manufacturers",
    breadcrumb: "ROLLER CONVEYORS",
    heading: "Industrial Roller Conveyor Systems & Material Flow Automation",
    image: "roller-conveyor.jpg",
    imageAlt: "Industrial roller conveyor system",
    paragraphs: [
      "Huda Conveyors Solution manufactures comprehensive gravity and motorized roller conveyor systems engineered for stable, high-throughput transportation of cartons, totes, bins, pallets, and rigid industrial loads.",
      "From zero-pressure accumulation (ZPA) zones and motorized driven rollers (MDR) to heavy-duty chain-driven live roller (CDLR) pallet lines, our custom layouts integrate merges, diverters, and curved sections to streamline packing, assembly, and dispatch operations.",
    ],
    types: [
      "Heavy-Duty Gravity Roller Conveyors",
      "Motorized Driven Roller (MDR) Accumulation Systems",
      "Chain-Driven Live Roller (CDLR) Pallet Conveyors",
      "Flexible Expandable & Telescopic Roller Conveyors",
      "True-Taper 90° & 180° Curved Roller Conveyors",
    ],
    features: [
      "Precision-machined steel, galvanized & PU-sleeved rollers",
      "Zero-pressure accumulation (ZPA) zone control sensor logic",
      "High-torque motor gearboxes & positive chain/sprocket drives",
      "Modular framework with adjustable height floor supports",
    ],
    applications: [
      "Pallet Handling, Stacking & Stretch-Wrapping Infeed",
      "Carton Accumulation, Merge & Cross-Dock Sorting",
      "Assembly Line Progressive Workstations",
      "End-of-Line Packaging & Quality Inspection Zones",
      "Truck & Shipping Container Unloading Stations",
    ],
  },
  chain: {
    title: "Chain Conveyor Manufacturers",
    breadcrumb: "CHAIN CONVEYORS",
    heading: "Heavy-Duty Industrial Chain Conveyor Systems",
    image: "apron-conveyor.jpg",
    imageAlt: "Heavy-duty industrial chain conveyor",
    paragraphs: [
      "Huda Conveyors Solution designs and manufactures heavy-duty chain conveyor systems built to transport extreme, high-temperature, abrasive, or irregularly shaped loads requiring positive mechanical drive and rugged structural integrity.",
      "Engineered with hardened alloy chains, reinforced steel structural channels, and precision sprockets, our apron, slat, and drag chain conveyors excel in harsh operating environments such as automotive body shops, foundries, recycling centers, and metalworking plants.",
    ],
    types: [
      "Heavy-Duty Steel Slat Conveyors",
      "Leak-Proof Apron Conveyors for Foundry & Scrap",
      "Enclosed Drag Chain & Scraper Conveyor Lines",
      "Multi-Strand Pallet & Skid Chain Conveyors",
      "Vertical Continuous & Reciprocating Chain Elevators",
    ],
    features: [
      "High tensile-strength forged steel chains & alloy wear strips",
      "Positive mechanical drive preventing load slipping or creep",
      "Extreme heat, oil, and abrasion resistant design",
      "Modular bolted frame construction for straightforward maintenance",
    ],
    applications: [
      "Automotive Chassis & Final Assembly Transfer",
      "Foundry Casting, Hot Forging & Scrap Metal Removal",
      "Heavy Machinery & Structural Steel Manufacturing",
      "Bulk Biomass, Ash & Mineral Conveyance",
      "Battery Pack & EV Module Assembly Lines",
    ],
  },
  other: {
    title: "Other Conveyor Solutions",
    breadcrumb: "OTHER CONVEYORS",
    heading: "Custom-Engineered Special Purpose Conveyor Solutions",
    image: "wire-mesh-belt-conveyor.jpg",
    imageAlt: "Special-purpose industrial conveyor",
    paragraphs: [
      "Huda Conveyors Solution provides custom-engineered special purpose conveyors and advanced material handling machinery designed for unique manufacturing processes and challenging operational envelopes.",
      "From steep-angle vertical bucket elevators and sealed screw augers to high-temperature wire mesh ovens, spiral elevation towers, and mobile telescopic truck loaders, our engineering team custom-fabricates solutions tailored to your exact mechanical and environmental demands.",
    ],
    types: [
      "Continuous & Centrifugal Bucket Elevators",
      "Industrial Screw & Augur Bulk Conveyors",
      "Stainless Steel Wire Mesh Belt Conveyors",
      "Compact Continuous Spiral Elevation Towers",
      "Mobile Telescopic Truck & Container Loaders",
      "Automated Scrap & Machine-Chip Evacuation Lines",
    ],
    features: [
      "Engineered specifically for confined footprints & steep elevation",
      "High-temperature, washdown & cleanroom compatible materials",
      "Integrated dust seals, inspection ports & clean-out hatches",
      "Heavy-duty industrial drive components & full automation readiness",
    ],
    applications: [
      "Bulk Powder, Grain & Mineral Vertical Elevation",
      "High-Temperature Heat Treatment, Baking & Quenching",
      "Multi-Tier Warehouse Vertical Lift & Merging",
      "CNC Machine Tool Swarf & Scrap Evacuation",
      "Logistics Dock Loading & High-Speed Unloading",
    ],
  },
};
