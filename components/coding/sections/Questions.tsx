import type { CodingVals } from '../CodingPage';

export default function Questions({ v }: { v: CodingVals }) {
  const { faq, open, t, toggleQuestion } = v;
  return (
    <section id="faq" className="faq">
      <div className="faq-in">
        <div className="faq-side">
          <h2>
            {t.qT1}
            <br />
            {t.qT2}
          </h2>
          <p>{t.qLead}</p>
          <a href="tel:+97688971747">{t.qBtn}</a>
        </div>
        <div className="faq-list">
          {faq.map((item, i) => (
            <div key={i}>
              <button type="button" onClick={() => toggleQuestion(i)} aria-expanded={open === i}>
                {item.q}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {open === i && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
