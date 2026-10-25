import type { HomeVals } from '../HomePage';

export default function Involved({ v }: { v: HomeVals }) {
  const { involve, t } = v;
  return (
    <section
      id="involved"
      style={{
        position: 'relative',
        background: '#FBF8F1',
        padding: 'clamp(64px, 7vw, 112px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '24px 64px',
        }}
      >
        <div style={{ minWidth: '0' }}>
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
              05
            </span>
          </div>
          <div
            style={{ marginTop: '28px', fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '26px' }}
          >
            {t.involvedEyebrow}
          </div>
          <h2
            style={{
              margin: '10px 0 0',
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: '400',
              fontSize: 'clamp(34px, 4vw, 56px)',
              lineHeight: '1.05',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: '#072039',
            }}
          >
            {t.involvedA} {t.involvedB}
          </h2>
        </div>
        <p style={{ margin: '0', flex: '0 1 440px', fontSize: '19px', lineHeight: '1.65', color: '#55524C' }}>
          {t.involvedLead}
        </p>
      </div>
      <div
        style={{
          marginTop: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '24px',
        }}
      >
        {involve?.map((g, i) => (
          <article
            key={i}
            style={{
              background: '#F3EFE6',
              padding: '0 32px 34px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              aria-hidden="true"
              style={{ display: 'block', width: '96px', height: '18px', background: g.sq }}
            />
            <h3
              style={{
                margin: '32px 0 0',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: '400',
                fontSize: '26px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {g.title}
            </h3>
            <p style={{ margin: '14px 0 0', fontSize: '19px', lineHeight: '1.6', color: '#55524C' }}>
              {g.text}
            </p>
            <ul
              style={{
                margin: '18px 0 0',
                paddingLeft: '18px',
                fontSize: '18px',
                lineHeight: '1.9',
                color: '#55524C',
              }}
            >
              {g.points?.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
            <div style={{ flex: '1', minHeight: '24px' }} />
            <a
              href="#contact"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '48px',
                background: '#1A1A1A',
                color: '#FBF8F1',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0 22px',
              }}
            >
              {g.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
