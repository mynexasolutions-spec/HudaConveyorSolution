"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./home.module.css";
import { ArrowIcon, CheckIcon } from "./site-icons";

type ManufacturerTab = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly points: readonly string[];
};

const MANUFACTURER_TABS: readonly ManufacturerTab[] = [
  {
    id: "goal",
    label: "Our Goal",
    title: "Make every material movement more predictable.",
    paragraphs: [
      "Our goal is to help industrial teams move products and bulk materials with less handling, less downtime and more control. We turn practical plant requirements into conveyor systems that are built to perform every shift.",
    ],
    points: [
      "Improve uptime through fit-for-purpose engineering",
      "Create safer, more efficient material-flow routes",
    ],
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Be the engineering partner plants can rely on.",
    paragraphs: [
      "We are building Huda Conveyors into a trusted material-handling partner for Indian industry: known for thoughtful design, dependable fabrication, clear project coordination and support that continues after installation.",
    ],
    points: [
      "Grow through quality, accountability and long-term service",
      "Make robust automation accessible to more Indian plants",
    ],
  },
  {
    id: "approach",
    label: "Our Approach",
    title: "Start with your process, then engineer the system.",
    paragraphs: [
      "We study the material, load, speed, route, operators and maintenance reality before recommending a solution. That means the final conveyor fits the plant around it, not the other way around.",
    ],
    points: [
      "Survey, design, fabrication and commissioning under one team",
      "Clear decisions around safety, access and serviceability",
    ],
  },
];

const MANUFACTURER_STATS: readonly {
  readonly value: string;
  readonly label: string;
}[] = [
  { value: "14+", label: "Years of engineering" },
  { value: "320+", label: "Systems installed" },
  { value: "150+", label: "Industrial clients" },
];

export function ManufacturerSection() {
  const [activeTabId, setActiveTabId] = useState<string>(MANUFACTURER_TABS[0].id);
  const activeTab: ManufacturerTab =
    MANUFACTURER_TABS.find((tab: ManufacturerTab) => tab.id === activeTabId) ??
    MANUFACTURER_TABS[0];

  return (
    <section className={styles.manufacturer} id="manufacturer">
      <div className={`${styles.container} ${styles.manufacturerGrid}`}>
        <div className={styles.manufacturerCopy}>
          <span className={styles.eyebrow}>Manufacturing &amp; Supply</span>
          <h2 className={styles.sectionTitle}>
            Conveyor Systems <span>Manufacturer and Supplier in India</span>
          </h2>

          <div className={styles.manufacturerTabs} role="tablist" aria-label="About Huda Conveyors">
            {MANUFACTURER_TABS.map((tab: ManufacturerTab) => (
              <button
                className={`${styles.manufacturerTab} ${
                  tab.id === activeTab.id ? styles.manufacturerTabActive : ""
                }`}
                type="button"
                role="tab"
                aria-selected={tab.id === activeTab.id}
                aria-controls={`manufacturer-panel-${tab.id}`}
                id={`manufacturer-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className={styles.manufacturerPanel}
            role="tabpanel"
            id={`manufacturer-panel-${activeTab.id}`}
            aria-labelledby={`manufacturer-tab-${activeTab.id}`}
          >
            <h3>{activeTab.title}</h3>
            {activeTab.paragraphs.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className={styles.manufacturerPoints}>
              {activeTab.points.map((point: string) => (
                <li key={point}>
                  <span className={styles.manufacturerPointIcon}>
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <a className={styles.manufacturerLink} href="/about">
              More about Huda Conveyors
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className={styles.manufacturerVisual} aria-label="Huda Conveyors company statistics">
          <div className={styles.manufacturerTileStat}>
            <strong>{MANUFACTURER_STATS[0].value}</strong>
            <span>{MANUFACTURER_STATS[0].label}</span>
          </div>

          <div className={styles.manufacturerTileBrand}>
            <Image
              src="/images/logo_fin.png"
              alt="Huda Conveyors Solution"
              width={160}
              height={80}
            />
            <span>Built in India</span>
          </div>

          <div className={styles.manufacturerTileStat}>
            <strong>{MANUFACTURER_STATS[1].value}</strong>
            <span>{MANUFACTURER_STATS[1].label}</span>
          </div>

          <div className={`${styles.manufacturerTileImage} ${styles.manufacturerTileImageWide}`}>
            <Image
              src="/images/about_conveyor_1.jpg"
              alt="Overhead conveyor line in an industrial facility"
              fill
              sizes="(max-width: 820px) 50vw, 22vw"
            />
            <span>In-house fabrication</span>
          </div>

          <div className={styles.manufacturerTileStat}>
            <strong>{MANUFACTURER_STATS[2].value}</strong>
            <span>{MANUFACTURER_STATS[2].label}</span>
          </div>

          <div className={styles.manufacturerTileImage}>
            <Image
              src="/images/about6.jpg"
              alt="Conveyor system installed on a factory floor"
              fill
              sizes="(max-width: 820px) 50vw, 22vw"
            />
            <span>Pan-India installation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
