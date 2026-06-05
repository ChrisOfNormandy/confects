import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface CardProps extends HTML_DivProps, ThemeProps { }

export function Card(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<CardProps>
) {
    return <div
        className={getClassName('card', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}