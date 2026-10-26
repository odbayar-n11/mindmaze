import * as THREE from 'three';
import { prefersReducedMotion } from '@/lib/motion';

/**
 * "Projects we shaped": a loop of film seen close up, after shader.se's selected-work reel.
 *
 * The numbers below were measured from a recording of that reel (sprocket holes, frame edges and
 * the outline of the loop were fitted to a camera + loop model):
 * - the loop is a band standing upright, slightly wider than deep, whose height rises toward the
 *   back right, so the band climbs across the stage and the inside of the far side shows above it;
 * - the camera is very close (1.68 × the loop's depth radius) with a wide lens, so the front frame is
 *   large and the frames bunch up toward both ends;
 * - the loop itself never moves: the film slides along it, one frame per step, on a damped spring
 *   (ω 10.1 rad/s, ζ 0.81: ~0.4 s, a hair of overshoot), and fast movement leaves fading ghost
 *   exposures one display frame apart;
 * - the inside of the far side fades out toward the back left, where the film's join is hidden.
 */

// ---------------------------------------------------------------- loop geometry (depth radius = 1)
const FRAMES = 14; // frames around the loop
const PHI = (Math.PI * 2) / FRAMES; // angle of one frame
const HOLES = 20; // sprocket holes per frame (each edge)
const AX = 1.126; // the loop is this much wider than deep
const BAND = 0.3763; // band height
const FRONT = -0.0913; // angle at which the current frame is centred
const SEAM = FRONT - 2.36; // where the strip joins: at the back left, inside the faded part
/** Height of the band's centre line around the loop (angle 0 faces the camera, +π/2 is right). */
const lift = (t: number) =>
  0.2275 * Math.sin(t) - 0.2922 * Math.cos(t) - 0.018 * Math.sin(2 * t) + 0.0587 * Math.cos(2 * t);

// ---------------------------------------------------------------- camera
const CAM = new THREE.Vector3(-0.168, -0.2036, 1.6686);
const LOOK = new THREE.Vector3(-0.007, -0.2417, 0);
const CAM_ROLL = -0.0384;
const TAN_H = 1.0202; // tan of half the horizontal field of view, on a 2:1 stage
const REF_ASPECT = 2;

// ---------------------------------------------------------------- film layout
const STRIP_TOP = 0.071; // edge strips, as a share of the band height (the top one is a bit deeper)
const STRIP_BOT = 0.06;
const GAP = 1; // black gap between pictures, in hole pitches
const HOLE_W = 0.47; // hole width, in hole pitches
const HOLE_H = 0.0313; // hole height, as a share of the band height (square on the front)
const PITCH_TO_BAND = ((PHI / HOLES) * AX) / BAND; // one pitch at the front, in band heights
const PHOTO_ASPECT = (((HOLES - GAP) / HOLES) * (PHI * AX)) / (BAND * (1 - STRIP_TOP - STRIP_BOT));

// ---------------------------------------------------------------- motion
const SPRING_W = 10.14;
const SPRING_Z = 0.81;
const ECHOES = 3; // ghost exposures behind the current one while moving
const ECHO_STEP = 1 / 60; // seconds between exposures
const ECHO_KEEP = 0.34; // how much of the previous exposure survives each step

const vertexShader = /* glsl */ `
  attribute float aTheta;
  attribute float aV;
  varying float vTheta;
  varying float vV;
  varying vec3 vN;
  varying vec3 vP;
  void main() {
    vTheta = aTheta;
    vV = aV;
    vN = normal;
    vP = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uAtlas;
  uniform vec2 uGrid;      // atlas columns, rows
  uniform vec4 uInner;     // sampled part of a tile: u0, v0, du, dv (share of a tile)
  uniform float uCount;    // number of projects
  uniform float uScroll;   // film position, in frames
  uniform float uAlpha;    // opacity of this exposure
  uniform float uLoaded;
  uniform vec3 uCam;
  uniform vec2 uRes;
  uniform float uInside;   // 1 for the inside of the loop (three flips gl_FrontFacing for BackSide)
  varying float vTheta;
  varying float vV;
  varying vec3 vN;
  varying vec3 vP;

  const float PI2 = 6.28318530718;
  const float PHI = ${PHI.toFixed(8)};
  const float FRONT = ${FRONT.toFixed(6)};
  const float HOLES = ${HOLES.toFixed(1)};
  const float STRIP_TOP = ${STRIP_TOP.toFixed(5)};
  const float STRIP_BOT = ${STRIP_BOT.toFixed(5)};
  const float GAP = ${GAP.toFixed(3)};
  const float HOLE_W = ${HOLE_W.toFixed(4)};
  const float HOLE_H = ${HOLE_H.toFixed(5)};
  const float P2B = ${PITCH_TO_BAND.toFixed(6)};

  float roundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  vec3 photo(vec2 uv, float project) {
    float col = mod(project, uGrid.x);
    float row = floor(project / uGrid.x);
    vec2 t = uInner.xy + uv * uInner.zw;
    vec2 a = vec2((col + t.x) / uGrid.x, 1.0 - (row + 1.0 - t.y) / uGrid.y);
    return texture2D(uAtlas, a).rgb;
  }

  void main() {
    // which frame of the film is here, and where inside it
    float k = (vTheta - FRONT) / PHI + uScroll + 0.5;
    float cell = floor(k);
    float lx = k - cell;

    // sprocket holes, punched through both edge strips
    float hx = (fract(lx * HOLES) - 0.5) * P2B;
    float strip = vV < 0.5 ? STRIP_BOT : STRIP_TOP;
    float ey = min(vV, 1.0 - vV);
    float d = roundBox(vec2(hx, ey - strip * 0.5), vec2(HOLE_W * 0.5 * P2B, HOLE_H * 0.5), HOLE_H * 0.1);
    float aa = max(fwidth(d), 1e-5);
    float alpha = smoothstep(-aa, aa, d);

    // film base, and the picture in its window
    vec3 c = vec3(0.052, 0.052, 0.058);
    float g = GAP * 0.5 / HOLES;
    vec2 uv = vec2((lx - g) / (1.0 - 2.0 * g), (vV - STRIP_BOT) / (1.0 - STRIP_TOP - STRIP_BOT));
    if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) {
      float project = mod(cell, uCount);
      // a touch of colour fringing toward the sides, as on the reference's screen
      float side = (gl_FragCoord.x / uRes.x - 0.5) * 2.0;
      float du = fwidth(uv.x) * 1.6 * side;
      vec3 p = vec3(
        photo(clamp(uv + vec2(du, 0.0), 0.0, 1.0), project).r,
        photo(uv, project).g,
        photo(clamp(uv - vec2(du, 0.0), 0.0, 1.0), project).b
      );
      c = mix(vec3(0.085, 0.085, 0.092), p, uLoaded);
    }

    // light: full where the film faces us, falling away toward both ends of the loop;
    // the inside of the far side is dimmer and fades out toward the back left
    vec3 n = normalize(vN);
    float facing = abs(dot(n, normalize(uCam - vP)));
    if (uInside < 0.5) {
      c *= mix(0.04, 1.0, pow(facing, 0.6));
    } else {
      c *= 0.64 * mix(0.6, 1.0, facing);
      alpha *= 1.0 - smoothstep(3.1, 3.7, mod(vTheta, PI2));
    }
    alpha *= uAlpha;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(c * alpha, alpha);
  }
`;

export type FilmReelOptions = {
  images: string[];
  /** The project now heading for the front (called as soon as a step starts). */
  onIndex?: (projectIndex: number) => void;
  /** Film position every frame, in frames (unbounded; project = position mod count). */
  onScroll?: (position: number) => void;
};

/** Builds the band: an upright strip around the loop, outward normals, angle + height per vertex. */
function bandGeometry(): THREE.BufferGeometry {
  const seg = FRAMES * 28;
  const pos: number[] = [];
  const nor: number[] = [];
  const theta: number[] = [];
  const v: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= seg; i++) {
    const t = SEAM + (i / seg) * Math.PI * 2;
    const x = AX * Math.sin(t);
    const z = Math.cos(t);
    const y = lift(t);
    const n = new THREE.Vector3(Math.sin(t), 0, AX * Math.cos(t)).normalize();
    for (const s of [0, 1]) {
      pos.push(x, y + (s - 0.5) * BAND, z);
      nor.push(n.x, n.y, n.z);
      theta.push(t);
      v.push(s);
    }
    if (i < seg) {
      const a = i * 2;
      // wound so the outside of the loop is the front face
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('aTheta', new THREE.Float32BufferAttribute(theta, 1));
  g.setAttribute('aV', new THREE.Float32BufferAttribute(v, 1));
  g.setIndex(idx);
  return g;
}

/** All project screens on one texture, each cropped to the film window (kept to the top). */
function buildAtlas(imgs: HTMLImageElement[], maxSize: number) {
  const n = Math.max(1, imgs.length);
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  let tw = 1024;
  while ((tw * cols > maxSize || Math.round(tw / PHOTO_ASPECT) * rows > maxSize) && tw > 128) tw /= 2;
  const th = Math.round(tw / PHOTO_ASPECT);
  const pad = Math.round(tw / 64); // bleed so mipmaps don't mix neighbouring screens
  const c = document.createElement('canvas');
  c.width = tw * cols;
  c.height = th * rows;
  const g = c.getContext('2d')!;
  g.fillStyle = '#16161a';
  g.fillRect(0, 0, c.width, c.height);
  imgs.forEach((img, i) => {
    if (!img.naturalWidth) return;
    const x0 = (i % cols) * tw;
    const y0 = Math.floor(i / cols) * th;
    const iw0 = tw - 2 * pad;
    const ih0 = th - 2 * pad;
    const s = Math.max(iw0 / img.naturalWidth, ih0 / img.naturalHeight);
    const iw = img.naturalWidth * s;
    const ih = img.naturalHeight * s;
    const ix = x0 + pad + (iw0 - iw) / 2;
    const iy = y0 + pad; // keep the top of the screen (its browser bar)
    g.save();
    g.beginPath();
    g.rect(x0, y0, tw, th);
    g.clip();
    // smear the edge pixels into the bleed, then the picture itself
    g.drawImage(img, ix - pad, iy - pad, iw + 2 * pad, ih + 2 * pad);
    g.drawImage(img, ix, iy, iw, ih);
    g.restore();
  });
  return {
    canvas: c,
    grid: new THREE.Vector2(cols, rows),
    inner: new THREE.Vector4(pad / tw, pad / th, 1 - (2 * pad) / tw, 1 - (2 * pad) / th),
  };
}

export class FilmReel {
  private renderer: THREE.WebGLRenderer;
  private camera = new THREE.PerspectiveCamera(54, 2, 0.05, 20);
  private outside = new THREE.Scene();
  private inside = new THREE.Scene();
  private geo = bandGeometry();
  private matOut: THREE.ShaderMaterial;
  private matIn: THREE.ShaderMaterial;
  private atlas: THREE.Texture | null = null;
  private reduce = prefersReducedMotion();
  private count: number;

  // film position (in frames) on a spring toward `target`
  private target = 0;
  private pos = 0;
  private vel = 0;
  private history: { t: number; p: number }[] = [];
  private dragging = false;
  private raf = 0;
  private last = 0;
  private visible = true;
  private disposed = false;
  private io: IntersectionObserver;
  private ro: ResizeObserver;
  private off: (() => void)[] = [];

  constructor(
    private canvas: HTMLCanvasElement,
    private opts: FilmReelOptions,
  ) {
    this.count = Math.max(1, opts.images.length);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.autoClear = false;

    const uniforms = (inside: number) => ({
      uInside: { value: inside },
      uAtlas: { value: null as THREE.Texture | null },
      uGrid: { value: new THREE.Vector2(1, 1) },
      uInner: { value: new THREE.Vector4(0, 0, 1, 1) },
      uCount: { value: this.count },
      uScroll: { value: 0 },
      uAlpha: { value: 1 },
      uLoaded: { value: 0 },
      uCam: { value: CAM.clone() },
      uRes: { value: new THREE.Vector2(1, 1) },
    });
    const make = (side: THREE.Side) =>
      new THREE.ShaderMaterial({
        uniforms: uniforms(side === THREE.BackSide ? 1 : 0),
        vertexShader,
        fragmentShader,
        side,
        transparent: true,
        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
        blendSrcAlpha: THREE.OneFactor,
        blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
        depthTest: true,
        depthWrite: true,
        depthFunc: THREE.LessEqualDepth,
        extensions: { derivatives: true } as THREE.ShaderMaterial['extensions'],
      });
    this.matOut = make(THREE.FrontSide);
    this.matIn = make(THREE.BackSide);
    const meshOut = new THREE.Mesh(this.geo, this.matOut);
    const meshIn = new THREE.Mesh(this.geo, this.matIn);
    meshOut.frustumCulled = meshIn.frustumCulled = false;
    this.outside.add(meshOut);
    this.inside.add(meshIn);

    this.loadImages();
    this.applyCamera();

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    this.io = new IntersectionObserver(([e]) => {
      this.visible = e.isIntersecting;
      this.wake();
    });
    this.io.observe(canvas);
    this.bindDrag();
    this.resize();
  }

  /** Project at the front (or on its way there). */
  get index(): number {
    return ((this.target % this.count) + this.count) % this.count;
  }

  next() {
    this.goToStep(this.target + 1);
  }

  prev() {
    this.goToStep(this.target - 1);
  }

  /** Rolls the shortest way to project `i`. */
  goTo(i: number) {
    let d = (((i - this.index) % this.count) + this.count) % this.count;
    if (d > this.count / 2) d -= this.count;
    this.goToStep(this.target + d);
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.off.forEach((f) => f());
    this.io.disconnect();
    this.ro.disconnect();
    this.geo.dispose();
    this.matOut.dispose();
    this.matIn.dispose();
    this.atlas?.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }

  // ------------------------------------------------------------------ setup
  private loadImages() {
    const loads = this.opts.images.map(
      (src) =>
        new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.decoding = 'async';
          img.onload = () => resolve(img);
          img.onerror = () => resolve(img);
          img.src = src;
        }),
    );
    Promise.all(loads).then((imgs) => {
      if (this.disposed) return;
      const max = Math.min(this.renderer.capabilities.maxTextureSize, 4096);
      const a = buildAtlas(imgs, max);
      const tex = new THREE.CanvasTexture(a.canvas);
      tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.generateMipmaps = true;
      tex.encoding = THREE.LinearEncoding;
      this.atlas = tex;
      for (const m of [this.matOut, this.matIn]) {
        m.uniforms.uAtlas.value = tex;
        m.uniforms.uGrid.value = a.grid;
        m.uniforms.uInner.value = a.inner;
        m.uniforms.uLoaded.value = 1;
      }
      this.render();
    });
  }

  private goToStep(s: number) {
    if (s === this.target) return;
    this.target = s;
    this.opts.onIndex?.(this.index);
    if (this.reduce) {
      this.pos = s;
      this.vel = 0;
      this.history = [];
      this.render();
      this.opts.onScroll?.(this.pos);
      return;
    }
    this.wake();
  }

  /** On-screen width of the front frame, in CSS pixels. */
  private frameWidth() {
    return 0.359 * this.zoom() * (this.canvas.clientWidth || 1);
  }

  private zoom() {
    const w = this.canvas.clientWidth || 1;
    return w < 560 ? 1.65 : w < 900 ? 1.3 : 1;
  }

  private applyCamera() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    const aspect = w / h;
    // the reference framing on a 2:1 stage; narrower stages keep its width (zoomed in on small
    // screens so the front frame stays big), wider ones keep its height
    const tanH = TAN_H / this.zoom();
    const tanV = Math.max(tanH / aspect, TAN_H / REF_ASPECT / this.zoom());
    this.camera.fov = (2 * Math.atan(tanV) * 180) / Math.PI;
    this.camera.aspect = aspect;
    this.camera.position.copy(CAM);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(LOOK);
    this.camera.rotateZ(CAM_ROLL);
    this.camera.updateProjectionMatrix();
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.matOut.uniforms.uRes.value.copy(size);
    this.matIn.uniforms.uRes.value.copy(size);
  }

  private resize() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.applyCamera();
    this.render();
  }

  private bindDrag() {
    const c = this.canvas;
    let x0 = 0;
    let p0 = 0;
    let lastX = 0;
    let lastT = 0;
    let v = 0; // frames per second
    const down = (e: PointerEvent) => {
      if (e.button !== 0) return;
      this.dragging = true;
      x0 = lastX = e.clientX;
      lastT = performance.now();
      p0 = this.pos;
      v = 0;
      c.setPointerCapture(e.pointerId);
      this.wake();
    };
    const move = (e: PointerEvent) => {
      if (!this.dragging) return;
      const now = performance.now();
      const dt = Math.max(1, now - lastT) / 1000;
      const fw = this.frameWidth();
      v = 0.6 * v + 0.4 * (-(e.clientX - lastX) / fw / dt);
      lastX = e.clientX;
      lastT = now;
      this.pos = p0 - (e.clientX - x0) / fw;
      this.vel = v;
    };
    const up = () => {
      if (!this.dragging) return;
      this.dragging = false;
      // throw: carry the release speed a little further, then settle on a frame
      const s = Math.round(this.pos + THREE.MathUtils.clamp(v, -12, 12) * 0.12);
      if (s !== this.target) {
        this.target = s;
        this.opts.onIndex?.(this.index);
      }
      this.wake();
    };
    c.addEventListener('pointerdown', down);
    c.addEventListener('pointermove', move);
    c.addEventListener('pointerup', up);
    c.addEventListener('pointercancel', up);
    this.off.push(() => {
      c.removeEventListener('pointerdown', down);
      c.removeEventListener('pointermove', move);
      c.removeEventListener('pointerup', up);
      c.removeEventListener('pointercancel', up);
    });
  }

  // ------------------------------------------------------------------ animation
  private wake() {
    if (this.raf || !this.visible) return;
    this.last = performance.now();
    this.history = [{ t: this.last / 1000, p: this.pos }];
    this.raf = requestAnimationFrame(this.tick);
  }

  private tick = (now: number) => {
    const dt = Math.min(1 / 15, Math.max(0, (now - this.last) / 1000));
    this.last = now;

    if (!this.dragging) {
      // damped spring toward the target frame, integrated in small steps
      const steps = Math.max(1, Math.ceil(dt / (1 / 240)));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        const a = SPRING_W * SPRING_W * (this.target - this.pos) - 2 * SPRING_Z * SPRING_W * this.vel;
        this.vel += a * h;
        this.pos += this.vel * h;
      }
    }
    const t = now / 1000;
    this.history.push({ t, p: this.pos });
    while (this.history.length > 2 && this.history[1].t < t - (ECHOES + 1) * ECHO_STEP) this.history.shift();

    const moving = this.dragging || Math.abs(this.target - this.pos) > 2e-4 || Math.abs(this.vel) > 2e-3;
    if (!moving) {
      this.pos = this.target;
      this.vel = 0;
      this.history = [];
    }
    this.render();
    this.opts.onScroll?.(this.pos);

    if (moving && this.visible) this.raf = requestAnimationFrame(this.tick);
    else this.raf = 0;
  };

  /** Film position at time `t` (seconds), from the recorded frames. */
  private posAt(t: number) {
    const h = this.history;
    if (!h.length) return this.pos;
    if (t <= h[0].t) return h[0].p;
    for (let i = h.length - 1; i > 0; i--) {
      if (h[i - 1].t <= t) {
        const a = h[i - 1];
        const b = h[i];
        const f = b.t > a.t ? (t - a.t) / (b.t - a.t) : 1;
        return a.p + (b.p - a.p) * Math.min(1, f);
      }
    }
    return h[h.length - 1].p;
  }

  private render() {
    if (this.disposed) return;
    const r = this.renderer;
    r.clear(true, true, true);
    // exposures, oldest first: the oldest is opaque, each newer one covers it by (1 - ECHO_KEEP),
    // which leaves the same mix as a screen whose glow fades by ECHO_KEEP every frame
    const h = this.history;
    const now = h.length ? h[h.length - 1].t : 0;
    const shots: { p: number; a: number }[] = [];
    if (h.length > 1 && !this.reduce) {
      for (let k = ECHOES; k >= 0; k--) {
        shots.push({ p: this.posAt(now - k * ECHO_STEP), a: k === ECHOES ? 1 : 1 - ECHO_KEEP });
      }
    } else {
      shots.push({ p: this.pos, a: 1 });
    }
    for (const s of shots) {
      for (const m of [this.matIn, this.matOut]) {
        m.uniforms.uScroll.value = s.p;
        m.uniforms.uAlpha.value = s.a;
      }
      r.render(this.inside, this.camera);
      r.render(this.outside, this.camera);
    }
  }
}
