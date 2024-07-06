import { HTMLDivProps, getClassName } from "@lib/main"
import './styles/dialog-footer.scss';

export type DialogFooterProps = HTMLDivProps;

export default function DialogFooter(
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