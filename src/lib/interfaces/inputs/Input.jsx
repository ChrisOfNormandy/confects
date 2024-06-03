import { combineClassNames } from "../../../helpers/props";
import './styles/input.scss';

function Input(
    {
        className,
        styleType = 'default',
        ...props
    }
) {
    let c = [className];

    switch (styleType) {
        case 'custom': break;
        default: {
            c.push('input', styleType);
        }
    }

    return <input
        {...props}
        className={combineClassNames(...c)}
    />
}
export { Input };