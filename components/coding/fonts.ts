import { Anton, Inter, JetBrains_Mono, Oswald } from 'next/font/google';

// Mongolian needs cyrillic-ext for Ө and Ү.
const anton = Anton({ weight: '400', subsets: ['latin'] });
const oswald = Oswald({ weight: '700', subsets: ['latin', 'cyrillic', 'cyrillic-ext'] });
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-inter',
});
const mono = JetBrains_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-mono' });

export const fontVars = [inter, mono].map((f) => f.variable).join(' ');

// Anton has no Cyrillic. next/font lists an Arial-based fallback right after each family, which would
// catch those letters before Oswald, so the heading stack names the two real families only.
const family = (f: typeof anton) => f.style.fontFamily.split(',')[0];
export const headFont = [family(anton), family(oswald), 'Impact', 'sans-serif'].join(', ');
