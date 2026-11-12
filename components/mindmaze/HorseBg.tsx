'use client';

import { useEffect, useRef } from 'react';

/**
 * The painting behind sections 02-06. It stays one screen tall (so it is never stretched past its
 * own resolution) and pans from the top of the painting to the bottom as the zone scrolls by.
 */
export default function HorseBg() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zone = el.current?.closest('.horse-zone');
    if (!zone) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = zone.getBoundingClientRect();
      const span = Math.max(1, r.height - window.innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / span));
      if (el.current) el.current.style.backgroundPosition = `center ${(p * 100).toFixed(2)}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="horse-bg" ref={el} />;
}
