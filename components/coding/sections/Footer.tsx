import type { CodingVals } from '../CodingPage';

export default function Footer({ v }: { v: CodingVals }) {
  const { t } = v;
  return (
    <footer
      style={{
        padding: '28px max(clamp(24px, 5vw, 64px), calc((100% - 1360px) / 2)) 36px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        color: '#3F3C37',
      }}
    >
      <span
        role="img"
        aria-label="MindMaze"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
      >
        <img
          src="/media/8fb025e091aabb1d723561900d54644c.png"
          alt=""
          style={{ display: 'block', height: '28px', width: 'auto' }}
        />
        <img
          src="/media/ae10309f969d5f60013518d57aecf962.png"
          alt=""
          style={{ display: 'block', height: '28px', width: 'auto' }}
        />
      </span>
      <p style={{ margin: '0', fontSize: '15px', letterSpacing: '0.08em' }}>© 2026 MindMaze · {t.footer}</p>
    </footer>
  );
}
