'use client';
import { useEffect, useRef } from 'react';

export function useGSAPReveal({
  from     = { opacity: 0, y: 60 },
  trigger  = 'top 85%',
  stagger  = 0.12,
  duration = 0.9,
} = {}) {
  const ref = useRef(null);
  useEffect(() => {
    let ctx;
    async function init() {
      const { gsap }         = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.from(ref.current.children, {
          ...from, duration, stagger, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: trigger, once: true },
        });
      }, ref);
    }
    init();
    return () => ctx?.revert();
  }, []);
  return ref;
}

export function useGSAPElement({
  from     = { opacity: 0, y: 60 },
  trigger  = 'top 88%',
  duration = 0.9,
  delay    = 0,
} = {}) {
  const ref = useRef(null);
  useEffect(() => {
    let ctx;
    async function init() {
      const { gsap }         = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.from(ref.current, {
          ...from, duration, delay, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: trigger, once: true },
        });
      }, ref);
    }
    init();
    return () => ctx?.revert();
  }, []);
  return ref;
}
