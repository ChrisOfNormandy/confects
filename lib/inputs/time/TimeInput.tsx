import { getClassName } from '@syren-dev-tech/concauses/props';
import { Input, InputProps } from '>inputs/input/Input';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

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