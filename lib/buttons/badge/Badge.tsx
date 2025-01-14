import './styles/badge.scss';
import { Button, ButtonProps } from 'lib/buttons';
import { getClassName } from 'lib/helpers';
import { ReactNode } from 'react';

export type BadgeProps = {
    group?: ReactNode
} & ButtonProps;

export function Badge(
    {
        children,
        className,
        group,
        ...props
    }: BadgeProps
) {
    return <Button
        className={getClassName('badge', className)}
        noDefaultClassName
        {...props}
    >
        {
            group &&
            <span
                className='sect group f-main'
            >
                {group}
            </span>
        }

        <span
            className='sect text'
        >
            {children}
        </span>
    </Button>;
}