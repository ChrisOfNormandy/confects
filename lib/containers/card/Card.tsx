import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

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