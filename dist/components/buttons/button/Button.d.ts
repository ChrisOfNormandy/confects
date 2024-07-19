import './styles/button.scss';
import { HTML_ButtonProps } from '../../../main';
import { Ref } from 'react';
interface extButtonProps {
    reset?: string | boolean;
    submit?: string | boolean;
    noDefaultClassName?: boolean;
    innerRef?: Ref<HTMLButtonElement>;
}
export type ButtonProps = HTML_ButtonProps & extButtonProps;
export declare function Button({ children, className, noDefaultClassName, reset, submit, innerRef, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
