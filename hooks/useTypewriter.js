'use client';
import { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Developer',
  'React.js Engineer',
  'ML / AI Explorer',
  'Open Source Builder',
  'BTech CSE Student',
];

export function useTypewriter(speed = 90, deleteSpeed = 45, pause = 2000) {
  const [text,     setText]     = useState('');
  const [idx,      setIdx]      = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setIdx(i => (i + 1) % ROLES.length);
        }
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(t);
  }, [text, charIdx, deleting, idx]);

  return text;
}
