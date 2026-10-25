import type { PuzzlesVals } from '../PuzzlesPage';

export default function Footer({ v }: { v: PuzzlesVals }) {
  const { t } = v;
  return (
    <footer className="foot">
      {' '}
      <div className="foot-row">
        {' '}
        <span className="foot-logo" role="img" aria-label="MindMaze">
          <span className="logo-icon" />
          <span className="logo-word" />
        </span>{' '}
        <p>© 2026 MindMaze · {t.foot}</p>{' '}
      </div>
    </footer>
  );
}
