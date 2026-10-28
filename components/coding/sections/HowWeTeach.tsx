import type { CodingVals } from '../CodingPage';

export default function HowWeTeach({ v }: { v: CodingVals }) {
  const { ipFacts, olFacts, t } = v;
  return (
    <section
      className="bp"
      id="how"
      style={{ position: 'relative', background: '#FFFFFF', padding: 'clamp(28px, 3vw, 44px) 0 0' }}
    >
      <div aria-hidden="true" className="gl" />
      <div className="shead" style={{ margin: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))' }}>
        <div className="tbox">
          <span className="icell" aria-hidden="true" />
          <h2
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
            {t.howTitle}
          </h2>
        </div>
        <div className="slead">
          <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.55', color: '#55524C' }}>{t.howLead}</p>
        </div>
      </div>
      <div className="split" style={{ marginTop: 'clamp(24px, 2.6vw, 36px)' }}>
        <article className="sp sp-l">
          <div className="sp-clip">
            <img className="sp-bg" src="/media/18dd08be500119697ebb9158121c8393.jpg" alt={t.ipAlt} />
            <div aria-hidden="true" className="sp-shade" />
            <div className="sp-body sp-body-l">
              <div className="sp-label">
                <span aria-hidden="true" className="sp-bar" style={{ background: '#E2574C' }} />
                {t.ipLabel}
              </div>
              <h3 className="sp-title">{t.ipTitle}</h3>
              <p className="sp-text">{t.ipText}</p>
              <dl className="sp-facts">
                {ipFacts?.map((f, i) => (
                  <div key={i}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <span aria-hidden="true" className="sp-handle">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </article>
        <article className="sp sp-r">
          <div className="sp-clip" style={{ background: '#8B0F0F' }}>
            <img className="sp-bg sp-bg-r" src="/media/e1b5d33424da198ad87d0349812712b1.jpg" alt={t.olAlt} />
            <div aria-hidden="true" className="sp-shade-r" />
            <div className="sp-body sp-body-r">
              <div>
                <div className="sp-label">
                  <span aria-hidden="true" className="sp-bar" style={{ background: '#F3EFE6' }} />
                  {t.olLabel}
                </div>
                <h3 className="sp-title">{t.olTitle}</h3>
                <p className="sp-text">{t.olText}</p>
                <dl className="sp-facts">
                  {olFacts?.map((f, i) => (
                    <div key={i}>
                      <dt>{f.k}</dt>
                      <dd>{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
