import './styles/page-header.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface PageHeaderProps extends HtmlElementProps<'div'>, ThemeProps {}

export function PageHeader({ className, children, theme, ...props }: Readonly<PageHeaderProps>) {
    return (
        <div className={getClassName('page-header', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
