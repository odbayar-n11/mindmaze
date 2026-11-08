import { Anton, Inter, Oswald } from 'next/font/google';

// Only the Coding hero (the cover photo) uses these: it keeps its original Anton title and Inter text.
// Mongolian needs cyrillic-ext for Ө and Ү.
const anton = Anton({ weight: '400', subsets: ['latin'] });
const oswald = Oswald({ weight: '700', subsets: ['latin', 'cyrillic', 'cyrillic-ext'] });
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-inter',
});

export const heroFontVars = inter.variable;

// Anton has no Cyrillic. next/font lists an Arial-based fallback right after each family, which would
// catch those letters before Oswald, so the heading stack names the two real families only.
const family = (f: typeof anton) => f.style.fontFamily.split(',')[0];
export const heroHeadFont = [family(anton), family(oswald), 'Impact', 'sans-serif'].join(', ');
