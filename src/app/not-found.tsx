import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Explore Huda Conveyors Solution products and services.",
  robots: { index: false, follow: true },
};

const WHATSAPP_URL: string =
  "https://wa.me/919891137368?text=Hello%20Huda%20Conveyors%20Solution%2C%20I%20need%20help%20finding%20a%20page.";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.logo} src="/images/logo_fin.png" alt="Huda Conveyors Solution" />

      <h1 className={styles.code} aria-label="404">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>

      <h2 className={styles.title}>
        This load went <em>off the line</em>
      </h2>
      <p className={styles.text}>
        The page you are looking for has been moved, removed, or never existed. Don&apos;t worry, our
        conveyors are still running. Head back and we&apos;ll get you moving again.
      </p>

      <div className={styles.actions}>
        <Link className={`${styles.btn} ${styles.primary}`} href="/">
          Back to Home
        </Link>
        <a className={`${styles.btn} ${styles.ghost}`} href="/overhead-conveyors">
          View Products
        </a>
        <a className={`${styles.btn} ${styles.ghost}`} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </div>

      <div className={styles.links}>
        <a href="/about">About</a>·<a href="/gallery">Gallery</a>·<a href="/blog">Blog</a>·
        <a href="/contact">Contact</a>
      </div>

      <div className={styles.belt} aria-hidden="true">
        <div className={styles.crate} />
        <div className={styles.crate} />
        <div className={`${styles.crate} ${styles.lost}`} />
        <div className={styles.track} />
      </div>
    </main>
  );
}
