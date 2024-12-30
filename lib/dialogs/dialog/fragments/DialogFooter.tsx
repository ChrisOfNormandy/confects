import './styles/dialog-footer.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type DialogFooterProps = HTML_DivProps;

export function DialogFooter(
    {
        children,
        className,
        ...props
    }: DialogFooterProps
) {
    return <div
        className={getClassName('dialog-footer f-secondary', className)}
        {...props}
    >
        {children}
    </div>
}