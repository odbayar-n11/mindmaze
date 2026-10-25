import type { PuzzlesVals } from '../PuzzlesPage';

export default function PuzzleStage({ v }: { v: PuzzlesVals }) {
  const { puzzlesCls, t } = v;
  return (
    <section id="puzzles" className={puzzlesCls} aria-label="Traditional puzzles">
      {' '}
      <div className="stage">
        {' '}
        <canvas id="burr" aria-label="A six-piece wooden burr puzzle assembling as you scroll" />{' '}
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
