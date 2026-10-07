/* Section Wrapper Component */
/* ========================================================================== */

import { HTMLAttributes, forwardRef } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'sm' | 'lg';
  className?: string;
  children: React.ReactNode;
  'aria-labelledby'?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ variant = 'default', className = '', children, 'aria-labelledby': ariaLabelledBy, ...props }, ref) => {
    const variantClasses = {
      default: 'section',
      sm: 'section-sm',
      lg: 'section',
    };
    
    const combinedClass = `${variantClasses[variant]} ${className}`.trim();
    
    return (
      <section ref={ref} className={combinedClass} aria-labelledby={ariaLabelledBy} {...props}>
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

/* Container Component */
import { HTMLAttributes as DivHTMLAttributes } from 'react';

export interface ContainerProps extends DivHTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'full';
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'default', className = '', children, ...props }, ref) => {
    const sizeClasses = {
      default: 'container',
      narrow: 'container container-narrow',
      full: 'w-full px-4 md:px-6 lg:px-8',
    };
    
    const combinedClass = `${sizeClasses[size]} ${className}`.trim();
    
    return (
      <div ref={ref} className={combinedClass} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

/* Heading Component */
import { HTMLAttributes as HeadingHTMLAttributes } from 'react';

export interface HeadingProps extends HeadingHTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'section' | 'subsection' | 'display';
  className?: string;
}

export function Heading({ level = 2, variant = 'default', className = '', children, ...props }: HeadingProps) {
  const variantStyles = {
    default: '',
    section: 'section-heading',
    subsection: 'subsection-heading',
    display: 'text-display font-bold leading-tight',
  };
  
  const levelStyles = {
    1: 'text-h1',
    2: 'text-h2',
    3: 'text-h3',
    4: 'text-h4',
    5: 'text-h5',
    6: 'text-h6',
  };
  
  const combinedClass = `${variantStyles[variant]} ${variant === 'default' ? levelStyles[level] : ''} ${className}`.trim();
  
  // Use a simple approach - render the appropriate heading tag
  switch (level) {
    case 1:
      return <h1 className={combinedClass} {...props}>{children}</h1>;
    case 2:
      return <h2 className={combinedClass} {...props}>{children}</h2>;
    case 3:
      return <h3 className={combinedClass} {...props}>{children}</h3>;
    case 4:
      return <h4 className={combinedClass} {...props}>{children}</h4>;
    case 5:
      return <h5 className={combinedClass} {...props}>{children}</h5>;
    case 6:
      return <h6 className={combinedClass} {...props}>{children}</h6>;
    default:
      return <h2 className={combinedClass} {...props}>{children}</h2>;
  }
}

Heading.displayName = 'Heading';