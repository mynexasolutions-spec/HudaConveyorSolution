import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppWidget } from "./whatsapp-widget";

export const metadata: Metadata = {
  title: "All About Overhead Conveyors | Huda Conveyors Solution",
  description: "Huda Conveyors Solution is a leading manufacturer and supplier of overhead conveyors, floor conveyors, and handling systems from Hapur, Uttar Pradesh, India.",
  icons: {
    icon: {
      url: "/images/fevicon.jpeg",
      type: "image/jpeg",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/color-switcher-design.css" />
        <link id="theme-color-file" rel="stylesheet" href="/css/color-themes/default-theme.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
