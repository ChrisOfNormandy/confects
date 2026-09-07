import { Input, type InputProps } from '>inputs/input/Input';
import { getClassName } from '@dead-harbour/shipshape/props';

export type DecimalInputProps = InputProps;

export function DecimalInput({ className, ...props }: Readonly<DecimalInputProps>) {
    return <Input className={getClassName('number decimal', className)} step={0.01} {...props} type='number' />;
}
