export type ConveyorProcessStep = {
  readonly title: string;
  readonly description: string;
};

export type ConveyorDetail = {
  readonly category: string;
  readonly name: string;
  readonly heroTitle: string;
  readonly summary: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly overviewImage: string;
  readonly overviewImageAlt: string;
  readonly overviewTitle: string;
  readonly overview: readonly string[];
  readonly process: readonly ConveyorProcessStep[];
  readonly features: readonly string[];
  readonly applications: readonly string[];
  readonly benefits: readonly string[];
};

export type ConveyorDetailKey =
  | "overhead"
  | "belt"
  | "roller"
  | "chain"
  | "screw"
  | "bucket"
  | "spiral"
  | "telescopic"
  | "wire-mesh"
  | "turnkey";

export const CONVEYOR_DETAILS: Readonly<Record<ConveyorDetailKey, ConveyorDetail>> = {
  overhead: {
    category: "Overhead handling",
    name: "Overhead Conveyor",
    heroTitle: "Move product overhead. Keep your floor working.",
    summary:
      "Custom overhead conveyor systems for assembly, finishing and continuous transfer where every square metre of floor space matters.",
    image: "/images/four-wheel-overhead-conveyor.jpg",
    imageAlt: "Four-wheel overhead conveyor carrying industrial components",
    overviewImage: "/images/enclosed.jpg",
    overviewImageAlt: "Enclosed track overhead conveyor system",
    overviewTitle: "A cleaner route through your production line",
    overview: [
      "Huda Conveyors designs overhead lines that carry components above the work area, freeing floor space for operators, equipment and finished-goods movement.",
      "We configure enclosed-track, I-beam and power-and-free layouts around your process sequence, load geometry, dwell time and available headroom. Each line is fabricated, installed and commissioned as one coordinated system.",
    ],
    process: [
      { title: "Map the route", description: "We review your layout, elevations, stations, load points and required accumulation zones." },
      { title: "Engineer the carriers", description: "Chain, trolley, hanger and drive selections are matched to load weight, spacing and finish." },
      { title: "Build and integrate", description: "Frames, curves, take-ups, controls and safety devices are fabricated for a clean fit." },
      { title: "Commission on site", description: "The line is aligned, tested and handed over with operating guidance and support." },
    ],
    features: [
      "Enclosed track, I-beam and power-and-free configurations",
      "Custom carriers, hooks, hangers and automatic stop stations",
      "Variable-speed drives for synchronized production flow",
      "Low-maintenance trolleys, chain drives and accessible take-ups",
      "Safety pull-cords, guarding and interlocked process zones",
    ],
    applications: [
      "Automotive and two-wheeler assembly",
      "Powder coating, paint shop and curing lines",
      "White goods and sheet-metal production",
      "Component buffering and cooling galleries",
      "Multi-station dispatch and inspection loops",
    ],
    benefits: [
      "Recover valuable floor space without interrupting production flow",
      "Keep parts moving through repeatable, ergonomic workstations",
      "Reduce manual lifting and unnecessary product handling",
      "Leave room for future stations, branches and accumulation",
    ],
  },
  belt: {
    category: "Continuous conveying",
    name: "Belt Conveyors",
    heroTitle: "A dependable belt line for every material flow.",
    summary:
      "Straight, inclined and long-run belt conveyors built around your product, throughput, transfer points and plant layout.",
    image: "/images/belt-conveyor.jpg",
    imageAlt: "Industrial belt conveyor transporting material",
    overviewImage: "/images/belt-conveyor.png",
    overviewImageAlt: "Belt conveyor frame and drive assembly",
    overviewTitle: "From cartons to bulk material, engineered for steady movement",
    overview: [
      "Huda Conveyors builds belt systems for packaged goods, components, recyclables and bulk materials. The belt, bed, drive and guarding are selected together so the line performs as one system.",
      "We can supply flat, troughed, cleated, sidewall and modular belt layouts with suitable transfer points, loading sections and controls for your operating environment.",
    ],
    process: [
      { title: "Define the duty", description: "We capture material type, load profile, capacity, speed, incline and operating conditions." },
      { title: "Shape the layout", description: "Transfer points, chutes, supports, access zones and discharge heights are coordinated in one route." },
      { title: "Select the belt train", description: "Belting, pulleys, idlers, scrapers, drive and tensioning are matched to the duty cycle." },
      { title: "Test the transfer", description: "The finished conveyor is aligned, run-in and checked for tracking, guarding and safe access." },
    ],
    features: [
      "Flat, troughed, cleated, sidewall and modular belt options",
      "Mild-steel, stainless-steel and aluminium frame construction",
      "Variable-speed drives with soft start and overload protection",
      "Accessible belt tensioning, tracking and cleaning arrangements",
      "Transfer chutes, skirts, guards and emergency stop provisions",
    ],
    applications: [
      "Packaging, inspection and assembly lines",
      "Warehousing, sorting and dispatch operations",
      "Coal, ash, minerals and other bulk materials",
      "Food, beverage and washdown production areas",
      "Recycling, waste recovery and material preparation",
    ],
    benefits: [
      "Move more material with predictable speed and capacity",
      "Adapt one platform to unit loads, fines or bulk material",
      "Create safer, more accessible transfer points",
      "Simplify maintenance with practical access and modular parts",
    ],
  },
  roller: {
    category: "Unit-load handling",
    name: "Roller Conveyors",
    heroTitle: "Controlled movement for cartons, totes and pallets.",
    summary:
      "Gravity and powered roller conveyor systems for accumulation, transfer, sorting and dispatch across production and logistics facilities.",
    image: "/images/roller-conveyor.jpg",
    imageAlt: "Industrial roller conveyor for unit-load handling",
    overviewImage: "/images/roller-conveyor.png",
    overviewImageAlt: "Powered roller conveyor section",
    overviewTitle: "Build a smoother path for every unit load",
    overview: [
      "Our roller conveyors are configured for the way your product actually moves: free-flowing cartons, controlled pallets, work-in-progress totes or mixed dispatch loads.",
      "Gravity, motorized roller, chain-driven and curved sections can be combined with stops, sensors, transfers and accumulation zones to make a compact, dependable material-flow route.",
    ],
    process: [
      { title: "Profile the load", description: "We check base condition, weight, dimensions, contact points and the required accumulation behaviour." },
      { title: "Set the pitch", description: "Roller diameter, pitch, frame height and zone length are selected for stable movement." },
      { title: "Add control points", description: "Stops, sensors, transfers, drives and merges are placed where operators need control." },
      { title: "Prove the flow", description: "We run representative loads through the line and tune speed, spacing and hand-off points." },
    ],
    features: [
      "Gravity, powered roller and chain-driven live roller layouts",
      "ZPA accumulation, stops, sensors and controlled release zones",
      "Galvanized, painted, stainless-steel and PU-coated roller options",
      "Curves, merges, transfers and adjustable support structures",
      "Modular sections that simplify extensions and replacement",
    ],
    applications: [
      "Pallet movement and stretch-wrapper infeed",
      "Carton accumulation and cross-dock sorting",
      "Assembly workstations and inspection lines",
      "Packing, dispatch and shipping areas",
      "Truck loading and unloading points",
    ],
    benefits: [
      "Keep unit loads aligned through every transfer",
      "Use accumulation to balance upstream and downstream work",
      "Reduce product contact with controlled release zones",
      "Scale the line as volumes, stations or layouts change",
    ],
  },
  chain: {
    category: "Heavy-duty conveying",
    name: "Chain & Apron Conveyors",
    heroTitle: "Positive-drive handling for demanding loads.",
    summary:
      "Rugged chain, slat and apron conveyor systems for hot, abrasive, heavy or irregular materials that need dependable traction.",
    image: "/images/apron-conveyor.jpg",
    imageAlt: "Heavy-duty apron conveyor with chain drive",
    overviewImage: "/images/coal-handling.jpg",
    overviewImageAlt: "Heavy material handling conveyor installation",
    overviewTitle: "When the load is tough, the conveyor has to be tougher",
    overview: [
      "Huda Conveyors builds chain and apron systems for conditions where a standard belt or gravity line is not enough. Positive drive keeps heavy loads moving through demanding sections without belt slip.",
      "Reinforced frames, wear-resistant components and serviceable drive assemblies are selected around the load temperature, abrasion, impact and cleaning requirements of your plant.",
    ],
    process: [
      { title: "Understand the load", description: "We assess weight, temperature, lump size, abrasiveness, impact and the required route." },
      { title: "Choose the carrier", description: "Slats, pans, aprons, flights or drag attachments are matched to the material and duty." },
      { title: "Build for service", description: "Wear zones, guards, inspection access and drive protection are built into the layout." },
      { title: "Validate the duty", description: "The conveyor is checked under representative load before handover and operator training." },
    ],
    features: [
      "Steel slat, apron, drag chain and multi-strand chain designs",
      "Positive mechanical drive for heavy loads and inclines",
      "Wear-resistant flights, pans, chains and replaceable liners",
      "Reinforced frames with guarded sprockets and inspection access",
      "Controls, interlocks and emergency stops for safer operation",
    ],
    applications: [
      "Foundry, forging and hot component movement",
      "Automotive chassis and skid transfer",
      "Scrap, ash, biomass and mineral handling",
      "Heavy machinery and structural steel plants",
      "Battery, module and industrial assembly lines",
    ],
    benefits: [
      "Maintain traction when loads are heavy or uneven",
      "Handle heat, impact and abrasion with the right construction",
      "Protect the floor and operators from uncontrolled load movement",
      "Keep wear parts accessible for practical maintenance",
    ],
  },
  screw: {
    category: "Bulk material handling",
    name: "Screw Conveyors",
    heroTitle: "Enclosed transfer for powders, fines and bulk solids.",
    summary:
      "Compact screw conveyor systems that meter, move and contain bulk material through horizontal, inclined and controlled-feed routes.",
    image: "/images/coal-handling.jpg",
    imageAlt: "Enclosed screw and bulk material handling equipment",
    overviewImage: "/images/ash-handling.jpg",
    overviewImageAlt: "Bulk material handling system for ash and fines",
    overviewTitle: "Contained conveying for materials that need control",
    overview: [
      "Screw conveyors provide a contained route for powders, ash, fines, grains and other bulk solids where dust control, metering or a compact footprint is important.",
      "Huda Conveyors sizes the screw, trough, inlet, discharge, drive and seals around material behaviour and feed consistency, with inspection and clean-out access included in the design.",
    ],
    process: [
      { title: "Characterise the material", description: "We review bulk density, moisture, temperature, flowability and any dust or hygiene constraints." },
      { title: "Set the conveying duty", description: "Capacity, length, inclination, screw pitch and rotation speed are balanced for reliable transfer." },
      { title: "Control the enclosure", description: "Covers, seals, inspection ports and discharge points are arranged for contained flow." },
      { title: "Commission the feed", description: "The drive and feed controls are tested to confirm consistent loading and clean discharge." },
    ],
    features: [
      "Trough, tubular and shafted screw configurations",
      "Carbon-steel or stainless-steel construction for the duty",
      "Variable-speed drives for metering and process control",
      "Sealed covers, inspection ports and clean-out sections",
      "Wear liners and heavy-duty bearings for abrasive materials",
    ],
    applications: [
      "Coal, ash and power-plant material handling",
      "Cement, minerals and aggregate processing",
      "Grain, feed and agricultural products",
      "Powder dosing and process feed systems",
      "Waste, sludge and recycling operations",
    ],
    benefits: [
      "Contain dusty or fine material along the transfer route",
      "Meter material steadily into the next process",
      "Fit useful capacity into a compact footprint",
      "Make inspection and clean-out part of the original design",
    ],
  },
  bucket: {
    category: "Vertical handling",
    name: "Bucket Elevators",
    heroTitle: "Lift bulk material cleanly between process levels.",
    summary:
      "Continuous bucket elevator systems for vertical movement of grain, ash, minerals, powders and other bulk materials.",
    image: "/images/ash-handling.jpg",
    imageAlt: "Bucket elevator and vertical bulk material handling system",
    overviewImage: "/images/coal-handling.png",
    overviewImageAlt: "Vertical material handling equipment in a process plant",
    overviewTitle: "Use vertical height without adding a long transfer route",
    overview: [
      "Bucket elevators raise bulk material in a controlled, enclosed path where floor space is limited or a process needs a clean elevation change.",
      "We configure casing, buckets, belt or chain, head and boot sections around the material, lift height, feed method and required discharge pattern.",
    ],
    process: [
      { title: "Set the vertical duty", description: "Lift height, capacity, material density, moisture and particle size define the starting point." },
      { title: "Select the elevator build", description: "Bucket shape, spacing, belt or chain and casing clearances are matched to the material." },
      { title: "Coordinate the feed", description: "Inlet chutes, boot loading, head discharge and downstream equipment are aligned together." },
      { title: "Test the lift", description: "The elevator is checked for tracking, bucket loading, discharge and safe access before handover." },
    ],
    features: [
      "Belt and chain bucket elevator configurations",
      "Centrifugal or continuous discharge arrangements",
      "Enclosed casing with inspection and clean-out access",
      "Wear-resistant buckets, liners and serviceable bearings",
      "Level, speed and belt-tracking monitoring options",
    ],
    applications: [
      "Ash, coal and mineral elevation",
      "Grain, feed and agricultural processing",
      "Cement, sand and aggregate plants",
      "Powder and granule process feeding",
      "Recycling and waste transfer systems",
    ],
    benefits: [
      "Save floor space by taking the material route upward",
      "Keep dusty bulk material enclosed during elevation",
      "Create a dependable feed point for higher process stages",
      "Service wear items through planned access points",
    ],
  },
  spiral: {
    category: "Space-saving elevation",
    name: "Spiral Conveyors",
    heroTitle: "Add elevation without sacrificing your footprint.",
    summary:
      "Compact spiral conveyor systems for smooth vertical transfer between floors, lines, packing stations and dispatch levels.",
    image: "/images/waste-management-plant.jpg",
    imageAlt: "Spiral and vertical conveyor system in an industrial plant",
    overviewImage: "/images/roller-conveyor.png",
    overviewImageAlt: "Compact conveyor transfer section",
    overviewTitle: "A compact vertical link between workstations",
    overview: [
      "Spiral conveyors create a continuous vertical path while keeping the infeed and discharge close together. They are useful when a straight incline would consume too much floor space.",
      "Huda Conveyors adapts the spiral diameter, belt width, elevation, speed and guarding to your product and the space available around existing equipment.",
    ],
    process: [
      { title: "Check the envelope", description: "We map floor openings, ceiling height, product dimensions and the required infeed and discharge points." },
      { title: "Set the spiral", description: "Diameter, elevation, belt width, speed and product spacing are balanced for stable movement." },
      { title: "Integrate the line", description: "Sensors, transfers, guarding and upstream or downstream conveyors are coordinated." },
      { title: "Verify the product path", description: "Representative product is run through the spiral to confirm tracking, spacing and access." },
    ],
    features: [
      "Continuous belt or modular belt spiral configurations",
      "Compact footprint for multi-level production and logistics",
      "Variable-speed control for clean infeed and discharge timing",
      "Side guarding and access provisions around the full route",
      "Custom belt width, elevation and product containment",
    ],
    applications: [
      "Packaging and carton elevation",
      "Food, beverage and washdown areas",
      "E-commerce order fulfilment and sortation",
      "Multi-level production and warehouse links",
      "Cooling, curing and product buffer loops",
    ],
    benefits: [
      "Use one compact machine where a long incline would not fit",
      "Keep products moving continuously between levels",
      "Reduce manual transfers at floor and mezzanine changes",
      "Make future line connections easier to plan",
    ],
  },
  telescopic: {
    category: "Loading and unloading",
    name: "Telescopic Conveyors",
    heroTitle: "Reach the truck faster. Load with less effort.",
    summary:
      "Extendable loading conveyors that bring the transfer point closer to the operator, trailer or container.",
    image: "/images/belt-conveyor.jpg",
    imageAlt: "Telescopic belt conveyor for loading operations",
    overviewImage: "/images/hero.jpg",
    overviewImageAlt: "Industrial conveyor line for loading and dispatch",
    overviewTitle: "Make loading bays quicker, safer and more adaptable",
    overview: [
      "Telescopic conveyors reduce the distance operators need to carry cartons or bags inside a vehicle. The extendable nose reaches into the load space and retracts when the job is complete.",
      "We configure belt width, extension length, drive, controls, support structure and loading interface around your bay geometry, package profile and dispatch rhythm.",
    ],
    process: [
      { title: "Study the bay", description: "We measure dock height, vehicle range, door clearance, operator access and loading sequence." },
      { title: "Set the reach", description: "Extension length, belt speed, frame travel and load capacity are sized to your operation." },
      { title: "Build the controls", description: "Forward, reverse, stop, positioning and safety controls are grouped for simple operation." },
      { title: "Run a loading trial", description: "The conveyor is tested at the dock with representative cartons, bags or parcels." },
    ],
    features: [
      "Manual or powered telescopic extension sections",
      "Variable-speed belt control for loading and unloading",
      "Height adjustment and dock-compatible support structures",
      "Guarding, emergency stops and operator-focused controls",
      "Optional roller, belt and transfer sections for mixed loads",
    ],
    applications: [
      "E-commerce and parcel dispatch docks",
      "FMCG and carton loading operations",
      "Truck and container unloading stations",
      "Warehouse cross-docking and distribution hubs",
      "Bags, boxes and unit-load transfer points",
    ],
    benefits: [
      "Reduce walking, lifting and reaching inside vehicles",
      "Improve loading consistency across changing trailer sizes",
      "Move more dispatch volume through the same dock",
      "Give operators a more controlled and ergonomic work position",
    ],
  },
  "wire-mesh": {
    category: "Process conveying",
    name: "Wire Mesh Belt Conveyors",
    heroTitle: "Open-mesh conveying for heat, air and washdown.",
    summary:
      "Durable wire mesh belt conveyors for heat treatment, drying, cooling, washing and process lines that need airflow or drainage.",
    image: "/images/wire-mesh-belt-conveyor.jpg",
    imageAlt: "Wire mesh belt conveyor for industrial processing",
    overviewImage: "/images/about_conveyor_2.jpg",
    overviewImageAlt: "Industrial conveyor fabrication and process equipment",
    overviewTitle: "Let your process breathe while the product keeps moving",
    overview: [
      "The open construction of a wire mesh belt allows air, water and heat to pass through the product path. That makes it a strong fit for cooling, drying, washing and thermal process stages.",
      "Huda Conveyors selects mesh, belt edge, frame, drive and support materials around operating temperature, product contact, cleaning method and the required dwell time.",
    ],
    process: [
      { title: "Define the process", description: "We review temperature, airflow, washdown, product dimensions and dwell time across each zone." },
      { title: "Choose the mesh", description: "Open area, wire size, belt edge and material are selected for product support and service life." },
      { title: "Build the zones", description: "Supports, guides, drives, hoods, drains and access points are integrated into the line." },
      { title: "Validate the treatment", description: "The conveyor is tested for tracking, exposure, drainage and repeatable product spacing." },
    ],
    features: [
      "Balanced wire mesh belts with open-area options",
      "Stainless-steel and heat-resistant construction choices",
      "Washdown-friendly frames, drains and accessible guarding",
      "Variable speed for controlled heat, air or cooling exposure",
      "Custom curves, transfers and process enclosures",
    ],
    applications: [
      "Heat treatment, baking and curing lines",
      "Cooling, drying and dewatering stages",
      "Food and beverage washdown areas",
      "Metal finishing and component processing",
      "Recycling and material preparation lines",
    ],
    benefits: [
      "Improve airflow, drainage and process exposure around the product",
      "Choose materials that match heat, moisture and cleaning conditions",
      "Keep the belt accessible for inspection and washdown",
      "Control dwell time with steady, adjustable movement",
    ],
  },
  turnkey: {
    category: "Integrated project delivery",
    name: "Turnkey Conveyor Solutions",
    heroTitle: "One engineering partner from layout to live line.",
    summary:
      "End-to-end conveyor and material handling projects that bring design, fabrication, installation and commissioning under one accountable team.",
    image: "/images/coal-handling.png",
    imageAlt: "Integrated industrial conveyor and material handling plant",
    overviewImage: "/images/hero.jpg",
    overviewImageAlt: "Industrial material flow system",
    overviewTitle: "Turn a material-flow brief into a working production asset",
    overview: [
      "Huda Conveyors manages complete conveyor packages for new plants, expansions and brownfield upgrades. The project starts with your material, capacity and layout constraints rather than a catalogue machine.",
      "Our team coordinates mechanical design, structural fabrication, controls, site erection, alignment, commissioning and handover so interfaces are resolved before they become site delays.",
    ],
    process: [
      { title: "Survey and scope", description: "We study the process, site, material, capacity, safety needs and project interfaces." },
      { title: "Engineer the solution", description: "Layout, equipment selection, structural details and controls are developed into one execution plan." },
      { title: "Fabricate and coordinate", description: "Mechanical assemblies, supports, chutes, guards and control panels are prepared together." },
      { title: "Install and hand over", description: "Erection, alignment, dry runs, loaded trials, operator training and documentation complete the delivery." },
    ],
    features: [
      "Single-point coordination from concept through commissioning",
      "Conveyor, structural steel, chutes and transfer equipment",
      "PLC-ready controls, sensors, interlocks and VFD integration",
      "Site erection, alignment, testing and operator handover",
      "Upgrade planning for existing lines and brownfield constraints",
    ],
    applications: [
      "Automotive and heavy engineering plants",
      "Coal, ash, minerals and bulk material facilities",
      "Packaging, logistics and distribution centres",
      "Recycling, waste recovery and process plants",
      "Paint shop, assembly and finishing lines",
    ],
    benefits: [
      "Reduce interface risk between separate equipment suppliers",
      "Keep mechanical, electrical and civil requirements aligned",
      "Get one clear delivery plan for the complete material-flow route",
      "Start production with tested equipment and trained operators",
    ],
  },
};
