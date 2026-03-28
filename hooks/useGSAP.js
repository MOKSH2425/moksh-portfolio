'use client';
import { useEffect, useRef } from 'react';

/**
 * Stagger-reveal children of the returned ref on scroll.
 */
export function useReveal({
  from     = { opacity: 0, y: 48 },
  stagger  = 0.1,
  duration = 0.85,
  start    = 'top 82%',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.from(ref.current.children, {
          ...from, duration, stagger, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start, once: true },
        });
      }, ref);
    })();
    return () => ctx?.revert();
  }, []);

  return ref;
}

/**
 * Reveal a single element ref on scroll.
 */
export function useRevealEl({
  from     = { opacity: 0, y: 40 },
  duration = 0.85,
  delay    = 0,
  start    = 'top 84%',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.from(ref.current, {
          ...from, duration, delay, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start, once: true },
        });
      }, ref);
    })();
    return () => ctx?.revert();
  }, []);

  return ref;
}
