import Link from 'next/link';
import type { HomeVals } from '../HomePage';

export default function Approach({ v }: { v: HomeVals }) {
  const { progCards, t } = v;
  return (
    <section
      id="our-programs"
      style={{
        position: 'relative',
        boxSizing: 'border-box',
        aspectRatio: '16 / 9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#FFFFFF',
        padding: 'clamp(32px, 3vw, 64px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px 64px',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div>
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
              02
            </span>
            <h2
              style={{
                margin: '0 0 0 clamp(14px, 2vw, 28px)',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: '400',
                fontSize: 'clamp(34px, 4vw, 56px)',
                lineHeight: '1.05',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                color: '#072039',
                width: '401px',
                height: '54px',
              }}
            >
              {t.progA} {t.progB}
            </h2>
          </div>
        </div>
        <p
          style={{
            margin: '4px 0 0',
            flex: '1 1 520px',
            maxWidth: '700px',
            fontSize: '21px',
            lineHeight: '1.65',
            color: '#55524C',
          }}
        >
          {t.progLead}
        </p>
      </div>
      <div
        style={{
          marginTop: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '28px',
        }}
      >
        {progCards?.map((pc, i) => (
          <article key={i} className="card prog-card">
            <img className="zoom prog-card-img" src={pc.img} alt={pc.alt} />
            <div aria-hidden="true" className="prog-card-shade" />
            <div className="prog-card-body">
              <h3 className="prog-card-title">{pc.title}</h3>
              <p className="prog-card-text">{pc.text}</p>
              {/* the link covers the whole card, so the card is one click target */}
              <Link href={pc.href} className="prog-card-link">
                {t.readMore}
                <span aria-hidden="true" className="prog-card-arrow">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
