import React, { useState, useCallback } from 'react';
import styles from './Accordion.module.css';
import { AccordionItem } from './AccordionItem';
import type { AccordionItemProps } from './AccordionItem';

export type AccordionType = 'single' | 'multiple';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** AccordionItem children */
  children: React.ReactNode;
  /** Allow single or multiple items expanded */
  type?: AccordionType;
  /** Index of initially expanded item(s) */
  defaultExpandedIndex?: number | number[];
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      children,
      type = 'single',
      defaultExpandedIndex,
      className,
      ...rest
    } = props;

    const [expandedIndices, setExpandedIndices] = useState<Set<number>>(() => {
      if (defaultExpandedIndex === undefined) return new Set();
      if (Array.isArray(defaultExpandedIndex)) return new Set(defaultExpandedIndex);
      return new Set([defaultExpandedIndex]);
    });

    const handleToggle = useCallback((index: number) => {
      setExpandedIndices((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          if (type === 'single') {
            next.clear();
          }
          next.add(index);
        }
        return next;
      });
    }, [type]);

    const classNames = [
      styles.accordion,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const items = React.Children.toArray(children);

    return (
      <div ref={ref} className={classNames} {...rest}>
        {items.map((child, index) => {
          if (!React.isValidElement<AccordionItemProps>(child)) return child;
          if (child.type !== AccordionItem) return child;

          return React.cloneElement(child, {
            key: index,
            isExpanded: expandedIndices.has(index),
            onToggle: () => handleToggle(index),
          });
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
