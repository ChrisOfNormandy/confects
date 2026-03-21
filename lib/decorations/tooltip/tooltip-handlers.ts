import { ITooltip, PlacesType, PositionStrategy, VariantType, WrapperType } from 'react-tooltip';
import { capitalize } from '@syren-dev-tech/concauses/strings';

export type TooltipType = string | string[];
type ITooltipWrapper = {
    tooltip: TooltipType
} & ITooltip

export type TooltipOption = TooltipType | ITooltipWrapper
export interface TooltipProps {
    tooltip?: TooltipOption
}

export interface TooltipDataProps {
    'data-tooltip-class-name'?: string
    'data-tooltip-content'?: string | null
    'data-tooltip-delay-hide'?: number
    'data-tooltip-delay-show'?: number
    'data-tooltip-float'?: boolean
    'data-tooltip-hidden'?: boolean
    'data-tooltip-html'?: string | null
    'data-tooltip-id'?: string
    'data-tooltip-offset'?: number
    'data-tooltip-place'?: PlacesType
    'data-tooltip-position-strategy'?: PositionStrategy
    'data-tooltip-variant'?: VariantType
    'data-tooltip-wrapper'?: WrapperType
}

export interface TooltipContent {
    tooltipId?: string
    tooltipDataProps?: TooltipDataProps
    tooltipProps?: TooltipProps
}

function getProps(tooltipId: string, prop: ITooltipWrapper, tooltipDataProps: TooltipDataProps): TooltipContent {
    const { tooltip, ...props } = prop;

    if (Array.isArray(tooltip)) {
        if (tooltip.length === 0)
            return {} as TooltipContent;

        tooltipDataProps['data-tooltip-html'] = tooltip.join('<br/>');
    }
    else if (typeof tooltip === 'string') {
        const tooltipStr = tooltip.trim();
        if (!tooltipStr)
            return {} as TooltipContent;

        tooltipDataProps['data-tooltip-content'] = capitalize(tooltipStr);
    }

    return {
        tooltipDataProps,
        tooltipId,
        tooltipProps: props as TooltipProps
    };
}

export function getTooltipProps(id: string, tooltip?: TooltipOption) {
    const tooltipDataProps: TooltipDataProps = {};

    if (!id || !tooltip)
        return {} as TooltipContent;

    const tooltipId = `${id}__tooltip`;
    tooltipDataProps['data-tooltip-id'] = tooltipId;

    if (Array.isArray(tooltip) || typeof tooltip === 'string')
        return getProps(tooltipId, { tooltip }, tooltipDataProps);

    return getProps(tooltipId, tooltip, tooltipDataProps);
}