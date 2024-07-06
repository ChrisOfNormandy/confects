import { HTMLInputProps } from '../../../types/html';
import './styles/input.scss';
interface extInputProps {
}
export type InputProps = HTMLInputProps & extInputProps;
export default function Input({ className, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
