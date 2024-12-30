import './styles/icon.scss';
import { getClassName } from 'lib/helpers';
import { HTMLElementProps } from 'lib/types';

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
    if (!icon)
        return null;

    return <i
        {...props}
        className={getClassName('icon bi', `bi-${icon}`, className)}
    />
}