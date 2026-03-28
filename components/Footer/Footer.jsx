'use client';
import { NAV_LINKS, SOCIALS } from '@/constants/index';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const go   = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} aria-hidden />
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Moksh<span className={styles.dot}>.</span>
          </button>
          <p className={styles.tagline}>Building things that matter.</p>
          <div className={styles.socials}>
            {SOCIALS.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                 className={styles.socialBtn} aria-label={label}>
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          <p className={styles.linksTitle}>Navigation</p>
          {NAV_LINKS.map(({ label, href }) => (
            <button key={href} className={styles.navLink} onClick={() => go(href)}>
              {label}
            </button>
          ))}
        </div>

        <div className={styles.contact}>
          <p className={styles.linksTitle}>Contact</p>
          <a href="mailto:shahmoksh7@gmail.com" className={styles.contactLink}>shahmoksh7@gmail.com</a>
          <a href="tel:+916353444388"            className={styles.contactLink}>+91 63534 44388</a>
          <span className={styles.contactLink} style={{ cursor: 'default' }}>Surat, Gujarat, India</span>
        </div>

      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {year} Moksh Shah. All rights reserved.</p>
        <p className={styles.madeWith}>Designed &amp; Built by Moksh Shah</p>
      </div>
    </footer>
  );
}
