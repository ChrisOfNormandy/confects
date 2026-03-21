import { getClassName } from '#helpers';
import { Input, InputProps } from '@inputs';

export type TimeInputProps = InputProps;

export function TimeInput(
    {
        className,
        ...props
    }: TimeInputProps
) {
    return <Input
        className={getClassName('time', className)}
        {...props}
        type='time'
    />;
}