import './styles/content-group.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

export type ContentGroupProps = HTML_DivProps;

export function ContentGroup(
    {
        className,
        children,
        ...props
    }: ContentGroupProps
) {
    return <div
        className={getClassName('content-group', className)}
        {...props}
    >
        {children}
    </div>
}