import Link from 'next/link';
import type { CodingVals } from '../CodingPage';

export default function Footer({ v }: { v: CodingVals }) {
  const { footerNav, t } = v;
  return (
    <footer className="cfoot">
      <nav aria-label="Footer">
        <Link href="/">{t.navHome}</Link>
        {footerNav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p className="cfoot-phone">{t.phone} (+976) 88971747</p>
      <p className="cfoot-copy">© 2026 MindMaze · {t.footer}</p>
    </footer>
  );
}
