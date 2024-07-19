import { Button, ButtonProps, getClassName } from '@';
import './styles/badge.scss';

interface extBadgeProps {
    group?: string
}

export type BadgeProps = ButtonProps & extBadgeProps;

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
    </Button>
}