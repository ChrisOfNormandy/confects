/* eslint-disable no-magic-numbers */
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

export interface HeadingProps extends HtmlElementProps<'div'>, ThemeProps {
    level?: number;
}

const isLevel = (val: number): val is 1 | 2 | 3 | 4 | 5 | 6 => val >= 1 && val <= 6;

export function Heading({ children, className, level = 1, theme, ...props }: Readonly<HeadingProps>) {
    if (!children) return null;

    const value = Math.min(6, Math.max(1, level));
    const normalizedLevel = isLevel(value) ? value : 1;

    const Tag: HeadingTag = `h${normalizedLevel}`;

    return (
        <Tag className={getClassName('heading', theme?.toClassName(), className)} {...props}>
            {children}
        </Tag>
    );
}
