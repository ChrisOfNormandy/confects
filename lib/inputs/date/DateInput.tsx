import { getClassName } from '#helpers';
import { Input, InputProps } from '@inputs';

export type DateInputProps = InputProps;

export function DateInput(
    {
        className,
        ...props
    }: DateInputProps) {
    return <Input
        className={getClassName('date', className)}
        {...props}
        type='date'
    />;
}

export function formatDateForInput(date: Date) {
    return date.toISOString().split('T')[0];
}