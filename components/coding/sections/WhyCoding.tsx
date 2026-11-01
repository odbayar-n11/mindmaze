import type { CodingVals } from '../CodingPage';
import { BallBurr, CubeBurr, StarBurr } from './PuzzleIcons';

export default function WhyCoding({ v }: { v: CodingVals }) {
  const { t } = v;
  return (
    <section id="why" className="why">
      <div className="why-in">
        <h2>
          {t.whyT1}
          <br />
          {t.whyT2}
        </h2>
        <p className="why-lead">{t.whyLead}</p>
        <div className="why-grid">
          <article className="why-card">
            <CubeBurr />
            <h3>{t.p2T}</h3>
            <p>{t.p2}</p>
          </article>
          <article className="why-card why-raise">
            <StarBurr />
            <h3>{t.p1T}</h3>
            <p>{t.p1}</p>
          </article>
          <article className="why-card">
            <BallBurr />
            <h3>{t.p3T}</h3>
            <p>{t.p3}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
