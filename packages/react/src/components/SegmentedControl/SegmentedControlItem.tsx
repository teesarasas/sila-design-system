import React from 'react';
import styles from './SegmentedControl.module.css';

export interface SegmentedControlItemProps {
  /** Unique value for this item */
  value: string;
  /** Label content */
  children: React.ReactNode;
  /** Whether this item is selected (set by parent) */
  isSelected?: boolean;
  /** Called when selected (set by parent) */
  onSelect?: () => void;
}

export const SegmentedControlItem: React.FC<SegmentedControlItemProps> = ({
  children,
  isSelected = false,
  onSelect,
}) => {
  const classNames = [
    styles.item,
    isSelected && styles.selected,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={classNames}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

SegmentedControlItem.displayName = 'SegmentedControlItem';
