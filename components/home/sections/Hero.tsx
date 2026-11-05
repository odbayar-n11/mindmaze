import PinnedHeader from '../../navigation/PinnedHeader';
import type { HomeVals } from '../HomePage';
import ThemeToggle from '../ThemeToggle';

export default function Hero({ v }: { v: HomeVals }) {
  const { enBgD, enFgD, isEn, isMn, mnBgD, mnFgD, nav, setEn, setMn, t } = v;
  return (
    // Full-width photo with the title over it; on phones the title sits on a navy band above the photo
    // (see home.css, #top). The header is pinned and stays transparent over the photo until you scroll.
    <section id="top">
      <PinnedHeader
        style={{
          position: 'relative',
          zIndex: '1',
          padding: '26px max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) 0',
          borderBottom: '1px solid rgba(243,239,230,0.18)',
          paddingBottom: '18px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '16px 32px',
        }}
      >
        <a
          href="#top"
          aria-label="MindMaze home"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <img
            src="/media/2a247f25ddc10df30a8d898e98a8509a.png"
            alt=""
            style={{ display: 'block', height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <img
            src="/media/e909eea4bc807598c43bcab5e40cfb0b.png"
            alt=""
            style={{ display: 'block', height: '33px', width: '40px' }}
          />
        </a>
        <nav
          aria-label="Main"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px 26px',
            flex: '1 1 520px',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {nav?.map((item, i) => (
            <a key={i} className="navlink" href={item.href} style={{ padding: '12px 0', color: '#F3EFE6' }}>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ThemeToggle />
          <div
            role="group"
            aria-label="Language"
            style={{ display: 'flex', border: '1px solid rgba(243,239,230,0.6)' }}
          >
            <button
              type="button"
              onClick={setEn}
              aria-pressed={isEn}
              style={{
                border: '0',
                cursor: 'pointer',
                padding: '0 14px',
                minHeight: '44px',
                fontFamily: 'inherit',
                fontWeight: '600',
                fontSize: '12px',
                letterSpacing: '0.12em',
                background: enBgD,
                color: enFgD,
              }}
            >
              EN
            </button>
            <button
              type="button"
              onClick={setMn}
              aria-pressed={isMn}
              style={{
                border: '0',
                cursor: 'pointer',
                padding: '0 14px',
                minHeight: '44px',
                fontFamily: 'inherit',
                fontWeight: '600',
                fontSize: '12px',
                letterSpacing: '0.12em',
                background: mnBgD,
                color: mnFgD,
              }}
            >
              МН
            </button>
          </div>
          <a
            href="#contact"
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
            Log In
          </a>
        </div>
      </PinnedHeader>
      <img
        className="hero-img"
        src="/media/mindmaze-cover.jpg"
        alt="Watercolor illustration of a girl holding a wooden star burr puzzle to her heart, among yellow flowers and blue waves"
      />
      <div aria-hidden="true" className="hero-fade" />
      <div aria-hidden="true" className="hero-wash" />
      <div className="hero-title">
        <h1>
          <span>MindMaze</span>
          <span>{t.heroPlace}</span>
        </h1>
        <span aria-hidden="true" className="hero-rule" />
        <p className="hero-lead">{t.heroLead}</p>
      </div>
    </section>
  );
}
