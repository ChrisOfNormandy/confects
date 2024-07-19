import { HTML_InputProps } from '../../../main';
import './styles/input.scss';
interface extInputProps {
}
export type InputProps = HTML_InputProps & extInputProps;
export declare function Input({ className, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
