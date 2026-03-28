'use client';
import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot  = dotRef.current;
    if (!ring || !dot) return;

    let mx = 0, my = 0, rx = 0, ry = 0, raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => { ring.classList.add(styles.expand); dot.classList.add(styles.hidden); };
    const onLeave = () => { ring.classList.remove(styles.expand); dot.classList.remove(styles.hidden); };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    document.querySelectorAll('a, button, input, textarea, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  aria-hidden />
      <div ref={ringRef} className={styles.ring} aria-hidden />
    </>
  );
}
