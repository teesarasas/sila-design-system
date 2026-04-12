import React from 'react';
import styles from './IconButton.module.css';

export type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'tertiary';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The icon to render */
    icon: React.ReactNode;
    /** Visual style variant */
    variant?: IconButtonVariant;
    /** Button size */
    size?: IconButtonSize;
    /** Disabled state */
    isDisabled?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Accessible label (required since there is no visible text) */
    'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => {
        const {
            icon,
            variant = 'default',
            size = 'md',
            isDisabled = false,
            isLoading = false,
            className,
            ...rest
        } = props;

        const classNames = [
            styles.iconButton,
            styles[variant],
            styles[size],
            isLoading && styles.loading,
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
                <span className={styles.icon}>{icon}</span>
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';
