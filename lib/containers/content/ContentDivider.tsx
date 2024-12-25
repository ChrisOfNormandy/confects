import './styles/content-divider.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

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