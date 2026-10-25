import Link from 'next/link';
import type { CodingVals } from '../CodingPage';

export default function Hero({ v }: { v: CodingVals }) {
  const { enBg, enFg, heroStats, isEn, isMn, mnBg, mnFg, nav, setEn, setMn, t } = v;
  return (
    <section id="top" style={{ position: 'relative', background: '#0B1528', color: '#F3EFE6' }}>
      <header
        className="chead"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '2',
          padding: '26px max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) 18px',
          borderBottom: '1px solid rgba(243,239,230,0.18)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '16px 32px',
        }}
      >
        <Link
          href="/"
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
            style={{ display: 'block', height: '31px', width: '37px' }}
          />
        </Link>
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
            <a key={i} className="navlink" href={item.href} style={{ padding: '12px 0' }}>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                background: enBg,
                color: enFg,
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
                background: mnBg,
                color: mnFg,
              }}
            >
              МН
            </button>
          </div>
          <a
            className="bev"
            href="#apply"
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
      </header>
      <h1
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
        }}
      >
        {t.pageTitle}
      </h1>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <img
            className="hero-img"
            src="/media/3c6a4baae0bcebef7966ed568cb0faaf.jpg"
            alt={t.heroAlt}
            style={{
              display: 'block',
              width: '100%',
              height: 'clamp(340px, 56vw, 900px)',
              objectFit: 'cover',
              objectPosition: '50% 45%',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '0',
              background:
                'linear-gradient(180deg, rgba(7,16,32,0.78) 0%, rgba(7,16,32,0.45) 11%, rgba(7,16,32,0) 26%, rgba(7,16,32,0) 58%, rgba(7,16,32,0.88) 100%)',
            }}
          />
          <div aria-hidden="true" className="gl ph">
            <i className="gm l" style={{ top: '124px' }} />
            <i className="gm r" style={{ top: '124px' }} />
          </div>
        </div>
        <div className="hstats">
          <div
            style={{
              position: 'relative',
              zIndex: '2',
              padding: 'clamp(20px, 3vw, 40px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
            }}
          >
            <ul className="hcells" style={{ padding: '0' }}>
              {heroStats?.map((s, i) => (
                <li key={i}>
                  <div
                    className="mlab"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'rgba(243,239,230,0.7)',
                    }}
                  >
                    <span className="sqb" style={{ background: s.c }} />
                    {s.k}
                  </div>
                  <div
                    style={{
                      marginTop: '12px',
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: 'clamp(40px, 4.6vw, 68px)',
                      lineHeight: '1',
                      color: s.c,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      marginTop: '8px',
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: '18px',
                      lineHeight: '1.35',
                      color: '#F3EFE6',
                    }}
                  >
                    {s.l}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
