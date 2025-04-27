import { getClassName } from 'lib/helpers';
import { HTML_SelectProps } from 'lib/types';
import { OptionType, SelectOption } from '../select-option';

export type RawSelectProps<T extends OptionType> = {
    options: SelectOption<T>[]
} & HTML_SelectProps;

export function RawSelect<T extends OptionType>(
    {
        options,
        className,
        ...props
    }: RawSelectProps<T>
) {
    return <select
        className={getClassName('input select', className)}
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