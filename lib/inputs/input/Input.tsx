import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';
import './styles/input.scss';
import { getClassName } from 'lib/helpers';
import { HTML_InputProps } from 'lib/types';

export type InputProps = {
    name: string
} & ThemeProps
    & HTML_InputProps;

export function Input(
    {
        className,
        name,
        theme,
        ...props
    }: InputProps
) {
    return <input
        {...props}
        name={name}
        className={getClassName('input', themes.getStyles(theme), className)}
    />;
}