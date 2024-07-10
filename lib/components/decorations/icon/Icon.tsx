import { getClassName } from '@lib/helpers/components';
import { HTMLElementProps } from '@lib/types/html';
import './styles/icon.scss';

interface extIconProps {
    icon: string
}

export type IconProps = HTMLElementProps & extIconProps;

export default function Icon(
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