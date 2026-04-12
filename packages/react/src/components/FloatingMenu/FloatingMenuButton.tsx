import React from 'react';
import styles from './FloatingMenu.module.css';

export interface FloatingMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to render */
  icon: React.ReactNode;
  /** Whether this button is selected */
  isSelected?: boolean;
  /** Whether the selected state is active (vs inactive) */
  isActive?: boolean;
  /** Accessible label (required since icon-only) */
  'aria-label': string;
}

export const FloatingMenuButton = React.forwardRef<HTMLButtonElement, FloatingMenuButtonProps>(
  (props, ref) => {
    const {
      icon,
      isSelected = false,
      isActive = false,
      className,
      ...rest
    } = props;

    const classNames = [
      styles.button,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const indicatorClassNames = [
      styles.indicator,
      isSelected && isActive && styles.indicatorActive,
      isSelected && !isActive && styles.indicatorInactive,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} type="button" className={classNames} {...rest}>
        <span className={styles.icon}>{icon}</span>
        {isSelected && <span className={indicatorClassNames} />}
      </button>
    );
  }
);

FloatingMenuButton.displayName = 'FloatingMenuButton';
