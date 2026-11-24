import { useEffect, useRef, useState } from 'react';
import { useSmoothScroll } from '../motion';

const SCROLL_THRESHOLD = 380;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { lenis } = useSmoothScroll();
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const updateVisibility = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setVisible(y >= SCROLL_THRESHOLD);
      if (y <= 4) {
        isScrollingRef.current = false;
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const currentY = window.scrollY || document.documentElement.scrollTop || 0;
    if (isScrollingRef.current || currentY <= 4) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    isScrollingRef.current = true;
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 0.95,
        onComplete: () => {
          isScrollingRef.current = false;
        },
      });
      timeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 1200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      timeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 900);
    }
  };

  return (
    <button
      type="button"
      className={`scroll-top-pencil ${visible ? 'is-visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      title="Scroll to top"
    >
      <svg
        className="scroll-top-pencil-svg"
        width="34"
        height="72"
        viewBox="0 0 38 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="scroll-pencil-tooth" x="-20%" y="-15%" width="140%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06 0.04" numOctaves="2" seed="19" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Soft directional graphite paper smudge beneath & right of pencil */}
        <g opacity="0.34" transform="translate(2.5, 3)">
          <path
            d="M 19 4 L 27.5 23 L 27.2 66 C 27.2 71.5 23.5 74.5 19 74.5 C 14.5 74.5 11.2 71.5 11.2 66 L 11 23 Z"
            fill="#6E6A63"
            filter="url(#scroll-pencil-tooth)"
          />
        </g>

        <g className="scroll-top-pencil-art" filter="url(#scroll-pencil-tooth)">
          {/* Wooden cone collar */}
          <path
            d="M 19 5.5 L 26.8 23.2 C 24 22.2 21.8 23.8 19 22.8 C 16.2 23.8 14 22.2 11.2 23.2 Z"
            fill="#EBE5D8"
          />
          {/* Subtle wood shading lines */}
          <path d="M 21.2 11 L 24 22.4" stroke="#9A948A" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" />
          <path d="M 16.5 13 L 14.8 22.2" stroke="#857F75" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

          {/* Sharpened graphite lead tip */}
          <path
            d="M 19 4.5 L 21.9 11.6 C 20 12.3 18 12.2 16.1 11.5 Z"
            fill="#2E2B27"
          />

          {/* Warm paper-toned pencil body + subtle right-edge graphite facet shading */}
          <path
            d="M 11.2 23.2 C 14 22.2 16.2 23.8 19 22.8 C 21.8 23.8 24 22.2 26.8 23.2 L 26.6 62.5 L 11.4 62.5 Z"
            fill="#FAF8F3"
          />
          <path
            d="M 21.8 23 L 26.8 23.2 L 26.6 62.5 L 21.6 62.5 Z"
            fill="#EAE5DA"
            opacity="0.72"
          />

          {/* Subtle barrel facet lines */}
          <path
            d="M 16.2 23.4 C 16.4 36 16.1 50 16.3 62.2"
            stroke="#8A857C"
            strokeWidth="0.95"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M 21.8 23.4 C 21.6 36 21.9 50 21.7 62.2"
            stroke="#736E66"
            strokeWidth="0.95"
            strokeLinecap="round"
            opacity="0.65"
          />

          {/* Integrated hand-drawn crimson upward arrow detail on barrel */}
          <path
            d="M 19 49.5 C 18.8 44 19.2 38.5 19 33.5"
            stroke="#E10600"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M 15.2 38.2 C 16.8 36 18 34.4 19 33 C 20.1 34.5 21.4 36.1 22.9 38.1"
            stroke="#E10600"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Metal ferrule bands */}
          <path
            d="M 11.4 62.5 L 26.6 62.5 L 26.5 68.5 L 11.5 68.5 Z"
            fill="#DED9CE"
          />
          <path d="M 11.8 65.5 L 26.2 65.5" stroke="#5E5A54" strokeWidth="1.1" strokeLinecap="round" />

          {/* Softly rounded eraser tip */}
          <path
            d="M 11.5 68.5 L 26.5 68.5 C 26.4 73.2 23.4 75.2 19 75.2 C 14.6 75.2 11.6 73.2 11.5 68.5 Z"
            fill="#F3E4E0"
          />

          {/* Secondary lighter grazing ghost outline */}
          <path
            d="M 19.6 5.2 L 27.4 23.2 L 27.1 68.4 C 27 73.6 23.8 75.6 19.4 75.6 C 14.8 75.6 11.4 73.6 11.3 68.4 L 11 23.2 Z"
            stroke="#7A756D"
            strokeWidth="1.05"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />

          {/* Primary hand-drawn 2B graphite outline */}
          <path
            className="scroll-top-pencil-outline"
            d="M 19 4.5 L 26.8 23.2 L 26.5 68.5 C 26.4 73.2 23.4 75.2 19 75.2 C 14.6 75.2 11.6 73.2 11.5 68.5 L 11.2 23.2 Z"
            stroke="#2E2B27"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Collar joint stroke */}
          <path
            d="M 11.4 23.2 C 14 22.2 16.2 23.8 19 22.8 C 21.8 23.8 24 22.2 26.6 23.2"
            stroke="#33312E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 11.4 62.5 L 26.6 62.5 M 11.5 68.5 L 26.5 68.5"
            stroke="#33312E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </button>
  );
}
