import PinnedHeader from './PinnedHeader';
import ThemeToggle from './ThemeToggle';

type Link = { href: string; label: string };

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
  const on = { background: '#F3EFE6', color: '#0B1528' };
  const off = { background: 'transparent', color: '#F3EFE6' };
  const langBtn = {
    border: '0',
    cursor: 'pointer',
    padding: '0 14px',
    minHeight: '44px',
    fontFamily: 'inherit',
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
        padding: '26px max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) 18px',
        borderBottom: '1px solid rgba(243,239,230,0.18)',
        fontFamily: "'Jost', 'Futura', sans-serif",
      }}
    >
      <div className="site-header-start">
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
        aria-label="Main"
        className="site-header-links"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px 26px',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}
      >
        {links.map((item) => (
          <a
            key={item.href}
            className="navlink"
            href={item.href}
            style={{ padding: '12px 0', color: '#F3EFE6', textDecoration: 'none' }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="site-header-end">
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
