import type { CodingVals } from '../CodingPage';

export default function Apply({ v }: { v: CodingVals }) {
  const { t } = v;
  return (
    <section
      className="bp"
      id="apply"
      style={{
        position: 'relative',
        background: '#FFFFFF',
        padding: 'clamp(28px, 3vw, 44px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) clamp(36px, 4vw, 56px)',
      }}
    >
      <div aria-hidden="true" className="gl" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px' }}>
        <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', gap: '32px' }}>
          <div
            aria-hidden="true"
            className="mlab"
            style={{
              writingMode: 'vertical-rl',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px',
              letterSpacing: '0.2em',
            }}
          >
            <span className="sqb" style={{ background: '#E2574C' }} />
            MindMaze
          </div>
          <div style={{ minWidth: '0' }}>
            <div className="tbox solo">
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
                {t.applyTitle}
              </h2>
            </div>
            <p
              style={{
                margin: '18px 0 0',
                maxWidth: '440px',
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#55524C',
              }}
            >
              {t.applyLead}
            </p>
            <dl
              style={{
                margin: '36px 0 0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '22px 24px',
              }}
            >
              <div>
                <dt
                  className="mlab"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#55524C' }}
                >
                  <span className="sqb" style={{ width: '6px', height: '6px' }} />
                  {t.fStart}
                </dt>
                <dd
                  style={{ margin: '6px 0 0', fontFamily: "'Jost', 'Futura', sans-serif", fontWeight: '500' }}
                >
                  {t.fStartV}
                </dd>
              </div>
              <div>
                <dt
                  className="mlab"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#55524C' }}
                >
                  <span className="sqb" style={{ width: '6px', height: '6px' }} />
                  {t.fLength}
                </dt>
                <dd
                  style={{ margin: '6px 0 0', fontFamily: "'Jost', 'Futura', sans-serif", fontWeight: '500' }}
                >
                  {t.fLengthV}
                </dd>
              </div>
              <div>
                <dt
                  className="mlab"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#55524C' }}
                >
                  <span className="sqb" style={{ width: '6px', height: '6px' }} />
                  {t.fFormat}
                </dt>
                <dd
                  style={{ margin: '6px 0 0', fontFamily: "'Jost', 'Futura', sans-serif", fontWeight: '500' }}
                >
                  {t.fFormatV}
                </dd>
              </div>
              <div>
                <dt
                  className="mlab"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#55524C' }}
                >
                  <span className="sqb" style={{ width: '6px', height: '6px' }} />
                  {t.phone}
                </dt>
                <dd
                  style={{ margin: '6px 0 0', fontFamily: "'Jost', 'Futura', sans-serif", fontWeight: '500' }}
                >
                  <a href="tel:+97695850420" style={{ textDecoration: 'none' }}>
                    (+976)&nbsp;
                  </a>
                  88971747
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          className="brk"
          style={{
            flex: '1 1 460px',
            minWidth: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '26px 24px',
            alignContent: 'start',
            fontFamily: "'Jost', 'Futura', sans-serif",
            background: '#F4F4F4',
            border: '1px solid var(--ln)',
            padding: 'clamp(24px, 2.6vw, 40px)',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>{t.studentName} *</span>
            <input
              type="text"
              style={{
                border: '0',
                borderBottom: '1.5px solid #1A1A1A',
                padding: '12px 0',
                background: 'transparent',
                color: '#1A1A1A',
                fontSize: '19px',
              }}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>{t.grade} *</span>
            <select
              style={{
                border: '0',
                borderBottom: '1.5px solid #1A1A1A',
                padding: '12px 0',
                background: 'transparent',
                color: '#1A1A1A',
                fontSize: '19px',
                fontFamily: 'inherit',
              }}
            >
              <option value="">{t.gradePick}</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              gridColumn: '1 / -1',
            }}
          >
            <span>{t.school} *</span>
            <input
              type="text"
              style={{
                border: '0',
                borderBottom: '1.5px solid #1A1A1A',
                padding: '12px 0',
                background: 'transparent',
                color: '#1A1A1A',
                fontSize: '19px',
              }}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>{t.parentPhone} *</span>
            <input
              type="tel"
              style={{
                border: '0',
                borderBottom: '1.5px solid #1A1A1A',
                padding: '12px 0',
                background: 'transparent',
                color: '#1A1A1A',
                fontSize: '19px',
              }}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>{t.email}</span>
            <input
              type="email"
              style={{
                border: '0',
                borderBottom: '1.5px solid #1A1A1A',
                padding: '12px 0',
                background: 'transparent',
                color: '#1A1A1A',
                fontSize: '19px',
              }}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              gridColumn: '1 / -1',
            }}
          >
            <span>{t.why}</span>
            <textarea
              rows={3}
              style={{
                border: '0',
                borderBottom: '1.5px solid #1A1A1A',
                padding: '12px 0',
                background: 'transparent',
                color: '#1A1A1A',
                fontSize: '19px',
                resize: 'vertical',
              }}
            />
          </label>
          <div
            style={{
              gridColumn: '1 / -1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <button
              type="button"
              className="bev"
              style={{
                border: '0',
                cursor: 'pointer',
                minHeight: '48px',
                background: '#072039',
                color: '#FFFFFF',
                fontFamily: 'inherit',
                fontWeight: '600',
                fontSize: '15px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0 28px',
              }}
            >
              {t.submit}
            </button>
            <span aria-hidden="true" style={{ width: '40px', height: '22px', background: '#8B0F0F' }} />
          </div>
        </form>
      </div>
    </section>
  );
}
