import type { CodingVals } from '../CodingPage';

export default function WhyCoding({ v }: { v: CodingVals }) {
  const { pillars, t } = v;
  return (
    <section
      className="bp"
      id="why"
      style={{
        position: 'relative',
        background: '#FBF8F1',
        padding:
          'clamp(40px, 4.5vw, 64px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) clamp(64px, 7vw, 112px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
      }}
    >
      <div aria-hidden="true" className="gl" />
      <div className="shead">
        <div className="tbox">
          <span className="icell" aria-hidden="true" />
          <h2
            className="ph2"
            style={{
              margin: '0',
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: '400',
              fontSize: 'clamp(34px, 4vw, 56px)',
              lineHeight: '1.05',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: '#072039',
            }}
          >
            {t.whyTitle}
          </h2>
        </div>
        <div className="slead">
          <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.55', color: '#55524C' }}>{t.whyLead}</p>
        </div>
      </div>
      <p
        style={{
          margin: 'clamp(36px, 4vw, 56px) 0 0',
          maxWidth: '1000px',
          fontSize: 'clamp(23px, 2.3vw, 30px)',
          lineHeight: '1.5',
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
      <div className="cells" style={{ marginTop: 'clamp(40px, 4vw, 60px)' }}>
        {pillars?.map((p, i) => (
          <article
            key={i}
            className="cell brk"
            style={{
              position: 'relative',
              background: '#F3EFE6',
              padding: '30px 30px 34px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                aria-hidden="true"
                className="sqb"
                style={{ width: '10px', height: '10px', background: p.sq }}
              />
              <span className="mlab" style={{ color: '#8F8A80' }}>
                {p.n}
              </span>
            </div>
            <h3
              style={{
                margin: '22px 0 0',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: '400',
                fontSize: 'clamp(22px, 2vw, 28px)',
                lineHeight: '1.15',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#072039',
              }}
            >
              {p.title}
            </h3>
            <p style={{ margin: '14px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#55524C' }}>
              {p.text}
            </p>
          </article>
        ))}
      </div>
      <p
        style={{
          margin: 'clamp(40px, 4vw, 56px) auto 0',
          maxWidth: '760px',
          textAlign: 'center',
          fontStyle: 'italic',
          fontSize: 'clamp(22px, 2vw, 26px)',
          lineHeight: '1.5',
          color: '#072039',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: '14px',
            height: '14px',
            margin: '0 auto 18px',
            background: '#8B0F0F',
          }}
        />
        {t.whyClose}
      </p>
    </section>
  );
}
