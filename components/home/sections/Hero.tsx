import SiteHeader from '../../navigation/SiteHeader';
import type { HomeVals } from '../HomePage';

export default function Hero({ v }: { v: HomeVals }) {
  const { isEn, nav, setEn, setMn, t } = v;
  return (
    // Full-width photo with the title over it; on phones the title sits on a navy band above the photo
    // (see home.css, #top). The header is pinned and stays transparent over the photo until you scroll.
    <section id="top">
      <SiteHeader
        logoHref="#top"
        links={nav ?? []}
        isEn={isEn === 'true'}
        setEn={setEn}
        setMn={setMn}
        loginHref="#contact"
        loginLabel="Log In"
      />
      <img
        className="hero-img"
        src="/media/mindmaze-cover.jpg"
        alt="Watercolor illustration of a girl holding a wooden star burr puzzle to her heart, among yellow flowers and blue waves"
      />
      <div aria-hidden="true" className="hero-fade" />
      <div aria-hidden="true" className="hero-wash" />
      <div className="hero-title">
        <h1>
          <span>MindMaze</span>
          <span>{t.heroPlace}</span>
        </h1>
        <span aria-hidden="true" className="hero-rule" />
        <p className="hero-lead">{t.heroLead}</p>
      </div>
    </section>
  );
}
