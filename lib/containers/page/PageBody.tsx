import './styles/page-body.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

export type PageBodyProps = HTML_DivProps;

export function PageBody(
    {
        className,
        children,
        ...props
    }: PageBodyProps
) {
    return <div
        className={getClassName('page-body', className)}
        {...props}
    >
        {children}
    </div>
}