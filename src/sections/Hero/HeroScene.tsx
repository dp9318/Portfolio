import { useRef, useMemo, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

// Fallback error boundary in case WebGL context fails or is unsupported
interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('WebGL initialization failed, rendering fallback:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="hero-3d-fallback"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 40%, var(--color-accent-light, rgba(234, 170, 0, 0.08)) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      );
    }
    return this.props.children;
  }
}

// Individual floating geometric element with slow rotation
interface ShapeDefinition {
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  scale: number;
  type: 'torusKnot' | 'icosahedron' | 'octahedron';
  wireframe?: boolean;
}

interface FloatingShapeProps extends ShapeDefinition {
  color: string;
}

function FloatingShape({ position, rotationSpeed, scale, type, wireframe = false, color }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotationSpeed[0] * delta;
    meshRef.current.rotation.y += rotationSpeed[1] * delta;
    meshRef.current.rotation.z += rotationSpeed[2] * delta;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={1.5}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'torusKnot' && <torusKnotGeometry args={[0.7, 0.22, 90, 16]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[0.85, 0]} />}
        {type === 'octahedron' && <octahedronGeometry args={[0.8, 0]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={wireframe ? 0.35 : 0.45}
          metalness={0.85}
          roughness={0.2}
          wireframe={wireframe}
          transparent
          opacity={wireframe ? 0.65 : 0.85}
        />
      </mesh>
    </Float>
  );
}

// Scene with camera mouse-parallax, scroll reaction, and theme-reactive lighting
function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { themeConfig } = useTheme();
  const { base: baseColor, secondary: secondaryColor, accent: accentColor } = themeConfig.colors;

  // Parallax response to cursor AND smooth scroll progress
  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (-state.pointer.y * Math.PI) / 12;

    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const scrollFactor = scrollY * 0.001;

    // Smooth lerping with both pointer parallax and scroll rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX + scrollFactor * 0.8,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY - scrollFactor * 0.35,
      0.04
    );
    // Subtle vertical parallax as user scrolls down the page
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      (scrollY * 0.0004) % 1.6,
      0.04
    );
  });

  const shapes = useMemo<ShapeDefinition[]>(() => [
    // Center-left primary accent shape (Torus Knot) - Accent solid
    { position: [-3.4, 1.4, -1], rotationSpeed: [0.15, 0.2, 0.1], scale: 1.15, type: 'torusKnot' },
    // Center-right primary accent shape (Icosahedron) - Accent solid
    { position: [3.5, -0.6, -1.2], rotationSpeed: [0.2, 0.15, 0.12], scale: 1.25, type: 'icosahedron' },
    // Background wireframe torus knot - Secondary wireframe
    { position: [0.6, 2.4, -2.5], rotationSpeed: [0.1, 0.12, 0.08], scale: 1.35, type: 'torusKnot', wireframe: true },
    // Lower-left floating octahedron - Accent solid
    { position: [-2.6, -1.8, -0.5], rotationSpeed: [0.25, 0.18, 0.15], scale: 0.9, type: 'octahedron' },
    // Upper-right floating icosahedron - Accent solid
    { position: [2.8, 2.2, -1.8], rotationSpeed: [0.18, 0.22, 0.1], scale: 0.95, type: 'icosahedron' },
    // Mid-page depth shapes for full-viewport scroll richness - Accent solid
    { position: [-3.8, -3.2, -2.0], rotationSpeed: [0.12, 0.16, 0.09], scale: 1.05, type: 'torusKnot' },
    { position: [3.2, -3.6, -1.5], rotationSpeed: [0.15, 0.18, 0.11], scale: 1.1, type: 'octahedron' },
    // Far background depth shapes - Secondary wireframe
    { position: [-4.4, -0.8, -3.5], rotationSpeed: [0.08, 0.12, 0.05], scale: 0.8, type: 'octahedron', wireframe: true },
    { position: [4.2, 1.6, -3], rotationSpeed: [0.1, 0.14, 0.07], scale: 0.85, type: 'icosahedron', wireframe: true },
    { position: [0, -2.5, -2.8], rotationSpeed: [0.09, 0.11, 0.06], scale: 1.1, type: 'icosahedron', wireframe: true },
  ], []);

  return (
    <>
      {/* Background & Ambient Lighting matching Theme Base Color */}
      <ambientLight color={baseColor} intensity={3.2} />
      
      {/* Directional Key Light matching Theme Accent Color */}
      <directionalLight position={[5, 6, 4]} color={accentColor} intensity={4.2} />
      
      {/* Rim Light matching Theme Base Color */}
      <pointLight position={[-6, -4, -2]} color={baseColor} intensity={4.5} />
      
      {/* Secondary Accent Light matching Theme Secondary Color */}
      <pointLight position={[0, -2, 3]} color={secondaryColor} intensity={2.8} />

      {/* Center Glow Point Light matching Theme Accent Color */}
      <pointLight position={[0, 1, 1]} color={accentColor} intensity={2.2} distance={10} />

      <group ref={groupRef}>
        {shapes.map((shape, idx) => (
          <FloatingShape
            key={idx}
            {...shape}
            color={shape.wireframe ? secondaryColor : accentColor}
          />
        ))}
      </group>
    </>
  );
}

export function HeroScene() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="global-scene-container"
      aria-hidden="true"
    >
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <Scene />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
