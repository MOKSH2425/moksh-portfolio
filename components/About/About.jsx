'use client';
import { useReveal, useRevealEl } from '@/hooks/useGSAP';
import SectionBadge from '@/components/ui/SectionBadge/SectionBadge';
import { SOCIALS } from '@/constants/index';
import styles from './About.module.css';

const TRAITS = ['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented', 'Open Source Enthusiast'];

export default function About() {
  const leftRef  = useReveal({ from: { opacity: 0, x: -50 }, stagger: 0.13 });
  const rightRef = useReveal({ from: { opacity: 0, x:  50 }, stagger: 0.11 });

  return (
    <section className={`${styles.about} section`} id="about">
      {/* Gradient transition from hero */}
      <div className={styles.topGrad} aria-hidden />

      <div className="container">
        <div className={styles.grid}>

          {/* ── Left ── */}
          <div ref={leftRef} className={styles.left}>
            <SectionBadge>About Me</SectionBadge>
            <h2 className="sectionTitle">
              Crafting code that<br />
              <span className="gradText">solves real problems</span>
            </h2>
            <p className={styles.bio}>
              Hey! I&apos;m <strong>Moksh Shah</strong>, a Computer Science engineering student (Class of 2027) who bridges the gap between complex algorithms and intuitive user interfaces.
            </p>
            <p className={styles.bio}>
              From architecting scalable React/Node.js dashboards to training predictive scikit-learn recommendation systems, I specialize in transforming conceptual ideas into deployed, production-ready products. I believe great software is equal parts logic and craft.
            </p>

            <div className={styles.traits}>
              {TRAITS.map(t => (
                <span key={t} className={styles.traitChip}>{t}</span>
              ))}
            </div>

            <div className={styles.actions}>
              <a
                href="#contact"
                className="btnPrimary"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Let&apos;s Connect <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="/assets/RESUME_MOKSH.pdf" className="btnGhost" download>
                Resume <i className="fa-solid fa-download" />
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div ref={rightRef} className={styles.right}>
            {/* Photo card */}
            <div className={`${styles.photoCard} glassCard`}>
              <img src="/assets/img/moksh.jpg" alt="Moksh Shah" className={styles.photo} />
              <div className={styles.photoOrb} aria-hidden />
            </div>

            {/* Info cards */}
            <div className={styles.infoGrid}>
              {[
                { icon: 'fa-envelope',     label: 'Email',    val: 'shahmoksh7@gmail.com' },
                { icon: 'fa-phone',        label: 'Phone',    val: '+91 63534 44388'       },
                { icon: 'fa-location-dot', label: 'Location', val: 'Surat, Gujarat'        },
                { icon: 'fa-graduation-cap',label: 'Degree',  val: 'B.Tech CSE — 2027'     },
              ].map(({ icon, label, val }) => (
                <div key={label} className={`${styles.infoChip} glassCard`}>
                  <i className={`fa-solid ${icon} ${styles.infoIcon}`} />
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoVal}>{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
