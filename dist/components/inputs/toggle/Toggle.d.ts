import { HTMLDivProps } from "../../../main";
import './styles/toggle.scss';
export type ToggleIconType = 'check-dot' | 'check-square' | 'check-x' | 'check' | 'dot' | 'eye' | 'power' | 'square' | 'sun-moon' | 'thumb-down' | 'thumb-up' | 'toggle' | 'x-dot' | 'x-square' | 'x';
interface extToggleProps {
    name?: string;
    readOnly?: boolean;
    iconType?: ToggleIconType;
}
export type ToggleProps = HTMLDivProps & extToggleProps;
export default function Toggle({ className, defaultChecked, name, iconType, readOnly, ...props }: ToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
