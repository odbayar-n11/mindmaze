import type { HomeVals } from '../HomePage';

export default function About({ v }: { v: HomeVals }) {
  const { setVTrack, t, vPause, vPhotos, vPlay } = v;
  return (
    <section
      id="why"
      className="why"
      style={{
        position: 'relative',
        background: 'var(--hm-bg)',
        // the card brings its own inner padding, so the section only centres it on very wide screens
        padding: 'clamp(48px, 6vw, 96px) max(0px, calc((100% - 1360px) / 2))',
      }}
    >
      {/* Part 01 sits in a card (home.css, .why-card) */}
      <div className="why-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 48px', alignItems: 'center' }}>
        <div className="why-mn">
          <span lang="mn-Mong" aria-hidden="true" className="why-mn-a">
            ᠮᠣᠩᠭᠣᠯ ᠥᠪ ᠰᠣᠶᠣᠯ
          </span>
          <span aria-hidden="true" className="why-mn-line" />
          <span lang="mn-Mong" aria-label="Ухаалаг ирээдүй (Smart future)" className="why-mn-b">
            ᠤᠬᠠᠭᠠᠯᠠᠭ ᠢᠷᠡᠭᠡᠳᠦᠢ
          </span>
        </div>
        <div style={{ flex: '1 1 380px', minWidth: '0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Jost', 'Futura', sans-serif",
                fontWeight: '700',
                fontSize: '24px',
                paddingBottom: '4px',
              }}
            >
              {t.part}
            </span>
            <span
              style={{
                fontFamily: "'Jost', 'Futura', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(30px, 3.4vw, 46px)',
                lineHeight: '1',
                letterSpacing: '0.02em',
                color: 'var(--hm-red)',
              }}
            >
              01
            </span>
          </div>
          <h2
            style={{
              margin: '28px 0 0',
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: '400',
              fontSize: 'clamp(34px, 4vw, 56px)',
              lineHeight: '1.05',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: 'var(--hm-navy)',
            }}
          >
            {t.whyEyebrow}
          </h2>
          <p
            style={{
              margin: '16px 0 0',
              fontSize: '26px',
              lineHeight: '1.5',
              fontWeight: '400',
              maxWidth: '640px',
            }}
          >
            {t.whyA}
            <mark
              style={{
                background: 'linear-gradient(transparent 62%, rgba(139,15,15,0.18) 62%)',
                color: 'inherit',
                padding: '0 2px',
              }}
            >
              {t.whyHi}
            </mark>
            {t.whyB}
          </p>
        </div>
        <div
          className="vloop"
          aria-label="Photos from MindMaze classes"
          onMouseEnter={vPause}
          onMouseLeave={vPlay}
          style={{
            flex: '0 1 400px',
            width: '100%',
            minWidth: '0',
            height: '420px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div ref={setVTrack} style={{ display: 'flex', flexDirection: 'column', willChange: 'transform' }}>
            {vPhotos?.map((ph, i) => (
              <div key={i} style={{ paddingBottom: '14px' }}>
                <img
                  src={ph.img}
                  alt={ph.alt}
                  loading="eager"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
