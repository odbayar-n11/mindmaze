import type { HomeVals } from '../HomePage';

export default function Contact({ v }: { v: HomeVals }) {
  const { t } = v;
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        background: '#FFFFFF',
        padding: 'clamp(64px, 7vw, 112px) max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px' }}>
        <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', gap: '32px' }}>
          <div
            aria-hidden="true"
            style={{
              writingMode: 'vertical-rl',
              fontWeight: '600',
              fontSize: '18px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            MindMaze
          </div>
          <div style={{ minWidth: '0' }}>
            <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  display: 'block',
                  width: '42px',
                  height: '1px',
                  background: '#8F8A80',
                  transform: 'rotate(-38deg)',
                  transformOrigin: 'left center',
                }}
              />
            </div>
            <h2
              style={{
                margin: '32px 0 0',
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: '400',
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: '1.05',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#072039',
              }}
            >
              {t.contactTitle}
            </h2>
            <p
              style={{
                margin: '18px 0 0',
                maxWidth: '420px',
                fontSize: '19px',
                lineHeight: '1.6',
                color: '#55524C',
              }}
            >
              {t.contactLead}
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
                <dt style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '18px' }}>
                  {t.email}
                </dt>
                <dd style={{ margin: '6px 0 0', fontWeight: '500' }}>[hello@yourdomain.mn]</dd>
              </div>
              <div>
                <dt style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '18px' }}>
                  {t.phone}
                </dt>
                <dd style={{ margin: '6px 0 0', fontWeight: '500' }}>
                  <a href="tel:+97695850420" style={{ textDecoration: 'none' }}>
                    (+976) 9585-0420
                  </a>
                </dd>
              </div>
              <div>
                <dt style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '18px' }}>
                  Instagram
                </dt>
                <dd style={{ margin: '6px 0 0', fontWeight: '500' }}>
                  <a
                    href="https://www.instagram.com/mindmaze.mongolia/"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: 'none' }}
                  >
                    @mindmaze.mongolia
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          style={{
            flex: '1 1 460px',
            minWidth: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '26px 24px',
            alignContent: 'start',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            {t.name} *
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
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            {t.email} *
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
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              gridColumn: '1 / -1',
            }}
          >
            {t.phone}
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
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              gridColumn: '1 / -1',
            }}
          >
            {t.message} *
            <textarea
              rows={4}
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
              {t.send}
            </button>
            <span aria-hidden="true" style={{ width: '40px', height: '22px', background: '#8B0F0F' }} />
          </div>
        </form>
      </div>
    </section>
  );
}
