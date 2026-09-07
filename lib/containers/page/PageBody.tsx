import './styles/page-body.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface PageBodyProps extends HtmlElementProps<'div'>, ThemeProps {}

export function PageBody({ className, children, theme, ...props }: Readonly<PageBodyProps>) {
    return (
        <div className={getClassName('page-body', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
