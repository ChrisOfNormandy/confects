import { Input, InputProps } from '>inputs/input/Input';
import { getClassName } from '@syren-dev-tech/concauses/props';

export interface ColorInputProps extends InputProps { }

export function ColorInput(
    {
        className,
        ...props
    }: Readonly<ColorInputProps>
) {
    return <Input
        className={getClassName('color', className)}
        {...props}
        type='color'
    />;
}