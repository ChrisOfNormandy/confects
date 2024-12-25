import './styles/page-header.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

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
    </div>
}