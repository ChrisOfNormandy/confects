import { getClassName } from '#helpers';
import { Input, InputProps } from '@inputs';

export type IntegerInputProps = InputProps;

function convertToInteger(value: string | number | readonly string[] | undefined): number {
    if (typeof value === 'number')
        return value;

    if (typeof value === 'string')
        return parseInt(value);

    if (Array.isArray(value))
        return parseInt(value.join(''));

    return 0;
}

export function IntegerInput(
    {
        className,
        defaultValue,
        value,
        ...props
    }: IntegerInputProps
) {
    return <Input
        className={getClassName('number integer', className)}
        {...props}
        defaultValue={convertToInteger(defaultValue)}
        value={convertToInteger(value)}
        type='number'
    />;
}