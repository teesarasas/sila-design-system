import React, { useState, useRef, useCallback } from 'react';
import styles from './Tooltip.module.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** The trigger element */
  children: React.ReactElement;
  /** Tooltip content */
  content: React.ReactNode;
  /** Position relative to trigger */
  position?: TooltipPosition;
  /** Delay in ms before showing */
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 200,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  }, []);

  const classNames = [
    styles.tooltip,
    styles[position],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {isVisible && (
        <span role="tooltip" className={classNames}>
          {content}
        </span>
      )}
    </span>
  );
};

Tooltip.displayName = 'Tooltip';
