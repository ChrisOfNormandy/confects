import './styles/glyph.scss';
import { Button, ButtonProps } from '$/buttons';
import { getClassName } from '$/helpers';
import { Icon, IconProps } from '$/decorations';

interface extGlyphProps {
    size?: 1 | 2 | 3 | 4 | 5
    iconOnly?: boolean
}

export type GlyphProps = ButtonProps & IconProps & extGlyphProps;

export function Glyph(
    {
        icon,
        className,
        iconOnly,
        size = 3,
        ...props
    }: GlyphProps
) {
    return <Button
        noDefaultClassName
        className={getClassName('glyph hvr dis', className, `size-${size}`, iconOnly && 'icon-only')}
        {...props}
    >
        <Icon
            icon={icon}
        />
    </Button>
}