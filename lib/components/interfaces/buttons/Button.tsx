import { getClassName } from '../../../helpers/components';
import { HTMLButtonProps } from '../../../types/html';
import './styles/button.scss';

interface extButtonProps {
    reset?: string | boolean
    category?: string
    submit?: string | boolean
}

export type ButtonProps = HTMLButtonProps & extButtonProps;

export default function Button(
    {
        children,
        className,
        reset = false,
        category = 'custom',
        submit = false,
        ...props
    }: ButtonProps
) {
    let c = [];

    switch (category) {
        case 'custom': break;
        default: {
            c.push('btn', category);
        }
    }

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
    }

    return <button
        {...props}
        {...extraProps}
        className={getClassName(...c, className)}
    >
        {children}
    </button>
}