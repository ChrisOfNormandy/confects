import { combineClassNames } from "../../helpers/props";
import './styles/icon.scss';

function Icon(
    {
        icon,
        className,
        ...props
    }
) {
    return <i
        {...props}
        className={combineClassNames('icon bi', `bi-${icon}`, className)}
    />
}
export { Icon };