import { getClassName } from '#helpers';
import { Glyph } from '@buttons';
import { InputProps } from '@inputs';
import { useEffect, useRef, useState } from 'react';

export type RadioInputProps = {
    onChecked?: (checked: boolean, target: HTMLInputElement) => void
} & InputProps

export default function RadioInput(
    {
        className,
        defaultChecked,
        defaultValue,
        checked,
        value,
        onChecked,
        ...props
    }: RadioInputProps
) {

    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || checked || !!defaultValue || !!value || false);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (onChecked && ref.current)
            onChecked(isChecked, ref.current as HTMLInputElement);
    }, [isChecked]);

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
            className={getClassName('input radio', className)}
        />
    </>;
}