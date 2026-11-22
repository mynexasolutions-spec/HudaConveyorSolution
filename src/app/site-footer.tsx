import Link from "next/link";
import styles from "./home.module.css";
import {
  ADDRESS,
  EMAIL,
  FOOTER_COMPANY,
  FOOTER_PRODUCTS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./site-data";
import { MailIcon, PhoneIcon, PinIcon } from "./site-icons";
import { SmartLink } from "./smart-link";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div>
            <Link className={styles.footerBrand} href="/" aria-label="Huda Conveyors Solution home">
              <img src="/images/logo_fin.png" alt="Huda Conveyors Solution" loading="lazy" />
            </Link>
            <p className={styles.footerAbout}>
              Huda Conveyors Solution is a manufacturer of industrial conveyors and material
              handling systems, delivering custom automated solutions from Anoopshahar,
              Uttar Pradesh, since 2008.
            </p>
            <div className={styles.socialRow}>
              <a
                className={styles.socialBtn}
                href="https://wa.me/919891137368"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
              </a>
              <a
                className={styles.socialBtn}
                href="https://www.facebook.com/hudaconveyorssolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
              <a
                className={styles.socialBtn}
                href="https://www.instagram.com/hudaconveyorssolution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              <a
                className={styles.socialBtn}
                href="https://twitter.com/HudaLtd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.footerTitle}>Products</h3>
            <ul className={styles.footerList}>
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.footerTitle}>Company</h3>
            <ul className={styles.footerList}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <div className={styles.footerContact}>
              <div className={styles.footerContactRow}>
                <PhoneIcon />
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </div>
              <div className={styles.footerContactRow}>
                <MailIcon />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className={styles.footerContactRow}>
                <PinIcon />
                <span>{ADDRESS}</span>
              </div>
              <span className={styles.footerHours}>Mon - Fri, 10:00 - 18:30</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomInner}>
            <span>&copy; 2026 Huda Conveyors Solution. All rights reserved.</span>
            <span>
              Anoopshahar &middot; Bulandshahr &middot; Uttar Pradesh, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
