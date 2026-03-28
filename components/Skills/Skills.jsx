'use client';
import { SKILLS } from '@/constants/index';
import { useReveal } from '@/hooks/useGSAP';
import SectionBadge from '@/components/ui/SectionBadge/SectionBadge';
import styles from './Skills.module.css';

export default function Skills() {
  const headRef = useReveal({ from: { opacity: 0, y: 36 }, stagger: 0.1 });
  const gridRef = useReveal({ from: { opacity: 0, y: 44, scale: 0.97 }, stagger: 0.07, start: 'top 85%' });

  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className={styles.bgAccent} aria-hidden />
      <div className="container">
        <div ref={headRef} className={styles.head}>
          <SectionBadge>Tech Stack</SectionBadge>
          <h2 className="sectionTitle">
            Tools I&apos;ve <span className="gradText">mastered</span>
          </h2>
          <p className="sectionSub">
            A curated set of technologies I use to build modern, scalable products from front to back.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {SKILLS.map(({ category, icon, items, highlight }) => (
            <div key={category} className={`${styles.card} glassCard`}>
              <div className={styles.cardHead}>
                <div className={`${styles.iconBox} ${highlight ? styles.iconHighlight : ''}`}>
                  <i className={`fa-solid ${icon}`} />
                </div>
                <h3 className={styles.catName}>{category}</h3>
              </div>
              <div className={styles.pills}>
                {items.map(item => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
