import type { CodingVals } from '../CodingPage';
<<<<<<< HEAD
=======
import FilmReel from '../FilmReel';
>>>>>>> 20672e8 (fixed)

export default function Projects({ v }: { v: CodingVals }) {
  const { t } = v;
  return (
    <section
      className="bp"
      id="projects"
      style={{
        position: 'relative',
        background: '#FBF8F1',
        padding: 'clamp(64px, 7vw, 112px) 0',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" className="gl" />
      <div className="shead" style={{ margin: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))' }}>
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
            {t.shapedTitle}
          </h2>
        </div>
        <div className="slead">
          <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.55', color: '#55524C' }}>
            {t.shapedLead}
          </p>
        </div>
      </div>
<<<<<<< HEAD
      <div className="reel-stage" style={{ margin: 'clamp(32px, 3.6vw, 56px) 0 0' }}>
        <div
          className="reel-cap"
          style={{ padding: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))' }}
        >
          <div
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(36px, 4.6vw, 66px)',
              lineHeight: '1.05',
              color: '#072039',
            }}
          >
            {t.projTitle}
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px 14px',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: '20px',
              color: '#55524C',
            }}
          >
            <span>{t.projType}</span>
            <span aria-hidden="true">•</span>
            <a
              href="#projects"
              style={{ color: '#072039', textDecoration: 'none', borderBottom: '1px solid currentColor' }}
            >
              {t.viewP}
            </a>
          </div>
        </div>
        <img className="reel-img" src="/media/bba70e3e9ef32b82c2b1c1ee41e1f8ba.webp" alt={t.stripAlt} />
        <div
          className="reel-nav"
          aria-hidden="true"
          style={{ padding: '0 max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))' }}
        >
          <span className="pbtn bev">
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
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </span>
          <span className="pdots">
            <span className="pd on" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
            <span className="pd" />
          </span>
          <span className="pbtn bev">
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
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
=======
      <FilmReel
        projects={v.projects}
        viewLabel={t.viewP}
        alt={t.stripAlt}
        padX="max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))"
      />
>>>>>>> 20672e8 (fixed)
    </section>
  );
}
