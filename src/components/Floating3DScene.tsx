import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Inner Core Mesh
function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <group>
      {/* Inner Distorted Energy Sphere in Sky Blue */}
      <mesh ref={meshRef} scale={1.35}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#0EA5E9"
          emissive="#0369A1"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe={false}
        />
      </mesh>

      {/* Outer Wireframe Icosahedron in Light Cyan/Sky */}
      <mesh ref={wireframeRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#7DD3FC"
          emissive="#38BDF8"
          emissiveIntensity={0.55}
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>
    </group>
  );
}

// Orbital Rings
function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.35;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.25;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.3;
  });

  return (
    <group>
      {/* Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0EA5E9"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#7DD3FC"
          emissive="#0284C7"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
        <torusGeometry args={[3.1, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#BAE6FD"
          emissive="#0369A1"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// Floating Spark Particles
function ParticleField({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const particles = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.0 + Math.random() * 2.2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#7DD3FC"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Interactive Parallax Rig
function SceneRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (-state.pointer.y * Math.PI) / 10;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
  });

  return <group ref={groupRef}>{children}</group>;
}

// Graceful CSS Fallback
function CSSOrbFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-sky-400/30 animate-[spin_12s_linear_infinite]" style={{ transform: 'rotateX(65deg) rotateY(15deg)' }} />
      <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-cyan-400/20 animate-[spin_18s_linear_infinite_reverse]" style={{ transform: 'rotateX(50deg) rotateY(-30deg)' }} />

      <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-sky-700 via-cyan-500 to-blue-400 shadow-glow-lg flex items-center justify-center p-1">
        <div className="w-full h-full rounded-full bg-[#0B1324]/40 backdrop-blur-sm border border-sky-300/40 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-sky-400/40 blur-md animate-ping" />
        </div>
      </div>
    </div>
  );
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (_e) {
    return false;
  }
}

export const Floating3DScene: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  const floatingBadges = [
    { name: 'React.js', pos: 'top-6 left-4 sm:left-8', delay: '0s', glow: 'shadow-sky-500/30' },
    { name: 'Java', pos: 'top-16 right-4 sm:right-8', delay: '1.2s', glow: 'shadow-blue-500/30' },
    { name: 'Node.js', pos: 'bottom-20 left-2 sm:left-6', delay: '2.4s', glow: 'shadow-emerald-500/30' },
    { name: 'MongoDB', pos: 'bottom-8 right-8 sm:right-16', delay: '0.8s', glow: 'shadow-cyan-500/30' },
    { name: 'GenAI & RAG', pos: 'top-1/2 -right-2 sm:right-2', delay: '1.8s', glow: 'shadow-sky-400/30' },
    { name: 'REST APIs', pos: 'bottom-1/3 -left-2 sm:left-0', delay: '3s', glow: 'shadow-teal-400/30' },
  ];

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[560px] flex items-center justify-center select-none">
      {/* Floor glow in electric cyan/sky */}
      <div className="absolute bottom-6 w-3/4 h-20 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Technology Badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.name}
          className={`absolute z-20 ${badge.pos} pointer-events-none transition-transform duration-500`}
          style={{
            animation: prefersReducedMotion ? 'none' : `float 5s ease-in-out infinite`,
            animationDelay: badge.delay,
          }}
        >
          <div className="px-3 py-1.5 rounded-xl bg-[#0F1A30]/85 border border-sky-400/30 text-xs sm:text-sm font-mono text-sky-200 backdrop-blur-md shadow-card-glow flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>{badge.name}</span>
          </div>
        </div>
      ))}

      {/* 3D Canvas or Fallback */}
      {!hasWebGL || hasError || prefersReducedMotion ? (
        <CSSOrbFallback />
      ) : (
        <div className="w-full h-full">
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            onError={() => setHasError(true)}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 6, 4]} intensity={1.2} color="#E0F2FE" />
            <pointLight position={[-4, -3, 2]} intensity={1.5} color="#0EA5E9" />
            <pointLight position={[3, 4, -2]} intensity={1.2} color="#7DD3FC" />

            <Suspense fallback={null}>
              <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
                <SceneRig>
                  <EnergyCore />
                  <OrbitalRings />
                  <ParticleField count={90} />
                </SceneRig>
              </Float>
            </Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
};
