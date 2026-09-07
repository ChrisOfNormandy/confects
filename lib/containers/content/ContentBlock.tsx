import './styles/content-block.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface ContentBlockProps extends HtmlElementProps<'div'>, ThemeProps {}

export function ContentBlock({ children, className, theme, ...props }: Readonly<ContentBlockProps>) {
    return (
        <div className={getClassName('content-block', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
