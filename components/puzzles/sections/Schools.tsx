import type { PuzzlesVals } from '../PuzzlesPage';

export default function Schools({ v }: { v: PuzzlesVals }) {
  const { t } = v;
  return (
    <section id="schools" className="alt">
      {' '}
      <div className="wrap">
        {' '}
        <div className="eyebrow">
          <i />
          <span>{t.e4}</span>
        </div>{' '}
        <h2>
          <span>{t.h4a}</span> <em>{t.h4b}</em>
        </h2>{' '}
        <div className="schools">
          {' '}
          <figure className="school">
            <img
              src="/media/d6f2203aa3164c2afb715d3130a563a7.jpg"
              alt="Students working on wooden puzzles at 21st Secondary School of Ulaanbaatar"
              loading="lazy"
            />
            <figcaption>{t.sc0}</figcaption>
          </figure>{' '}
          <figure className="school">
            <img
              src="/media/8d813e24000070f6ccaa9c45eec9e7f3.jpg"
              alt="Students working on wooden puzzles at 24th Secondary School of Ulaanbaatar"
              loading="lazy"
            />
            <figcaption>{t.sc1}</figcaption>
          </figure>{' '}
          <figure className="school">
            <img
              src="/media/ed1f42a5c51ce06bd8afd8075b88161b.jpg"
              alt="Students working on wooden puzzles at 1st Secondary School of Uvurkhangai"
              loading="lazy"
            />
            <figcaption>{t.sc2}</figcaption>
          </figure>{' '}
        </div>{' '}
        <h3 className="next-h">{t.ns_h}</h3>{' '}
        <ul className="next-schools">
          {' '}
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h17v16H6V8h10v8h-6v-4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{t.ns0}</span>
          </li>{' '}
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h17v16H6V8h10v8h-6v-4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{t.ns1}</span>
          </li>{' '}
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h17v16H6V8h10v8h-6v-4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{t.ns2}</span>
          </li>{' '}
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h17v16H6V8h10v8h-6v-4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>{t.ns3}</span>
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </section>
  );
}
