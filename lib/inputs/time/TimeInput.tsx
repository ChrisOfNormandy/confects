import { getClassName } from '@dead-harbour/shipshape/props';
import { Input, InputProps } from '>inputs/input/Input';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface TimeInputProps extends InputProps, ThemeProps { }

export function TimeInput(
    {
        className,
        theme,
        ...props
    }: Readonly<TimeInputProps>
) {
    return <Input
        className={getClassName('time', theme?.toClassName(), className)}
        {...props}
        type='time'
    />;
}