import './styles/dialog-header.scss';
import { HTML_DivProps, getClassName } from "@"

export type DialogHeaderProps = HTML_DivProps;

export function DialogHeader(
    {
        children,
        className,
        ...props
    }: DialogHeaderProps
) {
    return <div
        className={getClassName('dialog-header f-primary', className)}
        {...props}
    >
        {children}
    </div>
}