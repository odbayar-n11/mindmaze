import type { CodingVals } from '../CodingPage';
import FilmReel from '../FilmReel';

// the fan of photos above the title: where each card sits, from the centre of the section
const FAN = [
  { id: '3c6a4baae0bcebef7966ed568cb0faaf', left: 'calc(50% - 384px)', top: '128px', turn: -36 },
  { id: 'ab5f6e7ac7b63e77e518f7f327913fb8', left: 'calc(50% - 290px)', top: '56px', turn: -24 },
  { id: '18dd08be500119697ebb9158121c8393', left: 'calc(50% - 168px)', top: '14px', turn: -12 },
  { id: '359356f40941b4cd2d79db90b7e79a9d', left: 'calc(50% - 59px)', top: '0', turn: 0 },
  { id: 'e1b5d33424da198ad87d0349812712b1', left: 'calc(50% + 50px)', top: '14px', turn: 12 },
  { id: '4920fa3d593153ad46faaadbf57d1f82', left: 'calc(50% + 172px)', top: '56px', turn: 24 },
  { id: 'c1f4436b1b4fbc23d29aff680acb7a71', left: 'calc(50% + 266px)', top: '128px', turn: 36 },
];

export default function Projects({ v }: { v: CodingVals }) {
  const { stats, t } = v;
  return (
    <section id="projects" className="proj">
      <div className="wrap">
        <div aria-hidden="true" className="fan">
          {FAN.map((c) => (
            <img
              key={c.id}
              src={`/media/${c.id}.jpg`}
              alt=""
              style={{ left: c.left, top: c.top, transform: c.turn ? `rotate(${c.turn}deg)` : undefined }}
            />
          ))}
        </div>
        <div className="proj-head">
          <h2 className="sec-title">
            {t.pT1}
            <br />
            {t.pT2}
          </h2>
          <p>{t.shapedLead}</p>
          <a href="#reel" className="proj-btn">
            {t.seeProjects}
          </a>
        </div>
        <figure id="reel" className="proj-reel">
          <FilmReel projects={v.projects} viewLabel={t.viewP} alt={t.stripAlt} padX="0" />
          <figcaption>{t.stripCap}</figcaption>
        </figure>
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.n}>
              <dt>{s.n}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
