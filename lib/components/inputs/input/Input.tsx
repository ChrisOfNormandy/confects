import { getClassName } from '../../../helpers/components';
import { HTMLInputProps } from '../../../types/html';
import './styles/input.scss';

interface extInputProps { }

export type InputProps = HTMLInputProps & extInputProps;

export default function Input(
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
