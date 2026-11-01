import type { CodingVals } from '../CodingPage';

export default function WhatWeTeach({ v }: { v: CodingVals }) {
  const { showSol, solBtn, solExp, t, toggleSol } = v;
  return (
    <section id="learn" className="learn">
      <div className="wrap">
        <p className="eyebrow learn-eyebrow">{t.learnEyebrow}</p>
        <ul className="learn-list">
          <li className="dim">
            {t.l1}
            <span aria-hidden="true" className="learn-dot" />
          </li>
          <li className="learn-mid">
            <img src="/media/ab5f6e7ac7b63e77e518f7f327913fb8.jpg" alt={t.altRead} style={{ transform: 'rotate(-8deg)' }} />
            {t.l2}
            <img src="/media/c1f4436b1b4fbc23d29aff680acb7a71.jpg" alt={t.altLaptop} style={{ transform: 'rotate(7deg)' }} />
          </li>
          <li className="dim">
            {t.l3}
            <span aria-hidden="true" className="learn-dot" />
          </li>
        </ul>

        <div className="ex">
          <div className="ex-text">
            <p className="ex-label">{t.exLabel}</p>
            <h3>{t.exTitle}</h3>
            <p className="ex-lead">{t.puzText}</p>
            <p className="ex-note">{t.puzNote}</p>
          </div>
          <figure className="codecard">
            <div className="code-bar">
              <span aria-hidden="true" style={{ background: '#E2574C' }} />
              <span aria-hidden="true" style={{ background: '#3A3A3A' }} />
              <span aria-hidden="true" style={{ background: '#2A2A2A' }} />
              <em>exercise-01.js</em>
            </div>
            <pre className="code">
              <code>
                <span className="ln c">{'// 1. Reverse the array into a NEW array'}</span>
                <span className="ln c">{'//     WITHOUT using .reverse().'}</span>
                <span className="ln c">{'//     Then print the new array.'}</span>
                <span className="ln">
                  <b>const</b> letters = [<i>&quot;m&quot;</i>, <i>&quot;i&quot;</i>, <i>&quot;n&quot;</i>, <i>&quot;d&quot;</i>];
                </span>
                <span className="ln c">{'// Expected: ["d", "n", "i", "m"]'}</span>
                <span className="ln"> </span>
                <span className="ln c">{'// your code here'}</span>
              </code>
            </pre>
            {showSol && (
              <div className="code-sol">
                <p>{t.solLabel}</p>
                <pre className="code">
                  <code>
                    <span className="ln">
                      <b>const</b> reversed = [];
                    </span>
                    <span className="ln">
                      <b>for</b> (<b>let</b> i = letters.length - 1; i &gt;= 0; i--) {'{'}
                    </span>
                    <span className="ln">{'  reversed.push(letters[i]);'}</span>
                    <span className="ln">{'}'}</span>
                    <span className="ln">
                      console.log(reversed); <span className="c">{'// ["d", "n", "i", "m"]'}</span>
                    </span>
                  </code>
                </pre>
              </div>
            )}
            <figcaption>
              <span>{t.codeCap}</span>
              <button type="button" onClick={toggleSol} aria-expanded={solExp}>
                {solBtn}
              </button>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
