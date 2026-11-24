import type { HomeVals } from '../HomePage';

export default function Impact({ v }: { v: HomeVals }) {
  const {
    cardEnter,
    cardLeave,
    cardPos,
    cardProjects,
    cardRegion,
    mqNextA,
    mqPauseA,
    mqPlayA,
    programs,
    provinces,
    setTrackA,
    showCard,
    stats,
    success,
    t,
  } = v;
  return (
    <section
      id="impact"
      style={{
        position: 'relative',
        background: 'var(--hm-bg)',
        padding: 'clamp(48px, 5vw, 80px) 0',
        overflow: 'visible', // lets the photo strip reach the screen edges; the page wrapper clips sideways
      }}
    >
      <div
        style={{
          padding: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px 48px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: '700',
                fontSize: '24px',
                paddingBottom: '4px',
              }}
            >
              {t.part}
            </span>
            <span
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: '700',
                fontSize: 'clamp(30px, 3.4vw, 46px)',
                lineHeight: '1',
                letterSpacing: '0.02em',
                color: 'var(--hm-red)',
              }}
            >
              04
            </span>
            <h2
              style={{
                margin: '0 0 0 clamp(14px, 2vw, 28px)',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: '400',
                fontSize: 'clamp(34px, 4vw, 56px)',
                lineHeight: '1.05',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                color: 'var(--hm-navy)',
              }}
            >
              {t.impactTitle}
            </h2>
          </div>
        </div>
      </div>
      {/* full screen width: pulled out past the page inset on both sides */}
      <div
        style={{
          marginTop: '28px',
          marginLeft: 'calc(-1 * var(--inset))',
          marginRight: 'calc(-1 * var(--inset))',
          position: 'relative',
        }}
      >
        <div
          className="marquee"
          aria-label="Photos from MindMaze puzzle sessions"
          onMouseEnter={mqPauseA}
          onMouseLeave={mqPlayA}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div ref={setTrackA} style={{ display: 'flex', width: 'max-content', willChange: 'transform' }}>
            {success?.map((item, i) => (
              <figure
                key={i}
                className="card"
                style={{ margin: '0', paddingRight: '16px', flex: '0 0 auto' }}
              >
                <div style={{ overflow: 'hidden', background: 'var(--hm-card)' }}>
                  <img
                    className="zoom"
                    src={item.img}
                    alt={item.alt}
                    loading="eager"
                    style={{ display: 'block', height: '270px', width: item.w, objectFit: 'cover' }}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            inset: '0',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            background:
              'linear-gradient(to top, rgba(11,21,40,0.9) 0%, rgba(11,21,40,0.55) 42%, rgba(11,21,40,0) 78%)',
          }}
        >
          <div
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '0 calc(var(--inset) + max(clamp(24px, 5vw, 64px), calc((100% - 2 * var(--inset) - 1360px) / 2))) 24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '14px clamp(56px, 16vw, 280px)',
              textAlign: 'center',
            }}
          >
            {stats?.map((item, i) => (
              <div key={i}>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    width: '28px',
                    height: '6px',
                    margin: '0 auto',
                    background: item.sq,
                  }}
                />
                <div
                  style={{
                    marginTop: '12px',
                    fontWeight: '700',
                    fontSize: 'clamp(38px, 4.4vw, 60px)',
                    lineHeight: '1',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    marginTop: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#F3EFE6',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="mq-next"
          aria-label="Show the next photos"
          onClick={mqNextA}
          style={{ top: '16px', right: 'calc(var(--inset) + max(clamp(24px, 5vw, 64px), calc((100% - 2 * var(--inset) - 1360px) / 2)))' }}
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
      </div>
      <div
        id="where"
        style={{
          marginTop: 'clamp(28px, 3vw, 44px)',
          padding: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
        }}
      >
        <div
          id="programs"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 72px', alignItems: 'flex-start' }}
        >
          <div style={{ flex: '1 1 320px', minWidth: '0' }}>
            <span
              aria-hidden="true"
              style={{ display: 'block', width: '92px', height: '18px', backgroundColor: 'var(--hm-navy)' }}
            />
            <div
              style={{
                marginTop: '24px',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '26px',
              }}
            >
              {t.programsEyebrow}
            </div>
            <p
              style={{
                margin: '12px 0 0',
                fontSize: '19px',
                lineHeight: '1.6',
                color: 'var(--hm-muted)',
                maxWidth: '360px',
              }}
            >
              {t.programsLead}
            </p>
          </div>
          <div style={{ flex: '2 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
            {programs?.map((item, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: '28px', padding: '26px 0', borderBottom: '1px solid var(--hm-rule)' }}
              >
                <div
                  style={{
                    fontWeight: '700',
                    fontSize: '44px',
                    lineHeight: '0.9',
                    minWidth: '64px',
                    color: 'var(--hm-red)',
                  }}
                >
                  {item.n}
                </div>
                <div style={{ flex: '1', minWidth: '0' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 14px' }}>
                    <h3
                      style={{
                        margin: '0',
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: '22px',
                        fontWeight: '400',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ margin: '8px 0 0', fontSize: '18px', lineHeight: '1.6', color: 'var(--hm-muted)' }}>
                    {item.text}
                  </p>
                  {item.hasSchools ? (
                    <ul
                      style={{
                        margin: '16px 0 0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      {item.schools?.map((s, j) => (
                        <li
                          key={j}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid var(--hm-ink)',
                            padding: '8px 12px',
                            fontSize: '15px',
                            fontWeight: '500',
                          }}
                        >
                          <span style={{ width: '8px', height: '8px', background: 'var(--hm-navy)' }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: '40px',
            paddingTop: '36px',
            borderTop: '1px solid var(--hm-ink)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px 56px',
            position: 'relative',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              writingMode: 'vertical-rl',
              fontWeight: '600',
              fontSize: '18px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              alignSelf: 'flex-end',
            }}
          >
            Mongolia
          </div>
          <div style={{ flex: '1 1 600px', minWidth: '0' }}>
            <figure style={{ margin: '0', position: 'relative', width: '100%' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1300 / 614' }}>
                <img
                  className="map-img"
                  src="/media/755601d532d87e5f8e850f759c68f6c6.png"
                  alt="Map of Mongolia's aimags, with Töv aimag and Ulaanbaatar marked"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
                <div aria-hidden="true" style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
                  {provinces?.map((pv, i) => (
                    <span
                      key={i}
                      style={{
                        position: 'absolute',
                        left: `${pv.lxPct}%`,
                        top: `${pv.lyPct}%`,
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontWeight: '400',
                        fontSize: 'clamp(8px, 1.04vw, 16px)',
                        lineHeight: '1',
                        color: 'var(--hm-map)',
                      }}
                    >
                      {pv.label}
                    </span>
                  ))}
                </div>
                <svg
                  viewBox="0 0 1300 614"
                  preserveAspectRatio="none"
                  role="group"
                  aria-label="Map of Mongolia — hover a province"
                  style={{
                    position: 'absolute',
                    inset: '0',
                    width: '100%',
                    height: '100%',
                    overflow: 'visible',
                  }}
                >
                  {provinces?.map((pv, i) => (
                    <path
                      key={i}
                      d={pv.d}
                      fill={pv.fill}
                      stroke={pv.stroke}
                      strokeWidth={pv.sw}
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      onMouseEnter={pv.enter}
                      onMouseLeave={pv.leave}
                      onClick={pv.click}
                      style={{ cursor: pv.cursor, transition: 'fill .15s ease' }}
                    >
                      <title>{pv.label}</title>
                    </path>
                  ))}
                </svg>
                {showCard ? (
                  <aside
                    aria-live="polite"
                    onMouseEnter={cardEnter}
                    onMouseLeave={cardLeave}
                    style={{
                      position: 'absolute',
                      ...cardPos,
                      width: 'min(300px, 70%)',
                      background: '#F4F4F4',
                      color: '#1A1A1A',
                      boxShadow: '0 22px 44px rgba(40,36,28,0.3)',
                      zIndex: '3',
                    }}
                  >
                    <div style={{ padding: '16px 20px 14px', background: '#072039', color: '#FFFFFF' }}>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: '500',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t.cardEyebrow}
                      </div>
                      <div
                        style={{
                          marginTop: '4px',
                          fontWeight: '600',
                          fontSize: '28px',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {cardRegion}
                      </div>
                    </div>
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {cardProjects?.map((pj, i) => (
                        <div key={i}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                              style={{
                                flex: '0 0 auto',
                                width: '44px',
                                height: '44px',
                                background: 'var(--hm-ink)',
                                color: 'var(--hm-bg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d={pj.icon} />
                              </svg>
                            </div>
                            <div style={{ minWidth: '0' }}>
                              <div
                                style={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  alignItems: 'center',
                                  gap: '8px',
                                }}
                              >
                                <span style={{ fontSize: '19px', fontWeight: '600' }}>{pj.title}</span>
                                <span
                                  style={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    padding: '3px 7px',
                                    background: '#8B0F0F',
                                    color: '#FFFFFF',
                                  }}
                                >
                                  {pj.tag}
                                </span>
                              </div>
                              <div
                                style={{
                                  marginTop: '3px',
                                  fontSize: '15px',
                                  lineHeight: '1.45',
                                  color: 'var(--hm-muted)',
                                }}
                              >
                                {pj.desc}
                              </div>
                            </div>
                          </div>
                          <a
                            href={pj.url}
                            target="_blank"
                            rel="noopener"
                            style={{
                              marginTop: '12px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              minHeight: '44px',
                              background: 'var(--hm-ink)',
                              color: 'var(--hm-bg)',
                              textDecoration: 'none',
                              fontWeight: '600',
                              fontSize: '14px',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              padding: '0 16px',
                            }}
                          >
                            {t.openProject}
                          </a>
                        </div>
                      ))}
                    </div>
                  </aside>
                ) : null}
              </div>
              <div className="map-cap">
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '24px' }}>
                  {t.cardEyebrow}
                </div>
                <p style={{ margin: '10px 0 0', fontSize: '18px', lineHeight: '1.6', color: 'var(--hm-muted)' }}>
                  {t.cardHint}
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
