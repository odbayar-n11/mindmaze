import type { PuzzlesVals } from '../PuzzlesPage';

export default function Impact({ v }: { v: PuzzlesVals }) {
  const { t } = v;
  return (
    <section id="impact">
      {' '}
      <div className="wrap split">
        {' '}
        <div>
          {' '}
          <div className="eyebrow">
            <i />
            <span>{t.e5}</span>
          </div>{' '}
          <h2>
            <span>{t.h5a}</span> <em>{t.h5b}</em>
          </h2>{' '}
        </div>{' '}
        <div>
          {' '}
          <p className="lede" style={{ maxWidth: '52ch' }}>
            {t.l5}
          </p>{' '}
          <div className="skills" style={{ marginTop: '28px' }}>
            {' '}
            <span>{t.s1}</span>
            <span>{t.s2}</span>
            <span>{t.s3}</span>
            <span>{t.s4}</span>
            <span>{t.s5}</span>
            <span>{t.s6}</span>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
