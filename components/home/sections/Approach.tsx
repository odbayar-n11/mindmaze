import type { HomeVals } from '../HomePage';
import { PartLabel } from './PartLabel';

/** Part 03 · Our approach: lead text and two gradient cards (each one a link to its page) with art in the bottom-right corner. */
export default function Approach({ v }: { v: HomeVals }) {
  const { progCards, t } = v;
  return (
    <section id="our-programs" className="approach">
      <div className="approach-head">
        <PartLabel n="03" part={t.part} title={`${t.progA} ${t.progB}`} />
        <p className="approach-lead">{t.progLead}</p>
      </div>
      <div className="pcards">
        {progCards.map((pc, i) => (
          // the whole card is the link to its page
          <a key={i} className="pcard" href={pc.more} style={{ background: pc.bg, color: pc.fg }}>
            <span aria-hidden="true" className="pc-glow" style={{ background: pc.glow }} />
            {pc.puz && (
              <>
                <img className="pc-art pc-ball" src="/media/8fa8835d5276d0ea3a096cd3449b5e75.png" alt="" aria-hidden="true" />
                <img className="pc-art pc-star" src="/media/b2c5f0f72ce272f4ec2d2e101b829979.png" alt="" aria-hidden="true" />
              </>
            )}
            {pc.code && (
              <div className="pc-art pc-code" aria-hidden="true">
                <div className="pc-win-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <img src="/media/7d1022342537b1e970e3fa7de80d76dc.png" alt="" />
              </div>
            )}
            <div className="pc-body">
              <h3 style={{ color: pc.fg }}>{pc.title}</h3>
              <p style={{ color: pc.sub }}>{pc.text}</p>
            </div>
            <span className="pc-more" style={{ color: pc.link }}>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 10 10 2M4 2h6v6" />
              </svg>
              {t.learnMore}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
