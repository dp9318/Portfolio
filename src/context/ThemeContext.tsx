/* Theme Context - Carbon Paper & Pencil Single Visual Identity */
/* ========================================================================== */

import { createContext, useContext, useEffect, ReactNode } from 'react';

export type ThemeId = 'carbon';

export interface ThemeColors {
  base: string;        // Carbon primary ink (#2A2A2A)
  secondary: string;   // Silver graphite (#C0C0C0)
  accent: string;      // Crimson accent (#E10600)
  paper: string;       // Warm paper canvas (#F2F0E9)
  surface: string;     // Card paper surface (#F8F6F0)
  buttonText: string;  // High-contrast button text (#FFFFFF)
}

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  colors: ThemeColors;
}

export const CARBON_THEME: ThemeConfig = {
  id: 'carbon',
  name: 'Carbon',
  tagline: 'Warm Paper, Graphite Ink & Crimson Accent',
  colors: {
    base: '#2A2A2A',
    secondary: '#C0C0C0',
    accent: '#E10600',
    paper: '#F2F0E9',
    surface: '#F8F6F0',
    buttonText: '#FFFFFF',
  },
};

interface ThemeContextValue {
  theme: ThemeId;
  themeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'carbon',
  themeConfig: CARBON_THEME,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Permanently lock document element to single Carbon theme
    document.documentElement.setAttribute('data-theme', 'carbon');
    
    // Set theme-color meta tag to warm paper background
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', '#F2F0E9');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'carbon', themeConfig: CARBON_THEME }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
