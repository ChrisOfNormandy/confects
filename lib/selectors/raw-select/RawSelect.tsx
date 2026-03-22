import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_SelectProps } from '>types/html';
import { OptionType, SelectOption } from '../select-option';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { uniqueKey } from '@syren-dev-tech/concauses/strings';

export interface RawSelectProps<T extends OptionType> extends HTML_SelectProps, ThemeProps {
    options: SelectOption<T>[]
}

export function RawSelect<T extends OptionType>(
    {
        options,
        className,
        theme,
        ...props
    }: Readonly<RawSelectProps<T>>
) {
    return <select
        className={getClassName('input select', theme?.toClassName(), className)}
        {...props}
    >
        {
            options.map((option) => {
                return <option
                    key={uniqueKey()}
                    value={option.value}
                >
                    {option.label}
                </option>;
            })
        }
    </select>;
}