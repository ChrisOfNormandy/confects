import { getClassName, HTML_InputProps } from '@';
import './styles/input.scss';

interface extInputProps { }

export type InputProps = HTML_InputProps & extInputProps;

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