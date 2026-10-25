import Link from 'next/link';
import type { PuzzlesVals } from '../PuzzlesPage';

export default function Header({ v }: { v: PuzzlesVals }) {
  const { enP, mnP, nav, setEn, setMn, t } = v;
  return (
    <header>
      {' '}
      <div className="progress" id="progress" />{' '}
      <nav className="wrap nav" aria-label="Main">
        {' '}
        <Link className="logo" href="/" aria-label="MindMaze home">
          <span className="logo-icon" aria-hidden="true" />
          <span className="logo-word" aria-hidden="true" style={{ width: '53px', height: '37px' }} />
        </Link>{' '}
        <ul className="links">
          {' '}
          <li>
            <a href="#puzzles" className={nav.puzzles}>
              {t.nav_puzzles}
            </a>
          </li>{' '}
          <li>
            <a href="#games" className={nav.games}>
              {t.nav_why}
            </a>
          </li>{' '}
          <li>
            <a href="#edu" className={nav.edu}>
              edu
            </a>
          </li>{' '}
          <li>
            <a href="#impact" className={nav.impact}>
              {t.nav_impact}
            </a>
          </li>{' '}
        </ul>{' '}
        <div className="nav-end">
          {' '}
          <div className="lang" role="group" aria-label="Language">
            {' '}
            <button id="lang-en" aria-pressed={enP} onClick={setEn}>
              EN
            </button>{' '}
            <button id="lang-mn" aria-pressed={mnP} onClick={setMn}>
              МН
            </button>{' '}
          </div>{' '}
          <a className="btn" href="#contact">
            {t.contact}
          </a>{' '}
        </div>{' '}
      </nav>
    </header>
  );
}
