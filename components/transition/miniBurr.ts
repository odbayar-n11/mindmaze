import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { BURR_ORDER, BURR_PIECES, addBurrLights, burrMaterial } from '@/components/puzzles/burr';

/**
 * The little wooden burr that assembles itself in the middle of the page transition.
 * Same pieces, wood and lights as the puzzle site's big 3D burr (three.js).
 */
export class MiniBurr {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  private group = new THREE.Group();
  private geo = new RoundedBoxGeometry(7, 2, 2, 4, 0.22);
  private pieces: { mesh: THREE.Mesh; startP: THREE.Vector3; endP: THREE.Vector3; startQ: THREE.Quaternion; endQ: THREE.Quaternion }[];
  private raf = 0;
  private t0 = 0;

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.camera.position.set(0, 0, 30);
    addBurrLights(this.scene);
    this.scene.add(this.group);
    // once the wood has loaded, draw one frame while the overlay is hidden so shaders and
    // textures are on the GPU before the first transition
    const loader = new THREE.TextureLoader(new THREE.LoadingManager(() => this.renderOnce()));
    const maxAniso = this.renderer.capabilities.getMaxAnisotropy();
    this.pieces = BURR_PIECES.map((d, i) => {
      const mesh = new THREE.Mesh(this.geo, burrMaterial(loader, i + 3, maxAniso, 0.8 + (i % 3) * 0.025));
      const rot = new THREE.Euler();
      if (d.axis === 'y') rot.set(0, 0, Math.PI / 2);
      if (d.axis === 'z') rot.set(0, Math.PI / 2, 0);
      const endQ = new THREE.Quaternion().setFromEuler(rot);
      const endP = new THREE.Vector3(...d.pos);
      const dir = new THREE.Vector3(d.axis === 'x' ? 1 : 0, d.axis === 'y' ? 1 : 0, d.axis === 'z' ? 1 : 0).multiplyScalar(i % 2 ? -1 : 1);
      const startP = endP.clone().add(dir.multiplyScalar(5.5));
      const startQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.6 * (i % 2 ? 1 : -1), 0.4 + i * 0.5, -0.5 + i * 0.3)).multiply(endQ);
      this.group.add(mesh);
      return { mesh, startP, endP, startQ, endQ };
    });
    this.resize();
  }

  private resize() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private renderOnce() {
    this.resize();
    this.renderer.render(this.scene, this.camera);
  }

  /** Assembles over `duration` ms, then keeps turning until stop(). */
  play(duration = 1000) {
    cancelAnimationFrame(this.raf);
    this.resize();
    this.t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const clamp = (v: number) => Math.max(0, Math.min(1, v));
    const frame = (now: number) => {
      const s = (now - this.t0) / duration;
      BURR_ORDER.forEach((idx, k) => {
        const pc = this.pieces[idx];
        const t = ease(clamp((s - k * 0.09) / 0.5));
        pc.mesh.position.lerpVectors(pc.startP, pc.endP, t);
        pc.mesh.quaternion.copy(pc.startQ).slerp(pc.endQ, t);
      });
      const secs = (now - this.t0) / 1000;
      this.group.rotation.set(0.5 + Math.sin(secs * 1.1) * 0.06, -0.65 + secs * 1.4, 0.08);
      this.renderer.render(this.scene, this.camera);
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  stop() {
    cancelAnimationFrame(this.raf);
  }

  dispose() {
    this.stop();
    this.geo.dispose();
    this.pieces.forEach(({ mesh }) => {
      const m = mesh.material as THREE.MeshStandardMaterial;
      m.map?.dispose();
      m.bumpMap?.dispose();
      m.dispose();
    });
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }
}
