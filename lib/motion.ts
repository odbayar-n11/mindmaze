/** Small animation helpers shared by the pages. */

export function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

/**
 * An endless sliding row of pictures. The track holds two identical halves; it moves at
 * `speed` px/s in `dir` and wraps by one half, so the loop never shows a seam.
 * `next()` glides ahead by about half a screen (the round arrow button).
 */
export class MarqueeRow {
  private el: HTMLElement | null = null;
  private x: number | null = null;
  private last = 0;
  private raf = 0;
  private kick = 0;
  paused = false;

  constructor(
    private dir: 1 | -1,
    private speed = 40,
  ) {}

  /** Callback ref for the track element. */
  attach = (el: HTMLElement | null): void => {
    if (el && el !== this.el) this.start(el);
    else if (!el) this.stop();
  };

  pause = (): void => {
    this.paused = true;
  };

  play = (): void => {
    this.paused = false;
  };

  next = (): void => {
    if (this.el?.parentElement) this.kick += Math.max(260, Math.min(560, this.el.parentElement.clientWidth * 0.5));
  };

  private start(el: HTMLElement) {
    this.stop();
    this.el = el;
    this.x = null;
    this.last = 0;
    const tick = (now: number) => {
      if (this.el !== el) return;
      this.raf = requestAnimationFrame(tick);
      const dt = this.last ? Math.min(0.05, (now - this.last) / 1000) : 0;
      this.last = now;
      const half = el.scrollWidth / 2;
      if (!half) return;
      if (this.x === null) this.x = this.dir > 0 ? -half : 0;
      if (!this.paused) this.x += this.dir * this.speed * dt;
      if (this.kick > 0.5) {
        const mv = Math.min(this.kick, Math.max(2, this.kick * Math.min(1, dt * 7)));
        this.x += this.dir * mv;
        this.kick -= mv;
      }
      if (this.x <= -half) this.x += half;
      if (this.x > 0) this.x -= half;
      el.style.transform = 'translate3d(' + this.x.toFixed(2) + 'px,0,0)';
    };
    this.raf = requestAnimationFrame(tick);
  }

  stop(): void {
    cancelAnimationFrame(this.raf);
    this.el = null;
  }
}

/** A column of pictures drifting slowly downward forever (two identical halves, like MarqueeRow). */
export class VerticalLoop {
  private el: HTMLElement | null = null;
  private y: number | null = null;
  private last = 0;
  private raf = 0;
  paused = false;

  constructor(private speed = 36) {}

  attach = (el: HTMLElement | null): void => {
    this.stop();
    if (!el) return;
    this.el = el;
    this.y = null;
    this.last = 0;
    const still = prefersReducedMotion();
    const tick = (now: number) => {
      if (this.el !== el) return;
      this.raf = requestAnimationFrame(tick);
      const dt = this.last ? Math.min(0.05, (now - this.last) / 1000) : 0;
      this.last = now;
      const half = el.scrollHeight / 2;
      if (!half) return;
      if (this.y === null) this.y = -half;
      if (!this.paused && !still) this.y += this.speed * dt;
      if (this.y >= 0) this.y -= half;
      el.style.transform = 'translate3d(0,' + this.y.toFixed(2) + 'px,0)';
    };
    this.raf = requestAnimationFrame(tick);
  };

  pause = (): void => {
    this.paused = true;
  };

  play = (): void => {
    this.paused = false;
  };

  stop(): void {
    cancelAnimationFrame(this.raf);
    this.el = null;
  }
}
