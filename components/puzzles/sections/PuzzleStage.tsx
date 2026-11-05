import type { PuzzlesVals } from '../PuzzlesPage';

export default function PuzzleStage({ v }: { v: PuzzlesVals }) {
  const { puzzlesCls, t } = v;
  return (
    <section id="puzzles" className={puzzlesCls} aria-label="Traditional puzzles">
      {' '}
      <div className="stage">
        {' '}
        {/* the 3D canvas is created in here by burr.ts, fresh on every start */}
        <div id="burr-host" className="burr-host" />{' '}
        {/* shown only when WebGL is unavailable; lazy, so it is never downloaded otherwise */}
        <img className="burr-still" src="/media/burr-still.png" alt="An assembled six-piece wooden burr puzzle" loading="lazy" />{' '}
        <div className="floor" id="floor" />{' '}
        <div className="wrap">
          {' '}
          <div className="stage-copy">
            {' '}
            <div className="eyebrow">
              <i />
              <span>{t.e2}</span>
            </div>{' '}
            <h2>
              <span>{t.h2a}</span> <em>{t.h2b}</em>
            </h2>{' '}
            <p className="lede">{t.l2}</p> <p className="hint">{t.hint}</p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="caption">
          <span className="count" id="count">
            0 / 6
          </span>
          <span>{t.cap}</span>
        </div>{' '}
      </div>{' '}
    </section>
  );
}
