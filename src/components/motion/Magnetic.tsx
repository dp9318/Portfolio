import { useRef, useEffect, useCallback, ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  activeScale?: number;
}

// Cached once at module level — never changes within a session
const isCoarsePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

const springConfig = { stiffness: 220, damping: 15, mass: 0.1 };

export function Magnetic({
  children,
  strength = 0.25,
  className = '',
  activeScale = 1.05,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const rafRef = useRef<number | null>(null);
  const cachedRect = useRef<DOMRect | null>(null);
  const latestPointer = useRef({ x: 0, y: 0 });

  // Cache bounding rect on mount and invalidate on resize
  useEffect(() => {
    const updateRect = () => {
      cachedRect.current = ref.current?.getBoundingClientRect() ?? null;
    };
    updateRect();
    window.addEventListener('resize', updateRect, { passive: true });
    return () => {
      window.removeEventListener('resize', updateRect);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isCoarsePointer) return;
    cachedRect.current = ref.current?.getBoundingClientRect() ?? null;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (isCoarsePointer) return;
      latestPointer.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!cachedRect.current) return;
        const { left, top, width, height } = cachedRect.current;
        rawX.set((latestPointer.current.x - (left + width / 2)) * strength);
        rawY.set((latestPointer.current.y - (top + height / 2)) * strength);
      });
    },
    [strength, rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: activeScale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', ...springConfig }}
    >
      {children}
    </motion.div>
  );
}
