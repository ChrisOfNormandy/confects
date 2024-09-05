import './styles/toggle.scss';
import { HTML_DivProps } from "../../../types/html";
export type ToggleIconType = 'check-dot' | 'check-square' | 'check-x' | 'check' | 'dot' | 'eye' | 'power' | 'square' | 'sun-moon' | 'thumb-down' | 'thumb-up' | 'toggle' | 'x-dot' | 'x-square' | 'x';
interface extToggleProps {
    name?: string;
    readOnly?: boolean;
    iconType?: ToggleIconType;
}
export type ToggleProps = HTML_DivProps & extToggleProps;
export declare function Toggle({ className, defaultChecked, name, iconType, readOnly, ...props }: ToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
