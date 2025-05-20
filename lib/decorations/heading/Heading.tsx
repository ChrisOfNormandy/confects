import { getClassName } from '#helpers';
import { HTML_HeadingProps } from '#types';
import React from 'react';

export type HeadingProps = {
    level?: number
} & HTML_HeadingProps;

const MIN_HEADING_LEVEL = 1;
const MAX_HEADING_LEVEL = 6;

export function Heading(
    {
        level = MIN_HEADING_LEVEL,
        children,
        className,
        ...props
    }: HeadingProps
) {
    if (!children)
        return null;

    const boundedLevel = Math.min(Math.max(level, MIN_HEADING_LEVEL), MAX_HEADING_LEVEL);
    const Tag = `h${boundedLevel}`;
    return React.createElement(
        Tag,
        {
            className: getClassName('heading', className),
            ...props
        },
        children
    );
}