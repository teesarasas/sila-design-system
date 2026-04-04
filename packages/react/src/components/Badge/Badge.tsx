import React from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: BadgeVariant;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const {
      children,
      variant = 'neutral',
      className,
      ...rest
    } = props;

    const classNames = [
      styles.badge,
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        className={classNames}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
