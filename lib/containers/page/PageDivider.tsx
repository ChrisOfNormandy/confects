import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';
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