import './styles/dialog-footer.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

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