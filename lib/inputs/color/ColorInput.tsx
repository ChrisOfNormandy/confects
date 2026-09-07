import { Input, type InputProps } from '>inputs/input/Input';
import { getClassName } from '@dead-harbour/shipshape/props';

export type ColorInputProps = InputProps;

export function ColorInput({ className, ...props }: Readonly<ColorInputProps>) {
    return <Input className={getClassName('color', className)} {...props} type='color' />;
}
