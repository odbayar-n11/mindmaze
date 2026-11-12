import { DM_Serif_Display, Instrument_Serif } from 'next/font/google';
import { LanguageProvider } from './LanguageProvider';
import SiteRoot from './SiteRoot';
import MongolianPattern from './MongolianPattern';
import Header from './Header';
import Hero from './Hero';
import HorseBg from './HorseBg';
import Games from './Games';
import Schools from './Schools';
import MomentsReel from './MomentsReel';
import Edu from './Edu';
import Impact from './Impact';
import Footer from './Footer';
import './mindmaze.css';

// headings / body text, exposed as --display and --body. Neither font has Cyrillic, so the
// Mongolian text falls back to Georgia exactly as in the prototype (the size-adjusted
// Times fallback next/font would generate is wider and overflows small phones).
const display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--display',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: false,
});
const body = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--body',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: false,
});

/** The MindMaze puzzle site, section by section, in page order. */
export default function MindMazeSite() {
  return (
    <LanguageProvider>
      <SiteRoot className={`${display.variable} ${body.variable}`}>
        <MongolianPattern />
        <Header />
        <main>
          <Hero />
          {/* 02-06 share one pinned horse painting (.horse-zone in mindmaze.css) */}
          <div className="horse-zone">
            <div className="horse-track" aria-hidden="true">
              <HorseBg />
              <div className="horse-fade" />
            </div>
            <Games />
            <Schools />
            <MomentsReel />
            <Edu />
            <Impact />
          </div>
        </main>
        <Footer />
      </SiteRoot>
    </LanguageProvider>
  );
}
