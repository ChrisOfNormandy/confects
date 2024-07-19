import './styles/button.scss';
import { getClassName, HTML_ButtonProps } from '@';
import { Ref } from 'react';

interface extButtonProps {
    reset?: string | boolean
    submit?: string | boolean
    noDefaultClassName?: boolean
    innerRef?: Ref<HTMLButtonElement>
}

export type ButtonProps = HTML_ButtonProps & extButtonProps;

export function Button(
    {
        children,
        className,
        noDefaultClassName,
        reset = false,
        submit = false,
        innerRef,
        ...props
    }: ButtonProps
) {
    const extraProps: HTML_ButtonProps = {};

    if (submit) {
        extraProps.type = 'submit';

        if (typeof submit === 'string')
            extraProps.form = submit;
    }
    else if (reset) {
        extraProps.type = 'reset';

        if (typeof reset === 'string')
            extraProps.form = reset;
    } else {
        extraProps.type = 'button';
    }

    return <button
        {...props}
        {...extraProps}
        ref={innerRef}
        className={getClassName(!noDefaultClassName && 'btn', className)}
    >
        {children}
    </button>
}