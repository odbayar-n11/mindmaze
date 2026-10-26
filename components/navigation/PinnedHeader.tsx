'use client';

import { useEffect, useLayoutEffect, useRef, useState, type ComponentProps } from 'react';

export function useScrolledHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return scrolled;
}

/** Keep the navigation visible and expose its wrapped height for anchor offsets. */
export default function PinnedHeader({ style, ...props }: ComponentProps<'header'>) {
  const scrolled = useScrolledHeader();
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = ref.current;
    if (!header) return;
    const update = () => {
      document.documentElement.style.setProperty('--site-nav-height', `${header.getBoundingClientRect().height}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--site-nav-height');
    };
  }, []);

  return <header {...props} data-scroll-header data-scrolled={scrolled} ref={ref} style={{ ...style, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#0B1528' }} />;
}
