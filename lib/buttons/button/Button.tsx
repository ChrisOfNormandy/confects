import './styles/button.scss';
import { getClassName, uniqueId } from '$/helpers';
import { HTML_ButtonProps } from '#types/html';
import { Ref, useState } from 'react';
import { Tooltip } from '$/decorations';
import { themes, ThemeProps } from '@chrisofnormandy/confetti/themes';
import { getTooltipProps, TooltipProps } from '@decorations/tooltip/tooltip-handlers';

export type ButtonProps = {
    reset?: string | boolean
    submit?: string | boolean
    noDefaultClassName?: boolean
    innerRef?: Ref<HTMLButtonElement>
} & HTML_ButtonProps &
    ThemeProps &
    TooltipProps;

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
    }: ButtonProps
) {
    const [id] = useState(props.id || uniqueId('btn_'));

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

    const { tooltipId, tooltipDataProps, tooltipProps } = getTooltipProps(id, tooltip);

    return <>
        <button
            className={getClassName(!noDefaultClassName && 'btn', themes.getStyles(theme), className)}
            type='button'
            {...props}
            {...extraProps}
            {...tooltipDataProps}
            id={id}
            ref={innerRef}
            onClick={
                (e) => {
                    if (!onClick)
                        return

                    e.stopPropagation();
                    onClick(e);
                }
            }
            onAuxClick={
                (e) => {
                    if (!onAuxClick)
                        return

                    e.stopPropagation();
                    onAuxClick(e);
                }
            }
            onContextMenu={
                (e) => {
                    if (!onContextMenu)
                        return

                    e.stopPropagation();
                    onContextMenu(e);
                }
            }
        >
            {children}
        </button>

        {
            tooltipId &&
            <Tooltip
                id={tooltipId}
                {...tooltipProps}
            />
        }
    </>
}