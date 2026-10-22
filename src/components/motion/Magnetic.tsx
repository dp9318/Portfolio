import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  activeScale?: number;
}

export function Magnetic({
  children,
  strength = 0.25,
  className = '',
  activeScale = 1.05,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Only apply on pointer devices that support hover
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: activeScale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 220, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
