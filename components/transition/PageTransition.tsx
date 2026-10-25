'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { getLang } from '@/lib/lang';
import { prefersReducedMotion } from '@/lib/motion';
import { revealGate } from '@/lib/pageReady';
import type { MiniBurr } from './miniBurr';

const EASE = 'cubic-bezier(.76,0,.24,1)';
const COVER_MS = 600;
const REVEAL_MS = 750;
const MIN_HOLD_MS = 320; // lets the little burr finish assembling on fast navigations

const DEST: Record<string, [string, string]> = {
  '/': ['Home', 'Нүүр'],
  '/puzzles': ['Puzzles', 'Оньсого'],
  '/coding': ['Coding', 'Кодлол'],
};

const frame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/**
 * Smooth page changes. Any click on a link to another page of the site is caught here:
 * a navy panel edged with the Mongolian key band sweeps up over the page while a wooden
 * burr (three.js) assembles in the middle, the next page loads underneath, then the panel
 * carries on upward and the new page rises into place.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const shell = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const burr = useRef<MiniBurr | null>(null);
  const busy = useRef(false);
  const arrived = useRef<((path: string) => void) | null>(null);
  const lastPath = useRef(pathname);
  const [dest, setDest] = useState('');

  const loadBurr = useCallback(async () => {
    if (burr.current || !canvas.current) return burr.current;
    try {
      const { MiniBurr } = await import('./miniBurr');
      if (!burr.current && canvas.current) burr.current = new MiniBurr(canvas.current);
    } catch {
      burr.current = null; // no WebGL: the panel still works without the burr
    }
    return burr.current;
  }, []);

  const go = useCallback(
    async (href: string) => {
      const url = new URL(href, window.location.href);
      const el = { shell: shell.current, overlay: overlay.current, panel: panel.current };
      if (busy.current || !el.shell || !el.overlay || !el.panel) return;
      busy.current = true;
      const reduce = prefersReducedMotion();
      const path = url.pathname;
      const names = DEST[path];
      setDest(names ? names[getLang() === 'en' ? 0 : 1] : '');
      router.prefetch(path);

      el.overlay.dataset.active = 'true';
      if (!reduce) void loadBurr().then((mini) => mini?.play(COVER_MS + MIN_HOLD_MS));

      // 1. cover: the panel sweeps up, the old page drifts up and dims beneath it
      const cover = el.panel.animate([{ transform: 'translate3d(0,100%,0)' }, { transform: 'translate3d(0,0,0)' }], {
        duration: reduce ? 200 : COVER_MS,
        easing: EASE,
        fill: 'forwards',
      });
      const leave = reduce
        ? null
        : el.shell.animate([{ transform: 'none', opacity: 1 }, { transform: 'translate3d(0,-70px,0)', opacity: 0.5 }], {
            duration: COVER_MS,
            easing: EASE,
            fill: 'forwards',
          });
      await cover.finished;
      const t0 = performance.now();

      // 2. load the next page underneath
      const landed = new Promise<boolean>((resolve) => {
        arrived.current = (p) => p === path && resolve(true);
        setTimeout(() => resolve(false), 10000);
      });
      router.push(url.pathname + url.search + url.hash, { scroll: false });
      if (!(await landed)) {
        window.location.assign(href); // navigation stalled: fall back to a normal page load
        return;
      }
      arrived.current = null;
      leave?.cancel();
      const target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
      window.scrollTo({ top: target ? target.getBoundingClientRect().top + window.scrollY : 0, behavior: 'instant' });
      await revealGate(1500); // e.g. the puzzle page setting up its 3D burr
      await frame();
      await frame();
      if (!reduce) await sleep(Math.max(0, MIN_HOLD_MS - (performance.now() - t0)));

      // 3. reveal: the panel carries on upward and the new page rises into place
      const reveal = el.panel.animate([{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(0,-100%,0)' }], {
        duration: reduce ? 200 : REVEAL_MS,
        easing: EASE,
        fill: 'forwards',
      });
      if (!reduce) {
        el.shell.animate([{ transform: 'translate3d(0,90px,0)' }, { transform: 'none' }], {
          duration: REVEAL_MS + 150,
          easing: 'cubic-bezier(.2,.75,.25,1)',
        });
      }
      await reveal.finished;
      cover.cancel();
      reveal.cancel();
      burr.current?.stop();
      el.overlay.dataset.active = 'false';
      busy.current = false;
    },
    [loadBurr, router],
  );

  // every internal link on every page goes through the transition
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      e.preventDefault();
      void go(url.href);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [go]);

  // the new page has mounted; back/forward navigations get a short fade-up instead
  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;
    if (arrived.current) arrived.current(pathname);
    else if (!busy.current && shell.current && !prefersReducedMotion()) {
      shell.current.animate(
        [
          { opacity: 0, transform: 'translate3d(0,24px,0)' },
          { opacity: 1, transform: 'none' },
        ],
        { duration: 500, easing: 'cubic-bezier(.2,.75,.25,1)' },
      );
    }
  }, [pathname]);

  // warm up three.js and the wood textures once the first page is idle
  useEffect(() => {
    const id = setTimeout(() => void loadBurr(), 2500);
    return () => clearTimeout(id);
  }, [loadBurr]);

  useEffect(
    () => () => {
      burr.current?.dispose();
      burr.current = null;
    },
    [],
  );

  return (
    <>
      <div ref={shell} className="pt-shell">
        {children}
      </div>
      <div ref={overlay} className="pt-overlay" data-active="false" aria-hidden="true">
        <div ref={panel} className="pt-panel">
          <div className="pt-band pt-band-top" />
          <div className="pt-center">
            <canvas ref={canvas} className="pt-burr" />
            <span className="pt-word" />
            <span className="pt-dest">{dest}</span>
          </div>
          <div className="pt-band pt-band-bottom" />
        </div>
      </div>
    </>
  );
}
