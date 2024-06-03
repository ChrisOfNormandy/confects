import { combineClassNames } from "../../../helpers/props";
import './styles/button.scss';

function Button(
    {
        children,
        circular = false,
        className,
        reset = false,
        styleType = 'default',
        submit = false,
        ...props
    }
) {
    let c = [className, circular && 'circle'];

    switch (styleType) {
        case 'custom': break;
        default: {
            c.push('btn', styleType);
        }
    }

    const extraProps = {};
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
        className={combineClassNames(...c)}
    >
        {children}
    </button>
}
export { Button };