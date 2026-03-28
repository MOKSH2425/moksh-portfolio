import styles from './SectionBadge.module.css';

export default function SectionBadge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}
