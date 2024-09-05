import './styles/content-list-item.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

export type ContentListItemProps = HTML_DivProps;

export function ContentListItem(
    {
        className,
        children,
        ...props
    }: ContentListItemProps
) {
    return <div
        className={getClassName('content-list-item', className)}
        {...props}
    >
        {children}
    </div>
}