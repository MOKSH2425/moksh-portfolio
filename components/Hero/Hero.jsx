'use client';
import { useEffect, useRef } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { SOCIALS } from '@/constants/index';
import styles from './Hero.module.css';

export default function Hero() {
  const typed   = useTypewriter();
  const heroRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { gsap } = await import('gsap');
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(`.${styles.badge}`,   { opacity: 0, y: -16, duration: 0.6 }, 0.3)
        .from(`.${styles.heading}`, { opacity: 0, y: 60,  duration: 1.0, stagger: 0.12 }, 0.5)
        .from(`.${styles.sub}`,     { opacity: 0, y: 24,  duration: 0.7 }, 1.0)
        .from(`.${styles.actions}`, { opacity: 0, y: 20,  duration: 0.6 }, 1.2)
        .from(`.${styles.statItem}`,{ opacity: 0, y: 24,  duration: 0.6, stagger: 0.08 }, 1.35)
        .from(`.${styles.socialLink}`,{ opacity: 0, x: 20, duration: 0.5, stagger: 0.07 }, 1.4);
    })();
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* Gradient mesh background */}
      <div className={styles.mesh} aria-hidden />
      <div className={styles.meshOrb1} aria-hidden />
      <div className={styles.meshOrb2} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={`container ${styles.content}`}>
        {/* Availability badge */}
        <div className={styles.badge}>
          <span className={styles.pulseDot} />
          Available for Internships &amp; Projects
        </div>

        {/* Main heading */}
        <h1 className={styles.headingWrap}>
          <span className={styles.heading}>Hi, I&apos;m</span>
          <span className={`${styles.heading} ${styles.headingName}`}>
            Moksh Shah
          </span>
        </h1>

        {/* Typed role */}
        <div className={styles.sub}>
          <span className={styles.subStatic}>I&apos;m a&nbsp;</span>
          <span className={styles.typed}>{typed}</span>
          <span className={styles.caret}>|</span>
        </div>

        {/* Description */}
        <p className={styles.desc}>
          Full-Stack Developer & ML Enthusiast with hands-on experience in the MERN stack and Python.
          Focused on engineering scalable web architectures and deploying predictive machine learning models.
        </p>

        {/* CTA buttons */}
        <div className={styles.actions}>
          <button className="btnPrimary" onClick={() => scrollTo('#projects')}>
            View Projects <i className="fa-solid fa-arrow-right" />
          </button>
          <button className="btnGhost" onClick={() => scrollTo('#contact')}>
            Get in Touch
          </button>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {[
            { val: '4+',   label: 'Major Projects' },
            { val: '10+',  label: 'Mini Projects'  },
            { val: '2027', label: 'Graduating'      },
          ].map(({ val, label }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statVal}>{val}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          {SOCIALS.map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
               className={styles.socialLink} aria-label={label}>
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <div className={styles.scrollBar} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
