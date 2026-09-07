import './styles/content-list.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface ContentListProps extends HtmlElementProps<'div'>, ThemeProps {}

export function ContentList({ className, children, theme, ...props }: Readonly<ContentListProps>) {
    return (
        <div className={getClassName('content-list', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
