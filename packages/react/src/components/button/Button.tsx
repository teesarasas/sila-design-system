import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon before the label */
  leadingIcon?: React.ReactNode;
  /** Icon after the label */
  trailingIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = 'default',
      size = 'md',
      isDisabled = false,
      isLoading = false,
      fullWidth = false,
      leadingIcon,
      trailingIcon,
      className,
      ...rest
    } = props;

    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      isLoading && styles.loading,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={isDisabled || isLoading}
        aria-busy={isLoading}
        {...rest}
      >
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
