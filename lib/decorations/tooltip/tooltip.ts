import { capitalize } from '@dead-harbour/shipshape/strings';
import type { ITooltipWrapper, TooltipContent, TooltipDataProps, TooltipOption } from '>decorations/tooltip/types';

function getProps(tooltipId: string, prop: ITooltipWrapper): TooltipContent {
    const tooltipDataProps: TooltipDataProps = {
        'data-tooltip-id': tooltipId
    };
    const { tooltip, ...props } = prop;

    if (Array.isArray(tooltip)) {
        if (tooltip.length === 0)
            return {};

        tooltipDataProps['data-tooltip-html'] = tooltip.join('<br>');
    }
    else if (typeof tooltip === 'string') {
        const tooltipStr = tooltip.trim();
        if (!tooltipStr)
            return {};

        tooltipDataProps['data-tooltip-content'] = capitalize(tooltipStr);
    }

    return {
        tooltipDataProps,
        tooltipId,
        tooltipProps: {
            id: tooltipId,
            ...props
        }
    };
}

export function getTooltipProps(id: string, tooltip?: TooltipOption) {
    if (id === '' || tooltip === undefined || tooltip === '')
        return {} as TooltipContent;

    const tooltipId = `tooltip-${id}`;

    if (Array.isArray(tooltip) || typeof tooltip === 'string')
        return getProps(tooltipId, { tooltip });

    return getProps(tooltipId, tooltip);
}