import type { ReactNode } from 'react';
import type { CodingVals } from '../CodingPage';

type CardProps = { head: ReactNode; lead: string; points: string[]; value: string; action: ReactNode; featured?: boolean };

function FormatCard({ head, lead, points, value, action, featured }: CardProps) {
  return (
    <article className={'fmt' + (featured ? ' fmt-on' : '')}>
      {head}
      <p className="fmt-lead">{lead}</p>
      <ul>
        {points.map((p) => (
          <li key={p}>
            <span aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <div className="fmt-foot">
        <span className="fmt-v">{value}</span>
        {action}
      </div>
    </article>
  );
}

export default function Formats({ v }: { v: CodingVals }) {
  const { t } = v;
  return (
    <section id="formats" className="sec">
      <div className="wrap">
        <h2 className="sec-title">
          {t.fmtT1}
          <br />
          {t.fmtT2}
        </h2>
        <div className="fmts">
          <FormatCard
            head={
              <div className="fmt-head">
                <h3>{t.c1T}</h3>
              </div>
            }
            lead={t.c1}
            points={[t.c1b1, t.c1b2, t.c1b3, t.c1b4]}
            value={t.c1V}
            action={
              <button type="button" className="fmt-btn" disabled>
                {t.c1Btn}
              </button>
            }
          />
          <FormatCard
            featured
            head={
              <div className="fmt-head">
                <h3>{t.c2T}</h3>
                <span className="fmt-badge">{t.c2Badge}</span>
              </div>
            }
            lead={t.c2}
            points={[t.c2b1, t.c2b2, t.c2b3, t.c2b4]}
            value={t.c2V}
            action={
              <a href="#apply" className="fmt-btn">
                {t.applyNow}
              </a>
            }
          />
          <FormatCard
            head={
              <h3>
                {t.c3T} <span className="fmt-soon">{t.c3Soon}</span>
              </h3>
            }
            lead={t.c3}
            points={[t.c3b1, t.c3b2, t.c3b3]}
            value={t.c3V}
            action={
              <button type="button" className="fmt-btn" disabled>
                {t.c3Btn}
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
