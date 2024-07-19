import './styles/icon.scss';
import { HTMLElementProps } from '../../../main';
interface extIconProps {
    icon: string;
}
export type IconProps = HTMLElementProps & extIconProps;
export declare function Icon({ icon, className, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
