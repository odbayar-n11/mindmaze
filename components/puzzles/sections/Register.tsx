import type { PuzzlesVals } from '../PuzzlesPage';

export default function Register({ v }: { v: PuzzlesVals }) {
  const { t } = v;
  return (
    <section id="contact" className="reg" aria-labelledby="reg-title">
      {' '}
      <div className="wrap reg-grid">
        {' '}
        <div className="reg-l">
          {' '}
          <div className="reg-vert" aria-hidden="true">
            <span className="reg-sq" />
            MindMaze
          </div>{' '}
          <div className="reg-main">
            {' '}
            <div className="reg-tbox">
              <span className="reg-icell" aria-hidden="true" />
              <h2 id="reg-title">
                <span>{t.fa}</span> <em>{t.fb}</em>
              </h2>
            </div>{' '}
            <p className="reg-lead">{t.r_lead}</p>{' '}
            <dl className="reg-facts">
              <div>
                <dt>
                  <span className="reg-sq" />
                  {t.r_date}
                </dt>
                <dd>{t.r_dateV}</dd>
              </div>
              <div>
                <dt>
                  <span className="reg-sq" />
                  {t.r_place}
                </dt>
                <dd>{t.r_placeV}</dd>
              </div>
              <div>
                <dt>
                  <span className="reg-sq" />
                  {t.r_email}
                </dt>
                <dd>
                  <a href="mailto:hello@mindmaze.mn">hello@mindmaze.mn</a>
                </dd>
              </div>
              <div>
                <dt>
                  <span className="reg-sq" />
                  {t.r_tel}
                </dt>
                <dd>
                  <a href="tel:+97688971747">(+976) 88971747</a>
                </dd>
              </div>
            </dl>{' '}
          </div>{' '}
        </div>{' '}
        <form className="reg-form" aria-labelledby="reg-title">
          {' '}
          <label className="reg-f">
            <span>{t.r_name} *</span>
            <input type="text" />
          </label>
          <label className="reg-f">
            <span>{t.r_grade} *</span>
            <select>
              <option value="">{t.r_pick}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </label>
          <label className="reg-f wide">
            <span>{t.r_school} *</span>
            <input type="text" />
          </label>
          <label className="reg-f">
            <span>{t.r_phone} *</span>
            <input type="tel" />
          </label>
          <label className="reg-f">
            <span>{t.r_email}</span>
            <input type="email" />
          </label>
          <label className="reg-f wide">
            <span>{t.r_note}</span>
            <textarea rows={3} />
          </label>{' '}
          <div className="reg-actions">
            <button type="button" className="reg-btn">
              {t.r_submit}
            </button>
            <span aria-hidden="true" className="reg-mark" />
          </div>{' '}
        </form>{' '}
      </div>
    </section>
  );
}
