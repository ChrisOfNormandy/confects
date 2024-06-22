import {
    DetailedHTMLProps,
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    HTMLAttributes
} from "react";

export type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type HTMLElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>