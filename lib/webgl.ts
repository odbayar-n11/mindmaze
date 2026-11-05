/**
 * Getting a WebGL context that actually works, before three.js is handed it.
 *
 * Browsers can give back a context that is already lost: Safari does when too many contexts are
 * open or its GPU process has reset, and any browser does for a canvas whose context was released
 * with WEBGL_lose_context (three's renderer.forceContextLoss) and is then reused. three.js r128
 * does not check, and crashes in its constructor ("gl.getShaderPrecisionFormat(...) is null").
 *
 * acquireContext returns a live context (restoring a lost one when the browser allows it),
 * or null when WebGL is not available, so callers can show a still fallback instead.
 */
export type GL = WebGLRenderingContext | WebGL2RenderingContext;

/** The attributes three.js's WebGLRenderer asks for by default, plus the caller's. */
function attributes(extra: WebGLContextAttributes): WebGLContextAttributes {
  return {
    alpha: false,
    depth: true,
    stencil: true,
    antialias: false,
    premultipliedAlpha: true,
    preserveDrawingBuffer: false,
    powerPreference: 'default',
    failIfMajorPerformanceCaveat: false,
    ...extra,
  };
}

function getContext(canvas: HTMLCanvasElement, attrs: WebGLContextAttributes): GL | null {
  try {
    return (
      (canvas.getContext('webgl2', attrs) as WebGL2RenderingContext | null) ??
      (canvas.getContext('webgl', attrs) as WebGLRenderingContext | null)
    );
  } catch {
    return null;
  }
}

/** Waits for a lost context to come back, up to `timeoutMs`. */
function restore(canvas: HTMLCanvasElement, gl: GL, timeoutMs: number): Promise<boolean> {
  const ext = gl.getExtension('WEBGL_lose_context');
  return new Promise((resolve) => {
    let done = false;
    const finish = (ok: boolean) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      resolve(ok);
    };
    const onRestored = () => finish(true);
    canvas.addEventListener('webglcontextrestored', onRestored);
    const timer = setTimeout(() => finish(!gl.isContextLost()), timeoutMs);
    try {
      // only works when the context was lost through this extension; otherwise the browser restores it
      // on its own (if it can), which also fires webglcontextrestored
      ext?.restoreContext();
    } catch {
      /* not restorable this way */
    }
  });
}

export async function acquireContext(
  canvas: HTMLCanvasElement,
  extra: WebGLContextAttributes = {},
  timeoutMs = 1500,
): Promise<GL | null> {
  const gl = getContext(canvas, attributes(extra));
  if (!gl) return null;
  if (!gl.isContextLost()) return gl;
  return (await restore(canvas, gl, timeoutMs)) && !gl.isContextLost() ? gl : null;
}
