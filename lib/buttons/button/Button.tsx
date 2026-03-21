import './styles/button.scss';
import { getClassName, uniqueId } from 'lib/helpers';
import { getTooltipProps, TooltipProps } from 'lib/decorations/tooltip/tooltip-handlers';
import { HTML_ButtonProps } from 'lib/types';
import { Ref, useRef } from 'react';
import { themes, ThemeProps } from '@syren-dev-tech/confetti/themes';
import { Tooltip } from 'lib/decorations';

export type ButtonProps = {
    reset?: string | boolean
    submit?: string | boolean
    noDefaultClassName?: boolean
    innerRef?: Ref<HTMLButtonElement>
} & HTML_ButtonProps &
    ThemeProps &
    TooltipProps;

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

function getMouseEventHandlers(props: HTML_ButtonProps): HTML_ButtonProps {
    return {
        onAuxClick: (e) => {
            e.stopPropagation();
            if (props.onAuxClick)
                props.onAuxClick(e);
        },
        onClick: (e) => {
            e.stopPropagation();
            if (props.onClick)
                props.onClick(e);
        },
        onContextMenu: (e) => {
            e.stopPropagation();
            if (props.onContextMenu)
                props.onContextMenu(e);
        }
    };
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
    }: ButtonProps
) {
    const id = useRef<string>(props.id || uniqueId('btn_'));

    const { tooltipId, tooltipDataProps, tooltipProps } = getTooltipProps(id.current, tooltip);

    return <>
        <button
            className={getClassName(!noDefaultClassName && 'btn', themes.getStyles(theme), className)}
            type='button'
            {...props}
            {...getFormProps(submit, reset)}
            {...tooltipDataProps}
            id={id.current}
            ref={innerRef}
            {...getMouseEventHandlers({
                onAuxClick,
                onClick,
                onContextMenu
            })}
        >
            {children}
        </button>

        {
            tooltipId &&
            <Tooltip
                {...tooltipProps}
                id={tooltipId}
            />
        }
    </>;
}