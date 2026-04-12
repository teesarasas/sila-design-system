import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content (used when not using structured props) */
  children?: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card description/body text */
  description?: string;
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Action buttons or links */
  actions?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const {
      children,
      title,
      description,
      imageSrc,
      imageAlt = '',
      actions,
      className,
      ...rest
    } = props;

    const classNames = [
      styles.card,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.content}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
          {children}
        </div>
        {actions && (
          <div className={styles.actions}>{actions}</div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
