import { HTMLElementProps } from '../../types/html';
import './styles/icon.scss';
interface extIconProps {
    icon: string;
}
export type IconProps = HTMLElementProps & extIconProps;
declare function Icon({ icon, className, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
export { Icon };
