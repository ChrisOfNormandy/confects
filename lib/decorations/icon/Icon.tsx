import './styles/icon.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface WithIcon {
    icon: string;
}

export interface IconProps extends HtmlElementProps<'i'>, ThemeProps, WithIcon {}

export function Icon({ icon, className, theme, ...props }: Readonly<IconProps>) {
    if (!icon) return null;

    return <i {...props} className={getClassName('icon bi', `bi-${icon}`, theme?.toClassName(), className)} />;
}
