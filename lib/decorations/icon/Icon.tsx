import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import './styles/icon.scss';
import { HTMLElementProps } from '>types/html';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface WithIcon {
    icon: string
}

export interface IconProps extends HTMLElementProps, ThemeProps, WithIcon { }

export function Icon(
    {
        icon,
        className,
        theme,
        ...props
    }: Readonly<IconProps>
) {
    if (!icon)
        return null;

    return <i
        {...props}
        className={getClassName('icon bi', `bi-${icon}`, theme?.toClassName(), className)}
    />;
}