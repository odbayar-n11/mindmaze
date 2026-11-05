import SiteHeader from '../../navigation/SiteHeader';
import type { CodingVals } from '../CodingPage';

export default function Hero({ v }: { v: CodingVals }) {
  const { isEn, nav, setEn, setMn, t } = v;
  return (
    <>
      <SiteHeader
        logoHref="/"
        links={[{ href: '#top', label: t.navHome }, ...nav]}
        isEn={isEn === 'true'}
        setEn={setEn}
        setMn={setMn}
        loginHref="#apply"
        loginLabel={t.login}
      />

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
