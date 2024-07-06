import { HTMLDivProps, getClassName } from "@lib/main"
import './styles/dialog-body.scss';

export type DialogBodyProps = HTMLDivProps;

export default function DialogBody(
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