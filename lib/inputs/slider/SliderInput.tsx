import './styles/slider.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { Input, InputProps } from '>inputs/input/Input';

export interface SliderInputProps extends InputProps, ThemeProps { }

export function SliderInput(
    {
        className,
        theme,
        ...props
    }: Readonly<SliderInputProps>) {
    return <Input
        className={getClassName('number slider', theme?.toClassName(), className)}
        {...props}
        type='range'
    />;
}