'use client';
import { useEffect, useRef } from 'react';
import { PROJECTS } from '@/constants/index';
import { useReveal } from '@/hooks/useGSAP';
import SectionBadge from '@/components/ui/SectionBadge/SectionBadge';
import styles from './Projects.module.css';

const BADGE_COLORS = {
  'AI / ML':    styles.badgePurple,
  'Full Stack': styles.badgeBlue,
  'Frontend':   styles.badgeIndigo,
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const r  = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height / 2) / r.height) * 6;
      const ry = ((e.clientX - r.left - r.width  / 2) / r.width ) * -6;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    };
    const onLeave = () => { card.style.transform = ''; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${project.featured ? styles.cardFeatured : ''} glassCard`}
    >
      {/* Number */}
      <span className={styles.num}>0{project.id}</span>

      {/* Badge */}
      <span className={`${styles.badge} ${BADGE_COLORS[project.badge] || styles.badgeBlue}`}>
        {project.badge}
      </span>

      {/* Title */}
      <h3 className={styles.title}>{project.title}</h3>

      {/* Description */}
      <p className={styles.desc}>{project.description}</p>

      {/* Stack */}
      <div className={styles.stack}>
        {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
          <i className="fab fa-github" /> Code
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkLive}`}>
          <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
        </a>
      </div>

      {/* Glow orb for featured */}
      {project.featured && <div className={styles.featuredGlow} aria-hidden />}
    </div>
  );
}

export default function Projects() {
  const headRef = useReveal({ from: { opacity: 0, y: 36 }, stagger: 0.1 });
  const gridRef = useReveal({ from: { opacity: 0, y: 52 }, stagger: 0.1, start: 'top 86%' });

  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className={styles.bgAccent} aria-hidden />
      <div className="container">
        <div ref={headRef} className={styles.head}>
          <SectionBadge>Projects</SectionBadge>
          <h2 className="sectionTitle">
            Things I&apos;ve <span className="gradText">built</span>
          </h2>
          <p className="sectionSub">
            Real projects with real code — from ML pipelines to full-stack platforms.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <div className={styles.more}>
          <p>Plus many more mini-projects and experiments</p>
          <a href="https://github.com/MOKSH2425" target="_blank" rel="noreferrer" className="btnGhost">
            <i className="fab fa-github" /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
