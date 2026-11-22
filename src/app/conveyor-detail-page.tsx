import Image from "next/image";
import Link from "next/link";
import styles from "./conveyor-detail.module.css";
import type { ConveyorDetail } from "./conveyor-detail-data";
import { ArrowIcon, CheckIcon, PhoneIcon } from "./site-icons";
import { PHONE_DISPLAY, PHONE_HREF } from "./site-data";

type ConveyorDetailPageProps = {
  readonly product: ConveyorDetail;
};

export function ConveyorDetailPage({ product }: ConveyorDetailPageProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{product.name}</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{product.category}</span>
              <h1>{product.heroTitle}</h1>
              <p>{product.summary}</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact">
                  Request a quotation
                  <ArrowIcon />
                </Link>
                <a className={styles.secondaryButton} href={PHONE_HREF}>
                  <PhoneIcon />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className={styles.heroCard}>
              <span className={styles.heroCardLabel}>Huda Conveyors / Product system</span>
              <strong>{product.name}</strong>
              <span>Designed, fabricated and commissioned around your plant.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="overview">
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.imagePair}>
              <div className={`${styles.detailImage} ${styles.detailImagePrimary}`}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className={`${styles.detailImage} ${styles.detailImageSecondary}`}>
                <Image
                  src={product.overviewImage}
                  alt={product.overviewImageAlt}
                  fill
                  sizes="(max-width: 900px) 52vw, 25vw"
                />
              </div>
            </div>

            <div className={styles.overviewCopy}>
              <span className={styles.eyebrow}>Product overview</span>
              <h2>{product.overviewTitle}</h2>
              {product.overview.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className={styles.overviewLinkRow}>
                <span>Built for your material, route and duty cycle.</span>
                <Link href="/contact">
                  Talk to an engineer
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutSection}`} id="about-product">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <span className={styles.eyebrow}>About the product</span>
              <h2>{product.about.title}</h2>
              {product.about.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.whyPanel}>
              <h3>{product.about.whyTitle}</h3>
              <ol className={styles.whyList}>
                {product.about.reasons.map((reason, index: number) => (
                  <li key={reason.title}>
                    <span className={styles.whyNumber}>0{index + 1}</span>
                    <div>
                      <strong>{reason.title}</strong>
                      <p>{reason.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {product.relatedImages && product.relatedImages.length > 0 ? (
        <section className={`${styles.section} ${styles.relatedSection}`} id="gallery">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.eyebrow}>Related images</span>
                <h2>{product.name}, in the field.</h2>
              </div>
              <p>A closer look at the equipment and components behind this system.</p>
            </div>

            <div className={styles.relatedGrid}>
              {product.relatedImages.map((image) => (
                <figure className={styles.relatedItem} key={image.src}>
                  <div className={styles.relatedFrame}>
                    {/* Shown at the file's own size so small photos are never upscaled or cropped. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  </div>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`${styles.section} ${styles.sectionTinted}`} id="process">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>How we deliver it</span>
              <h2>A clear process from first layout to final handover.</h2>
            </div>
            <p>
              Good conveyor performance starts before fabrication. We keep the design, build and
              site work connected so the finished system fits the way your plant operates.
            </p>
          </div>

          <ol className={styles.processGrid}>
            {product.process.map((step, index: number) => (
              <li className={styles.processCard} key={step.title}>
                <span className={styles.processNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id="features">
        <div className={styles.container}>
          <div className={styles.featureLayout}>
            <div className={styles.featureIntro}>
              <span className={styles.eyebrow}>Key features</span>
              <h2>Specified for the work your line has to do.</h2>
              <p>
                We focus on the details that affect uptime: the material, the environment, the
                operator, the maintenance routine and the next piece of equipment in the route.
              </p>
              <Link className={styles.outlineButton} href="/contact">
                Plan your system
                <ArrowIcon />
              </Link>
            </div>
            <ul className={styles.featureList}>
              {product.features.map((feature: string) => (
                <li key={feature}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTinted}`} id="applications">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>Industrial applications</span>
              <h2>Ready for real plant conditions.</h2>
            </div>
            <p>
              From a single transfer point to a complete production route, the right configuration
              depends on your product, process and operating environment.
            </p>
          </div>

          <div className={styles.applicationGrid}>
            {product.applications.map((application, index: number) => (
              <div className={styles.applicationCard} key={application}>
                <span>0{index + 1}</span>
                <h3>{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsPanel}>
            <div>
              <span className={styles.eyebrow}>Why Huda Conveyors</span>
              <h2>More than a machine. A better material-flow decision.</h2>
            </div>
            <ul className={styles.benefitsList}>
              {product.benefits.map((benefit: string) => (
                <li key={benefit}>
                  <CheckIcon />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaPanel}>
            <div>
              <span className={styles.eyebrow}>Start with your requirement</span>
              <h2>Let&apos;s design the right route for your material.</h2>
              <p>
                Share your load, capacity, layout and site location. Our team will help shape a
                practical conveyor proposal for your plant.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link className={styles.primaryButton} href="/contact">
                Enquire now
                <ArrowIcon />
              </Link>
              <a className={styles.ctaPhone} href={PHONE_HREF}>
                <PhoneIcon />
                <span>
                  <small>Speak with our team</small>
                  <strong>{PHONE_DISPLAY}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
