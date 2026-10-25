/**
 * Lets a page ask the page transition to keep the cover up a moment longer, e.g. while it
 * sets up WebGL, so the reveal never stutters. Pages that need nothing never call it.
 */
let gate: Promise<void> | null = null;

/** Call while mounting; call the returned function once the page is ready to be seen. */
export function holdReveal(): () => void {
  let release = () => {};
  const p = new Promise<void>((r) => (release = r));
  gate = p;
  return () => {
    release();
    if (gate === p) gate = null;
  };
}

/** Resolves when the page that just mounted is ready, or after `maxMs` at the latest. */
export function revealGate(maxMs: number): Promise<void> {
  if (!gate) return Promise.resolve();
  return Promise.race([gate, new Promise<void>((r) => setTimeout(r, maxMs))]);
}
