import { Input, InputProps } from '>inputs/input/Input';
import { getClassName } from '@syren-dev-tech/concauses/props';

export interface DecimalInputProps extends InputProps { }

export function DecimalInput(
    {
        className,
        ...props
    }: Readonly<DecimalInputProps>) {
    return <Input
        className={getClassName('number decimal', className)}
        step={0.01}
        {...props}
        type='number'
    />;
}