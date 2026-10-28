import type { CodingVals } from '../CodingPage';

export default function WhatWeTeach({ v }: { v: CodingVals }) {
  const { showSol, slidePics, solBtn, solExp, t, toggleSol } = v;
  return (
    <section
      className="bp"
      id="learn"
      style={{
        position: 'relative',
        background: '#FFFFFF',
        padding:
          'clamp(28px, 3vw, 44px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) 0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
      }}
    >
      <div aria-hidden="true" className="gl" />
      <div className="learn-a">
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
              {t.learnTitle}
            </h2>
          </div>
          <div className="slead">
            <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.55', color: '#55524C' }}>
              {t.learnLead}
            </p>
          </div>
        </div>
        <div
          className="learn-row"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '36px 64px', alignItems: 'center' }}
        >
          <div style={{ flex: '1 1 360px', minWidth: '0' }}>
            <div
              className="mlab"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8B0F0F' }}
            >
              <span className="sqb" />
              01
              <span aria-hidden="true" style={{ flex: '0 0 40px', height: '1px', background: '#8F8A80' }} />
            </div>
            <h3
              style={{
                margin: '16px 0 0',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: '400',
                fontSize: 'clamp(28px, 2.8vw, 40px)',
                lineHeight: '1.1',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#072039',
              }}
            >
              {t.puzTitle}
            </h3>
            <p style={{ margin: '18px 0 0', maxWidth: '520px', fontSize: '22px', lineHeight: '1.55' }}>
              {t.puzText}
            </p>
            <p
              style={{
                margin: '16px 0 0',
                maxWidth: '520px',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#55524C',
              }}
            >
              {t.puzNote}
            </p>
          </div>
          <figure
            className="brk out"
            style={{
              margin: '0',
              flex: '1.2 1 480px',
              minWidth: '0',
              background: '#0B1528',
              boxShadow: '0 24px 48px rgba(7,32,57,0.22)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 18px',
                borderBottom: '1px solid rgba(243,239,230,0.12)',
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#E2574C' }}
              />
              <span
                aria-hidden="true"
                style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: 'rgba(243,239,230,0.5)',
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: 'rgba(243,239,230,0.25)',
                }}
              />
              <span
                style={{
                  marginLeft: '10px',
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
                  fontSize: '13px',
                  color: '#8F96A3',
                }}
              >
                exercise-01.js
              </span>
            </div>
            <pre className="code">
              <code>
                <span className="ln">
                  <span className="c">{'// 1. Reverse the array into a NEW array'}</span>
                </span>
                <span className="ln">
                  <span className="c">{'//     WITHOUT using .reverse().'}</span>
                </span>
                <span className="ln">
                  <span className="c">{'//     Then print the new array.'}</span>
                </span>
                <span className="ln">
                  <span className="k">{'const'}</span>
                  {' letters = ['}
                  <span className="s">{'"m"'}</span>
                  {', '}
                  <span className="s">{'"i"'}</span>
                  {', '}
                  <span className="s">{'"n"'}</span>
                  {', '}
                  <span className="s">{'"d"'}</span>
                  {'];'}
                </span>
                <span className="ln">
                  <span className="c">{'// Expected: ["d", "n", "i", "m"]'}</span>
                </span>
                <span className="ln" />
                <span className="ln">
                  <span className="c">{'// your code here'}</span>
                </span>
              </code>
            </pre>
            {showSol ? (
              <div style={{ borderTop: '1px dashed rgba(243,239,230,0.22)' }}>
                <div
                  className="mlab"
                  style={{
                    padding: '16px 26px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#E2574C',
                  }}
                >
                  <span className="sqb" />
                  {t.solLabel}
                </div>
                <pre className="code" style={{ paddingTop: '10px' }}>
                  <code>
                    <span className="ln">
                      <span className="k">{'const'}</span>
                      {' reversed = [];'}
                    </span>
                    <span className="ln">
                      <span className="k">{'for'}</span>
                      {' ('}
                      <span className="k">{'let'}</span>
                      {' i = letters.length - '}
                      <span className="n">{'1'}</span>
                      {'; i >= '}
                      <span className="n">{'0'}</span>
                      {'; i--) {'}
                    </span>
                    <span className="ln">{'  reversed.push(letters[i]);'}</span>
                    <span className="ln">{'}'}</span>
                    <span className="ln">
                      {'console.log(reversed); '}
                      <span className="c">{'// ["d", "n", "i", "m"]'}</span>
                    </span>
                  </code>
                </pre>
              </div>
            ) : null}
            <figcaption
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '16px 18px 18px 26px',
                borderTop: '1px solid rgba(243,239,230,0.12)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: '#B9BFCC',
                }}
              >
                {t.codeCap}
              </span>
              <button
                type="button"
                className="sol-btn"
                onClick={toggleSol}
                aria-expanded={solExp}
                style={{
                  cursor: 'pointer',
                  minHeight: '44px',
                  padding: '0 18px',
                  border: '1px solid #F3EFE6',
                  borderRadius: '4px',
                  background: 'transparent',
                  color: '#F3EFE6',
                  fontFamily: 'var(--mono)',
                  fontWeight: '500',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {solBtn}
              </button>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="lslide" role="region" aria-label={t.slideLabel}>
        <div className="lslide-track">
          {slidePics?.map((ph, i) => (
            <figure key={i} className="lslide-fig" aria-hidden={ph.hid}>
              <img src={ph.img} alt={ph.alt} loading="eager" />
            </figure>
          ))}
        </div>
      </div>
      <div className="learn-b">
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap-reverse',
            gap: '36px 64px',
            alignItems: 'center',
          }}
        >
          <div
            className="brk out"
            style={{
              flex: '1.2 1 480px',
              minWidth: '0',
              background: '#FFFFFF',
              border: '1px solid var(--ln)',
              color: '#072039',
              padding: 'clamp(28px, 3.4vw, 52px)',
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              gap: '12px 36px',
            }}
          >
            <i
              className="gm"
              aria-hidden="true"
              style={{ left: '0', top: '0', transform: 'none', margin: '12px' }}
            />
            <i
              className="gm"
              aria-hidden="true"
              style={{ right: '0', top: '0', left: 'auto', transform: 'none', margin: '12px' }}
            />
            <span className="icell" aria-hidden="true" style={{ top: 'auto', bottom: '-1px' }} />
            <div
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 'clamp(120px, 14vw, 200px)',
                lineHeight: '0.82',
                color: '#E2574C',
              }}
            >
              3
            </div>
            <div style={{ flex: '1 1 220px', minWidth: '0', paddingBottom: '6px' }}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 'clamp(24px, 2.4vw, 34px)',
                  lineHeight: '1.15',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                {t.statA}
              </div>
              <div
                style={{
                  marginTop: '10px',
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '21px',
                  color: '#55524C',
                }}
              >
                {t.statB}
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 360px', minWidth: '0' }}>
            <div
              className="mlab"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8B0F0F' }}
            >
              <span className="sqb" />
              02
              <span aria-hidden="true" style={{ flex: '0 0 40px', height: '1px', background: '#8F8A80' }} />
            </div>
            <h3
              style={{
                margin: '16px 0 0',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: '400',
                fontSize: 'clamp(28px, 2.8vw, 40px)',
                lineHeight: '1.1',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#072039',
              }}
            >
              {t.pbTitle}
            </h3>
            <p style={{ margin: '18px 0 0', maxWidth: '520px', fontSize: '22px', lineHeight: '1.55' }}>
              {t.pbText}
            </p>
            <p
              style={{
                margin: '16px 0 0',
                maxWidth: '520px',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#55524C',
              }}
            >
              {t.pbText2}
            </p>
            <a
              className="bev"
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '24px',
                minHeight: '46px',
                padding: '0 20px',
                background: '#072039',
                fontFamily: 'var(--mono)',
                fontWeight: '500',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F3EFE6',
                textDecoration: 'none',
              }}
            >
              {t.seeProjects}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
