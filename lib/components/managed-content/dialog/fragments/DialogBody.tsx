import './styles/dialog-body.scss';
import { HTML_DivProps, getClassName } from "@"

export type DialogBodyProps = HTML_DivProps;

export function DialogBody(
    {
        children,
        className,
        ...props
    }: DialogBodyProps
) {
    return <div
        className={getClassName('dialog-body f-main', className)}
        {...props}
    >
        {children}
    </div>
}