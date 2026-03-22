import { Input, InputProps } from '>inputs/input/Input';
import { getClassName } from '@syren-dev-tech/concauses/props';

export interface DateInputProps extends InputProps { }

function formatDateForInput(value?: string | number | readonly string[] | undefined) {
    if (!value) return undefined;

    if (typeof value === 'string' || typeof value === 'number') {
        return new Date(value).toISOString()
            .split('T')[0];
    }

    return undefined;
}

export function DateInput(
    {
        className,
        value,
        defaultValue,
        ...props
    }: Readonly<DateInputProps>) {
    return <Input
        className={getClassName('date', className)}
        {...props}
        value={formatDateForInput(value)}
        defaultValue={formatDateForInput(defaultValue)}
        type='date'
    />;
}

