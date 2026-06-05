import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_SelectProps } from '>types/html';
import { OptionType, SelectOption } from '../select-option';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { uniqueKey } from '@dead-harbour/shipshape/strings';

export interface SelectProps<T extends OptionType> extends HTML_SelectProps, ThemeProps {
    options: SelectOption<T>[]
}

export function Select<T extends OptionType>(
    {
        options,
        className,
        theme,
        ...props
    }: Readonly<SelectProps<T>>
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