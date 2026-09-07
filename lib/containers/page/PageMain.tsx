import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface PageMainProps extends HtmlElementProps<'div'>, ThemeProps {}

export function PageMain({ className, children, theme, ...props }: Readonly<PageMainProps>) {
    return (
        <div className={getClassName('page-main', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
