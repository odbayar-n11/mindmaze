import type { CodingVals } from '../CodingPage';

export default function HowWeTeach({ v }: { v: CodingVals }) {
  const { steps, t } = v;
  return (
    <section id="how" className="sec">
      <div className="wrap">
        <h2 className="sec-title">{t.howTitle}</h2>
        <p className="how-lead">{t.howLead}</p>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n}>
              <div className="step-n">{s.n}</div>
              <div aria-hidden="true" className="step-dots">
                <span />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
