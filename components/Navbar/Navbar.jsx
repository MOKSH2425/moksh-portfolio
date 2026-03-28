'use client';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SOCIALS } from '@/constants/index';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Moksh<span className={styles.dot}>.</span>
        </button>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                className={`${styles.link} ${active === href ? styles.linkActive : ''}`}
                onClick={() => go(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a href="mailto:shahmoksh7@gmail.com" className={`${styles.cta} btnPrimary`}>
          Hire Me
        </a>

        <button
          className={`${styles.ham} ${menuOpen ? styles.hamOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <button key={href} className={styles.drawerLink} onClick={() => go(href)}>
            {label}
          </button>
        ))}
        <a href="mailto:shahmoksh7@gmail.com" className={`${styles.drawerCta} btnPrimary`}>
          Hire Me
        </a>
      </div>
    </>
  );
}
