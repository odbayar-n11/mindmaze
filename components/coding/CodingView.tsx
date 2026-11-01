import type { CodingVals } from './CodingPage';
import { fontVars, headFont } from './fonts';
import Hero from './sections/Hero';
import WhyCoding from './sections/WhyCoding';
import WhatWeTeach from './sections/WhatWeTeach';
import HowWeTeach from './sections/HowWeTeach';
import Formats from './sections/Formats';
import Projects from './sections/Projects';
import Questions from './sections/Questions';
import Apply from './sections/Apply';
import Footer from './sections/Footer';

/** Markup of the "Coding 2" design. Each section lives in ./sections. */
export default function CodingView({ v }: { v: CodingVals }) {
  return (
    <div className={`page-coding ${fontVars}`} style={{ ['--head' as string]: headFont }}>
      <Hero v={v} />
      <WhyCoding v={v} />
      <WhatWeTeach v={v} />
      <HowWeTeach v={v} />
      <Formats v={v} />
      <Projects v={v} />
      <Questions v={v} />
      <Apply v={v} />
      <Footer v={v} />
    </div>
  );
}
