import type { CodingVals } from './CodingPage';
import Hero from './sections/Hero';
import WhyCoding from './sections/WhyCoding';
import HowWeTeach from './sections/HowWeTeach';
import WhatWeTeach from './sections/WhatWeTeach';
import Projects from './sections/Projects';
import Apply from './sections/Apply';
import Footer from './sections/Footer';

/** Markup of the "Coding" design. Each section lives in ./sections. */
export default function CodingView({ v }: { v: CodingVals }) {
  return (
    <div className="page-coding">
      <div
        style={{
          fontFamily: "'Jost', 'Futura', sans-serif",
          color: '#1A1A1A',
          background: '#FBF8F1',
          minWidth: '0',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <Hero v={v} />
        <div aria-hidden="true" className="orn orn5" />
        <WhyCoding v={v} />
        <div aria-hidden="true" className="orn orn5" />
        <HowWeTeach v={v} />
        <div aria-hidden="true" className="orn orn5" />
        <WhatWeTeach v={v} />
        <div aria-hidden="true" className="orn orn5" />
        <Projects v={v} />
        <div aria-hidden="true" className="orn orn5" />
        <Apply v={v} />
        <div aria-hidden="true" className="orn orn5" />
        <Footer v={v} />
      </div>
    </div>
  );
}
