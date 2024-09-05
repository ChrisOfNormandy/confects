import './styles/page-footer.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

export type PageFooterProps = HTML_DivProps;

export function PageFooter(
    {
        className,
        children,
        ...props
    }: PageFooterProps
) {
    return <div
        className={getClassName('page-footer', className)}
        {...props}
    >
        {children}
    </div>
}