import './styles/slider.scss';
import { getClassName } from 'lib/helpers';
import { Input, InputProps } from 'lib/inputs';

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