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

    const rootStyles = getComputedStyle(document.documentElement);
    const introDuration = parseFloat(rootStyles.getPropertyValue('--intro-duration')) || 900; // ms
    const speedBoost = parseFloat(rootStyles.getPropertyValue('--intro-speed-boost')) || 0.5;
    const alphaBoost = parseFloat(rootStyles.getPropertyValue('--intro-alpha-boost')) || 0.45;
    const sizeBoost = parseFloat(rootStyles.getPropertyValue('--intro-size-boost')) || 0.28;
    const introStart = performance.now();

    // signal intro start to other components and add a root class for CSS sync
    try { document.documentElement.classList.add('intro-running'); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('intro-start')); } catch (e) {}
    const introTimeout = setTimeout(() => {
      try { document.documentElement.classList.remove('intro-running'); } catch (e) {}
      try { document.documentElement.classList.add('intro-done'); } catch (e) {}
      try { window.dispatchEvent(new CustomEvent('intro-done')); } catch (e) {}
    }, introDuration);

    const draw = () => {
      const now = performance.now();
      const tRaw = Math.min(1, (now - introStart) / introDuration);
      const t = 1 - Math.pow(1 - tRaw, 3); // ease-out cubic
      const speedMul = 1 + (1 - t) * speedBoost; // subtle speed increase at start
      const alphaMul = 1 + (1 - t) * alphaBoost; // subtle brightness at start
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const strength = 1 - dist / linkDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(116, 210, 255, ${0.11 * strength * Math.min(1.4, alphaMul)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        if (!reducedMotion) {
          p.x += p.vx * speedMul;
          p.y += p.vy * speedMul;
          if (p.x < -20) p.x = W + 20;
          if (p.x > W + 20) p.x = -20;
          if (p.y < -20) p.y = H + 20;
          if (p.y > H + 20) p.y = -20;
        }

        ctx.beginPath();
        const r = p.r * (1 + (1 - t) * sizeBoost);
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        const a = Math.min(1, p.alpha * alphaMul);
        ctx.fillStyle = p.hue === 'cyan'
          ? `rgba(103, 232, 249, ${a})`
          : `rgba(167, 139, 250, ${a})`;
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
      clearTimeout(introTimeout);
      try { document.documentElement.classList.remove('intro-running'); } catch (e) {}
      try { document.documentElement.classList.remove('intro-done'); } catch (e) {}
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden />;
}
