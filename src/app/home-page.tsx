import styles from "./home.module.css";
import { EnquiryForm } from "./enquiry-form";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./site-data";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { ManufacturerSection } from "./manufacturer-section";
import {
  ArrowIcon,
  CheckIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./site-icons";

type Product = {
  readonly name: string;
  readonly kicker: string;
  readonly href: string;
  readonly image: string;
  readonly description: string;
};

type Feature = {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
};

type Testimonial = {
  readonly quote: string;
  readonly initials: string;
  readonly name: string;
  readonly role: string;
};

const STATS: readonly { readonly value: string; readonly label: string }[] = [
  { value: "14", label: "Years of engineering" },
  { value: "320", label: "Systems installed" },
  { value: "150", label: "Industrial clients" },
  { value: "100", label: "Conveyor products" },
];

const PRODUCTS: readonly Product[] = [
  {
    name: "Overhead Conveyor",
    kicker: "Overhead",
    href: "/overhead-conveyors",
    image: "/images/four-wheel-overhead-conveyor.jpg",
    description:
      "Keep floor space clear with engineered overhead routing for assembly, paint-shop and transfer lines.",
  },
  {
    name: "Belt Conveyors",
    kicker: "Belt",
    href: "/belt-conveyor",
    image: "/images/belt-conveyor.png",
    description:
      "Move cartons, components and bulk material smoothly across straight, inclined and long-run layouts.",
  },
  {
    name: "Roller Conveyors",
    kicker: "Roller",
    href: "/roller-conveyors",
    image: "/images/roller-conveyor.png",
    description:
      "Reliable gravity and powered roller lines for pallets, cartons, dispatch and accumulation applications.",
  },
  {
    name: "Chain & Apron Conveyors",
    kicker: "Chain",
    href: "/chain-conveyors",
    image: "/images/apron-conveyor.jpg",
    description:
      "Positive-drive handling for heavy, abrasive, hot or irregular loads in demanding plant environments.",
  },
  {
    name: "Screw Conveyors",
    kicker: "Bulk Handling",
    href: "/screw-conveyors",
    image: "/images/coal-handling.jpg",
    description:
      "Enclosed conveying for powders, fines, ash and bulk materials where controlled transfer matters.",
  },
  {
    name: "Bucket Elevators",
    kicker: "Vertical Handling",
    href: "/bucket-elevators",
    image: "/images/ash-handling.jpg",
    description:
      "Lift bulk materials between process levels with compact, continuous vertical movement.",
  },
  {
    name: "Spiral Conveyors",
    kicker: "Vertical Flow",
    href: "/spiral-conveyor",
    image: "/images/waste-management-plant.jpg",
    description:
      "Use vertical space efficiently while maintaining a steady flow between floors and workstations.",
  },
  {
    name: "Telescopic Conveyors",
    kicker: "Loading",
    href: "/telescopic-belt-conveyor",
    image: "/images/belt-conveyor.jpg",
    description:
      "Reach into trucks and containers with adjustable loading systems that reduce manual handling.",
  },
  {
    name: "Wire Mesh Belt Conveyors",
    kicker: "Special Purpose",
    href: "/wire-mesh-belt-conveyor",
    image: "/images/wire-mesh-belt-conveyor.jpg",
    description:
      "Open-mesh conveying for heat, washdown, cooling, drying and demanding process applications.",
  },
  {
    name: "Turnkey Conveyor Solutions",
    kicker: "Integrated Systems",
    href: "/turn-key-solutions",
    image: "/images/coal-handling.png",
    description:
      "Bring layout, fabrication, installation and commissioning together in one coordinated material-flow system.",
  },
];

const FEATURES: readonly Feature[] = [
  {
    icon: "fas fa-industry",
    title: "In-house Fabrication",
    description:
      "Cutting, forming, welding and assembly under one roof for consistent quality and dependable delivery timelines.",
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Custom Engineering",
    description:
      "Every system is sized around your load, layout, speed and process instead of forced into an off-the-shelf design.",
  },
  {
    icon: "fas fa-cogs",
    title: "Turnkey Installation",
    description:
      "Site survey, erection, alignment and commissioning are handled by our own experienced project team.",
  },
  {
    icon: "fas fa-tools",
    title: "Service and Spares",
    description:
      "Long-term support with genuine conveyor spares, maintenance guidance and system upgrade assistance.",
  },
];

const INDUSTRIES: readonly { readonly name: string; readonly icon: string }[] = [
  { name: "Food and Beverage", icon: "/images/icon3.svg" },
  { name: "Recycling and Environment", icon: "/images/icons4.svg" },
  { name: "Chemistry and Pharma", icon: "/images/icon5.svg" },
  { name: "Plastic and Rubber", icon: "/images/icon6.svg" },
  { name: "Energy Industry", icon: "/images/icon7.svg" },
  { name: "Feed and Agriculture", icon: "/images/icon8.svg" },
  { name: "Shipping and Logistics", icon: "/images/icon10.svg" },
  { name: "Coal and Minerals", icon: "/images/icon11.svg" },
];

const CLIENTS: readonly string[] = [
  "/images/client1.JPG",
  "/images/client2.jpg",
  "/images/client3.jpg",
  "/images/client4.jpg",
  "/images/client5.jpg",
  "/images/client6.jpg",
  "/images/client7.jpg",
  "/images/client8.jpg",
  "/images/client9.jpg",
  "/images/client10.jpg",
  "/images/client11.jpg",
  "/images/client12.jpg",
  "/images/client13.jpg",
  "/images/client15.jpg",
  "/images/client16.png",
  "/images/client17.jpg",
  "/images/client18.jpg",
];

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "Huda Conveyors Solution engineered and installed an automated overhead conveyor for our assembly line. The chain design, load handling and smooth operation have clearly improved our plant productivity.",
    initials: "RS",
    name: "Rajesh Sharma",
    role: "Head of Operations, AutoTech Mobility",
  },
  {
    quote:
      "The heavy-duty belt conveyors run continuously at our bulk handling facility with no unexpected downtime. Build quality, motor efficiency and the installation team were all excellent.",
    initials: "VR",
    name: "Vikramaditya Roy",
    role: "General Manager, Apex Logistics",
  },
  {
    quote:
      "The powered roller conveyor line streamlined our sorting and dispatch operations. Modular build, easy sensor integration and quiet operation, backed by responsive after-sales support.",
    initials: "AK",
    name: "Anand Kulkarni",
    role: "Director of Supply Chain, TransLog Warehousing",
  },
];

export function HomePage() {
  return (
    <div className={styles.home}>
      <a className={styles.srOnly} href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className={styles.hero}>
          <img
            className={styles.heroImage}
            src="/images/hero.jpg"
            alt="Industrial roller conveyor line inside a manufacturing plant"
            fetchPriority="high"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>
                Overhead &middot; Belt &middot; Roller &middot; Chain Conveyors
              </span>
              <h1 className={styles.heroTitle}>
                Industrial conveyor systems built to keep{" "}
                <span>your plant moving.</span>
              </h1>
              <p className={styles.heroText}>
                Huda Conveyors Solution designs, manufactures and installs overhead, belt,
                roller and chain conveyor systems for plants across India. Every system is
                engineered for uptime, safety and a long service life.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.btnPrimary} href="#products">
                  Explore Products
                  <ArrowIcon />
                </a>
                <a className={styles.btnGhost} href="#quote">
                  Get a Quote
                </a>
              </div>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaItem}>
                  <CheckIcon />
                  Made in India since 2008
                </span>
                <span className={styles.heroMetaItem}>
                  <CheckIcon />
                  In-house design and fabrication
                </span>
                <span className={styles.heroMetaItem}>
                  <CheckIcon />
                  Pan-India installation
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.statsWrap}>
          <div className={styles.container}>
            <div className={styles.statsBar}>
              {STATS.map((stat) => (
                <div className={styles.stat} key={stat.label}>
                  <span className={styles.statValue}>
                    {stat.value}
                    <em>+</em>
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className={styles.section} id="about">
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div className={styles.aboutMedia}>
              <div className={styles.aboutFrame} aria-hidden="true" />
              <img
                className={styles.aboutImgMain}
                src="/images/about5.jpg"
                alt="Automated industrial conveyor system manufactured by Huda Conveyors"
                loading="lazy"
              />
              <img
                className={styles.aboutImgSmall}
                src="/images/about6.jpg"
                alt="Conveyor line installed on a factory floor"
                loading="lazy"
              />
              <div className={styles.aboutBadge}>
                <strong>14+</strong>
                <span>Years of engineering</span>
              </div>
            </div>

            <div className={styles.aboutCopy}>
              <span className={styles.eyebrow}>About Huda Conveyors</span>
              <h2 className={styles.sectionTitle}>
                A material handling partner built for{" "}
                <span>heavy industrial duty.</span>
              </h2>
              <p>
                Huda Conveyors Solution, formerly Huda Engineering, is a manufacturer and
                innovator of industrial automation systems based in Anoopshahar, Bulandshahr.
                We specialise in overhead, floor, belt, roller and chain conveyor systems for
                production, assembly and material handling lines.
              </p>
              <p>
                With more than 14 years of engineering experience, we deliver robust,
                application-specific conveyors designed around client layouts, production
                targets and maintenance realities.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  End-to-end engineering, from layout design and fabrication to commissioning.
                </li>
                <li className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  Heavy-duty build quality for continuous, high-load industrial operation.
                </li>
              </ul>
              <a className={styles.btnDark} href="/about">
                More About Us
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionSurface}`} id="products">
          <div className={styles.container}>
            <div className={styles.headRow}>
              <div className={styles.sectionHead}>
                <span className={styles.eyebrow}>Solutions We Provide</span>
                <h2 className={styles.sectionTitle}>
                  Conveyor systems built around <span>your material flow.</span>
                </h2>
                <p className={styles.sectionLead}>
                  Explore our core conveyor families, from overhead routing and bulk handling to
                  loading systems and complete turnkey material-flow solutions.
                </p>
              </div>
              <a className={styles.textLink} href="/contact">
                Discuss your requirements
                <ArrowIcon />
              </a>
            </div>

            <div className={styles.productGrid}>
              {PRODUCTS.map((product: Product) => (
                <article className={styles.productCard} key={product.name}>
                  <div className={styles.productImageBox}>
                    <img
                      className={styles.productImage}
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.productBody}>
                    <span className={styles.productKicker}>{product.kicker}</span>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <a className={styles.productArrow} href={product.href}>
                      View Details
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ManufacturerSection />

        <section className={styles.capabilities} id="capabilities">
          <div className={`${styles.container} ${styles.capabilitiesGrid}`}>
            <div className={styles.capabilitiesCopy}>
              <span className={styles.eyebrow}>Why Choose Us</span>
              <h2>
                Engineering depth that shows up on the <span>plant floor.</span>
              </h2>
              <p>
                Every conveyor leaves our facility with the same focus: correct engineering,
                solid fabrication and predictable performance. Our team supports you from the
                first site survey through to long-term service.
              </p>
              <div className={styles.capabilitiesStats}>
                <div>
                  <strong>14+</strong>
                  <span>Years in material handling</span>
                </div>
                <div>
                  <strong>320+</strong>
                  <span>Systems delivered</span>
                </div>
                <div>
                  <strong>150+</strong>
                  <span>Clients across India</span>
                </div>
              </div>
            </div>

            <div className={styles.featureGrid}>
              {FEATURES.map((feature: Feature) => (
                <div className={styles.featureCard} key={feature.title}>
                  <span className={styles.featureIcon}>
                    <i className={feature.icon} aria-hidden="true" />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="industries">
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
              <span className={styles.eyebrow}>Industries We Serve</span>
              <h2 className={styles.sectionTitle}>
                Built for almost <span>every industry.</span>
              </h2>
              <p className={styles.sectionLead}>
                Our conveyor systems handle food, bulk materials, heavy components, recyclables
                and more in demanding plant environments.
              </p>
            </div>

            <div className={styles.industryGrid}>
              {INDUSTRIES.map((industry) => (
                <a className={styles.industryCard} href="/contact" key={industry.name}>
                  <span className={styles.industryIcon}>
                    <img src={industry.icon} alt="" loading="lazy" />
                  </span>
                  <span>{industry.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.clients}>
          <div className={styles.container}>
            <p className={styles.clientsLabel}>
              Trusted by manufacturers and processors across India
            </p>
            <div className={styles.clientsViewport} aria-label="Huda Conveyors client logos">
              <div className={styles.clientsTrack}>
                {[0, 1].map((copy) => (
                  <div
                    className={styles.clientsGroup}
                    key={copy}
                    aria-hidden={copy === 1}
                  >
                    {CLIENTS.map((client, index) => (
                      <span className={styles.clientLogo} key={`${copy}-${client}`}>
                        <img
                          src={client}
                          alt={copy === 0 ? `Huda Conveyors client ${index + 1}` : ""}
                          loading="lazy"
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionSurface}`}>
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
              <span className={styles.eyebrow}>Client Feedback</span>
              <h2 className={styles.sectionTitle}>
                What plant teams say about <span>working with us.</span>
              </h2>
            </div>

            <div className={styles.testimonialGrid}>
              {TESTIMONIALS.map((testimonial: Testimonial) => (
                <div className={styles.testimonialCard} key={testimonial.name}>
                  <div className={styles.testimonialTop}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      &ldquo;
                    </span>
                    <span className={styles.stars} aria-label="5 out of 5 stars">
                      <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    </span>
                  </div>
                  <p className={styles.testimonialText}>&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className={styles.testimonialPerson}>
                    <span className={styles.avatar} aria-hidden="true">
                      {testimonial.initials}
                    </span>
                    <span>
                      <span className={styles.testimonialName}>{testimonial.name}</span>
                      <span className={styles.testimonialRole}>{testimonial.role}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <img
            className={styles.ctaImage}
            src="/images/banner5.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className={styles.ctaOverlay} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaCopy}>
                <span className={styles.eyebrow}>Start Your Project</span>
                <h2>
                  Have a conveyor requirement? <span>Let&apos;s engineer it.</span>
                </h2>
                <p>
                  Share your material, load, layout and plant location. Our engineers will
                  recommend the right system and prepare a detailed proposal.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <a className={styles.btnPrimary} href="#quote">
                  Request a Quote
                  <ArrowIcon />
                </a>
                <a className={styles.ctaCall} href={PHONE_HREF}>
                  <span>Call us directly</span>
                  <strong>{PHONE_DISPLAY}</strong>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionSurface}`} id="quote">
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
              <span className={styles.eyebrow}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>
                Request a quotation for <span>your conveyor system.</span>
              </h2>
              <p className={styles.sectionLead}>
                Tell us what you move and how you move it. We will respond with a practical,
                engineered recommendation.
              </p>
            </div>

            <div className={styles.quoteCard}>
              <div className={styles.quoteInfo}>
                <h3>Tell us what you move. We&apos;ll recommend the right system.</h3>
                <p>
                  Our team works with plant owners, project consultants and production heads
                  to specify conveyor systems that perform from day one.
                </p>
                <ul className={styles.quoteList}>
                  <li className={styles.quoteListItem}>
                    <CheckIcon />
                    Site-specific layout and capacity recommendations
                  </li>
                  <li className={styles.quoteListItem}>
                    <CheckIcon />
                    Clear fabrication, delivery and installation timelines
                  </li>
                  <li className={styles.quoteListItem}>
                    <CheckIcon />
                    Installation, commissioning and after-sales support
                  </li>
                </ul>
                <div className={styles.quoteContact}>
                  <div className={styles.quoteContactRow}>
                    <PhoneIcon />
                    <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                  </div>
                  <div className={styles.quoteContactRow}>
                    <MailIcon />
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                  <div className={styles.quoteContactRow}>
                    <PinIcon />
                    <span>{ADDRESS}</span>
                  </div>
                </div>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
