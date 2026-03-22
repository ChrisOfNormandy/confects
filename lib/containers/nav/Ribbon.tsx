import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';

export interface RibbonProps extends HTML_DivProps, ThemeProps { }

export function Ribbon(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<RibbonProps>
) {
    return <div
        className={getClassName('ribbon', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}