import './styles/page-header.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type PageHeaderProps = HTML_DivProps;

export function PageHeader(
    {
        className,
        children,
        ...props
    }: PageHeaderProps
) {
    return <div
        className={getClassName('page-header', className)}
        {...props}
    >
        {children}
    </div>;
}