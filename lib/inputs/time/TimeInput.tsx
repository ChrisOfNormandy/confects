import { Input, type InputProps } from '>inputs/input/Input';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface TimeInputProps extends InputProps, ThemeProps {}

export function TimeInput({ className, theme, ...props }: Readonly<TimeInputProps>) {
    return <Input className={getClassName('time', theme?.toClassName(), className)} {...props} type='time' />;
}
