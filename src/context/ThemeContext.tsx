/* Theme Context - 5-Preset Color Architecture */
/* ========================================================================== */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeId = 'royal' | 'cyber' | 'mocha' | 'emerald' | 'carbon';

export interface ThemeColors {
  base: string;        // Base background & ambient lighting
  secondary: string;   // Secondary typography, glass borders, 3D wireframe
  accent: string;      // Interactive buttons, hover glow, 3D solids
  buttonText: string;  // High-contrast button text
}

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  colors: ThemeColors;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  royal: {
    id: 'royal',
    name: 'Royal',
    tagline: 'Deep Purple, Light Grey-Blue & Gold',
    colors: {
      base: '#3A0F34',
      secondary: '#DDE3E8',
      accent: '#EAAA00',
      buttonText: '#3A0F34',
    },
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber',
    tagline: 'Cyber Black, Cerulean Cyan & Neon Pink',
    colors: {
      base: '#0A0A0A',
      secondary: '#007BA7',
      accent: '#FF2D95',
      buttonText: '#0A0A0A',
    },
  },
  mocha: {
    id: 'mocha',
    name: 'Mocha',
    tagline: 'Warm Mocha, Platinum & Pale Lilac',
    colors: {
      base: '#6F4E37',
      secondary: '#E5E4E2',
      accent: '#E6E0F0',
      buttonText: '#6F4E37',
    },
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald',
    tagline: 'Forest Emerald, Antique Linen & Flame Orange',
    colors: {
      base: '#046A38',
      secondary: '#F9EBD7',
      accent: '#E34222',
      buttonText: '#F9EBD7',
    },
  },
  carbon: {
    id: 'carbon',
    name: 'Carbon',
    tagline: 'Carbon Charcoal, Silver & Crimson Red',
    colors: {
      base: '#2A2A2A',
      secondary: '#C0C0C0',
      accent: '#E10600',
      buttonText: '#FFFFFF',
    },
  },
};

export const AVAILABLE_THEMES = Object.values(THEMES);

interface ThemeContextValue {
  theme: ThemeId;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeId) => void;
  availableThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-color-theme';

function getInitialTheme(): ThemeId {
  if (typeof window === 'undefined') return 'royal';
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) || localStorage.getItem('portfolio-theme');
    if (stored && (stored === 'royal' || stored === 'cyber' || stored === 'mocha' || stored === 'emerald' || stored === 'carbon')) {
      return stored as ThemeId;
    }
  } catch {
    // Ignore storage errors
  }
  return 'royal';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }

    // Synchronize browser theme-color meta tag with current base color
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', THEMES[theme].colors.base);
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
  };

  const themeConfig = THEMES[theme] || THEMES.royal;

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme, availableThemes: AVAILABLE_THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}