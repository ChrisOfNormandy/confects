import { Ref } from 'react';
import { getClassName } from '../../../helpers/components';
import { HTMLButtonProps } from '../../../types/html';
import './styles/button.scss';

interface extButtonProps {
    reset?: string | boolean
    submit?: string | boolean
    noDefaultClassName?: boolean
    innerRef?: Ref<HTMLButtonElement>
}

export type ButtonProps = HTMLButtonProps & extButtonProps;

export default function Button(
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
    const extraProps: HTMLButtonProps = {};
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