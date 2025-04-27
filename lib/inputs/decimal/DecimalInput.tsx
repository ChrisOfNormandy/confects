import { getClassName } from '#helpers';
import { Input, InputProps } from '@inputs';

export type DecimalInputProps = InputProps;

export function DecimalInput(
    {
        className,
        ...props
    }: DecimalInputProps) {
    return <Input
        className={getClassName('number decimal', className)}
        step={0.01}
        {...props}
        type='number'
    />;
}