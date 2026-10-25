import type { PuzzlesVals } from '../PuzzlesPage';

export default function Games({ v }: { v: PuzzlesVals }) {
  const { t } = v;
  return (
    <section id="games">
      {' '}
      <div className="wrap">
        {' '}
        <div className="games-head">
          {' '}
          <div>
            {' '}
            <div className="eyebrow">
              <i />
              <span>{t.e3}</span>
            </div>{' '}
            <h2 className="tall">
              <span>{t.g_a}</span> <em>{t.g_b}</em>
            </h2>{' '}
          </div>{' '}
          <p className="lede">{t.g_l}</p>{' '}
        </div>{' '}
        <div className="games">
          {' '}
          <article className="game">
            <div className="game-top">
              <div>
                <h3>{t.g0t}</h3>
                <span>{t.g0s}</span>
              </div>
              <span className="tag int">{t.tag_int}</span>
            </div>
            <img
              src="/media/c92ac6029a8cecbd03ef38c6cdb6454a.webp"
              alt="Star puzzle, six-piece star burr"
              loading="lazy"
            />
          </article>{' '}
          <article className="game">
            <div className="game-top">
              <div>
                <h3>{t.g1t}</h3>
                <span>{t.g1s}</span>
              </div>
              <span className="tag int">{t.tag_int}</span>
            </div>
            <img
              src="/media/ee876f89cbdf82d09844634624c6cb3a.webp"
              alt="Cross puzzle, six-piece burr"
              loading="lazy"
            />
          </article>{' '}
          <article className="game">
            <div className="game-top">
              <div>
                <h3>{t.g2t}</h3>
                <span>{t.g2s}</span>
              </div>
              <span className="tag int">{t.tag_int}</span>
            </div>
            <img
              src="/media/b870c9cbc534ff0321ff3e3b7cca2599.webp"
              alt="Cross lock, three-piece burr"
              loading="lazy"
            />
          </article>{' '}
          <article className="game">
            <div className="game-top">
              <div>
                <h3>{t.g3t}</h3>
                <span>{t.g3s}</span>
              </div>
              <span className="tag dis">{t.tag_dis}</span>
            </div>
            <img
              src="/media/68e5a90ff858e8c87c87bd2d316cbff8.webp"
              alt="Oyun tulkhuur, ring puzzle"
              loading="lazy"
            />
          </article>{' '}
          <article className="game">
            <div className="game-top">
              <div>
                <h3>{t.g4t}</h3>
                <span>{t.g4s}</span>
              </div>
              <span className="tag dis">{t.tag_dis}</span>
            </div>
            <img
              src="/media/82182f70009f8027fc39e46418252a10.webp"
              alt="Bugj niiluulekh, bone and string puzzle"
              loading="lazy"
            />
          </article>{' '}
          <article className="game">
            <div className="game-top">
              <div>
                <h3>{t.g5t}</h3>
                <span>{t.g5s}</span>
              </div>
              <span className="tag int">{t.tag_int}</span>
            </div>
            <img
              src="/media/364a8abfb6a6c32d501fc7df127314ad.webp"
              alt="Snowflake puzzle, interlocking burr"
              loading="lazy"
            />
          </article>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
