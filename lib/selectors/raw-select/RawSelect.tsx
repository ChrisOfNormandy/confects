import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';
import { uniqueKey } from '@dead-harbour/shipshape/strings';

import type { OptionType, SelectOption } from '../select-option';

export interface RawSelectProps<T extends OptionType> extends HtmlElementProps<'select'>, ThemeProps {
    options: SelectOption<T>[];
}

export function RawSelect<T extends OptionType>({ options, className, theme, ...props }: Readonly<RawSelectProps<T>>) {
    return (
        <select className={getClassName('input select', theme?.toClassName(), className)} {...props}>
            {options.map((option) => (
                <option key={uniqueKey()} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
