import './styles/content-list.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

export type ContentListProps = HTML_DivProps;

export function ContentList(
    {
        className,
        children,
        ...props
    }: ContentListProps
) {
    return <div
        className={getClassName('content-list', className)}
        {...props}
    >
        {children}
    </div>
}