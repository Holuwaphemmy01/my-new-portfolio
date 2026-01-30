"use client";
 
import { useRef, useEffect, useState } from "react";
 import { Canvas, useFrame } from "@react-three/fiber";
 import { Mesh } from "three";
 
 const FloatingShape = () => {
   const meshRef = useRef<Mesh>(null);
 
   useFrame((state) => {
     const t = state.clock.getElapsedTime();
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
     if (meshRef.current) {
       meshRef.current.rotation.y = t * 0.4;
       meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
       meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
     }
   });
 
   return (
     <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.7, 0.22, 120, 20]} />
       <meshStandardMaterial
         color="#22d3ee"
         roughness={0.25}
         metalness={0.8}
       />
     </mesh>
   );
 };
 
 const Hero3D = () => {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 640px)").matches;
    setEnabled(!(prefersReduced || isSmall));
  }, []);
  if (!enabled) return null;
   return (
     <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
         <ambientLight intensity={0.6} />
         <pointLight position={[3, 3, 3]} intensity={1.2} />
         <pointLight position={[-3, -2, -2]} intensity={0.8} color="#06b6d4" />
         <FloatingShape />
       </Canvas>
     </div>
   );
 };
 
 export default Hero3D;
 
