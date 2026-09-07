import './styles/slider.scss';
import { Input, type InputProps } from '>inputs/input/Input';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface SliderInputProps extends InputProps, ThemeProps {}

export function SliderInput({ className, theme, ...props }: Readonly<SliderInputProps>) {
    return <Input className={getClassName('number slider', theme?.toClassName(), className)} {...props} type='range' />;
}
