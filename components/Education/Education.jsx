'use client';
import { EDUCATION } from '@/constants/index';
import { useReveal } from '@/hooks/useGSAP';
import SectionBadge from '@/components/ui/SectionBadge/SectionBadge';
import styles from './Education.module.css';

export default function Education() {
  const headRef = useReveal({ from: { opacity: 0, y: 36 }, stagger: 0.1 });
  const bodyRef = useReveal({ from: { opacity: 0, x: -40 }, stagger: 0.18, start: 'top 85%' });

  return (
    <section className={`${styles.education} section`} id="education">
      <div className={styles.bgAccent} aria-hidden />
      <div className="container">
        <div ref={headRef} className={styles.head}>
          <SectionBadge>Education</SectionBadge>
          <h2 className="sectionTitle">
            The path that <span className="gradText">shaped me</span>
          </h2>
          <p className="sectionSub">Academic milestones that built the foundation for everything I create.</p>
        </div>

        <div ref={bodyRef} className={styles.timeline}>
          {EDUCATION.map(({ period, degree, school, status, description, subjects }) => (
            <div key={degree} className={styles.item}>
              {/* Line + dot */}
              <div className={styles.lineCol}>
                <div className={`${styles.dot} ${status === 'ongoing' ? styles.dotActive : styles.dotDone}`}>
                  {status === 'ongoing' && <div className={styles.dotPing} />}
                </div>
                <div className={styles.line} />
              </div>

              {/* Card */}
              <div className={`${styles.card} glassCard`}>
                <div className={styles.cardTop}>
                  <span className={`${styles.statusPill} ${status === 'ongoing' ? styles.pillActive : styles.pillDone}`}>
                    {status === 'ongoing' ? '● In Progress' : '✓ Completed'}
                  </span>
                  <span className={styles.period}>{period}</span>
                </div>

                <h3 className={styles.degree}>{degree}</h3>
                <p className={styles.school}>
                  <i className="fa-solid fa-location-dot" style={{ marginRight: '0.4rem', color: 'var(--purple-light)', fontSize: '0.8rem' }} />
                  {school}
                </p>
                <p className={styles.desc}>{description}</p>

                <div className={styles.subjects}>
                  {subjects.map(s => <span key={s} className={styles.subject}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
