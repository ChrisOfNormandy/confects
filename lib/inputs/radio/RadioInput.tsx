import { getClassName } from '@dead-harbour/shipshape/props';
import { Glyph } from '>buttons/glyph/Glyph';
import { InputProps } from '>inputs/input/Input';
import { useEffect, useRef, useState } from 'react';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface RadioInputProps extends InputProps, ThemeProps {
    onChecked?: (checked: boolean, target: HTMLInputElement) => void
}

export function RadioInput(
    {
        checked,
        className,
        defaultChecked,
        defaultValue,
        onChecked,
        theme,
        value,
        ...props
    }: Readonly<RadioInputProps>
) {

    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || checked || !!defaultValue || !!value || false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (onChecked && ref.current)
            onChecked(isChecked, ref.current);
    }, [isChecked, onChecked]);

    return <>
        <input
            {...props}
            type='radio'
            hidden
            checked={isChecked}
            ref={ref}
        />

        <Glyph
            icon={isChecked && 'circle-fill' || 'circle'}
            onClick={() => setIsChecked(!isChecked)}
            className={getClassName('input radio', theme?.toClassName(), className)}
        />
    </>;
}