import { SmartLink } from "./smart-link";
import styles from "./home.module.css";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRODUCT_MENU,
  SOLUTION_MENU,
  type MenuLink,
} from "./site-data";
import { ChevronIcon, MailIcon, PhoneIcon, PinIcon } from "./site-icons";

export function SiteHeader() {
  return (
    <div className={styles.siteHeader}>
      <div className={styles.topbar}>
        <div className={`${styles.container} ${styles.topbarInner}`}>
          <div className={styles.topbarGroup}>
            <a className={styles.topbarItem} href={PHONE_HREF}>
              <PhoneIcon />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a className={styles.topbarItem} href={`mailto:${EMAIL}`}>
              <MailIcon />
              <span>{EMAIL}</span>
            </a>
            <span className={styles.topbarItem}>
              <PinIcon />
              <span>{ADDRESS}</span>
            </span>
          </div>
          <div className={styles.topbarRight}>
            <span className={styles.topbarTag}>Mon - Fri &middot; 10:00 - 18:30</span>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <SmartLink className={styles.brand} href="/" aria-label="Huda Conveyors Solution home">
            <img
              className={styles.brandLogo}
              src="/images/logo_fin.png"
              alt="Huda Conveyors Solution"
              width={152}
              height={76}
            />
          </SmartLink>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <SmartLink className={styles.navLink} href="/">
                  Home
                </SmartLink>
              </li>
              <li className={styles.navItem}>
                <SmartLink className={styles.navLink} href="/about">
                  About Us
                </SmartLink>
              </li>
              <li className={`${styles.navItem} ${styles.hasMenu}`}>
                <SmartLink className={styles.navLink} href="/#products">
                  Products
                  <ChevronIcon className={styles.chevron} />
                </SmartLink>
                <div className={styles.megaMenu}>
                  <div className={styles.megaGrid}>
                    {PRODUCT_MENU.map((item: MenuLink) => (
                      <SmartLink className={styles.megaItem} href={item.href} key={item.label}>
                        <span className={styles.megaIcon}>
                          <i className={item.icon} aria-hidden="true" />
                        </span>
                        <span>
                          <span className={styles.megaTitle}>{item.label}</span>
                          <span className={styles.megaDesc}>{item.description}</span>
                        </span>
                      </SmartLink>
                    ))}
                  </div>
                </div>
              </li>
              <li className={`${styles.navItem} ${styles.hasMenu}`}>
                <SmartLink className={styles.navLink} href="/#capabilities">
                  Solutions
                  <ChevronIcon className={styles.chevron} />
                </SmartLink>
                <ul className={styles.dropMenu}>
                  {SOLUTION_MENU.map((item) => (
                    <li key={item.label}>
                      <SmartLink className={styles.dropLink} href={item.href}>
                        {item.label}
                        <span aria-hidden="true">&rarr;</span>
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={styles.navItem}>
                <SmartLink className={styles.navLink} href="/gallery">
                  Gallery
                </SmartLink>
              </li>
              <li className={styles.navItem}>
                <SmartLink className={styles.navLink} href="/contact">
                  Contact
                </SmartLink>
              </li>
            </ul>
          </nav>

          <div className={styles.headerActions}>
            <a className={styles.headerPhone} href={PHONE_HREF}>
              <PhoneIcon />
              <span>
                Call our team
                <strong>{PHONE_DISPLAY}</strong>
              </span>
            </a>
            <SmartLink className={styles.headerCta} href="/contact">
              Get a Quote
            </SmartLink>
          </div>

          <input
            className={styles.navToggle}
            type="checkbox"
            id="huda-mobile-nav"
            aria-label="Toggle navigation menu"
          />
          <label className={styles.burger} htmlFor="huda-mobile-nav" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </label>

          <div className={styles.mobileDrawer}>
            <nav className={styles.mobileNav} aria-label="Mobile">
              <SmartLink className={styles.mobileLink} href="/">
                Home
              </SmartLink>
              <SmartLink className={styles.mobileLink} href="/about">
                About Us
              </SmartLink>
              <details className={styles.mobileGroup}>
                <summary>Products</summary>
                <div className={styles.mobileSub}>
                  {PRODUCT_MENU.map((item: MenuLink) => (
                    <SmartLink href={item.href} key={item.label}>
                      {item.label}
                    </SmartLink>
                  ))}
                </div>
              </details>
              <details className={styles.mobileGroup}>
                <summary>Solutions</summary>
                <div className={styles.mobileSub}>
                  {SOLUTION_MENU.map((item) => (
                    <SmartLink href={item.href} key={item.label}>
                      {item.label}
                    </SmartLink>
                  ))}
                </div>
              </details>
              <SmartLink className={styles.mobileLink} href="/gallery">
                Gallery
              </SmartLink>
              <SmartLink className={styles.mobileLink} href="/contact">
                Contact
              </SmartLink>
              <div className={styles.mobileActions}>
                <SmartLink className={styles.headerCta} href="/contact">
                  Get a Quote
                </SmartLink>
                <a className={styles.mobilePhone} href={PHONE_HREF}>
                  <PhoneIcon />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
