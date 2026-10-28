import type { HomeVals } from './HomePage';
import Hero from './sections/Hero';
import About from './sections/About';
import Approach from './sections/Approach';
import Puzzles from './sections/Puzzles';
import Impact from './sections/Impact';
import Team from './sections/Team';
import Involved from './sections/Involved';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

/** Markup of the "Homepage (new)" design. Each section lives in ./sections. */
export default function HomeView({ v }: { v: HomeVals }) {
  return (
    <div className="page-home">
      <div
        style={{
          fontFamily: "'Jost', 'Futura', sans-serif",
          color: '#1A1A1A',
          background: '#FFFFFF',
          minWidth: '0',
          overflowX: 'hidden',
        }}
      >
        <Hero v={v} />
        <div aria-hidden="true" className="orn orn1" />
        <About v={v} />
        <div aria-hidden="true" className="orn orn3" />
        <Approach v={v} />
        <Puzzles v={v} />
        <div aria-hidden="true" className="orn orn1" />
        <Impact v={v} />
        <div aria-hidden="true" className="orn orn3" />
        <Team v={v} />
        <div aria-hidden="true" className="orn orn1" />
        <Involved v={v} />
        <div aria-hidden="true" className="orn orn3" />
        <Contact v={v} />
        <div aria-hidden="true" className="orn orn1" />
        <Footer v={v} />
      </div>
    </div>
  );
}
