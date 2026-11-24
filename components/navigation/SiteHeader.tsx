'use client';

import { useLayoutEffect, useRef } from 'react';
import PinnedHeader from './PinnedHeader';
import ThemeToggle from './ThemeToggle';

type Link = { href: string; label: string };

/** The column gap between the three groups (app/globals.css, .site-header). */
const GROUP_GAP = 32;

/** Spacing presets, tried from the design's own (roomy) to tight before the text itself shrinks. */
const SPACINGS = [
  { ls: 0.16, gap: 26 },
  { ls: 0.1, gap: 20 },
  { ls: 0.06, gap: 16 },
];

/**
 * Keeps the links on one row at any width, zoom or language, so the bar never changes shape.
 * Tries, in order, and uses the first that fits:
 *   1. exactly in the middle of the bar, text at least 10.4px (13px x 0.8), spacing tightened first;
 *   2. in the middle of the room between the two side groups, same minimum;
 *   3. the same, text down to 9px;
 * and only then stacks the links on a row of their own (phones, small tablets, very high zoom).
 * Sets data-layout ("row" | "row-between" | "stack") and --nav-k / --nav-ls / --nav-gap on the header.
 */
function useFitLinks(nav: React.RefObject<HTMLElement | null>, start: React.RefObject<HTMLElement | null>, end: React.RefObject<HTMLElement | null>, links: Link[]) {
  // re-fit when the labels change (language), not on every render of the page
  const labels = links.map((l) => l.label).join('|');
  useLayoutEffect(() => {
    const n = nav.current;
    const header = n?.parentElement;
    if (!n || !header || !start.current || !end.current) return;
    const set = (layout: string, k: number, sp: (typeof SPACINGS)[number]) => {
      header.dataset.layout = layout;
      header.style.setProperty('--nav-k', k.toFixed(4));
      header.style.setProperty('--nav-ls', sp.ls + 'em');
      header.style.setProperty('--nav-gap', sp.gap + 'px');
    };
    const fit = () => {
      const s = start.current;
      const e = end.current;
      if (!s || !e) return;
      // measure in the one-row layout at full size
      set('row', 1, SPACINGS[0]);
      const cs = getComputedStyle(header);
      const inner = header.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const centred = inner - 2 * Math.max(s.offsetWidth, e.offsetWidth) - 2 * GROUP_GAP;
      const between = inner - s.offsetWidth - e.offsetWidth - 2 * GROUP_GAP;
      const natural = SPACINGS.map((sp) => {
        set('row', 1, sp);
        return n.scrollWidth;
      });
      const tiers: [string, number, number][] = [
        ['row', centred, 0.8],
        ['row-between', between, 0.8],
        ['row-between', between, 0.69],
      ];
      for (const [layout, room, minK] of tiers) {
        // the spacing that leaves the text biggest; on a tie (full size), the roomier one
        let best = -1;
        let bestK = 0;
        natural.forEach((w, i) => {
          const k = Math.min(1, room / w);
          if (k > bestK + 0.0001) {
            best = i;
            bestK = k;
          }
        });
        if (best >= 0 && bestK >= minK) return set(layout, bestK, SPACINGS[best]);
      }
      header.dataset.layout = 'stack';
      ['--nav-k', '--nav-ls', '--nav-gap'].forEach((v) => header.style.removeProperty(v));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(header);
    void document.fonts?.ready.then(fit); // web fonts change the text widths
    return () => ro.disconnect();
  }, [nav, start, end, labels]);
}

/**
 * The site header shared by the homepage and /coding (the puzzles page draws the same look in its own CSS):
 * logo and light/dark switch, tracked-caps links in the middle, EN/МН and a red "Log in". It is pinned, clear over the
 * page's cover until you scroll, then a solid bar (app/globals.css, [data-scroll-header]).
 */
export default function SiteHeader({
  logoHref,
  links,
  isEn,
  setEn,
  setMn,
  loginHref,
  loginLabel,
}: {
  logoHref: string;
  links: Link[];
  isEn: boolean;
  setEn: () => void;
  setMn: () => void;
  loginHref: string;
  loginLabel: string;
}) {
  const navRef = useRef<HTMLElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  useFitLinks(navRef, startRef, endRef, links);
  const on = { background: '#F3EFE6', color: '#0B1528' };
  const off = { background: 'transparent', color: '#F3EFE6' };
  const langBtn = {
    border: '0',
    cursor: 'pointer',
    padding: '0 14px',
    minHeight: '44px',
    fontFamily: "'Jost', 'Futura', sans-serif", // the EN/MN switch keeps Jost (it has the Cyrillic МН)
    fontWeight: '600',
    fontSize: '12px',
    letterSpacing: '0.12em',
  };
  return (
    // layout (three columns with the links centred on wide screens) is in app/globals.css, .site-header
    <PinnedHeader
      className="site-header"
      style={{
        position: 'relative',
        zIndex: '1',
        padding: '10px max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) 10px',
        borderBottom: '1px solid rgba(243,239,230,0.18)',
        fontFamily: "'Instrument Serif', Georgia, serif",
      }}
    >
      <div ref={startRef} className="site-header-start">
        <a
          href={logoHref}
          aria-label="MindMaze home"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <img
            src="/media/2a247f25ddc10df30a8d898e98a8509a.png"
            alt=""
            style={{ display: 'block', height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <img src="/media/e909eea4bc807598c43bcab5e40cfb0b.png" alt="" style={{ display: 'block', height: '33px', width: '40px' }} />
        </a>
        <ThemeToggle />
      </div>
      <nav
        ref={navRef}
        aria-label="Main"
        className="site-header-links"
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: '500',
          textTransform: 'uppercase',
        }}
      >
        {links.map((item) => (
          <a
            key={item.href}
            className="navlink"
            href={item.href}
            style={{ padding: '12px 0', color: '#F3EFE6', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div ref={endRef} className="site-header-end">
        <div role="group" aria-label="Language" style={{ display: 'flex', border: '1px solid rgba(243,239,230,0.6)' }}>
          <button type="button" onClick={setEn} aria-pressed={isEn} style={{ ...langBtn, ...(isEn ? on : off) }}>
            EN
          </button>
          <button type="button" onClick={setMn} aria-pressed={!isEn} style={{ ...langBtn, ...(isEn ? off : on) }}>
            МН
          </button>
        </div>
        <a
          href={loginHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: '44px',
            background: '#E2574C',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '0 22px',
          }}
        >
          {loginLabel}
        </a>
      </div>
    </PinnedHeader>
  );
}
