import './styles/content-list-item.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

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
    </div>;
}