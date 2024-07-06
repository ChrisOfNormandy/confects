import { HTMLInputProps } from '../../../types/html';
import './styles/input.scss';
interface extInputProps {
    category: string;
}
export type InputProps = HTMLInputProps & extInputProps;
export default function Input({ className, category, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
