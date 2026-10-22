/* Theme Selector Component - Apple-Style Glass Pill with 3-Color Swatches */
/* ========================================================================== */

import { useState, useRef, useEffect } from 'react';
import { useTheme, type ThemeId } from '../../context/ThemeContext';

export function ThemeSelector({ placement = 'desktop' }: { placement?: 'desktop' | 'mobile' }) {
  const { theme, themeConfig, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Trap focus inside open popover
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'button[role="menuitem"]'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    menuRef.current.addEventListener('keydown', handleTab);
    firstElement.focus();

    return () => {
      menuRef.current?.removeEventListener('keydown', handleTab);
    };
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) return;
      if (menuRef.current?.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (selectedId: ThemeId) => {
    setTheme(selectedId);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className={`theme-selector-wrapper ${placement === 'mobile' ? 'theme-selector-mobile-wrapper' : ''}`} role="menubar">
      {/* Trigger Button: Apple-Style Frosted Glass Pill */}
      <button
        ref={buttonRef}
        className="theme-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Current Theme: ${themeConfig.name}. Open color themes menu`}
        type="button"
      >
        <span className="theme-swatch-preview" aria-hidden="true">
          <span className="swatch-dot" style={{ backgroundColor: themeConfig.colors.base }} />
          <span className="swatch-dot" style={{ backgroundColor: themeConfig.colors.secondary }} />
          <span className="swatch-dot" style={{ backgroundColor: themeConfig.colors.accent }} />
        </span>
        <span className="theme-selector-label">{themeConfig.name}</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--transition-fast)',
            opacity: 0.8,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Popover Menu with 5 Themes */}
      {isOpen && (
        <div
          ref={menuRef}
          className={`theme-selector-menu ${placement === 'mobile' ? 'placement-mobile' : ''}`}
          role="menu"
          aria-label="Color theme presets"
        >
          <div className="theme-selector-header" aria-hidden="true">
            <span>Color Palettes</span>
          </div>

          <div className="theme-options-list">
            {availableThemes.map((option) => {
              const isSelected = theme === option.id;
              return (
                <button
                  key={option.id}
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  className={`theme-selector-item ${isSelected ? 'selected' : ''}`}
                  aria-current={isSelected ? 'true' : undefined}
                >
                  {/* 3-Color Swatch Dots */}
                  <span className="theme-swatch-cluster" aria-hidden="true">
                    <span
                      className="swatch-dot"
                      style={{
                        backgroundColor: option.colors.base,
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                      }}
                    />
                    <span
                      className="swatch-dot"
                      style={{
                        backgroundColor: option.colors.secondary,
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                      }}
                    />
                    <span
                      className="swatch-dot"
                      style={{
                        backgroundColor: option.colors.accent,
                        boxShadow: `0 0 8px ${option.colors.accent}66`,
                      }}
                    />
                  </span>

                  <div className="theme-option-text">
                    <span className="theme-option-name">{option.name}</span>
                    <span className="theme-option-tagline">{option.tagline}</span>
                  </div>

                  {isSelected && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="theme-selected-check"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}