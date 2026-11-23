export type ConveyorProcessStep = {
  readonly title: string;
  readonly description: string;
};

export type ConveyorRelatedImage = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
};

export type ConveyorAbout = {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly whyTitle: string;
  readonly reasons: readonly { readonly title: string; readonly description: string }[];
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
  readonly about: ConveyorAbout;
  readonly process: readonly ConveyorProcessStep[];
  readonly features: readonly string[];
  readonly applications: readonly string[];
  readonly benefits: readonly string[];
  readonly relatedImages?: readonly ConveyorRelatedImage[];
};

export type ConveyorDetailKey =
  | "overhead"
  | "belt"
  | "roller"
  | "ibeam"
  | "spares"
  | "incline"
  | "troughed"
  | "curvedroller"
  | "apron"
  | "dragchain"
  | "enclosed"
  | "fourwheel"
  | "assembly"
  | "cleated"
  | "modular"
  | "curvedbelt"
  | "slat"
  | "towline"
  | "chain"
  | "screw"
  | "bucket"
  | "spiral"
  | "telescopic"
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
    about: {
      title: "What is an overhead conveyor?",
      paragraphs: [
        "An overhead conveyor is a system that moves products through a plant on a chain or trolley running along a track fixed above the floor. Parts hang from hooks, hangers or carriers and travel from one station to the next without touching the ground.",
        "Because the load moves overhead, the floor stays free for operators, machines and forklifts. This is why overhead conveyors are widely used in assembly lines, paint shops, powder coating and finishing plants.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Saves floor space", description: "Production, walkways and storage use the area below while the product travels above." },
        { title: "Keeps production continuous", description: "Parts reach every workstation at a steady, planned pace instead of waiting for manual transfer." },
        { title: "Reduces handling and damage", description: "Less lifting and carrying means fewer scratches, dents and workplace injuries." },
        { title: "Suits coating and curing lines", description: "Hung parts can pass through paint booths, ovens and cooling zones in one continuous loop." },
      ],
    },
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
    relatedImages: [
      {
        src: "/images/products/overhead-track-installation.jpeg",
        alt: "Overhead enclosed track conveyor 5T and 7T",
        caption: "Overhead enclosed track conveyor 5T & 7T",
      },
      {
        src: "/images/four-wheel-overhead-conveyor.jpg",
        alt: "Four wheel overhead conveyor",
        caption: "Four wheel overhead conveyor",
      },
    ],
  },
  belt: {
    category: "Continuous conveying",
    name: "Belt Conveyors",
    heroTitle: "A dependable belt line for every material flow.",
    summary:
      "Straight, inclined and long-run belt conveyors built around your product, throughput, transfer points and plant layout.",
    image: "/images/belt-conveyor.jpg",
    imageAlt: "I-Beam Conveyor transporting material",
    overviewImage: "/images/belt-conveyor.png",
    overviewImageAlt: "Belt conveyor frame and drive assembly",
    overviewTitle: "From cartons to bulk material, engineered for steady movement",
    overview: [
      "Huda Conveyors builds belt systems for packaged goods, components, recyclables and bulk materials. The belt, bed, drive and guarding are selected together so the line performs as one system.",
      "We can supply flat, troughed, cleated, sidewall and modular belt layouts with suitable transfer points, loading sections and controls for your operating environment.",
    ],
    about: {
      title: "What is a belt conveyor?",
      paragraphs: [
        "A belt conveyor carries material on a continuous loop of belt that runs over pulleys and rollers, driven by a motor. Products or bulk material rest on the belt and are carried smoothly from the loading point to the discharge point.",
        "Belt conveyors are among the most common conveyors in industry. They work for packed cartons and components as well as loose material such as grain, coal, sand and aggregates, in straight, inclined and long-distance layouts.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Replaces manual carrying", description: "A continuous belt moves loads that would otherwise need workers, trolleys or forklifts." },
        { title: "Handles different materials", description: "Flat, troughed, cleated and modular belts cover everything from boxes to bulk material." },
        { title: "Steady, controllable flow", description: "Speed can be matched to the process, so downstream machines get material at a predictable rate." },
        { title: "Works over distance and height", description: "Long runs and inclines connect different areas of a plant without extra vehicles." },
      ],
    },
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
    relatedImages: [
      {
        src: "/images/coal-handling.jpg",
        alt: "Troughed bulk belt conveyor",
        caption: "Troughed bulk belt conveyor",
      },
      {
        src: "/images/waste-management-plant.jpg",
        alt: "Inclined cleated belt conveyor",
        caption: "Inclined cleated belt conveyor",
      },
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
    about: {
      title: "What is a roller conveyor?",
      paragraphs: [
        "A roller conveyor is a line of rollers mounted in a frame. Products with a firm, flat base, such as cartons, crates, trays and pallets, travel along the rollers either by gravity, by hand, or by powered rollers driven by a motor or chain.",
        "Roller conveyors are used to build straight, curved and accumulating lines for packing, sorting, dispatch and warehouse operations, and they are easy to extend or reconfigure as the layout changes.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Moves unit loads easily", description: "Cartons, pallets and crates travel with little effort, so workers do not have to push or carry them." },
        { title: "Allows accumulation", description: "Products can queue on the line without crushing each other while waiting for the next operation." },
        { title: "Modular and flexible", description: "Sections, curves and spurs can be added or moved as your process changes." },
        { title: "Low running cost", description: "Gravity lines need no power at all, and powered lines use simple, reliable drives." },
      ],
    },
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
    relatedImages: [
      {
        src: "/gallery/photo5.jpeg",
        alt: "Rollers with bearings",
        caption: "Rollers with bearings",
      },
      {
        src: "/images/ash-handling.jpg",
        alt: "Curved and pallet roller conveyor",
        caption: "Curved & pallet roller conveyor",
      },
    ],
  },
  ibeam: {
    category: "Overhead handling",
    name: "I-Beam Conveyor",
    heroTitle: "A sturdy I-beam track for smooth overhead movement.",
    summary:
      "Robust I-beam overhead conveyors with trolleys, drive units and take-up units, built to carry components and finished goods through your plant.",
    image: "/images/products/overhead-track-installation.jpeg",
    imageAlt: "I-beam overhead conveyor installed in a factory",
    overviewImage: "/images/products/ibeam-drive-unit.png",
    overviewImageAlt: "I-beam conveyor drive unit with chain and sprockets",
    overviewTitle: "Built on a rigid track that keeps loads steady",
    overview: [
      "Huda Conveyors builds I-beam conveyors around a rigid, fabricated track that supports trolleys and chain along straight runs, curves and elevation changes.",
      "Each system is sized for your load, speed and layout, with drive units, corner units and take-up units supplied and commissioned together as one conveyor.",
    ],
    about: {
      title: "What is an I-beam conveyor?",
      paragraphs: [
        "An I-beam conveyor is an overhead conveyor whose track is made from I-beam sections. Trolleys with wheels run along the beam, linked by a chain that is pulled by a drive unit, and the load hangs below on hooks or carriers.",
        "The rigid steel beam can take heavy loads over long spans and supports straight runs, curves and elevation changes. This makes it a dependable choice for assembly, fabrication and paint-shop lines.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Carries heavier loads", description: "The rigid I-beam section supports heavy parts with stable, smooth movement." },
        { title: "Fits your layout", description: "Curves, inclines and declines let the route follow the plant instead of the other way round." },
        { title: "Frees up the floor", description: "Product moves overhead, leaving working areas clear below." },
        { title: "Easy to maintain", description: "Drive, corner and take-up units are accessible, so chain and trolley care is simple." },
      ],
    },
    process: [
      { title: "Survey the layout", description: "We study your floor plan, headroom, load points and the route the product has to follow." },
      { title: "Size the track and chain", description: "Beam section, trolleys, chain and drive are selected for load weight, pitch and duty cycle." },
      { title: "Fabricate the units", description: "Straight sections, curves, drive and take-up units are fabricated and checked for a clean fit." },
      { title: "Install and commission", description: "The line is erected, aligned, tested and handed over with operating guidance." },
    ],
    features: [
      "Rigid I-beam track in straight, curved and inclined sections",
      "Drive units, corner units and take-up units built to suit your layout",
      "Trolleys and guide rollers matched to load and chain pitch",
      "Variable-speed drives for controlled line speed",
      "Accessible take-ups and lubrication points for easy maintenance",
    ],
    applications: [
      "Assembly and component transfer lines",
      "Paint shop and powder coating lines",
      "Sheet-metal and fabrication shops",
      "Cooling, buffering and storage loops",
      "Multi-station inspection and dispatch routes",
    ],
    benefits: [
      "Free up floor space by moving product overhead",
      "Keep loads moving steadily through every station",
      "Reduce manual lifting and handling",
      "Extend or modify the route as your line grows",
    ],
    relatedImages: [
      {
        src: "/images/about5.jpg",
        alt: "I-beam overhead monorail",
        caption: "I-beam overhead monorail",
      },
      {
        src: "/images/products/ibeam-overhead-track.png",
        alt: "I-beam conveyor band",
        caption: "I-beam conveyor band",
      },
    ],
  },
  spares: {
    category: "Conveyor components",
    name: "Sprockets and Spare Parts",
    heroTitle: "Genuine spares to keep your conveyors running.",
    summary:
      "Replacement sprockets, trolleys, chains and purpose-built rigging for overhead and floor conveyors, supplied to your size and specification.",
    image: "/images/sprockets-spare-parts.jpg",
    imageAlt: "Machined conveyor sprockets on a wooden surface",
    overviewImage: "/images/products/spares-assortment.png",
    overviewImageAlt: "Assortment of overhead conveyor spare parts",
    overviewTitle: "The right part, made to fit your conveyor",
    overview: [
      "Huda Conveyors supplies sprockets, trolleys, chain links, guide rollers and rigging for overhead and floor conveyor systems.",
      "Parts are machined to your chain pitch, bore and load requirement, so replacements fit properly and keep the line running with minimal downtime.",
    ],
    about: {
      title: "What are conveyor spare parts?",
      paragraphs: [
        "Conveyor spare parts are the wearing components that keep a conveyor running, such as sprockets, trolleys, guide rollers, road wheels, chain links and hangers. Over time, friction and load cause these parts to wear.",
        "Using the right replacement part, made to the correct pitch, bore and size, keeps the conveyor aligned and avoids damage to the chain, track and drive.",
      ],
      whyTitle: "Why are they necessary?",
      reasons: [
        { title: "Prevents unplanned stoppages", description: "A worn sprocket or trolley can halt an entire line. Timely replacement avoids breakdowns." },
        { title: "Protects the rest of the conveyor", description: "A worn part left in service damages the chain, track and drive and raises repair cost." },
        { title: "Keeps the line safe", description: "Properly fitted parts reduce the chance of jams, slipping chains and falling loads." },
        { title: "Extends conveyor life", description: "Regular replacement lets a well-built conveyor serve for many years." },
      ],
    },
    process: [
      { title: "Share the part", description: "Send us a sample, drawing or the dimensions of the part you need replaced." },
      { title: "Confirm the specification", description: "We confirm pitch, bore, material and quantity before manufacturing." },
      { title: "Machine and finish", description: "Parts are cut, machined and finished to match your existing conveyor." },
      { title: "Dispatch and support", description: "Parts are packed and dispatched with guidance on fitting and maintenance." },
    ],
    features: [
      "Sprockets machined to your pitch, teeth count and bore",
      "Trolleys, guide rollers and road wheels for I-beam and enclosed-track lines",
      "Chain links and attachments for overhead and floor conveyors",
      "Custom rigging, hangers and carriers made to order",
      "Single pieces or repeat quantities",
    ],
    applications: [
      "Overhead conveyor maintenance",
      "Paint shop and finishing line upkeep",
      "Assembly line breakdown replacements",
      "Chain and drive upgrades",
      "Planned spares stocking for production plants",
    ],
    benefits: [
      "Cut downtime with parts made to fit your line",
      "Get custom sizes instead of near-match substitutes",
      "Source conveyor spares from the manufacturer directly",
      "Get help identifying the right part",
    ],
    relatedImages: [
      {
        src: "/gallery/photo3.jpeg",
        alt: "Custom conveyor attachments",
        caption: "Custom conveyor attachments",
      },
      {
        src: "/gallery/photo8.jpeg",
        alt: "I-beam guide rollers",
        caption: "I-beam guide rollers",
      },
    ],
  },
  enclosed: {
    category: "Overhead handling",
    name: "Enclosed Track Conveyor (5T & 7T)",
    heroTitle: "Enclosed track conveyors for clean, dependable overhead lines.",
    summary:
      "Enclosed track overhead conveyors in 5T and 7T sizes, where the chain and trolleys run inside a closed track that protects them from dust, paint and debris.",
    image: "/images/enclosed.jpg",
    imageAlt: "Enclosed track overhead conveyor in a factory",
    overviewImage: "/images/products/enclosed-paint-line.png",
    overviewImageAlt: "Enclosed track conveyor line through a paint booth",
    overviewTitle: "A closed track that keeps the chain clean and quiet",
    overview: [
      "Huda Conveyors builds enclosed track conveyors in 5T and 7T sizes. The trolley wheels run inside a hollow, closed track section, which shields the chain and wheels from dust, paint overspray and falling debris.",
      "This makes the line smooth, quiet and easy to keep clean, and well suited to assembly, paint-shop and powder-coating lines where the environment is demanding.",
    ],
    about: {
      title: "What is an enclosed track conveyor?",
      paragraphs: [
        "An enclosed track conveyor is an overhead conveyor in which the trolleys roll inside a closed steel track instead of on an open beam. The chain pulls the trolleys through the track, and the load hangs below on hangers or carriers.",
        "The 5T and 7T sizes refer to the chain and trolley capacity class, so you can choose the size that matches your load and the number of hangers on the line.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Protected running parts", description: "The track covers the trolley wheels and chain, so dust and paint do not build up on them." },
        { title: "Smooth and quiet movement", description: "The enclosed wheel path gives steady, low-noise travel along the line." },
        { title: "Suited to paint and coating lines", description: "A clean track is easier to keep free of paint drips, which keeps the line reliable." },
        { title: "Choice of 5T and 7T", description: "Pick the chain size that suits your load, instead of over- or under-sizing the conveyor." },
      ],
    },
    process: [
      { title: "Review the load and route", description: "We confirm the load per hanger, pitch, line speed and the route through your stations." },
      { title: "Select track and chain", description: "5T or 7T track and chain are selected for the load and duty." },
      { title: "Fabricate and assemble", description: "Track sections, curves, drive and take-up units are made and checked for fit." },
      { title: "Install and commission", description: "The line is erected, aligned, tested and handed over." },
    ],
    features: [
      "Closed track in 5T and 7T sizes",
      "Trolleys and chain protected from dust and paint",
      "Straight, curved and inclined track sections",
      "Drive and take-up units built to suit the route",
      "Hangers and carriers made for your product",
    ],
    applications: [
      "Paint shops and powder coating lines",
      "Assembly lines",
      "Pre-treatment and curing oven loops",
      "Cooling and buffering galleries",
      "Component transfer between departments",
    ],
    benefits: [
      "Keep the chain and wheels clean in dusty or paint-heavy areas",
      "Run the line smoothly with less noise and wear",
      "Choose the right capacity with 5T and 7T options",
      "Free floor space for production and movement",
    ],
    relatedImages: [
      {
        src: "/images/products/enclosed-chain-5t.png",
        alt: "Enclosed track 5T chain",
        caption: "Enclosed track 5T chain",
      },
      {
        src: "/images/products/enclosed-chain-7t.png",
        alt: "Enclosed conveyor chain 7T",
        caption: "Enclosed conveyor chain 7T",
      },
    ],
  },
  fourwheel: {
    category: "Overhead handling",
    name: "Four Wheel Overhead Conveyor",
    heroTitle: "Four wheel trolleys for stable, flexible overhead conveying.",
    summary:
      "Four wheel overhead conveyors carry loads on trolleys with four wheels running along a track, giving a stable and adaptable line for assembly and finishing work.",
    image: "/images/four-wheel-overhead-conveyor.jpg",
    imageAlt: "Four wheel overhead conveyor in a factory",
    overviewImage: "/images/products/fourwheel-track.png",
    overviewImageAlt: "Fabricated four wheel conveyor track sections",
    overviewTitle: "Stable trolleys on a track built for your layout",
    overview: [
      "Huda Conveyors builds four wheel overhead conveyors in which each trolley carries four wheels along the track. The extra wheels spread the load and keep the trolley steady on straights and curves.",
      "Track, chain, trolleys and drive are fabricated together and matched to your load, route and speed, so the line fits the plant as a single, coordinated system.",
    ],
    about: {
      title: "What is a four wheel overhead conveyor?",
      paragraphs: [
        "A four wheel overhead conveyor moves loads on trolleys that each have four wheels, linked by a chain and pulled by a drive unit along an overhead track. Hangers under the trolleys carry the product.",
        "Four wheels share the load across a longer part of the track than a single-wheel trolley, which helps the trolley stay level and run smoothly on curves and slopes.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Steadier loads", description: "Four wheels keep trolleys level and reduce swinging of the hanging load." },
        { title: "Handles curves and slopes", description: "The track can bend and change height to follow your plant layout." },
        { title: "Even wear on track and wheels", description: "Spreading the load reduces stress at a single point." },
        { title: "Frees up the floor", description: "Product travels overhead, leaving working areas clear below." },
      ],
    },
    process: [
      { title: "Study the layout", description: "We review the floor plan, headroom, stations and the path the product must take." },
      { title: "Design the track and trolleys", description: "Track section, trolley and chain are chosen for load and pitch." },
      { title: "Fabricate", description: "Track sections, bends, drive and take-up units are fabricated and checked." },
      { title: "Install and commission", description: "The conveyor is erected, aligned, tested and handed over." },
    ],
    features: [
      "Four wheel trolleys for stable running",
      "Straight, curved and inclined track sections",
      "Chain and trolleys matched to your load",
      "Drive and take-up units made to suit the route",
      "Custom hangers and carriers",
    ],
    applications: [
      "Assembly lines",
      "Paint and finishing lines",
      "Sheet-metal and fabrication shops",
      "Buffering and storage loops",
      "Inter-department component transfer",
    ],
    benefits: [
      "Move loads smoothly along a flexible route",
      "Reduce manual lifting and handling",
      "Use overhead space instead of floor space",
      "Extend or modify the line as your production changes",
    ],
    relatedImages: [
      {
        src: "/images/products/fourwheel-chain.png",
        alt: "Four-wheel conveyor chain",
        caption: "Four-wheel conveyor chain",
      },
      {
        src: "/images/products/fourwheel-curves.png",
        alt: "Four-wheel conveyor band",
        caption: "Four-wheel conveyor band",
      },
    ],
  },
  assembly: {
    category: "Continuous conveying",
    name: "Assembly Line Belt Conveyor",
    heroTitle: "Belt conveyors built for the pace of your assembly line.",
    summary:
      "Assembly line belt conveyors that carry work-in-progress between stations at a controlled speed, with the height, width and accessories your line needs.",
    image: "/images/belt-conveyor.jpg",
    imageAlt: "Belt conveyor with drive drum and rollers",
    overviewImage: "/images/about_conveyor_1.jpg",
    overviewImageAlt: "Assembly area with conveyors on a factory floor",
    overviewTitle: "A steady belt that keeps every station supplied",
    overview: [
      "Huda Conveyors builds assembly line belt conveyors that carry components and assemblies from one workstation to the next at a speed set for your cycle time.",
      "Frame height, belt width, speed and accessories such as side guides, stops and lighting are specified around your product and operators, so the line is comfortable to work at and easy to run.",
    ],
    about: {
      title: "What is an assembly line belt conveyor?",
      paragraphs: [
        "An assembly line belt conveyor is a belt conveyor laid out between workstations so that products move through the assembly sequence without being carried by hand. Operators work along the line while the belt brings and takes away the parts.",
        "It sets the pace of the line, keeps the work in order and gives each station a steady supply of work.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Keeps the line moving at a set pace", description: "Belt speed sets the rhythm so every station works to the same cycle." },
        { title: "Reduces carrying and walking", description: "Parts arrive at the operator instead of the operator going to the parts." },
        { title: "Improves ergonomics", description: "Working height and side guides are chosen for comfortable, safe handling." },
        { title: "Easy to adapt", description: "Length, speed and accessories can be changed as products or volumes change." },
      ],
    },
    process: [
      { title: "Understand the sequence", description: "We study the stations, cycle time, product size and available floor space." },
      { title: "Specify the belt and frame", description: "Belt type, width, speed, height and accessories are chosen for the work." },
      { title: "Fabricate and fit", description: "Frames, drives and accessories are built and test-run before dispatch." },
      { title: "Install and commission", description: "The line is installed, aligned, tested and handed over." },
    ],
    features: [
      "Belt width, speed and height matched to your work",
      "Variable-speed drive for setting the line pace",
      "Side guides, stops and work-station accessories",
      "Sturdy frame with levelling feet",
      "Safety guards and emergency stops",
    ],
    applications: [
      "Electronics and appliance assembly",
      "Automotive component assembly",
      "Packaging and kitting stations",
      "Inspection and testing lines",
      "Light engineering production",
    ],
    benefits: [
      "Keep work flowing between stations",
      "Cut manual carrying and handling",
      "Set the line speed to your production target",
      "Grow or reconfigure the line as needs change",
    ],
    relatedImages: [
      {
        src: "/images/hero.jpg",
        alt: "Integrated assembly conveyor line",
        caption: "Assembly line conveyor",
      },
      {
        src: "/images/belt-conveyor.jpg",
        alt: "Heavy-duty belt conveyor",
        caption: "Heavy-duty belt conveyor",
      },
    ],
  },
  cleated: {
    category: "Continuous conveying",
    name: "Cleated Belt Conveyor",
    heroTitle: "Cleated belts that carry material up steep inclines.",
    summary:
      "Cleated belt conveyors have raised cleats across the belt that hold material in place, so loose and bulk product can be carried up steep slopes.",
    image: "/images/waste-management-plant.jpg",
    imageAlt: "Inclined conveyor in a material handling plant",
    overviewImage: "/images/ash-handling.jpg",
    overviewImageAlt: "Inclined conveyor in a process plant",
    overviewTitle: "Cleats that stop the material from sliding back",
    overview: [
      "Huda Conveyors builds cleated belt conveyors with raised cleats, sometimes also with side walls, so that loose, granular or small items stay on the belt as it climbs.",
      "Cleat height, spacing and belt material are chosen for your product and slope, so material is lifted reliably without rolling back.",
    ],
    about: {
      title: "What is a cleated belt conveyor?",
      paragraphs: [
        "A cleated belt conveyor is a belt conveyor with raised ribs, called cleats, moulded or fixed across the belt surface. The cleats push the material along and stop it from sliding or rolling backwards.",
        "On a plain flat belt, material starts to slip once the slope becomes steep. Cleats allow much steeper angles and let the conveyor lift product over a short horizontal distance.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Carries material up steep slopes", description: "Cleats hold the product so it does not slide back on an incline." },
        { title: "Saves space", description: "A steeper angle means a shorter conveyor for the same height gain." },
        { title: "Suits loose and small items", description: "Granular material and small parts stay in the pockets between cleats." },
        { title: "Controlled feeding", description: "Cleat spacing helps deliver product in measured quantities." },
      ],
    },
    process: [
      { title: "Define the material and slope", description: "We confirm the material, lump size, capacity and the height to be gained." },
      { title: "Choose belt and cleat profile", description: "Belt type, cleat height and spacing are selected for the product." },
      { title: "Fabricate", description: "Frame, drive, hopper and covers are built to suit the job." },
      { title: "Install and commission", description: "The conveyor is installed, tested and handed over." },
    ],
    features: [
      "Raised cleats in a profile that suits your product",
      "Optional side walls for loose material",
      "Steeper incline angles than a plain belt",
      "Loading hopper and discharge chute to suit",
      "Sturdy frame with drive and take-up",
    ],
    applications: [
      "Recycling and waste handling",
      "Agricultural and food products",
      "Packaging and bulk loading",
      "Process plants moving material between levels",
      "Material feeding to machines and hoppers",
    ],
    benefits: [
      "Lift material over short horizontal distances",
      "Prevent rollback on inclines",
      "Feed machines at a steady, measured rate",
      "Reduce manual lifting and loading",
    ],
  },
  modular: {
    category: "Continuous conveying",
    name: "Modular Belt Conveyor",
    heroTitle: "Modular belts built for tough, hygienic, flexible lines.",
    summary:
      "Modular belt conveyors use interlocking plastic or steel modules to form a strong, easy-to-repair belt for food, packaging and process lines.",
    image: "/images/belt-conveyor.jpg",
    imageAlt: "Belt conveyor with drive drum and rollers",
    overviewImage: "/images/wire-mesh-conveyor.jpg",
    overviewImageAlt: "Stainless steel mesh belt conveyor",
    overviewTitle: "A belt made of modules, so repairs stay simple",
    overview: [
      "Huda Conveyors builds modular belt conveyors in which the belt is assembled from interlocking modules joined by rods. A damaged section can be replaced without changing the whole belt.",
      "Modular belts suit wet, hot or washdown areas and can follow curves and inclines, which makes them useful for food, beverage, packaging and process lines.",
    ],
    about: {
      title: "What is a modular belt conveyor?",
      paragraphs: [
        "A modular belt conveyor uses a belt made of interlocking plastic or metal modules, connected by rods, instead of a single piece of rubber or fabric. A sprocket drive engages the modules and pulls the belt positively.",
        "Because the belt is built from modules, it can be made to many widths, lengths and surface styles, and repaired by replacing individual modules.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Easy to repair", description: "Damaged modules can be swapped in place of a full belt replacement, which saves downtime." },
        { title: "Suits wet and hygienic areas", description: "Open or smooth module styles drain and can be washed down." },
        { title: "Positive drive", description: "Sprockets engage the belt directly, so it does not slip or drift." },
        { title: "Flexible layouts", description: "Modular belts can run in curves and inclines with the right module and frame." },
      ],
    },
    process: [
      { title: "Review the application", description: "We confirm the product, temperature, washdown needs and layout." },
      { title: "Choose module and frame", description: "Module type, material and frame are chosen for the duty." },
      { title: "Fabricate and assemble", description: "Frame, sprockets, drive and belt are built and tested." },
      { title: "Install and commission", description: "The conveyor is installed, tested and handed over." },
    ],
    features: [
      "Interlocking modules in styles for your product",
      "Positive sprocket drive with no belt slip",
      "Stainless steel or mild steel frames",
      "Suitable for washdown and hygienic areas",
      "Straight, curved and inclined layouts",
    ],
    applications: [
      "Food and beverage lines",
      "Packaging and bottling",
      "Process and washdown areas",
      "Curved transfers between machines",
      "Pharma and cosmetics packing",
    ],
    benefits: [
      "Cut downtime with module-level repairs",
      "Keep lines clean in hygiene-sensitive areas",
      "Avoid belt slip and tracking problems",
      "Adapt to curves and tight layouts",
    ],
  },
  curvedbelt: {
    category: "Continuous conveying",
    name: "Curved Belt Conveyor",
    heroTitle: "Curved belts that turn corners without breaking the flow.",
    summary:
      "Curved belt conveyors carry product around bends at 30, 45, 60, 90 or 180 degrees, so lines can follow the plant instead of running in a straight line.",
    image: "/images/belt-conveyor.jpg",
    imageAlt: "Belt conveyor with drive drum and rollers",
    overviewImage: "/images/about_conveyor_2.jpg",
    overviewImageAlt: "Belt conveyor line with curved sections in a factory",
    overviewTitle: "Turn the line without a transfer point",
    overview: [
      "Huda Conveyors builds curved belt conveyors that carry product around a bend on one continuous belt, with no transfer point where items could jam or fall.",
      "Bend angle, belt width, inner radius and speed are chosen for your product and layout, so the line fits tight spaces and connects machines at an angle.",
    ],
    about: {
      title: "What is a curved belt conveyor?",
      paragraphs: [
        "A curved belt conveyor is a belt conveyor built to turn through an angle, such as 45, 90 or 180 degrees. The belt is shaped, usually with a tapered design, so it can follow the bend while carrying the product smoothly around it.",
        "It allows lines to change direction without extra transfer conveyors, which saves space and keeps product moving.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Fits real plant layouts", description: "Lines can wrap around columns, machines and walls instead of needing a straight run." },
        { title: "No transfer points", description: "Product stays on one belt through the turn, so there are fewer jams and drops." },
        { title: "Saves floor space", description: "Bends make a compact layout possible." },
        { title: "Connects machines at angles", description: "Output from one machine can feed another that sits to the side." },
      ],
    },
    process: [
      { title: "Measure the route", description: "We confirm the turn angle, available radius and the product." },
      { title: "Design the bend", description: "Belt, rollers and frame are specified to run the curve smoothly." },
      { title: "Fabricate", description: "The curved frame, drive and belt are made and tested." },
      { title: "Install and commission", description: "The conveyor is installed and aligned, then handed over." },
    ],
    features: [
      "Bends at 30, 45, 60, 90 or 180 degrees",
      "Belt width and radius chosen for your product",
      "Variable-speed drive",
      "Can be joined to straight belt conveyors",
      "Side guides to keep product on the belt",
    ],
    applications: [
      "Packaging and parcel lines",
      "Food and beverage lines",
      "Airport and warehouse handling",
      "Assembly lines that wrap around machines",
      "Production lines with tight layouts",
    ],
    benefits: [
      "Fit conveyors to tight and awkward layouts",
      "Keep product flowing around corners",
      "Reduce transfer points and jams",
      "Use floor space efficiently",
    ],
  },
  slat: {
    category: "Heavy-duty conveying",
    name: "Slat Conveyor",
    heroTitle: "Slat conveyors built for heavy, solid-surface handling.",
    summary:
      "Slat conveyors carry heavy or awkward products on a surface of steel or plastic slats fixed to a chain, giving a strong and durable base.",
    image: "/images/apron-conveyor.jpg",
    imageAlt: "Heavy-duty slat and apron conveyor frame",
    overviewImage: "/images/products/slat-conveyor.png",
    overviewImageAlt: "Red industrial slat conveyor with custom fixtures on a factory assembly floor",
    overviewTitle: "A solid surface for loads a belt cannot carry",
    overview: [
      "Huda Conveyors builds slat conveyors in which flat slats are mounted across one or two chains to form a solid, continuous surface for the load.",
      "Slat material, width and chain size are chosen for your product weight and environment, so heavy, hot or irregular items can be moved and assembled upon with confidence.",
    ],
    about: {
      title: "What is a slat conveyor?",
      paragraphs: [
        "A slat conveyor carries products on a series of rigid slats attached to a driven chain. The slats form a continuous, flat platform that moves with the chain along a steel frame.",
        "Because the load rests on solid slats rather than a flexible belt, a slat conveyor can handle heavy items, sharp parts and products that need a stable platform, such as assemblies on a production line.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Carries heavy loads", description: "The strong slat surface and chain can support heavy products." },
        { title: "Stable work platform", description: "Operators can work on the product as it moves along the line." },
        { title: "Withstands tough conditions", description: "Steel slats resist heat, sharp edges and rough handling." },
        { title: "Long service life", description: "Rugged chain and slats suit continuous heavy-duty operation." },
      ],
    },
    process: [
      { title: "Check load and product", description: "We confirm product weight, size, temperature and how it will be handled." },
      { title: "Select slat and chain", description: "Slat type and chain size are chosen for the duty." },
      { title: "Fabricate", description: "Frame, slats, chains and drive are fabricated and tested." },
      { title: "Install and commission", description: "The conveyor is installed, aligned and handed over." },
    ],
    features: [
      "Steel or plastic slats on a driven chain",
      "Solid, flat, continuous carrying surface",
      "Heavy-duty frame, drive and take-up",
      "Options for side guides and stops",
      "Suitable for assembly lines and heavy products",
    ],
    applications: [
      "Heavy assembly lines",
      "Automotive and engineering plants",
      "Handling of crates, drums and heavy products",
      "Hot or rough product handling",
      "Packaging and palletising lines",
    ],
    benefits: [
      "Handle heavy and awkward loads with confidence",
      "Give operators a stable working surface",
      "Run reliably in tough conditions",
      "Get long service life from a rugged build",
    ],
  },
  towline: {
    category: "Floor-level handling",
    name: "Inverted Floor Conveyor / Towline",
    heroTitle: "Floor-level towline conveyors that tow your loads steadily.",
    summary:
      "Inverted floor conveyors and towlines pull carts and trolleys along the floor using a chain running in the floor or just above it.",
    image: "/images/hero.jpg",
    imageAlt: "Chain and roller assembly on a conveyor line",
    overviewImage: "/images/products/fourwheel-chain.png",
    overviewImageAlt: "Conveyor chain with trolleys",
    overviewTitle: "A chain that tows carts along a set route",
    overview: [
      "Huda Conveyors builds inverted floor conveyors and towlines in which a chain runs in a track at floor level and tows carts, trolleys or skids along a fixed route.",
      "Chain, track, drive and cart connections are matched to your load and layout, so your carts follow a set path and speed without forklifts or tugger drivers.",
    ],
    about: {
      title: "What is an inverted floor conveyor / towline?",
      paragraphs: [
        "A towline is a floor-level conveyor that uses a driven chain, set in or just above the floor, to pull carts or trolleys. A pin or tow connection under the cart engages the chain, and the cart follows the chain along the route.",
        "It moves heavy, wheeled loads on a fixed path and speed. Carts can be coupled or released from the chain at stations.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Moves heavy loads on wheels", description: "Carts loaded with heavy parts are towed without forklifts." },
        { title: "Fixed route and speed", description: "Carts follow a defined path, which keeps the line orderly." },
        { title: "Clears overhead space", description: "Nothing hangs overhead, which suits areas with low headroom or overhead cranes." },
        { title: "Suits assembly lines", description: "Carts can stop at stations and then continue along the line." },
      ],
    },
    process: [
      { title: "Study the route and carts", description: "We review the route, cart weight, wheel type and station layout." },
      { title: "Design the track and chain", description: "Floor track, chain and drive are designed for the load and speed." },
      { title: "Fabricate", description: "Track, drive, tension unit and tow connections are made." },
      { title: "Install and commission", description: "The line is installed in the floor, tested and handed over." },
    ],
    features: [
      "Floor-level chain and track",
      "Tow connections to suit your carts",
      "Drive and tensioning units built for heavy duty",
      "Straight and curved routes",
      "Station stops and cart release options",
    ],
    applications: [
      "Automotive assembly lines",
      "Heavy engineering assembly",
      "Material movement with carts and trolleys",
      "Production lines where overhead space is limited",
      "Paint shop cart movement",
    ],
    benefits: [
      "Tow heavy carts without forklifts",
      "Keep movement to a set route and speed",
      "Leave overhead space free",
      "Suit assembly lines with station stops",
    ],
  },
  incline: {
    category: "Continuous conveying",
    name: "Inclined Belt Conveyor",
    heroTitle: "Inclined belts that lift material to the next level.",
    summary:
      "Inclined belt conveyors raise product or bulk material from a lower to a higher level, with cleats or textured belts that hold the load on the slope.",
    image: "/images/waste-management-plant.jpg",
    imageAlt: "Inclined cleated belt conveyor in a waste processing plant",
    overviewImage: "/images/ash-handling.jpg",
    overviewImageAlt: "Inclined belt conveyor in an industrial process plant",
    overviewTitle: "Lift material between levels on one continuous belt",
    overview: [
      "Huda Conveyors builds inclined belt conveyors for lifting material and packages from one level to another, such as from a feed hopper to a sorting platform, machine or truck.",
      "Belt type, cleats, side walls and incline angle are selected for your product, so loads travel up the slope steadily without sliding back.",
    ],
    about: {
      title: "What is an inclined belt conveyor?",
      paragraphs: [
        "An inclined belt conveyor is a belt conveyor that runs at an angle to raise material to a higher level. The belt may have cleats, a rough surface or side walls so that the load does not slide back down.",
        "It is a basic and cost-effective way to move product between floors, platforms and machines without lifting it by hand.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Lifts without manual effort", description: "Material is raised to the next level automatically." },
        { title: "Feeds machines and hoppers", description: "Product is delivered at a steady rate to the next process step." },
        { title: "Compact route", description: "A slope uses less floor space than a long flat run with a lift at the end." },
        { title: "Flexible design", description: "Cleats and side walls allow different angles for different products." },
      ],
    },
    process: [
      { title: "Define height and product", description: "We confirm the height to be gained, the capacity and the nature of the material." },
      { title: "Select belt and cleats", description: "Belt type, cleat profile and incline angle are chosen for the load." },
      { title: "Fabricate", description: "Frame, drive, hopper and covers are fabricated and checked." },
      { title: "Install and commission", description: "The conveyor is installed, tested and handed over." },
    ],
    features: [
      "Cleated, rough-top or plain belts depending on the slope",
      "Side walls and skirts to keep product on the belt",
      "Incline angle set in the design",
      "Loading hopper and discharge chute to suit",
      "Sturdy frame with drive and take-up",
    ],
    applications: [
      "Recycling and waste plants",
      "Packaging and parcel handling",
      "Feeding hoppers, mixers and machines",
      "Truck and container loading",
      "Process plants moving material between levels",
    ],
    benefits: [
      "Move material between levels without manual lifting",
      "Feed downstream machines at a steady rate",
      "Save floor space with a sloped route",
      "Adapt belt and cleats to your product",
    ],
  },
  troughed: {
    category: "Bulk material handling",
    name: "Troughed Belt Conveyor",
    heroTitle: "Troughed belts for high-capacity bulk material handling.",
    summary:
      "Troughed belt conveyors carry bulk material on a belt shaped into a trough by angled idler rollers, giving high capacity and clean carrying over long distances.",
    image: "/images/coal-handling.jpg",
    imageAlt: "Troughed belt conveyor carrying coal",
    overviewImage: "/images/ash-handling.jpg",
    overviewImageAlt: "Conveyor handling bulk material in a plant",
    overviewTitle: "A trough that carries more and spills less",
    overview: [
      "Huda Conveyors builds troughed belt conveyors for coal, minerals, aggregates, grain and other bulk materials. Angled idler rollers shape the belt into a trough so it carries more material and holds it on the belt.",
      "Belt width, trough angle, speed and idler spacing are selected for your capacity and material, with covers, skirts and cleaners added where needed.",
    ],
    about: {
      title: "What is a troughed belt conveyor?",
      paragraphs: [
        "A troughed belt conveyor is a belt conveyor in which the belt is supported by sets of idler rollers, usually three, that lift the belt edges to form a trough. Material sits in the centre of the belt, held by the raised sides.",
        "The trough shape increases the cross-section of material that can be carried and reduces spillage, which is why it is the standard design for bulk handling over long distances.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Higher capacity", description: "The trough carries more material per metre of belt than a flat belt of the same width." },
        { title: "Less spillage", description: "Raised edges keep loose material on the belt." },
        { title: "Works over long distances", description: "Troughed belts can carry bulk material across a plant or site economically." },
        { title: "Suits many materials", description: "Coal, minerals, aggregates, grain and similar materials can all be carried." },
      ],
    },
    process: [
      { title: "Define capacity and material", description: "We confirm tonnage, material size, density and the route." },
      { title: "Size the belt and idlers", description: "Belt width, trough angle, speed and idlers are calculated." },
      { title: "Fabricate", description: "Frames, idlers, pulleys, drive and covers are fabricated and checked." },
      { title: "Install and commission", description: "The conveyor is erected, aligned, tested and handed over." },
    ],
    features: [
      "Troughed idler sets with a suitable trough angle",
      "Belt width and speed selected for capacity",
      "Skirts, covers and belt cleaners where required",
      "Drive, take-up and tracking arrangements",
      "Walkways and safety devices as required",
    ],
    applications: [
      "Coal handling plants",
      "Mining and mineral processing",
      "Cement and aggregate plants",
      "Power plants and ash handling",
      "Grain and fertiliser handling",
    ],
    benefits: [
      "Carry more material on a given belt width",
      "Reduce spillage and clean-up",
      "Move bulk material over long distances",
      "Fit covers and cleaners to suit your site",
    ],
  },
  curvedroller: {
    category: "Unit-load handling",
    name: "Curved Roller Conveyor",
    heroTitle: "Curved roller conveyors that turn cartons and pallets.",
    summary:
      "Curved roller conveyors carry cartons, crates and pallets around bends in gravity or powered lines, so the route can follow your layout.",
    image: "/images/roller-conveyor.jpg",
    imageAlt: "Roller conveyor lines with frames and rollers",
    overviewImage: "/images/about_conveyor_2.jpg",
    overviewImageAlt: "Roller conveyor lines in an automated factory",
    overviewTitle: "Turn the line while the load keeps moving",
    overview: [
      "Huda Conveyors builds curved roller conveyors, including tapered-roller designs, that carry cartons, crates and pallets through 30, 45, 60, 90 and 180 degree bends.",
      "Powered or gravity curves can be joined to straight roller sections, so you get a continuous line that turns corners without extra transfer points.",
    ],
    about: {
      title: "What is a curved roller conveyor?",
      paragraphs: [
        "A curved roller conveyor is a roller conveyor built to turn through an angle. Its rollers are tapered, or arranged in a fan shape, so that the outer edge of the load can travel faster than the inner edge while following the bend.",
        "It lets a line change direction smoothly while products keep their orientation, which suits cartons, crates and pallets.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Fits the layout", description: "Lines can turn around columns, machines and walls." },
        { title: "No transfer points", description: "Loads stay on one conveyor through the turn, so there are fewer jams and drops." },
        { title: "Gravity or powered", description: "Choose a free-running curve or a driven curve to suit the line." },
        { title: "Saves space", description: "A compact bend makes use of corners and tight areas." },
      ],
    },
    process: [
      { title: "Check the route", description: "We confirm the bend angle, load size and weight, and the line speed." },
      { title: "Specify the curve", description: "Roller type, curve radius, frame and drive are chosen." },
      { title: "Fabricate", description: "Curve sections are fabricated and test-fitted to the straight lines." },
      { title: "Install and commission", description: "The curve is installed, aligned, tested and handed over." },
    ],
    features: [
      "Tapered rollers for smooth turning",
      "Bends of 30, 45, 60, 90 and 180 degrees",
      "Gravity or powered versions",
      "Side guides to keep loads on the line",
      "Joins straight roller conveyor sections",
    ],
    applications: [
      "Warehouses and distribution centres",
      "Packaging and dispatch lines",
      "Pallet handling",
      "Sorting and accumulation lines",
      "Production lines with tight layouts",
    ],
    benefits: [
      "Turn lines around obstacles without transfers",
      "Keep loads moving smoothly through bends",
      "Choose gravity or powered operation",
      "Use corner and floor space well",
    ],
    relatedImages: [
      {
        src: "/images/ash-handling.jpg",
        alt: "Curved and pallet roller conveyor",
        caption: "Curved & pallet roller conveyor",
      },
      {
        src: "/images/roller-conveyor.jpg",
        alt: "Motorized roller conveyors",
        caption: "Motorized roller conveyors",
      },
    ],
  },
  apron: {
    category: "Heavy-duty conveying",
    name: "Apron Conveyor",
    heroTitle: "Apron conveyors for heavy, hot and abrasive material.",
    summary:
      "Apron conveyors carry material on overlapping steel pans fixed to a chain, so they can move heavy, hot, sharp or abrasive loads that a belt could not carry.",
    image: "/images/apron-conveyor.jpg",
    imageAlt: "Heavy industrial apron conveyor with chain drive",
    overviewImage: "/images/products/chain-links.png",
    overviewImageAlt: "Conveyor chain links used in apron conveyors",
    overviewTitle: "A steel surface for the toughest loads",
    overview: [
      "Huda Conveyors builds heavy industrial apron conveyors in which steel pans or plates are mounted on strong chains to form a continuous, overlapping carrying surface.",
      "Chain size, pan profile and drive are chosen for your material, weight and temperature, so the conveyor can run in demanding plants such as foundries, mines and process plants.",
    ],
    about: {
      title: "What is an apron conveyor?",
      paragraphs: [
        "An apron conveyor is a conveyor with a surface made of overlapping metal pans, called aprons, attached to one or more driven chains. As the chain moves, the pans carry material along the conveyor.",
        "The overlapping steel surface makes it far stronger than a belt, so it is used for heavy, lumpy, hot or abrasive material, and also as a feeder under hoppers.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Handles heavy and lumpy material", description: "Steel pans can take impact and heavy loads." },
        { title: "Works with hot and abrasive material", description: "Steel resists heat and wear better than a belt." },
        { title: "Positive chain drive", description: "The chain pulls the load without slip." },
        { title: "Good as a feeder", description: "Apron feeders draw material from hoppers at a controlled rate." },
      ],
    },
    process: [
      { title: "Review the material", description: "We check lump size, weight, temperature and capacity." },
      { title: "Select chain and pans", description: "Chain size, pan profile and material are chosen for the duty." },
      { title: "Fabricate", description: "Frame, chains, pans, drive and take-up are fabricated and checked." },
      { title: "Install and commission", description: "The conveyor is installed, aligned, tested and handed over." },
    ],
    features: [
      "Overlapping steel pans on strong chains",
      "Flat or flanged pan profiles",
      "Heavy-duty drive with gearbox and motor",
      "Suitable for hot and abrasive material",
      "Can be built as a hopper-fed apron feeder",
    ],
    applications: [
      "Foundries and steel plants",
      "Mining and mineral handling",
      "Cement and power plants",
      "Recycling and scrap handling",
      "Hopper feeding of heavy material",
    ],
    benefits: [
      "Move material a belt could not carry",
      "Run reliably in hot, dusty or abrasive conditions",
      "Feed hoppers and crushers at a controlled rate",
      "Get a long service life from a rugged build",
    ],
  },
  dragchain: {
    category: "Heavy-duty conveying",
    name: "Drag Chain Conveyor",
    heroTitle: "Drag chain conveyors that pull loads along a track.",
    summary:
      "Drag chain conveyors, including 5T and 7T dog chain systems, pull product along a track using a chain with dogs or attachments.",
    image: "/images/products/spares-dog-chain.png",
    imageAlt: "Conveyor chain with dog attachments",
    overviewImage: "/images/products/dog-chain-7t.png",
    overviewImageAlt: "7T dog chain for a conveyor",
    overviewTitle: "A chain with dogs that pulls the load forward",
    overview: [
      "Huda Conveyors builds drag chain and dog chain conveyors in which a driven chain with dogs, pushers or attachments engages the load and pulls it along a track or channel.",
      "Chain size, such as 5T or 7T, dog spacing and track are chosen for your load and route, so carts, pallets and product are moved reliably.",
    ],
    about: {
      title: "What is a drag chain conveyor?",
      paragraphs: [
        "A drag chain conveyor uses a chain, fitted with dogs or other attachments, that runs in a track and drags or pushes loads along. Unlike a belt, the load does not rest on a moving surface: it is pulled by the chain.",
        "Drag chain and dog chain systems are used for pallets, carts, bulk material in troughs and other heavy products that need positive pulling.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Positive pulling", description: "Dogs engage the load, so it moves without slipping." },
        { title: "Suits heavy loads", description: "Strong chains pull pallets, carts and heavy products." },
        { title: "Fixed route and spacing", description: "Dog spacing keeps loads evenly spaced along the line." },
        { title: "Tough and durable", description: "Steel chain and track stand up to demanding duty." },
      ],
    },
    process: [
      { title: "Check load and route", description: "We confirm load weight, route, spacing and speed." },
      { title: "Select chain and dogs", description: "Chain size such as 5T or 7T and dog type are chosen." },
      { title: "Fabricate", description: "Track, drive, take-up and chain assemblies are fabricated." },
      { title: "Install and commission", description: "The conveyor is installed, tested and handed over." },
    ],
    features: [
      "Dog chain in sizes such as 5T and 7T",
      "Dogs, pushers or attachments to suit the load",
      "Track or channel built to suit the route",
      "Heavy-duty drive and take-up",
      "Straight and curved layouts",
    ],
    applications: [
      "Pallet and cart handling",
      "Heavy assembly and engineering lines",
      "Bulk material in troughs",
      "Production lines needing positive pulling",
      "Plant transfer lines",
    ],
    benefits: [
      "Pull heavy loads positively along a fixed route",
      "Keep loads evenly spaced",
      "Run reliably under heavy duty",
      "Adapt chain size and dogs to your product",
    ],
    relatedImages: [
      {
        src: "/images/products/spares-dog-chain.png",
        alt: "5T dog chain conveyor",
        caption: "5T dog chain conveyor",
      },
      {
        src: "/images/products/dog-chain-7t.png",
        alt: "Intec conveyor dog chain 7T",
        caption: "Intec conveyor dog chain 7T",
      },
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
    overviewImage: "/images/products/chain-links.png",
    overviewImageAlt: "Conveyor chain links used in chain and apron systems",
    overviewTitle: "When the load is tough, the conveyor has to be tougher",
    overview: [
      "Huda Conveyors builds chain and apron systems for conditions where a standard belt or gravity line is not enough. Positive drive keeps heavy loads moving through demanding sections without belt slip.",
      "Reinforced frames, wear-resistant components and serviceable drive assemblies are selected around the load temperature, abrasion, impact and cleaning requirements of your plant.",
    ],
    about: {
      title: "What are chain and apron conveyors?",
      paragraphs: [
        "A chain conveyor moves loads on one or more driven chains. An apron conveyor uses overlapping metal pans or plates fixed to the chain, forming a continuous, strong surface that carries the material.",
        "Because the load rests on solid steel rather than a belt, these conveyors cope with heavy, hot, sharp or abrasive material that a belt could not handle.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Handles tough material", description: "Hot, heavy, abrasive and irregular loads can be moved without damaging the conveyor surface." },
        { title: "Positive chain drive", description: "The chain drives the load directly, so there is no slip even under heavy duty." },
        { title: "Strong and long-lasting", description: "A fabricated steel structure stands up to harsh plant conditions." },
        { title: "Suits feeding duty", description: "Apron feeders can take material from hoppers at a controlled rate." },
      ],
    },
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
    relatedImages: [
      {
        src: "/images/products/dog-chain-7t.png",
        alt: "Intec conveyor dog chain 7T",
        caption: "Intec conveyor dog chain 7T",
      },
      {
        src: "/images/products/dog-chain-track-7t.png",
        alt: "Enclosed track 7T dog chain",
        caption: "Enclosed track 7T dog chain",
      },
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
    about: {
      title: "What is a screw conveyor?",
      paragraphs: [
        "A screw conveyor uses a rotating helical blade, called a screw or auger, inside a tube or trough. As the screw turns, it pushes material along the casing from the inlet to the outlet.",
        "It is commonly used for powders, grains, ash, fines and other bulk material, where it can feed, mix or transfer product while keeping it enclosed.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Enclosed and clean", description: "The casing keeps dust inside and keeps outside contamination away." },
        { title: "Compact", description: "A screw fits into tight spaces and can run horizontally, inclined or vertically." },
        { title: "Controlled feeding", description: "Screw speed sets the feed rate, which helps dosing and process control." },
        { title: "Multiple inlets and outlets", description: "Material can be loaded and discharged at several points along the length." },
      ],
    },
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
    about: {
      title: "What is a bucket elevator?",
      paragraphs: [
        "A bucket elevator lifts bulk material vertically using a series of buckets fixed to a belt or chain. The buckets scoop material at the bottom, carry it up and discharge it at the top.",
        "It is a common way to lift grain, cement, fertilizer, ash and other free-flowing material between process levels in a small footprint.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Vertical lifting in little space", description: "Material is raised to a higher level without long inclined conveyors." },
        { title: "Continuous and efficient", description: "Buckets deliver a steady flow of material into silos, hoppers and machines." },
        { title: "Enclosed operation", description: "A closed casing contains dust and keeps product clean." },
        { title: "Suits many materials", description: "Bucket type and speed are chosen to match the material's size and flow." },
      ],
    },
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
    about: {
      title: "What is a spiral conveyor?",
      paragraphs: [
        "A spiral conveyor moves products up or down around a central column in a helical path. Items travel along the spiral on a belt, chain or slat surface and enter and leave at different floor levels.",
        "It is used where height must be gained or lost in a small floor area, such as between production floors, mezzanines and packing or sorting areas.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Saves floor space", description: "A spiral covers a large height change in a small footprint." },
        { title: "Smooth, continuous flow", description: "Products keep moving between levels without stops or manual lifting." },
        { title: "Links different levels", description: "Production, packing and dispatch can sit on different floors and still be connected." },
        { title: "Gentle on products", description: "A steady, controlled path reduces product movement and damage." },
      ],
    },
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
    about: {
      title: "What is a telescopic conveyor?",
      paragraphs: [
        "A telescopic conveyor is a belt or roller conveyor whose sections slide inside one another, so its length can be extended and retracted. It can reach into a truck or container and then be pulled back when the job is done.",
        "It is mainly used for loading and unloading trucks, trailers and containers, where cartons and sacks would otherwise be carried by hand.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "Reduces manual labour", description: "Workers no longer carry each carton or bag into the vehicle by hand." },
        { title: "Faster loading and unloading", description: "Vehicles spend less time at the dock, which improves dispatch time." },
        { title: "Adjustable reach", description: "One conveyor serves vehicles and containers of different lengths." },
        { title: "Safer working", description: "Less lifting and bending lowers strain and injury risk." },
      ],
    },
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
    about: {
      title: "What are turnkey conveyor solutions?",
      paragraphs: [
        "A turnkey solution means one supplier takes responsibility for the whole project: study, layout design, engineering, fabrication, installation, commissioning and handover. You receive a working system, ready to run.",
        "For complete plants such as coal handling, paint shops, waste management and recycling lines, this keeps design, equipment and site work aligned under a single plan.",
      ],
      whyTitle: "Why is it necessary?",
      reasons: [
        { title: "One point of responsibility", description: "A single supplier answers for the result, with no confusion between separate vendors." },
        { title: "Equipment that works together", description: "Conveyors, drives, controls and structures are designed as one coordinated system." },
        { title: "Clear plan and schedule", description: "Design, fabrication and site work follow one timeline." },
        { title: "Ready to run on handover", description: "The plant is tested and operators are trained before production starts." },
      ],
    },
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
