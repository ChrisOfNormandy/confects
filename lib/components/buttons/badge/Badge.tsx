import './styles/badge.scss';
import { Button, ButtonProps } from '$/buttons';
import { getClassName } from '$/helpers';

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