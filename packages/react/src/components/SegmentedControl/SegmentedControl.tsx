import React from 'react';
import styles from './SegmentedControl.module.css';
import { SegmentedControlItem } from './SegmentedControlItem';
import type { SegmentedControlItemProps } from './SegmentedControlItem';

export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Currently selected value */
  value: string;
  /** Called when selection changes */
  onChange: (value: string) => void;
  /** SegmentedControlItem children */
  children: React.ReactNode;
}

export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      children,
      className,
      ...rest
    } = props;

    const classNames = [
      styles.control,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const items = React.Children.toArray(children);

    return (
      <div ref={ref} role="tablist" className={classNames} {...rest}>
        {items.map((child) => {
          if (!React.isValidElement<SegmentedControlItemProps>(child)) return child;
          if (child.type !== SegmentedControlItem) return child;

          return React.cloneElement(child, {
            isSelected: child.props.value === value,
            onSelect: () => onChange(child.props.value),
          });
        })}
      </div>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';
