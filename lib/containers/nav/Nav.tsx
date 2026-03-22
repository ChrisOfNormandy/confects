import { HTML_DivProps } from '>types/html';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

export interface NavProps extends HTML_DivProps, ThemeProps { }

export function Nav(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<NavProps>
) {
    return <div
        className={getClassName('nav', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}