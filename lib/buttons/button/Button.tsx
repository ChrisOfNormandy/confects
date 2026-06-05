import './styles/button.scss';
import { getClassName, getId } from '@dead-harbour/shipshape/props';
import { getTooltipProps } from '>decorations/tooltip/tooltip';
import { HTML_ButtonProps } from '>types/html';
import { Ref } from 'react';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { Tooltip } from '>decorations/tooltip/Tooltip';
import { TooltipProps } from '>decorations/tooltip/types';

export interface ButtonProps extends HTML_ButtonProps, ThemeProps, TooltipProps {
    innerRef?: Ref<HTMLButtonElement>
    noDefaultClassName?: boolean
    reset?: string | boolean
    submit?: string | boolean
}

function getFormProps(submit: boolean | string, reset: boolean | string) {
    const extraProps: HTML_ButtonProps = {};

    if (submit) {
        extraProps.type = 'submit';

        if (typeof submit === 'string')
            extraProps.form = submit;
    }
    else if (reset) {
        extraProps.type = 'reset';

        if (typeof reset === 'string')
            extraProps.form = reset;
    }

    return extraProps;
}

export function Button(
    {
        children,
        className,
        innerRef,
        noDefaultClassName,
        onAuxClick,
        onClick,
        onContextMenu,
        reset = false,
        submit = false,
        theme,
        tooltip,
        ...props
    }: Readonly<ButtonProps>
) {
    const id = getId('btn:', props.id);

    const { tooltipDataProps, tooltipProps } = getTooltipProps(id, tooltip);

    return <>
        <button
            className={getClassName(!noDefaultClassName && 'btn', theme?.toClassName(), className)}
            type='button'
            {...props}
            {...getFormProps(submit, reset)}
            {...tooltipDataProps}
            id={id}
            ref={innerRef}
            onClick={
                (e) => {
                    e.stopPropagation();
                    onClick?.(e);
                }
            }
            onAuxClick={
                (e) => {
                    e.stopPropagation();
                    onAuxClick?.(e);
                }
            }
            onContextMenu={
                (e) => {
                    e.stopPropagation();
                    onContextMenu?.(e);
                }
            }
        >
            {children}
        </button>

        <Tooltip {...tooltipProps} />
    </>;
}