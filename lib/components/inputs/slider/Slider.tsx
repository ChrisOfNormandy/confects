import './styles/slider.scss';
import { getClassName } from '$/helpers';
import { Input, InputProps } from '$/inputs';

export type SliderProps = InputProps;

export function Slider(
    {
        className,
        ...props
    }: SliderProps) {
    return <Input
        className={getClassName('slider', className)}
        {...props}
        type='range'
    />
}