'use client';

import { useEffect, useRef, useState } from 'react';
import ParticleCanvas from '@/components/ui/ParticleCanvas/ParticleCanvas';
import styles from './ImmersiveBackground.module.css';

export default function ImmersiveBackground() {
  const [phase, setPhase] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setPhase(Math.min(1, window.scrollY / max));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    const onMove = (event) => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        setPointer({ x, y });
        rafRef.current = null;
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const style = {
    '--phase': phase,
    '--mx': pointer.x,
    '--my': pointer.y,
    // Intro configuration (can be tuned): duration in ms and multiplier boosts
    '--intro-duration': 900,
    '--intro-speed-boost': 0.5,
    '--intro-alpha-boost': 0.45,
    '--intro-size-boost': 0.28,
  };

  const [introZoom, setIntroZoom] = useState(1.03);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    let rafId;
    const tick = () => {
      const now = performance.now();
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = 1.03 - eased * 0.03; // animate from 1.03 -> 1
      setIntroZoom(val);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    tick();
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, []);

  return (
    <div className={styles.stage} style={{ ...style, '--intro-zoom': introZoom }} aria-hidden>
      <div className={styles.aurora} />
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />
      <div className={styles.orbThree} />
      <ParticleCanvas />
      <div className={styles.grid} />
      <div className={styles.scan} />
      <div className={styles.depth} />
      <div className={styles.vignette} />
    </div>
  );
}
