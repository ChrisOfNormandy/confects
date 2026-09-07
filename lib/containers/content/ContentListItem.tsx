import type { HtmlElementProps } from '>types/html';

import './styles/content-list-item.scss';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface ContentListItemProps extends HtmlElementProps<'div'>, ThemeProps {}

export function ContentListItem({ className, children, theme, ...props }: Readonly<ContentListItemProps>) {
    return (
        <div className={getClassName('content-list-item', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
