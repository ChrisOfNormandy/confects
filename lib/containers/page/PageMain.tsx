import { getClassName } from '@syren-dev-tech/concauses/props';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { HTML_DivProps } from '>types/html';

export interface PageMainProps extends HTML_DivProps, ThemeProps { }

export function PageMain(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<PageMainProps>
) {
    return <div
        className={getClassName('page-main', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}