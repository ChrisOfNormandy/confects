import { getClassName } from "$/helpers";
import { HTML_SelectProps } from "#types/html";

export interface SelectOption {
    label: string,
    value: string
}

export type SelectProps = {
    options: SelectOption[]
} & HTML_SelectProps;

export function Select(
    {
        options,
        className,
        ...props
    }: SelectProps
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
                </option>
            })
        }
    </select>
}