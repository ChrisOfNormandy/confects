import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';

export interface PageDividerProps extends HTML_DivProps, ThemeProps { }

export function PageDivider(
    {
        className,
        theme,
        ...props
    }: Readonly<PageDividerProps>
) {
    return <div
        className={getClassName('page-divider', theme?.toClassName(), className)}
        {...props}
    />;
}