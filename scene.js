import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

const PALETTE = [0x1b1e22, 0x24282d, 0x2f343a, 0xb4642a, 0xd98033, 0x3b4249, 0x8e9298];

class YardScene extends HTMLElement {
  connectedCallback() {
    if (this._started) return;
    this._started = true;
    const BG = 0x090a0c;
    this.style.display = 'block';

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(BG, 1);
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    this.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 18, 130);

    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 400);

    scene.add(new THREE.AmbientLight(0x5a6b7a, 0.55));
    const key = new THREE.DirectionalLight(0xfff0dd, 1.15);
    key.position.set(-14, 26, 10);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x6fa8d8, 0.5);
    rim.position.set(16, 8, -20);
    scene.add(rim);
    const spark = new THREE.PointLight(0xd98033, 60, 40);
    scene.add(spark);

    // ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 900),
      new THREE.MeshStandardMaterial({ color: 0x0e1013, roughness: 0.95, metalness: 0.05 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -1.4, -300);
    scene.add(ground);

    const grid = new THREE.GridHelper(600, 150, 0x2a3238, 0x171b1f);
    grid.position.set(0, -1.38, -280);
    scene.add(grid);

    // container stacks along a corridor
    const box = new THREE.BoxGeometry(6.1, 2.6, 2.5);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 });
    const edges = new THREE.EdgesGeometry(box);
    const rnd = (a, b) => a + Math.random() * (b - a);

    this._crates = [];
    for (let i = 0; i < 130; i++) {
      const side = Math.random() < 0.5 ? -1 : 1;
      const lane = side * rnd(7, 22);
      const z = -i * 3.4 - rnd(0, 3);
      const stack = Math.floor(rnd(1, 4.99));
      for (let s = 0; s < stack; s++) {
        const m = new THREE.Mesh(box, new THREE.MeshStandardMaterial({
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          roughness: 0.72, metalness: 0.18
        }));
        m.position.set(lane + rnd(-0.5, 0.5), -0.1 + s * 2.62, z);
        m.rotation.y = rnd(-0.06, 0.06) + (Math.random() < 0.18 ? Math.PI / 2 : 0);
        scene.add(m);
        m.add(new THREE.LineSegments(edges, edgeMat));
        if (Math.random() < 0.12) this._crates.push({ m, phase: Math.random() * 6.28, base: m.position.y });
      }
    }

    // gantry frames straddling the corridor
    const beamMat = new THREE.MeshStandardMaterial({ color: 0x3a4249, roughness: 0.5, metalness: 0.6 });
    for (let g = 0; g < 12; g++) {
      const z = -18 - g * 36;
      const leg = new THREE.BoxGeometry(1, 26, 1);
      const l1 = new THREE.Mesh(leg, beamMat); l1.position.set(-26, 12, z);
      const l2 = new THREE.Mesh(leg, beamMat); l2.position.set(26, 12, z);
      const top = new THREE.Mesh(new THREE.BoxGeometry(53, 1.2, 1.6), beamMat);
      top.position.set(0, 25, z);
      scene.add(l1, l2, top);
    }

    // drifting wireframe markers
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(3, 3, 3)),
      new THREE.LineBasicMaterial({ color: 0xd98033, transparent: true, opacity: 0.5 })
    );
    this._motes = [];
    for (let i = 0; i < 40; i++) {
      const w = wire.clone();
      w.position.set(rnd(-30, 30), rnd(2, 22), -rnd(5, 430));
      scene.add(w);
      this._motes.push(w);
    }

    const resize = () => {
      const w = this.clientWidth || innerWidth, h = this.clientHeight || innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    new ResizeObserver(resize).observe(this);

    let target = 0, prog = 0, mx = 0, my = 0, tmx = 0, tmy = 0;
    const readScroll = (el) => {
      const max = el.scrollHeight - el.clientHeight;
      if (max > 40) target = Math.min(1, Math.max(0, el.scrollTop / max));
    };
    addEventListener('scroll', () => readScroll(document.scrollingElement), { passive: true });
    addEventListener('pointermove', (e) => {
      tmx = (e.clientX / innerWidth - 0.5) * 2;
      tmy = (e.clientY / innerHeight - 0.5) * 2;
    }, { passive: true });

    const clock = new THREE.Clock();
    const tick = () => {
      this._raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      prog += (target - prog) * 0.06;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      const z = 12 - prog * 400;
      camera.position.set(mx * 3.2 + Math.sin(t * 0.22) * 1.6, 4.4 + my * -1.6 + Math.sin(t * 0.31) * 0.35, z);
      camera.lookAt(mx * 1.6, 4.0 + my * -1.2, z - 24);
      camera.rotation.z = mx * 0.03;
      spark.position.set(Math.sin(t * 0.6) * 12, 9, z - 16);
      this._crates.forEach((c) => { c.m.position.y = c.base + Math.sin(t * 0.9 + c.phase) * 0.35; c.m.rotation.z = Math.sin(t * 0.5 + c.phase) * 0.02; });
      this._motes.forEach((w, i) => { w.rotation.x = t * 0.2 + i; w.rotation.y = t * 0.15 + i; });
      renderer.render(scene, camera);
    };
    tick();
    this._dispose = () => { cancelAnimationFrame(this._raf); renderer.dispose(); };
  }
  disconnectedCallback() { this._dispose && this._dispose(); }
}
customElements.define('yard-scene', YardScene);
