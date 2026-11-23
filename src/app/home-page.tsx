import Image from "next/image";
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
import { SmartLink } from "./smart-link";

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
    name: "I-Beam Conveyor",
    kicker: "Overhead",
    href: "/i-beam-conveyor",
    image: "/images/products/ibeam-overhead-track.png",
    description:
      "Robust I-beam overhead conveyors with trolleys, drive and take-up units for smooth, stable movement.",
  },
  {
    name: "Sprockets and Spare Parts",
    kicker: "Conveyor Components",
    href: "/sprockets-spare-parts",
    image: "/images/sprockets-spare-parts.jpg",
    description:
      "Replacement sprockets, trolley components and purpose-built rigging for dependable conveyor service.",
  },
  {
    name: "Slat Conveyor",
    kicker: "Floor & Chain",
    href: "/slat-conveyor",
    image: "/images/products/slat-conveyor.png",
    description:
      "Rugged steel slat conveyors built to carry heavy, hot or awkward components on a solid moving platform.",
  },
  {
    name: "I-Beam Overhead Conveyor",
    kicker: "Overhead",
    href: "/i-beam-conveyor",
    image: "/images/enclosed.jpg",
    description:
      "Heavy-duty overhead I-beam conveyors engineered for continuous component transport through finishing and assembly.",
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
          <Image
            className={styles.heroImage}
            src="/images/hero.jpg"
            alt="Industrial roller conveyor line inside a manufacturing plant"
            width={1920}
            height={750}
            sizes="100vw"
            priority
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

        <section className={styles.section} id="about">
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div className={styles.aboutMedia}>
              <div className={styles.aboutFrame} aria-hidden="true" />
              <Image
                className={styles.aboutImgMain}
                src="/images/about5.jpg"
                alt="Automated industrial conveyor system manufactured by Huda Conveyors"
                width={800}
                height={1200}
                sizes="(max-width: 900px) 90vw, 560px"
              />
              <Image
                className={styles.aboutImgSmall}
                src="/images/about6.jpg"
                alt="Conveyor line installed on a factory floor"
                width={800}
                height={1200}
                sizes="(max-width: 900px) 40vw, 260px"
              />
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
                We deliver robust, application-specific conveyors designed around client
                layouts, production targets and maintenance realities.
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
              <SmartLink className={styles.btnDark} href="/about">
                More About Us
                <ArrowIcon />
              </SmartLink>
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
                  Explore our core conveyor families, from overhead and I-beam routing to belt
                  and roller lines and the spare parts that keep them running.
                </p>
              </div>
              <SmartLink className={styles.textLink} href="/contact">
                Discuss your requirements
                <ArrowIcon />
              </SmartLink>
            </div>

            <div className={styles.productGrid}>
              {PRODUCTS.map((product: Product) => (
                <article className={styles.productCard} key={product.name}>
                  <div className={styles.productImageBox}>
                    <Image
                      className={styles.productImage}
                      src={product.image}
                      alt={product.name}
                      width={720}
                      height={480}
                      sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px"
                    />
                  </div>
                  <div className={styles.productBody}>
                    <span className={styles.productKicker}>{product.kicker}</span>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <SmartLink className={styles.productArrow} href={product.href}>
                      View Details
                    </SmartLink>
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
                <SmartLink className={styles.industryCard} href="/contact" key={industry.name}>
                  <span className={styles.industryIcon}>
                    <img src={industry.icon} alt="" loading="lazy" />
                  </span>
                  <span>{industry.name}</span>
                </SmartLink>
              ))}
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
          <Image
            className={styles.ctaImage}
            src="/images/banner5.jpg"
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            sizes="100vw"
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
