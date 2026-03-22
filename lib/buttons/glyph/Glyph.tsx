/* eslint-disable no-magic-numbers */
import './styles/glyph.scss';
import { Button, ButtonProps } from '>buttons/button/Button';
import { USE_DISABLED_STYLING, USE_HOVER_STYLING } from '>helpers/components';
import { Icon, type WithIcon } from '>decorations/icon/Icon';
import { getClassName } from '@syren-dev-tech/concauses/props';

export interface GlyphProps extends ButtonProps, WithIcon {
    size?: 1 | 2 | 3 | 4 | 5
}

export function Glyph(
    {
        className,
        icon,
        size = 3,
        ...props
    }: Readonly<GlyphProps>
) {
    return <Button
        className={getClassName('glyph', className, `size-${size}`, USE_HOVER_STYLING, USE_DISABLED_STYLING)}
        noDefaultClassName
        {...props}
    >
        <Icon
            icon={icon}
        />
    </Button>;
}