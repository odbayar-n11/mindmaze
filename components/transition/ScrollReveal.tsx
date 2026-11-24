'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

/**
 * Scroll pop-up for every page: blocks that start below the fold are hidden, then each one
 * rises quickly from below the moment it scrolls into view. Blocks already on screen at load
 * are left alone so the hero keeps its own animation.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.style.setProperty('--sr-delay', (Number(el.dataset.srIdx || 0) % 4) * 70 + 'ms');
          el.classList.add('sr-in');
          el.classList.remove('sr');
          window.setTimeout(() => el.classList.remove('sr-in'), 1200);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );

    const scan = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>('main section > *, main section > * > *, section > *, section > * > *').forEach((el, i) => {
        if (seen.has(el)) return;
        seen.add(el);
        const cs = getComputedStyle(el);
        if (cs.position === 'absolute' || cs.position === 'fixed' || cs.display === 'none' || cs.display === 'inline') return;
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'svg') return;
        if (el.closest('header, nav, [aria-hidden="true"]')) return;
        const r = el.getBoundingClientRect();
        if (r.height < 20 || r.top < vh * 0.9) return; // already visible: leave it
        el.dataset.srIdx = String(i);
        el.classList.add('sr');
        io.observe(el);
      });
    };

    const timers = [350, 1300, 2800].map((ms) => window.setTimeout(scan, ms));
    return () => {
      timers.forEach(clearTimeout);
      io.disconnect();
      document.querySelectorAll('.sr').forEach((el) => el.classList.remove('sr'));
    };
  }, [pathname]);

  return null;
}
