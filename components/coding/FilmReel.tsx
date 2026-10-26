'use client';

import { useEffect, useRef, useState } from 'react';
import { holdReveal } from '@/lib/pageReady';
import type { FilmReel as Reel } from './reelScene';

type Project = { title: string; type: string; img: string };
type Props = { projects: Project[]; viewLabel: string; alt: string; padX: string };

/**
 * The film reel of student projects (three.js, ./reelScene.ts) with its caption, arrows and dots.
 * As on the reference, the caption sits on a turning drum: the old title drops away and the new
 * one rolls over the top into place; the ring around the current dot slides with the film.
 */
export default function FilmReel({ projects, viewLabel, alt, padX }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ring = useRef<HTMLSpanElement>(null);
  const reel = useRef<Reel | null>(null);
  const [index, setIndex] = useState(0);
  const [titles, setTitles] = useState<{ key: number; i: number; out: boolean }[]>([{ key: 0, i: 0, out: false }]);
  const keyRef = useRef(0);
  const images = projects.map((p) => p.img).join('|');
  const count = projects.length;

  useEffect(() => {
    let cancelled = false;
    const ready = holdReveal(); // keep the page-transition cover up until the reel is drawn
    const n = images.split('|').length;
    // the ring follows the film; past the last project it fades out and comes back in at the first
    const placeRing = (pos: number) => {
      const el = ring.current;
      if (!el) return;
      let x = ((pos % n) + n) % n;
      let o = 1;
      if (x > n - 1) {
        const t = x - (n - 1);
        if (t < 0.5) o = 1 - 2 * t;
        else {
          x -= n;
          o = 2 * t - 1;
        }
      }
      el.style.setProperty('--p', x.toFixed(4));
      el.style.opacity = o.toFixed(3);
    };
    import('./reelScene')
      .then(({ FilmReel }) => {
        if (cancelled || !canvas.current) return ready();
        reel.current = new FilmReel(canvas.current, {
          images: images.split('|'),
          onIndex: setIndex,
          onScroll: placeRing,
        });
        placeRing(0);
        requestAnimationFrame(() => ready());
      })
      .catch((err) => {
        console.error('film reel', err);
        ready();
      });
    return () => {
      cancelled = true;
      ready();
      reel.current?.dispose();
      reel.current = null;
    };
  }, [images]);

  // swap captions: the current one drops away while the new one rolls in
  useEffect(() => {
    setTitles((prev) => {
      const live = prev.find((x) => !x.out);
      if (live && live.i === index) return prev;
      keyRef.current += 1;
      return [...prev.filter((x) => !x.out).map((x) => ({ ...x, out: true })), { key: keyRef.current, i: index, out: false }];
    });
    const id = setTimeout(() => setTitles((prev) => prev.filter((x) => !x.out)), 320);
    return () => clearTimeout(id);
  }, [index]);

  const go = (fn: (r: Reel) => void) => () => reel.current && fn(reel.current);

  return (
    <div
      className="reel-stage"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') reel.current?.next();
        if (e.key === 'ArrowLeft') reel.current?.prev();
      }}
    >
      <div className="reel-cap" style={{ padding: `0 ${padX}` }}>
        <div className="reel-titles" aria-live="polite">
          {titles.map((tt) => {
            const p = projects[tt.i] ?? projects[0];
            return (
              <div key={tt.key} className={'reel-title ' + (tt.out ? 'is-out' : 'is-in')} aria-hidden={tt.out ? 'true' : undefined}>
                <div className="reel-name">{p.title}</div>
                <div className="reel-meta">
                  <span>{p.type}</span>
                  <span aria-hidden="true">•</span>
                  <a href="#projects" tabIndex={tt.out ? -1 : undefined}>
                    {viewLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <canvas ref={canvas} className="reel-canvas" role="img" aria-label={alt} />

      <div className="reel-nav" style={{ padding: `0 ${padX}` }}>
        <button type="button" className="pbtn" aria-label="Previous project" onClick={go((r) => r.prev())}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M20 12H5M11 5.5 4.5 12l6.5 6.5" />
          </svg>
        </button>
        <div className="pdots" role="tablist" aria-label="Projects" style={{ ['--n' as string]: count }}>
          {projects.map((p, i) => (
            <button
              key={p.img}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={p.title}
              className="pd"
              onClick={go((r) => r.goTo(i))}
            />
          ))}
          <span ref={ring} className="pring" aria-hidden="true" />
        </div>
        <button type="button" className="pbtn" aria-label="Next project" onClick={go((r) => r.next())}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M4 12h15M13 5.5l6.5 6.5-6.5 6.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
