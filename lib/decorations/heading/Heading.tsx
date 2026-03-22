/* eslint-disable no-magic-numbers */
import { HTML_HeadingProps } from '>types/html';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

export interface HeadingProps extends HTML_HeadingProps, ThemeProps {
    level?: number
}

export function Heading({
    children,
    className,
    level = 1,
    theme,
    ...props
}: Readonly<HeadingProps>) {
    if (!children)
        return null;

    const normalizedLevel = Math.min(6, Math.max(1, level)) as 1 | 2 | 3 | 4 | 5 | 6;
    const Tag: HeadingTag = `h${normalizedLevel}`;

    return (
        <Tag className={getClassName('heading', theme?.toClassName(), className)} {...props}>
            {children}
        </Tag>
    );
}