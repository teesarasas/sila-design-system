import React from 'react';
import styles from './Accordion.module.css';

export interface AccordionItemProps {
  /** Item title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Expandable body content */
  children: React.ReactNode;
  /** Controlled expanded state */
  isExpanded?: boolean;
  /** Called when toggled */
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  icon,
  children,
  isExpanded = false,
  onToggle,
}) => {
  const classNames = [
    styles.item,
    isExpanded && styles.expanded,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <button
        type="button"
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {icon && (
          <span className={styles.iconContainer}>
            {icon}
          </span>
        )}
        <span className={styles.textContent}>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </span>
        <svg
          className={styles.chevron}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isExpanded && (
        <div className={styles.panel} role="region">
          {children}
        </div>
      )}
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';
