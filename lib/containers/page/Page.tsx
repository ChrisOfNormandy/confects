import './styles/page.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface PageProps extends HtmlElementProps<'div'>, ThemeProps {}

export function Page({ className, children, theme, ...props }: Readonly<PageProps>) {
    return (
        <div className={getClassName('page', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
