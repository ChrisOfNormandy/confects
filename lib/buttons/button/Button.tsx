import './styles/button.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName, getId } from '@dead-harbour/shipshape/props';
import type { Ref } from 'react';

export interface ButtonProps extends HtmlElementProps<'button'>, ThemeProps {
    innerRef?: Ref<HTMLButtonElement>;
    noDefaultClassName?: boolean;
    reset?: string | boolean;
    submit?: string | boolean;
}

function getFormProps(submit: boolean | string, reset: boolean | string) {
    const extraProps: HtmlElementProps<'button'> = {};

    if (submit) {
        extraProps.type = 'submit';

        if (typeof submit === 'string') extraProps.form = submit;
    } else if (reset) {
        extraProps.type = 'reset';

        if (typeof reset === 'string') extraProps.form = reset;
    }

    return extraProps;
}

export function Button({ children, className, innerRef, noDefaultClassName, onAuxClick, onClick, onContextMenu, reset = false, submit = false, theme, ...props }: Readonly<ButtonProps>) {
    const id = getId('btn:', props.id);

    return (
        <button
            className={getClassName(!noDefaultClassName && 'btn', theme?.toClassName(), className)}
            type='button'
            {...props}
            {...getFormProps(submit, reset)}
            id={id}
            ref={innerRef}
            onClick={(e) => {
                e.stopPropagation();
                onClick?.(e);
            }}
            onAuxClick={(e) => {
                e.stopPropagation();
                onAuxClick?.(e);
            }}
            onContextMenu={(e) => {
                e.stopPropagation();
                onContextMenu?.(e);
            }}
        >
            {children}
        </button>
    );
}
