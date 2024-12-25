import './styles/icon.scss';
import { getClassName } from '$/helpers';
import { HTMLElementProps } from '#types/html';

interface extIconProps {
    icon: string
}

export type IconProps = HTMLElementProps & extIconProps;

export function Icon(
    {
        icon,
        className,
        ...props
    }: IconProps
) {
    return <i
        {...props}
        className={getClassName('icon bi', `bi-${icon}`, className)}
    />
}