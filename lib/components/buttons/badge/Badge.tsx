import { getClassName } from "../../../main";
import Button, { ButtonProps } from "../button/Button";
import './styles/badge.scss';

interface extBadgeProps {
    group?: string
}

export type BadgeProps = ButtonProps & extBadgeProps;

export default function Badge(
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