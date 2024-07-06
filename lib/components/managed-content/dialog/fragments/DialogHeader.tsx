import { HTMLDivProps, getClassName } from "@lib/main"
import './styles/dialog-header.scss';

export type DialogHeaderProps = HTMLDivProps;

export default function DialogHeader(
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