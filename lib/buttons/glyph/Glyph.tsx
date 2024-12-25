import './styles/glyph.scss';
import { Button, ButtonProps } from '$/buttons';
import { getClassName } from '$/helpers';
import { Icon, IconProps } from '$/decorations';

export type GlyphProps = {
    size?: 1 | 2 | 3 | 4 | 5
    iconOnly?: boolean
} & ButtonProps & IconProps;

export function Glyph(
    {
        className,
        icon,
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