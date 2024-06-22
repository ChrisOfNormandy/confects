import { getClassName } from '../../../helpers/components';
import { HTMLInputProps } from '../../../types/html';
import './styles/input.scss';

interface extInputProps {
    category: string
}

export type InputProps = HTMLInputProps & extInputProps;

export default function Input(
    {
        className,
        category = 'custom',
        ...props
    }: InputProps
) {
    let c = [];

    switch (category) {
        case 'custom': break;
        default: {
            c.push(category);
        }
    }

    return <input
        {...props}
        className={getClassName('input', ...c)}
    />
}
