import './styles/content-divider.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type ContentDividerProps = HTML_DivProps;

export function ContentDivider(
    {
        children,
        className,
        ...props
    }: ContentDividerProps
) {
    return <div
        className={getClassName('content-divider', className, 'sp f-divider')}
        {...props}
    >
        {children}
    </div>
}