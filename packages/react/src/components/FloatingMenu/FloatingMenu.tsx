import React from 'react';
import styles from './FloatingMenu.module.css';

export type FloatingMenuOrientation = 'horizontal' | 'vertical';

export interface FloatingMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** FloatingMenuButton children */
  children: React.ReactNode;
  /** Layout direction */
  orientation?: FloatingMenuOrientation;
}

export const FloatingMenu = React.forwardRef<HTMLDivElement, FloatingMenuProps>(
  (props, ref) => {
    const {
      children,
      orientation = 'horizontal',
      className,
      ...rest
    } = props;

    const classNames = [
      styles.menu,
      styles[orientation],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="toolbar" className={classNames} {...rest}>
        {children}
      </div>
    );
  }
);

FloatingMenu.displayName = 'FloatingMenu';
