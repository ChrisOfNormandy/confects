import type { ITooltip, PlacesType, PositionStrategy, VariantType, WrapperType } from 'react-tooltip';

export type TooltipType = string | string[];
export interface ITooltipWrapper extends ITooltip {
    tooltip: TooltipType
}

export type TooltipOption = TooltipType | ITooltipWrapper

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
    tooltipProps?: ITooltip
}

export interface TooltipProps {
    tooltip?: TooltipOption
}

export type { PositionStrategy, PlacesType, VariantType, WrapperType } from 'react-tooltip';