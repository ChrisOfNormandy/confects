import './styles/input.scss';
import { getClassName } from '$/helpers';
import { HTML_InputProps } from '#types/html';

export type InputProps = HTML_InputProps;

export function Input(
    {
        className,
        ...props
    }: InputProps
) {
    return <input
        {...props}
        className={getClassName('input', className)}
    />
}