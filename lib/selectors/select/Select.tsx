import { getClassName } from 'lib/helpers';
import { HTML_SelectProps } from 'lib/types';
import { OptionType, SelectOption } from '../select-option';
import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';

export type SelectProps<T extends OptionType> = {
    options: SelectOption<T>[]
} & ThemeProps
    & HTML_SelectProps;

export function Select<T extends OptionType>(
    {
        options,
        className,
        theme,
        ...props
    }: SelectProps<T>
) {
    return <select
        className={getClassName('input select', themes.getStyles(theme), className)}
        {...props}
    >
        {
            options.map((option) => {
                return <option
                    value={option.value}
                >
                    {option.label}
                </option>;
            })
        }
    </select>;
}