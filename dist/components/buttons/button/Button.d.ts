import { Ref } from 'react';
import { HTMLButtonProps } from '../../../types/html';
import './styles/button.scss';
interface extButtonProps {
    reset?: string | boolean;
    submit?: string | boolean;
    noDefaultClassName?: boolean;
    innerRef?: Ref<HTMLButtonElement>;
}
export type ButtonProps = HTMLButtonProps & extButtonProps;
export default function Button({ children, className, noDefaultClassName, reset, submit, innerRef, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
