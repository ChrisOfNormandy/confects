import './styles/icon.scss';
import { getClassName, HTMLElementProps } from '@';

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