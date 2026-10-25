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
        background: '#FBF8F1',
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
          <article
            key={i}
            className="card"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              background: '#F3EFE6',
              cursor: 'pointer',
            }}
          >
            {/* the whole card is a link to the program's page */}
            <Link
              href={pc.href}
              aria-label={pc.title}
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
            />
            <div style={{ height: 'clamp(220px, 19vw, 400px)', overflow: 'hidden' }}>
              <img
                className="zoom"
                src={pc.img}
                alt={pc.alt}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 68.0372%',
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                flex: '1',
                minWidth: '0',
                padding: '22px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontWeight: '500', fontSize: '21px', color: '#8F8A80' }}>
                  <br />
                </span>
                <span
                  style={{
                    display: 'block',
                    width: '34px',
                    height: '1px',
                    background: '#8F8A80',
                    transform: 'rotate(-38deg)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>
              <span
                aria-hidden="true"
                style={{ display: 'block', width: '72px', height: '14px', background: pc.sq }}
              />
              <div
                style={{
                  marginTop: '14px',
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '24px',
                }}
              >
                {pc.label}
              </div>
              <h3
                style={{
                  margin: '8px 0 0',
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: '400',
                  fontSize: 'clamp(22px, 2vw, 30px)',
                  lineHeight: '1.15',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: '#072039',
                }}
              >
                {pc.title}
              </h3>
              <p
                style={{
                  margin: '12px 0 0',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#55524C',
                  maxWidth: '460px',
                }}
              >
                {pc.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
