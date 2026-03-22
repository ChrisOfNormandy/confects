import './styles/input.scss';
import { getId, getClassName } from '@syren-dev-tech/concauses/props';
import { getTooltipProps } from '>decorations/tooltip/tooltip';
import { HTML_InputProps } from 'lib/types';
import { RefObject } from 'react';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { Tooltip } from '>decorations/tooltip/Tooltip';
import { TooltipProps } from 'lib/decorations/tooltip/types';

export interface IInputProps extends HTML_InputProps, ThemeProps, TooltipProps {
    inputRef?: RefObject<HTMLInputElement | null>
}
export interface InputProps extends IInputProps {
    name: string // Require name prop for form handling
}

export function Input(
    {
        className,
        inputRef,
        theme,
        tooltip,
        ...props
    }: Readonly<InputProps>
) {

    const id = getId('input:', props.id);

    const { tooltipDataProps, tooltipProps } = getTooltipProps(id, tooltip);

    return <>
        <input
            className={getClassName('input', theme?.toClassName(), className)}
            {...tooltipDataProps}
            {...props}
            ref={inputRef}
            id={id}
        />

        <Tooltip {...tooltipProps} />
    </>;
}