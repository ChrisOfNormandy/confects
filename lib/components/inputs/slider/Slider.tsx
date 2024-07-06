import { Input, InputProps, getClassName } from "../../../main";
import './styles/slider.scss';

export type SliderProps = InputProps;

export default function Slider(
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