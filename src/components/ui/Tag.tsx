/* Tag / Badge Component */
/* ========================================================================== */

import { HTMLAttributes, forwardRef } from 'react';

export type TagVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info'
  | 'status-completed'
  | 'status-in-progress'
  | 'status-prototype'
  | 'status-experimental'
  | 'status-learning';

export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = 'default', size = 'md', rounded = true, className = '', children, ...props }, ref) => {
    const combinedClass = `tag tag-${variant} tag-${size} ${rounded ? 'tag-rounded' : ''} ${className}`.trim();
    
    return (
      <span ref={ref} className={combinedClass} {...props}>
        {children}
      </span>
    );
  }
);

Tag.displayName = 'Tag';