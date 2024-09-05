import './styles/content.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

export type ContentProps = HTML_DivProps;

export function Content(
    {
        children,
        className,
        ...props
    }: ContentProps
) {
    return <div
        className={getClassName('content', className)}
        {...props}
    >
        {children}
    </div>
}