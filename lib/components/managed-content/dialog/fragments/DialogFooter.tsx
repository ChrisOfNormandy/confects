import './styles/dialog-footer.scss';
import { HTML_DivProps, getClassName } from "@"

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