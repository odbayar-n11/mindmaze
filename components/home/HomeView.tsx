import type { HomeVals } from './HomePage';
import Hero from './sections/Hero';
import About from './sections/About';
import Story from './sections/Story';
import Approach from './sections/Approach';
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
          fontFamily: "'Instrument Serif', Georgia, serif",
          color: 'var(--hm-ink)',
          background: 'var(--hm-bg)',
          minWidth: '0',
          overflowX: 'hidden',
        }}
      >
        <Hero v={v} />
        {/* the patterned band from the previous design, only between the cover and Part 01 */}
        <div aria-hidden="true" className="orn" />
        {/* everything below the hero sits inset from the page edges */}
        <div className="home-body">
          <About v={v} />
          <Story v={v} />
          <Approach v={v} />
          <section id="puzzles" style={{ position: 'relative' }} />
          <Impact v={v} />
          <Team v={v} />
          <Involved v={v} />
          <Contact v={v} />
          <Footer v={v} />
        </div>
      </div>
    </div>
  );
}
