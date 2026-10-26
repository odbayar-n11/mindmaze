import type { CodingVals } from '../CodingPage';
import FilmReel from '../FilmReel';

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
      <FilmReel
        projects={v.projects}
        viewLabel={t.viewP}
        alt={t.stripAlt}
        padX="max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2))"
      />
    </section>
  );
}
