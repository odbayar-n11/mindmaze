import type { HomeVals } from '../HomePage';

export default function About({ v }: { v: HomeVals }) {
  const { setVTrack, t, vPause, vPhotos, vPlay } = v;
  return (
    <section
      id="why"
      style={{
        position: 'relative',
        background: '#FBF8F1',
        padding: 'clamp(64px, 7vw, 112px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 72px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 480px', minWidth: '0' }}>
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
                color: '#8B0F0F',
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
              color: '#072039',
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
