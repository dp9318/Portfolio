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

  // Persistent tracking for base ambient spin and damped scroll rotation
  const baseRot = useRef({
    x: Math.random() * Math.PI * 2,
    y: Math.random() * Math.PI * 2,
    z: Math.random() * Math.PI * 2,
  });
  const currentScrollRot = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // 1. Continuous idle/ambient spin on local axes so shapes are never frozen
    baseRot.current.x += delta * rotationSpeed[0];
    baseRot.current.y += delta * rotationSpeed[1];
    baseRot.current.z += delta * rotationSpeed[2];

    // 2. Normalized page scroll progress (0 to 1)
    const scrollHeight = typeof document !== 'undefined'
      ? (document.documentElement.scrollHeight - window.innerHeight || 1)
      : 1;
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const scrollProgress = scrollY / scrollHeight;

    // Smooth weighted lerp for scroll progression (damping on scroll stops)
    currentScrollRot.current = THREE.MathUtils.lerp(
      currentScrollRot.current,
      scrollProgress * Math.PI * 6, // Multiple full 360-degree tumbles across the page!
      0.06
    );

    // Apply combined continuous spin + dynamic scroll tumble on mesh's local axes
    const dirX = rotationSpeed[0] >= 0 ? 1.2 : -1.2;
    const dirZ = rotationSpeed[2] >= 0 ? 0.9 : -0.9;
    meshRef.current.rotation.x = baseRot.current.x + currentScrollRot.current * dirX;
    meshRef.current.rotation.y = baseRot.current.y + currentScrollRot.current * 1.5;
    meshRef.current.rotation.z = baseRot.current.z + currentScrollRot.current * dirZ;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0}
      floatIntensity={1.2}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'torusKnot' && <torusKnotGeometry args={[0.7, 0.22, 90, 16]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[0.85, 0]} />}
        {type === 'octahedron' && <octahedronGeometry args={[0.8, 0]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={wireframe ? 0.45 : 0.60}
          metalness={0.75}
          roughness={0.20}
          wireframe={wireframe}
          transparent
          opacity={wireframe ? 0.75 : 0.92}
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

  // Gentle mouse parallax & vertical translation on the world group
  useFrame((state) => {
    if (!groupRef.current) return;

    // Gentle cursor parallax clamped to ~0.15 radians (~8 degrees) to keep shapes in view
    const targetX = THREE.MathUtils.clamp((state.pointer.x * Math.PI) / 12, -0.15, 0.15);
    const targetY = THREE.MathUtils.clamp((-state.pointer.y * Math.PI) / 14, -0.15, 0.15);

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      0,
      0.05
    );

    // Continuous vertical translation so shapes glide upwards behind cards
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const targetGroupY = scrollY * 0.0038;
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetGroupY,
      0.05
    );
  });

  const shapes = useMemo<ShapeDefinition[]>(() => [
    // --- HERO SECTION (y: +2.5 to -1.5) ---
    // Left hero wing
    { position: [-3.2, 1.4, -1.0], rotationSpeed: [0.15, 0.20, 0.10], scale: 1.15, type: 'torusKnot' },
    // Right hero wing
    { position: [3.2, -0.6, -1.1], rotationSpeed: [0.20, 0.15, 0.12], scale: 1.20, type: 'icosahedron' },
    // Upper center-right wireframe
    { position: [0.8, 2.2, -1.8], rotationSpeed: [0.10, 0.12, 0.08], scale: 1.30, type: 'torusKnot', wireframe: true },
    // Lower center-left accent (behind hero CTA / name)
    { position: [-0.9, -0.8, -0.7], rotationSpeed: [0.22, 0.18, 0.14], scale: 0.95, type: 'octahedron' },
    // Upper-left secondary depth
    { position: [-2.6, 2.6, -2.2], rotationSpeed: [0.12, 0.14, 0.09], scale: 0.90, type: 'icosahedron', wireframe: true },

    // --- ABOUT SECTION (y: -3.0 to -6.0) ---
    // Behind About glass card (left/center)
    { position: [-1.6, -3.8, -0.8], rotationSpeed: [0.18, 0.16, 0.11], scale: 1.10, type: 'torusKnot' },
    // Right side depth shape
    { position: [2.4, -4.6, -1.0], rotationSpeed: [0.16, 0.22, 0.13], scale: 1.15, type: 'icosahedron' },
    // Center-left wireframe passing behind About content
    { position: [0.2, -5.6, -1.6], rotationSpeed: [0.11, 0.13, 0.07], scale: 1.25, type: 'octahedron', wireframe: true },
    // Left outer drift
    { position: [-3.4, -5.2, -1.8], rotationSpeed: [0.14, 0.15, 0.10], scale: 1.00, type: 'torusKnot', wireframe: true },

    // --- PROJECTS SECTION (y: -7.0 to -11.5) ---
    // DIRECTLY BEHIND Left Column Project Card 1 (RECALL)
    { position: [-1.8, -7.4, -0.7], rotationSpeed: [0.20, 0.18, 0.12], scale: 1.25, type: 'torusKnot' },
    // DIRECTLY BEHIND Right Column Project Card 2 (AQIconic)
    { position: [1.8, -8.2, -0.8], rotationSpeed: [0.16, 0.22, 0.15], scale: 1.20, type: 'icosahedron' },
    // Center corridor between project cards
    { position: [0.0, -9.2, -1.5], rotationSpeed: [0.12, 0.15, 0.09], scale: 1.35, type: 'torusKnot', wireframe: true },
    // DIRECTLY BEHIND Left Column Project Card 3 (AI Food Analyzer)
    { position: [-2.0, -10.2, -0.7], rotationSpeed: [0.22, 0.16, 0.14], scale: 1.15, type: 'octahedron' },
    // DIRECTLY BEHIND Right Column Project Card 4 (Game Sales Analysis)
    { position: [1.9, -11.0, -0.8], rotationSpeed: [0.18, 0.20, 0.11], scale: 1.20, type: 'icosahedron' },
    // Right outer accent drift
    { position: [3.3, -9.8, -1.6], rotationSpeed: [0.13, 0.14, 0.08], scale: 0.95, type: 'octahedron', wireframe: true },

    // --- EXPERIENCE SECTION (y: -12.5 to -16.5) ---
    // DIRECTLY BEHIND Experience Entry 1 (Academic & Project Leadership)
    { position: [-1.2, -13.0, -0.7], rotationSpeed: [0.17, 0.19, 0.12], scale: 1.20, type: 'torusKnot' },
    // DIRECTLY BEHIND Experience Entry 2 (Full-Stack Engineering)
    { position: [1.3, -14.2, -0.8], rotationSpeed: [0.19, 0.15, 0.14], scale: 1.25, type: 'icosahedron' },
    // DIRECTLY BEHIND Experience Entry 3 (Data Analytics & Research)
    { position: [-0.8, -15.5, -0.7], rotationSpeed: [0.21, 0.18, 0.13], scale: 1.15, type: 'octahedron' },
    // Left outer wireframe drift
    { position: [-3.0, -14.0, -1.8], rotationSpeed: [0.10, 0.12, 0.08], scale: 1.30, type: 'torusKnot', wireframe: true },
    // Right outer wireframe drift
    { position: [2.8, -15.8, -1.7], rotationSpeed: [0.12, 0.14, 0.09], scale: 1.05, type: 'icosahedron', wireframe: true },

    // --- SKILLS & EDUCATION & CONTACT (y: -17.5 to -23.0) ---
    // Behind Left Skill Group (Frontend & Full-Stack)
    { position: [-2.0, -17.5, -0.8], rotationSpeed: [0.18, 0.17, 0.11], scale: 1.15, type: 'icosahedron' },
    // Behind Center Skill Group (Backend & Systems)
    { position: [0.0, -18.2, -0.7], rotationSpeed: [0.16, 0.20, 0.13], scale: 1.25, type: 'torusKnot' },
    // Behind Right Skill Group (AI & Analytics)
    { position: [2.0, -18.8, -0.8], rotationSpeed: [0.22, 0.15, 0.12], scale: 1.15, type: 'octahedron' },
    // Behind Education Card
    { position: [-1.1, -20.2, -0.7], rotationSpeed: [0.17, 0.18, 0.14], scale: 1.20, type: 'icosahedron' },
    // Center wireframe
    { position: [0.5, -21.4, -1.6], rotationSpeed: [0.11, 0.13, 0.08], scale: 1.35, type: 'torusKnot', wireframe: true },
    // Behind Primary Contact CTA
    { position: [0.0, -22.6, -0.7], rotationSpeed: [0.20, 0.19, 0.15], scale: 1.20, type: 'octahedron' },
  ], []);

  return (
    <>
      {/* Background & Ambient Lighting matching Theme Base Color */}
      <ambientLight color={baseColor} intensity={3.5} />
      
      {/* Directional Key Light matching Theme Accent Color */}
      <directionalLight position={[5, 8, 5]} color={accentColor} intensity={4.5} />
      
      {/* Rim Light matching Theme Base Color */}
      <pointLight position={[-6, -4, -2]} color={baseColor} intensity={4.5} />
      
      {/* Dynamic Key Point Lights along the vertical scroll corridor */}
      <pointLight position={[0, -2, 3]} color={accentColor} intensity={3.0} distance={18} />
      <pointLight position={[2, -8, 3]} color={accentColor} intensity={3.5} distance={18} />
      <pointLight position={[-2, -14, 3]} color={secondaryColor} intensity={3.2} distance={18} />
      <pointLight position={[0, -20, 3]} color={accentColor} intensity={3.5} distance={18} />

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
