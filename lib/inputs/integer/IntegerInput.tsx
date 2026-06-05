import { getClassName } from '@dead-harbour/shipshape/props';
import { Input, InputProps } from '>inputs/input/Input';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface IntegerInputProps extends InputProps, ThemeProps { }

function convertToInteger(value: string | number | readonly string[] | undefined): number | undefined {
    if (value === undefined)
        return undefined;

    if (typeof value === 'number')
        return value;

    if (typeof value === 'string')
        return Number.parseInt(value);

    if (Array.isArray(value))
        return Number.parseInt(value.join(''));

    return 0;
}

export function IntegerInput(
    {
        className,
        defaultValue,
        theme,
        value,
        ...props
    }: Readonly<IntegerInputProps>
) {
    return <Input
        className={getClassName('number integer', theme?.toClassName(), className)}
        {...props}
        defaultValue={convertToInteger(defaultValue)}
        value={convertToInteger(value)}
        type='number'
    />;
}