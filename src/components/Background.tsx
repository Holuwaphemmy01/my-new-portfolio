"use client";

import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const Starfield = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }));
  useFrame((state, delta) => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
    const t = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 0.5) * 0.04;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#06b6d4" // Cyan-500
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.matchMedia('(max-width: 640px)').matches;
    setEnabled(!(prefersReduced || isSmall));
  }, []);
  if (!enabled) return null;
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1] bg-[#020617]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Starfield />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
