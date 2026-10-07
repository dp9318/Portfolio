/* Link Component */
/* ========================================================================== */

import { AnchorHTMLAttributes, forwardRef } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'default', size = 'md', external = false, className = '', children, ...props }, ref) => {
    const variantStyles = {
      default: 'text-accent hover:text-accent-hover underline underline-offset-2',
      primary: 'text-accent font-medium hover:text-accent-hover',
      secondary: 'text-secondary hover:text-accent font-medium',
      ghost: 'text-muted hover:text-primary',
    };
    
    const sizeStyles = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    
    const isExternal = external || props.target === '_blank';
    
    const combinedClass = `${variantStyles[variant]} ${sizeStyles[size]} transition-colors ${className}`.trim();
    
    return (
      <a
        ref={ref}
        className={combinedClass}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {isExternal && (
          <span className="ml-1 inline-flex" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';