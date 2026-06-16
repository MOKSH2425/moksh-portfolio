'use client';
import { useEffect, useRef } from 'react';
import styles from './ParticleCanvas.module.css';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
    let W = window.innerWidth;
    let H = window.innerHeight;
    let raf;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = reducedMotion ? 34 : isMobile ? 52 : 92;
    const linkDistance = isMobile ? 104 : 138;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() * 1.7 + 0.55,
      vx:   (Math.random() - 0.5) * (isMobile ? 0.18 : 0.28),
      vy:   (Math.random() - 0.5) * (isMobile ? 0.18 : 0.28),
      hue: Math.random() > 0.46 ? 'cyan' : 'violet',
      alpha: Math.random() * 0.32 + 0.16,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const strength = 1 - dist / linkDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(116, 210, 255, ${0.11 * strength})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = W + 20;
          if (p.x > W + 20) p.x = -20;
          if (p.y < -20) p.y = H + 20;
          if (p.y > H + 20) p.y = -20;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 'cyan'
          ? `rgba(103, 232, 249, ${p.alpha})`
          : `rgba(167, 139, 250, ${p.alpha})`;
        ctx.shadowBlur  = 10;
        ctx.shadowColor = p.hue === 'cyan' ? '#67e8f9' : '#a78bfa';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden />;
}
