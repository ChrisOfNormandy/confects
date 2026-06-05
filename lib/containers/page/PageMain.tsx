import { getClassName } from '@dead-harbour/shipshape/props';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
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