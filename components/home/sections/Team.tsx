import type { HomeVals } from '../HomePage';

export default function Team({ v }: { v: HomeVals }) {
  const { membersLoop, mqNextD, setTrackD, t } = v;
  return (
    <section
      id="team"
      style={{
        position: 'relative',
        padding: 'clamp(64px, 7vw, 112px) 0',
        overflow: 'hidden',
        backgroundColor: '#fbf8f1',
      }}
    >
      <div
        style={{
          padding: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px 48px',
          alignItems: 'flex-end',
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
              04
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
              }}
            >
              {t.teamTitle}
            </h2>
          </div>
        </div>
        <p style={{ margin: '0', fontSize: '18px', color: '#55524C' }}>{t.teamLead}</p>
      </div>
      <div style={{ marginTop: '56px' }}>
        <h3
          style={{
            margin: '0',
            padding: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '28px',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '14px',
          }}
        >
          <span aria-hidden="true" style={{ width: '14px', height: '14px', background: '#8B0F0F' }} />
          {t.membersLabel}
        </h3>
        <div
          className="marquee"
          aria-label="Team members"
          style={{ margin: '6px 0 -18px', padding: '18px 0', position: 'relative', overflow: 'hidden' }}
        >
          <button
            type="button"
            className="mq-next"
            aria-label="Show the next team members"
            onClick={mqNextD}
            style={{ top: '34px', right: 'max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))' }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <div ref={setTrackD} style={{ display: 'flex', width: 'max-content', willChange: 'transform' }}>
            {membersLoop?.map((m, i) => (
              <figure
                key={i}
                className="card tm"
                aria-hidden={m.hid}
                style={{ margin: '0', paddingRight: '24px', flex: '0 0 auto', width: '240px' }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: m.bg,
                  }}
                >
                  {m.hasPhoto ? (
                    <img
                      className="zoom"
                      src={m.img}
                      alt={m.name}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%',
                      }}
                    />
                  ) : null}
                  {m.noPhoto ? (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{ fontWeight: '700', fontSize: '52px', letterSpacing: '0', color: '#FBF8F1' }}
                      >
                        {m.ini}
                      </span>
                    </div>
                  ) : null}
                </div>
                {m.cap ? (
                  <figcaption style={{ paddingTop: '14px', textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {m.name}
                    </div>
                    <div
                      style={{
                        marginTop: '4px',
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: '18px',
                        lineHeight: '1.4',
                        color: '#55524C',
                      }}
                    >
                      <br />
                    </div>
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
