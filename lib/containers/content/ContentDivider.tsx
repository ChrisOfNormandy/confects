import './styles/content-divider.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface ContentDividerProps extends HtmlElementProps<'div'>, ThemeProps {}

export function ContentDivider({ children, className, theme, ...props }: Readonly<ContentDividerProps>) {
    return (
        <div className={getClassName('content-divider', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
