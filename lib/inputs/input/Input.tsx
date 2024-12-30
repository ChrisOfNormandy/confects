import './styles/input.scss';
import { getClassName } from 'lib/helpers';
import { HTML_InputProps } from 'lib/types';

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