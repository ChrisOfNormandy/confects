import './styles/dialog-divider.scss';
import { HTML_DivProps, getClassName } from "@"

export type DialogDividerProps = HTML_DivProps;

export function DialogDivider(
    {
        className,
        ...props
    }: DialogDividerProps
) {
    return <div
        className={getClassName('dialog-divider f-divider', className)}
        {...props}
    />
}