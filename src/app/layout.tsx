import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppWidget } from "./whatsapp-widget";
import { LEGACY_SCRIPT_SOURCES } from "./legacy-script-sources";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_PHONE,
  SITE_URL,
} from "./seo-data";

const DEFAULT_DESCRIPTION: string =
  "Huda Conveyors Solution is a leading manufacturer and supplier of overhead conveyors, belt conveyors, roller conveyors, chain conveyors and turnkey plants from Anoopshahar, Bulandshahr, Uttar Pradesh, India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Overhead Conveyor Manufacturer in India | Huda Conveyors Solution",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "overhead conveyor manufacturer",
    "belt conveyor manufacturer in India",
    "roller conveyor",
    "chain conveyor",
    "conveyor spare parts",
    "paint shop conveyor",
    "coal handling plant",
    "Huda Conveyors Solution",
    "Huda Engineering",
    "Bulandshahr",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: SITE_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  icons: {
    icon: {
      url: "/images/fevicon.jpeg",
      type: "image/jpeg",
    },
  },
};

const BUSINESS_JSON_LD: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  alternateName: "Huda Engineering",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo_fin.png`,
  image: `${SITE_URL}${SITE_OG_IMAGE}`,
  description: DEFAULT_DESCRIPTION,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  foundingDate: "2008",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anoopshahar",
    addressLocality: "Bulandshahr",
    addressRegion: "Uttar Pradesh",
    postalCode: "203390",
    addressCountry: "IN",
  },
  openingHours: "Mo-Fr 10:00-18:30",
  sameAs: [
    "https://www.facebook.com/hudaconveyorssolution",
    "https://www.instagram.com/hudaconveyorssolution/",
    "https://twitter.com/HudaLtd",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        {LEGACY_SCRIPT_SOURCES.map((source: string) => (
          <link key={source} rel="preload" as="script" href={source} />
        ))}
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/style.css?v=2" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/color-switcher-design.css" />
        <link id="theme-color-file" rel="stylesheet" href="/css/color-themes/default-theme.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSON_LD) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
