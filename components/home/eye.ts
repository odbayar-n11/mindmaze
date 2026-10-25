import { prefersReducedMotion } from '@/lib/motion';

/**
 * The hero eye: a photo of an eye that blinks into a watercolor drawing (with the burr
 * puzzle as the iris) and blinks back again, on a 10.5 s loop.
 * The lids, lashes and clip path are SVG paths redrawn every frame from the openness `k`.
 * Returns a function that stops the animation.
 */
export function animateEye(root: Element): () => void {
  const q = <T extends Element>(n: string) => root.querySelector<T>('[data-eye="' + n + '"]');
  const photo = q<SVGElement>('photo');
  const drawing = q<SVGElement>('draw');
  const sprite = q<SVGElement>('sprite');
  const clip = q<SVGPathElement>('clip');
  const upper = q<SVGPathElement>('upper');
  const lower = q<SVGPathElement>('lower');
  const shadow = q<SVGPathElement>('shadow');
  const lash = q<SVGPathElement>('lash');
  const lowlash = q<SVGPathElement>('lowlash');
  if (!photo || !drawing || !sprite || !clip || !upper || !lower || !shadow || !lash || !lowlash) return () => {};

  const bez = (t: number, y: number) => {
    const a = 1 - t;
    return [a * a * 90 + 2 * a * t * 500 + t * t * 910, a * a * 320 + 2 * a * t * y + t * t * 320];
  };
  const tan = (t: number, y: number) => [2 * (1 - t) * 410 + 2 * t * 410, 2 * (1 - t) * (y - 320) + 2 * t * (320 - y)];

  const draw = (k: number) => {
    const uy = 380 - 430 * k;
    const ly = 380 + 190 * k;
    const up = 'M90,320 Q500,' + uy.toFixed(1) + ' 910,320';
    const lo = 'M90,320 Q500,' + ly.toFixed(1) + ' 910,320';
    clip.setAttribute('d', up + ' Q500,' + ly.toFixed(1) + ' 90,320 Z');
    upper.setAttribute('d', up);
    shadow.setAttribute('d', up);
    lower.setAttribute('d', lo);
    let d = '';
    for (let i = 0; i <= 44; i++) {
      const t = 0.06 + (0.88 * i) / 44;
      const p = bez(t, uy);
      const g = tan(t, uy);
      const len = Math.hypot(g[0], g[1]) || 1;
      let nx = g[1] / len;
      let ny = -g[0] / len;
      if (ny > 0) {
        nx = -nx;
        ny = -ny;
      }
      const jit = 0.72 + (0.5 * (((Math.sin(i * 12.9898) * 43758.5453) % 1) + 1)) % 1;
      const L = (24 + 40 * Math.sin(Math.PI * t)) * jit * (0.55 + 0.45 * k);
      const lean = (t - 0.5) * 1.1 + (jit - 0.97) * 0.4;
      const ex = p[0] + nx * L + lean * L;
      const ey = p[1] + ny * L * (k > 0.25 ? 1 : -0.6);
      const mx = p[0] + nx * L * 0.5 + lean * L * 0.2;
      const my = p[1] + ny * L * 0.6 * (k > 0.25 ? 1 : -0.6);
      d += 'M' + p[0].toFixed(1) + ',' + p[1].toFixed(1) + ' Q' + mx.toFixed(1) + ',' + my.toFixed(1) + ' ' + ex.toFixed(1) + ',' + ey.toFixed(1);
    }
    lash.setAttribute('d', d);
    let dl = '';
    if (k > 0.2) {
      for (let i = 0; i <= 26; i++) {
        const t = 0.14 + (0.72 * i) / 26;
        const p = bez(t, ly);
        const L = (8 + 12 * Math.sin(Math.PI * t)) * k;
        const lean = (t - 0.5) * 0.6;
        dl += 'M' + p[0].toFixed(1) + ',' + (p[1] + 2).toFixed(1) + ' l' + (lean * L).toFixed(1) + ',' + L.toFixed(1);
      }
    }
    lowlash.setAttribute('d', dl);
  };

  draw(1);
  if (prefersReducedMotion()) return () => {};

  // a 1 s blink: u runs 0..1, the lid closes, holds, then opens
  const blinkK = (u: number) => {
    const e = u < 0.4 ? u / 0.4 : u < 0.55 ? 1 : 1 - (u - 0.55) / 0.45;
    return 1 - (0.5 - 0.5 * Math.cos(Math.PI * e));
  };
  let raf = 0;
  let showing: boolean | undefined;
  const t0 = performance.now();
  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    const secs = (now - t0) / 1000;
    const t = secs % 10.5; // photo 4 s, blink, drawing 4.5 s, blink
    let k = 1;
    let showDraw: boolean;
    if (t < 4) showDraw = false;
    else if (t < 5) {
      k = blinkK(t - 4);
      showDraw = t - 4 > 0.47;
    } else if (t < 9.5) showDraw = true;
    else {
      k = blinkK(t - 9.5);
      showDraw = t - 9.5 <= 0.47;
    }
    if (showDraw !== showing) {
      showing = showDraw;
      photo.style.display = showDraw ? 'none' : '';
      drawing.style.display = showDraw ? '' : 'none';
    }
    if (showDraw) {
      const a = (secs * 45) % 360; // watercolor burr: one full turn every 8 s
      sprite.setAttribute('transform', 'rotate(' + a.toFixed(2) + ' 500 298)');
    }
    draw(k);
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}
