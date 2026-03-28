import styles from './SectionLabel.module.css';

export default function SectionLabel({ number, label }) {
  return (
    <div className={styles.wrap}>
      <span className={styles.num}>{number}</span>
      <span className={styles.slash}>//</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
