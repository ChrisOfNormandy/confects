import './styles/glyph.scss';
import { Button, ButtonProps } from 'lib/buttons';
import { getClassName, USE_DISABLED_STYLING, USE_HOVER_STYLING } from 'lib/helpers';
import { Icon, IconProps } from 'lib/decorations';

export type GlyphProps = {
    size?: 1 | 2 | 3 | 4 | 5
} & ButtonProps
    & IconProps;

export function Glyph(
    {
        className,
        icon,
        size = 3,
        ...props
    }: GlyphProps
) {
    return <Button
        className={getClassName('glyph', className, `size-${size}`, USE_HOVER_STYLING, USE_DISABLED_STYLING)}
        noDefaultClassName
        {...props}
    >
        <Icon
            icon={icon}
        />
    </Button>
}