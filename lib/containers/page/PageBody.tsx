import './styles/page-body.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

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