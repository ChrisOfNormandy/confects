import { HTMLButtonProps } from '../../../types/html';
import './styles/button.scss';
interface extButtonProps {
    reset?: string | boolean;
    category?: string;
    submit?: string | boolean;
}
export type ButtonProps = HTMLButtonProps & extButtonProps;
export default function Button({ children, className, reset, category, submit, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
