import { getClassName } from '../../helpers/components';
import { HTMLElementProps } from '../../types/html';
import './styles/icon.scss';

interface extIconProps {
    icon: string
}

export type IconProps = HTMLElementProps & extIconProps;

function Icon(
    {
        icon,
        className,
        ...props
    }: IconProps
) {
    return <i
        {...props}
        className={getClassName('icon bi', `bi-${icon}`, className)}
    />
}
export { Icon };