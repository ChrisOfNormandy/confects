import './styles/content.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface ContentProps extends HtmlElementProps<'div'>, ThemeProps {}

export function Content({ children, className, theme, ...props }: Readonly<ContentProps>) {
    return (
        <div className={getClassName('content', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
