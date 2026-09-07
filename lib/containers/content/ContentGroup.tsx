import type { HtmlElementProps } from '>types/html';

import './styles/content-group.scss';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface ContentGroupProps extends HtmlElementProps<'div'>, ThemeProps {}

export function ContentGroup({ className, children, theme, ...props }: Readonly<ContentGroupProps>) {
    return (
        <div className={getClassName('content-group', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
