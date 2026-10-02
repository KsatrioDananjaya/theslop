import React, { useRef, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ----------------------------------------------------------------
   Colorful orb — a react-three-fiber accent, distorted icosahedron
   in the brand accent colors, floating beside the hero copy.
   ---------------------------------------------------------------- */
function Orb() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (reduceMotion || !meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.22;
  });

  return (
    <Float speed={reduceMotion ? 0 : 1.4} rotationIntensity={reduceMotion ? 0 : 0.6} floatIntensity={reduceMotion ? 0 : 1.1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.25, 6]} />
        <MeshDistortMaterial
          color="#8a2a55"
          emissive="#ff2f76"
          emissiveIntensity={0.08}
          roughness={0.25}
          metalness={0.55}
          distort={reduceMotion ? 0.22 : 0.38}
          speed={reduceMotion ? 0 : 1.8}
        />
      </mesh>
    </Float>
  );
}

function HeroOrbScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.22} />
      <pointLight position={[2.6, 1.8, 3.2]} intensity={55} color="#2fe4ff" />
      <pointLight position={[-2.6, -1.4, 2.6]} intensity={50} color="#ff2f76" />
      <pointLight position={[0, 2.5, 2]} intensity={18} color="#ffffff" />
      <Orb />
    </Canvas>
  );
}

/* ----------------------------------------------------------------
   Shader gradient background — animated 3D gradient mesh, used as
   a colorful accent behind the final CTA band.
   ---------------------------------------------------------------- */
function GradientBackground() {
  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0 }}
      pointerEvents="none"
      pixelDensity={1.2}
      fov={40}
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate={reduceMotion ? "off" : "on"}
        uSpeed={0.22}
        uStrength={3.2}
        uDensity={1.4}
        uFrequency={5.5}
        uAmplitude={3}
        color1="#ff2f76"
        color2="#2fe4ff"
        color3="#0a0a0f"
        reflection={0.1}
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.8}
        cameraZoom={1}
        brightness={1.2}
        grain="on"
        lightType="3d"
      />
    </ShaderGradientCanvas>
  );
}

/* ----------------------------------------------------------------
   Mount points — each is optional; the bundle is shared across any
   page that includes it, so every mount checks its container exists.
   ---------------------------------------------------------------- */
function mount(id, element) {
  const el = document.getElementById(id);
  if (!el) return;
  createRoot(el).render(element);
}

mount("heroOrbRoot", <HeroOrbScene />);
mount("ctaGradientRoot", <GradientBackground />);
mount("demoGradientRoot", <GradientBackground />);
