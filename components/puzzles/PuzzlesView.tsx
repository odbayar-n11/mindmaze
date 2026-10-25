import type { PuzzlesVals } from './PuzzlesPage';
import Header from './sections/Header';
import PuzzleStage from './sections/PuzzleStage';
import Games from './sections/Games';
import Schools from './sections/Schools';
import Edu from './sections/Edu';
import Impact from './sections/Impact';
import Register from './sections/Register';
import Footer from './sections/Footer';

/** Markup of the "MindMaze (puzzle site)" design. Each section lives in ./sections. */
export default function PuzzlesView({ v }: { v: PuzzlesVals }) {
  return (
    <div className="page-puzzles">
      <div className="mm-root">
        <Header v={v} />
        <main>
          {' '}
          <PuzzleStage v={v} /> <div className="sep" aria-hidden="true" /> <Games v={v} />{' '}
          <div className="sep" aria-hidden="true" /> <Schools v={v} />{' '}
          <div className="sep" aria-hidden="true" /> <Edu v={v} /> <div className="sep" aria-hidden="true" />{' '}
          <Impact v={v} />
        </main>
        <div className="sep" aria-hidden="true" />
        <Register v={v} />
        <div className="sep" aria-hidden="true" />
        <Footer v={v} />
      </div>
    </div>
  );
}
