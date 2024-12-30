import './styles/page-footer.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

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