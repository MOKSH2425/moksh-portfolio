import React from 'react';
import styles from './Projects.module.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalHeader}>
          <div>
            <span className={`${styles.badge} ${project.badge ? styles.badgeBlue : ''}`}>{project.badge}</span>
            <h3 className={styles.title} style={{ marginTop: 8 }}>{project.title}</h3>
          </div>
          <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close project details">×</button>
        </header>

        <div className={styles.modalBody}>
          <p className={styles.desc}>{project.description}</p>
          {project.details && <p className={styles.desc} style={{ marginTop: '0.8rem' }}>{project.details}</p>}

          <div className={styles.modalTags}>
            {project.tags?.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <div style={{ marginTop: '1.2rem' }}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={`${styles.linkBtn} ${styles.linkLive}`}
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
