import './styles/badge.scss';
import { Button, ButtonProps } from '>buttons/button/Button';
import { getClassName } from '@dead-harbour/shipshape/props';
import { ReactNode } from 'react';

export interface BadgeProps extends ButtonProps {
    group?: ReactNode
}

export function Badge(
    {
        children,
        className,
        group,
        ...props
    }: Readonly<BadgeProps>
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