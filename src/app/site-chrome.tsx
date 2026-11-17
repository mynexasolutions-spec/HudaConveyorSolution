"use client";

import { usePathname } from "next/navigation";
import styles from "./home.module.css";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <div className={styles.home}>
      <a className={styles.srOnly} href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <div className={`${styles.innerContent} huda-inner-content`} id="main-content">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
