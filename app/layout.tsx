import type { Metadata, Viewport } from 'next';
import PageTransition from '@/components/transition/PageTransition';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'MindMaze', template: '%s · MindMaze' },
  description: 'Mongolian heritage, one puzzle at a time. Traditional wooden puzzles and coding classes for children in Mongolia.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1528',
};

// The same Google Fonts the designs use (Cyrillic subsets included for the Mongolian text).
const FONTS =
  'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&family=Instrument+Serif:ital@0;1&family=Noto+Sans+Mongolian&display=swap';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
