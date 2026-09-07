import './styles/input.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName, getId } from '@dead-harbour/shipshape/props';
import type { RefObject } from 'react';

export interface IInputProps extends HtmlElementProps<'input'>, ThemeProps {
    inputRef?: RefObject<HTMLInputElement | null>;
}
export interface InputProps extends IInputProps {
    name: string; // Require name prop for form handling
}

export function Input({ className, inputRef, theme, ...props }: Readonly<InputProps>) {
    const id = getId('input:', props.id);

    return (
        <>
            <input className={getClassName('input', theme?.toClassName(), className)} {...props} ref={inputRef} id={id} />
        </>
    );
}
