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

const variantStyles: Record<TagVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-accent-light text-accent',
  secondary: 'bg-gray-100 text-gray-600',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  danger: 'bg-red-50 text-red-700',
  info: 'bg-blue-50 text-blue-700',
  'status-completed': 'bg-status-completed-bg text-status-completed',
  'status-in-progress': 'bg-status-in-progress-bg text-status-in-progress',
  'status-prototype': 'bg-status-prototype-bg text-status-prototype',
  'status-experimental': 'bg-status-experimental-bg text-status-experimental',
  'status-learning': 'bg-status-learning-bg text-status-learning',
};

const sizeStyles: Record<TagSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1 text-sm',
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = 'default', size = 'md', rounded = true, className = '', children, ...props }, ref) => {
    const combinedClass = `inline-flex items-center font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`.trim();
    
    return (
      <span ref={ref} className={combinedClass} {...props}>
        {children}
      </span>
    );
  }
);

Tag.displayName = 'Tag';