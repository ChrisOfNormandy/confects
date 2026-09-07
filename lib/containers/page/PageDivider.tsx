import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface PageDividerProps extends HtmlElementProps<'div'>, ThemeProps {}

export function PageDivider({ className, theme, ...props }: Readonly<PageDividerProps>) {
    return <div className={getClassName('page-divider', theme?.toClassName(), className)} {...props} />;
}
