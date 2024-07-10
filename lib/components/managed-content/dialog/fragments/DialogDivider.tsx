import { HTMLDivProps, getClassName } from "@lib/main"
import './styles/dialog-divider.scss';

export type DialogDividerProps = HTMLDivProps;

export default function DialogDivider(
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