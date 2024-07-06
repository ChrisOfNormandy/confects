import { ButtonProps, IconProps } from "../../../main";
import './styles/glyph.scss';
interface extGlyphProps {
    size?: 1 | 2 | 3 | 4 | 5;
    iconOnly?: boolean;
}
export type GlyphProps = ButtonProps & IconProps & extGlyphProps;
export default function Glyph({ icon, className, iconOnly, size, ...props }: GlyphProps): import("react/jsx-runtime").JSX.Element;
export {};
