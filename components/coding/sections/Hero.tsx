import Link from 'next/link';
import type { CodingVals } from '../CodingPage';

export default function Hero({ v }: { v: CodingVals }) {
  const { enBg, enFg, isEn, isMn, mnBg, mnFg, nav, scrolled, setEn, setMn, t } = v;
  return (
    <>
      <header className={`chead${scrolled ? ' is-scrolled' : ''}`}>
        <div className="chead-in">
          <Link href="/" aria-label={t.homeAria} className="logo">
            <img className="logo-icon" src="/media/2a247f25ddc10df30a8d898e98a8509a.png" alt="" />
            <img className="logo-word" src="/media/e909eea4bc807598c43bcab5e40cfb0b.png" alt="" />
          </Link>
          <nav aria-label="Main" className="cnav">
            <Link href="/" className="pill pill-on">
              {t.navHome}
            </Link>
            {nav.map((item) => (
              <a key={item.href} className="pill" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hctl">
            <div role="group" aria-label={t.langAria} className="langs">
              <button type="button" onClick={setEn} aria-pressed={isEn} style={{ background: enBg, color: enFg }}>
                EN
              </button>
              <button type="button" onClick={setMn} aria-pressed={isMn} style={{ background: mnBg, color: mnFg }}>
                МН
              </button>
            </div>
            <a href="#apply" className="login">
              {t.login}
            </a>
          </div>
        </div>
      </header>

      <div className="hero">
        <div aria-hidden="true" className="hero-bg">
          <img src="/media/3c6a4baae0bcebef7966ed568cb0faaf.jpg" alt="" />
          <div className="hero-shade" />
        </div>
        <section id="top" className="hero-sec">
          <div className="hero-in">
            <div className="hero-copy">
              <div className="hero-top">
                <p className="eyebrow">{t.eyebrow}</p>
                <p className="hero-lead">{t.heroLead}</p>
              </div>
              <h1>{t.h1}</h1>
            </div>
          </div>
        </section>

        {/* a hairline that stops short of the right edge, as in the design */}
        <div className="hero-rule" />
      </div>
    </>
  );
}
