import './styles/content-group.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

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