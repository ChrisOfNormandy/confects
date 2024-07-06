import {
    DetailedHTMLProps,
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    HTMLAttributes,
    TextareaHTMLAttributes,
} from "react";

export type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type HTMLDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type HTMLElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
export type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type HTMLTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export function isInterfaceTypeIterable<T = unknown>(i: T | Iterable<T>): i is Iterable<T> {
    return Symbol.iterator in (i as Iterable<T>);
};