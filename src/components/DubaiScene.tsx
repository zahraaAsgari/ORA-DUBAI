"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerformanceMonitor, MeshReflectorMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { scrollState } from "./scroll-state";

type Quality = "high" | "medium" | "low";

function rand(seed: number) {
  const x = Math.sin(seed * 9301.17 + 49297.3) * 233280.5;
  return x - Math.floor(x);
}

function makeWindowTexture(seed = 1) {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const g = c.getContext("2d")!;
  g.fillStyle = "#050507";
  g.fillRect(0, 0, 64, 256);
  let s = seed;
  for (let y = 4; y < 256; y += 6) {
    for (let x = 3; x < 64; x += 5) {
      s++;
      const r = rand(s);
      if (r > 0.55) {
        const warm = rand(s + 0.5) > 0.25;
        g.fillStyle = warm ? `rgba(255,${190 + Math.floor(rand(s + 2) * 50)},120,${0.5 + r * 0.5})` : `rgba(180,210,255,${0.4 + r * 0.4})`;
        g.fillRect(x, y, 3, 3);
      }
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = THREE.NearestFilter;
  return t;
}

const SUNSET_TOP = new THREE.Color("#1a1030");
const SUNSET_MID = new THREE.Color("#c2603a");
const SUNSET_HOR = new THREE.Color("#ffc27a");
const NIGHT_TOP = new THREE.Color("#02030a");
const NIGHT_MID = new THREE.Color("#0b1026");
const NIGHT_HOR = new THREE.Color("#3a2a1a");

function nightFactor() {
  return THREE.MathUtils.smoothstep(scrollState.progress, 0.08, 0.6);
}

function Sky() {
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          top: { value: SUNSET_TOP.clone() },
          mid: { value: SUNSET_MID.clone() },
          hor: { value: SUNSET_HOR.clone() },
          sunPos: { value: new THREE.Vector3(0, 0.06, -1).normalize() },
          sunI: { value: 1 },
          time: { value: 0 },
        },
        vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
        fragmentShader: `
          uniform vec3 top; uniform vec3 mid; uniform vec3 hor; uniform vec3 sunPos; uniform float sunI; uniform float time;
          varying vec3 vP;
          float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
          void main(){
            float y = vP.y;
            vec3 col = mix(hor, mid, smoothstep(-0.02, 0.12, y));
            col = mix(col, top, smoothstep(0.1, 0.55, y));
            float d = max(dot(vP, sunPos), 0.0);
            col += vec3(1.0,0.65,0.3) * pow(d, 64.0) * 1.6 * sunI;
            col += vec3(1.0,0.5,0.25) * pow(d, 6.0) * 0.35 * sunI;
            // stars at night
            vec2 sp = floor(vP.xz / max(vP.y,0.05) * 220.0);
            float st = step(0.9975, h(sp)) * smoothstep(0.15, 0.5, y) * (1.0 - sunI);
            col += st * (0.6 + 0.4*sin(time*2.0 + h(sp)*30.0));
            if (y < 0.0) col = mix(hor, top*0.4, smoothstep(0.0,-0.2,y));
            gl_FragColor = vec4(col, 1.0);
          }`,
      }),
    []
  );
  useFrame((s) => {
    const n = nightFactor();
    mat.uniforms.top.value.copy(SUNSET_TOP).lerp(NIGHT_TOP, n);
    mat.uniforms.mid.value.copy(SUNSET_MID).lerp(NIGHT_MID, n);
    mat.uniforms.hor.value.copy(SUNSET_HOR).lerp(NIGHT_HOR, n);
    mat.uniforms.sunI.value = 1 - n;
    mat.uniforms.sunPos.value.set(0, 0.06 - n * 0.12, -1).normalize();
    mat.uniforms.time.value = s.clock.elapsedTime;
  });
  return (
    <mesh material={mat}>
      <sphereGeometry args={[900, 48, 24]} />
    </mesh>
  );
}

function useTowerMaterial(seed: number, tint = "#1b1d24") {
  return useMemo(() => {
    const tex = makeWindowTexture(seed);
    return new THREE.MeshStandardMaterial({
      color: tint,
      metalness: 0.85,
      roughness: 0.28,
      emissive: new THREE.Color("#ffffff"),
      emissiveMap: tex,
      emissiveIntensity: 0.3,
    });
  }, [seed, tint]);
}

function BurjKhalifa() {
  const mat = useTowerMaterial(7, "#2a2c33");
  const tipRef = useRef<THREE.Mesh>(null);
  const tiers = useMemo(() => {
    const arr: { y: number; h: number; r: number; offset: number }[] = [];
    let y = 0;
    const count = 14;
    for (let i = 0; i < count; i++) {
      const h = 9 - i * 0.25;
      const r = 5.2 * (1 - i / (count + 1.5));
      arr.push({ y: y + h / 2, h, r, offset: (i % 3) * 0.7 });
      y += h;
    }
    return { arr, top: y };
  }, []);
  useFrame((s) => {
    const n = nightFactor();
    mat.emissiveIntensity = 0.25 + n * 1.6;
    if (tipRef.current) {
      const m = tipRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(s.clock.elapsedTime * 2.2));
    }
  });
  return (
    <group position={[0, 0, -40]}>
      {tiers.arr.map((t, i) => (
        <group key={i}>
          {[0, 1, 2].map((k) => {
            const a = (k / 3) * Math.PI * 2 + i * 0.05;
            const w = t.r * (k === i % 3 ? 0.78 : 1);
            return (
              <mesh key={k} material={mat} position={[Math.cos(a) * w * 0.35, t.y, Math.sin(a) * w * 0.35]} castShadow>
                <cylinderGeometry args={[w * 0.5, w * 0.55, t.h, 6]} />
              </mesh>
            );
          })}
        </group>
      ))}
      <mesh material={mat} position={[0, tiers.top + 14, 0]}>
        <cylinderGeometry args={[0.15, 1.1, 28, 8]} />
      </mesh>
      <mesh ref={tipRef} position={[0, tiers.top + 28.5, 0]}>
        <sphereGeometry args={[0.6, 12, 12]} />
        <meshBasicMaterial color="#ff4a3a" transparent />
      </mesh>
      <pointLight position={[0, 30, 8]} color="#f5d77a" intensity={40} distance={80} />
    </group>
  );
}

function Towers({ count, seed, spread, center, heightScale = 1, tint }: { count: number; seed: number; spread: [number, number]; center: [number, number]; heightScale?: number; tint?: string }) {
  const mat = useTowerMaterial(seed, tint);
  const boxRef = useRef<THREE.InstancedMesh>(null);
  const cylRef = useRef<THREE.InstancedMesh>(null);
  const beacons = useMemo(() => [] as THREE.Vector3[], []);
  useEffect(() => {
    const d = new THREE.Object3D();
    let bi = 0, ci = 0;
    beacons.length = 0;
    for (let i = 0; i < count; i++) {
      const r1 = rand(seed * 100 + i), r2 = rand(seed * 200 + i), r3 = rand(seed * 300 + i);
      const x = center[0] + (r1 - 0.5) * spread[0];
      const z = center[1] + (r2 - 0.5) * spread[1];
      if (Math.abs(x) < 9 && Math.abs(z + 40) < 9) continue;
      const distFactor = 1 - Math.min(1, Math.hypot(x - center[0], z - center[1]) / (spread[0] * 0.6));
      const h = (8 + Math.pow(r3, 2) * 60 * (0.5 + distFactor)) * heightScale;
      const w = 2.2 + rand(seed + i * 3) * 3.2;
      d.position.set(x, h / 2, z);
      d.rotation.set(0, rand(i + seed) * Math.PI, 0);
      d.scale.set(w, h, w * (0.7 + rand(i * 7) * 0.6));
      d.updateMatrix();
      if (r3 > 0.7 && cylRef.current) cylRef.current.setMatrixAt(ci++, d.matrix);
      else if (boxRef.current) boxRef.current.setMatrixAt(bi++, d.matrix);
      if (h > 40) beacons.push(new THREE.Vector3(x, h + 0.6, z));
    }
    if (boxRef.current) { boxRef.current.count = bi; boxRef.current.instanceMatrix.needsUpdate = true; }
    if (cylRef.current) { cylRef.current.count = ci; cylRef.current.instanceMatrix.needsUpdate = true; }
  }, [count, seed, spread, center, heightScale, beacons]);
  useFrame((s) => {
    const n = nightFactor();
    mat.emissiveIntensity = 0.15 + n * 1.4 + Math.sin(s.clock.elapsedTime * 0.7 + seed) * 0.05 * n;
    if (mat.emissiveMap) mat.emissiveMap.offset.y = Math.floor(s.clock.elapsedTime / 6 + seed) * 0.013;
  });
  return (
    <group>
      <instancedMesh ref={boxRef} args={[undefined, undefined, count]} material={mat}>
        <boxGeometry args={[1, 1, 1]} />
      </instancedMesh>
      <instancedMesh ref={cylRef} args={[undefined, undefined, count]} material={mat}>
        <cylinderGeometry args={[0.5, 0.55, 1, 10]} />
      </instancedMesh>
      <Beacons points={beacons} seed={seed} />
    </group>
  );
}

function Beacons({ points, seed }: { points: THREE.Vector3[]; seed: number }) {
  const ref = useRef<THREE.Points>(null);
  const [geo] = useState(() => new THREE.BufferGeometry());
  useFrame((s) => {
    if (ref.current && geo.attributes.position?.count !== points.length && points.length) {
      geo.setFromPoints(points);
    }
    if (ref.current) (ref.current.material as THREE.PointsMaterial).opacity = (0.3 + 0.7 * nightFactor()) * (0.5 + 0.5 * Math.sin(s.clock.elapsedTime * 3 + seed));
  });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color="#ff5544" size={1.2} transparent sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function PalmJumeirah() {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#c9a878", roughness: 0.9, emissive: "#402a10", emissiveIntensity: 0.2 }), []);
  const lights = useMemo(() => new THREE.MeshBasicMaterial({ color: "#f5d77a", transparent: true, opacity: 0 }), []);
  useFrame(() => {
    lights.opacity = nightFactor() * 0.9;
  });
  const fronds = 16;
  return (
    <group position={[-120, 0.25, 40]} rotation={[0, 0.6, 0]} scale={1.3}>
      {/* trunk */}
      <mesh material={mat} position={[0, 0, 22]}>
        <boxGeometry args={[5, 0.5, 34]} />
      </mesh>
      {Array.from({ length: fronds }).map((_, i) => {
        const side = i < fronds / 2 ? -1 : 1;
        const k = i % (fronds / 2);
        const z = 2 - k * 3.4;
        const len = 18 + Math.sin((k / (fronds / 2)) * Math.PI) * 12;
        const angle = side * (0.55 + k * 0.05);
        return (
          <group key={i} position={[0, 0, z]} rotation={[0, angle + (side > 0 ? 0 : Math.PI), 0]}>
            <mesh material={mat} position={[len / 2, 0, 0]}>
              <boxGeometry args={[len, 0.4, 1.4]} />
            </mesh>
            <mesh material={lights} position={[len / 2, 0.3, 0]}>
              <boxGeometry args={[len, 0.1, 0.3]} />
            </mesh>
          </group>
        );
      })}
      {/* crescent */}
      <mesh material={mat} position={[0, 0, -12]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <torusGeometry args={[34, 1.2, 6, 64, Math.PI * 1.1]} />
      </mesh>
      <mesh material={lights} position={[0, 0.4, -12]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <torusGeometry args={[34, 0.25, 4, 64, Math.PI * 1.1]} />
      </mesh>
    </group>
  );
}

function Water({ quality }: { quality: Quality }) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  useFrame(() => {
    const n = nightFactor();
    if (matRef.current) matRef.current.color.set("#1a2030").lerp(new THREE.Color("#04060c"), n);
  });
  if (quality === "high") {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[1400, 1400]} />
        <MeshReflectorMaterial
          blur={[400, 120]}
          resolution={512}
          mixBlur={1}
          mixStrength={18}
          roughness={0.85}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a0d14"
          metalness={0.6}
          mirror={0.6}
        />
      </mesh>
    );
  }
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1400, 1400]} />
      <meshStandardMaterial ref={matRef} color="#1a2030" metalness={0.95} roughness={0.22} />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[10, 0.05, -60]}>
      <circleGeometry args={[110, 48]} />
      <meshStandardMaterial color="#0d0d10" roughness={0.95} />
    </mesh>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { geo, speeds } = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const p = new Float32Array(count * 3);
    const sp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (rand(i) - 0.5) * 260;
      p[i * 3 + 1] = rand(i + 11) * 90;
      p[i * 3 + 2] = (rand(i + 23) - 0.5) * 260 - 20;
      sp[i] = 0.3 + rand(i + 5) * 0.9;
    }
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    return { geo: g, speeds: sp };
  }, [count]);
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d")!;
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,240,190,1)");
    gr.addColorStop(0.3, "rgba(245,215,122,.6)");
    gr.addColorStop(1, "rgba(212,175,55,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }, []);
  useFrame((s, dt) => {
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const t = s.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * dt * 1.2;
      arr[i * 3] += Math.sin(t * 0.3 + i) * dt * 0.4;
      if (arr[i * 3 + 1] > 95) arr[i * 3 + 1] = 0;
    }
    pos.needsUpdate = true;
    const intro = Math.min(1, t / 3);
    const visible = Math.floor(count * (0.35 + 0.65 * scrollState.progress) * intro);
    geo.setDrawRange(0, visible);
    if (ref.current) {
      const m = ref.current.material as THREE.PointsMaterial;
      m.size = 0.9 + nightFactor() * 0.6;
    }
  });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial map={tex} size={1} transparent depthWrite={false} blending={THREE.AdditiveBlending} sizeAttenuation opacity={0.9} />
    </points>
  );
}

const CAM_PATH: { p: [number, number, number]; t: [number, number, number] }[] = [
  { p: [0, 22, 150], t: [0, 45, -40] },
  { p: [30, 30, 80], t: [-5, 55, -40] },
  { p: [-25, 18, 30], t: [0, 70, -40] },
  { p: [-60, 45, 60], t: [-110, 0, 40] },
  { p: [40, 70, 50], t: [0, 40, -50] },
  { p: [70, 35, -10], t: [0, 60, -40] },
  { p: [0, 90, 140], t: [0, 40, -40] },
];

function CameraRig() {
  const { camera, scene } = useThree();
  const pos = useMemo(() => new THREE.Vector3(0, 10, 220), []);
  const tgt = useMemo(() => new THREE.Vector3(0, 40, -40), []);
  const tmpP = useMemo(() => new THREE.Vector3(), []);
  const tmpT = useMemo(() => new THREE.Vector3(), []);
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  useFrame((s, dt) => {
    const pr = scrollState.progress * (CAM_PATH.length - 1);
    const i = Math.min(CAM_PATH.length - 2, Math.floor(pr));
    const f = THREE.MathUtils.smootherstep(pr - i, 0, 1);
    tmpP.fromArray(CAM_PATH[i].p).lerp(new THREE.Vector3(...CAM_PATH[i + 1].p), f);
    tmpT.fromArray(CAM_PATH[i].t).lerp(new THREE.Vector3(...CAM_PATH[i + 1].t), f);
    // intro push-in
    const intro = THREE.MathUtils.smootherstep(Math.min(1, s.clock.elapsedTime / 4.5), 0, 1);
    tmpP.z += (1 - intro) * 90;
    tmpP.y -= (1 - intro) * 10;
    tmpP.x += mouse.current.x * 6;
    tmpP.y += -mouse.current.y * 3;
    const k = 1 - Math.pow(0.04, dt);
    pos.lerp(tmpP, k);
    tgt.lerp(tmpT, k);
    camera.position.copy(pos);
    camera.lookAt(tgt);
    const n = nightFactor();
    if (scene.fog instanceof THREE.FogExp2) {
      scene.fog.color.set("#8a5a3c").lerp(new THREE.Color("#07080f"), n);
      scene.fog.density = 0.0045 - n * 0.0015;
    }
  });
  return null;
}

function Lights() {
  const sun = useRef<THREE.DirectionalLight>(null);
  const hemi = useRef<THREE.HemisphereLight>(null);
  useFrame(() => {
    const n = nightFactor();
    if (sun.current) {
      sun.current.intensity = 2.4 * (1 - n) + 0.15;
      sun.current.color.set("#ffb27a").lerp(new THREE.Color("#6f7cff"), n);
    }
    if (hemi.current) hemi.current.intensity = 0.6 - n * 0.4;
  });
  return (
    <>
      <hemisphereLight ref={hemi} args={["#ffcf9a", "#0b0b0d", 0.6]} />
      <directionalLight ref={sun} position={[0, 20, -300]} intensity={2.4} color="#ffb27a" />
      <directionalLight position={[80, 60, 120]} intensity={0.25} color="#9ab0ff" />
    </>
  );
}

function World({ quality }: { quality: Quality }) {
  const mult = quality === "high" ? 1 : quality === "medium" ? 0.6 : 0.35;
  return (
    <>
      <fogExp2 attach="fog" args={["#8a5a3c", 0.0045]} />
      <Sky />
      <Lights />
      <CameraRig />
      <Water quality={quality} />
      <Ground />
      <BurjKhalifa />
      <Towers count={Math.floor(140 * mult)} seed={3} spread={[150, 90]} center={[10, -60]} />
      <Towers count={Math.floor(70 * mult)} seed={9} spread={[50, 120]} center={[110, 10]} heightScale={1.25} tint="#1f2330" />
      <Towers count={Math.floor(40 * mult)} seed={13} spread={[260, 30]} center={[0, -170]} heightScale={0.6} />
      <PalmJumeirah />
      <Particles count={Math.floor(1400 * mult)} />
    </>
  );
}

export default function DubaiScene() {
  const [quality, setQuality] = useState<Quality>("high");
  const [dpr, setDpr] = useState(1.5);
  useEffect(() => {
    const w = window.innerWidth;
    const cores = navigator.hardwareConcurrency || 4;
    if (w < 768 || cores <= 4) { setQuality("low"); setDpr(1); }
    else if (w < 1200) { setQuality("medium"); setDpr(1.25); }
  }, []);
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        dpr={dpr}
        camera={{ fov: 45, near: 0.5, far: 2000, position: [0, 10, 240] }}
        gl={{ antialias: quality !== "low", powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <PerformanceMonitor
          onDecline={() => { setDpr(1); setQuality((q) => (q === "high" ? "medium" : "low")); }}
        />
        <World quality={quality} />
      </Canvas>
      {/* cinematic vignettes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,7,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070707]/80 to-transparent" />
    </div>
  );
}
