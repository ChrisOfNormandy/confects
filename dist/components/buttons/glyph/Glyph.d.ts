import './styles/glyph.scss';
import { ButtonProps } from '../../../buttons';
import { IconProps } from '../../../decorations';
interface extGlyphProps {
    size?: 1 | 2 | 3 | 4 | 5;
    iconOnly?: boolean;
}
export type GlyphProps = ButtonProps & IconProps & extGlyphProps;
export declare function Glyph({ icon, className, iconOnly, size, ...props }: GlyphProps): import("react/jsx-runtime").JSX.Element;
export {};
