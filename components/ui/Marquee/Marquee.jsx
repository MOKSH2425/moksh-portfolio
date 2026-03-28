import styles from './Marquee.module.css';

const ITEMS = ['React.js','Node.js','Python','MongoDB','Next.js','AI / ML','TypeScript','Docker','Open Source','Full Stack Dev'];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {track.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.arrow}>▶</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
