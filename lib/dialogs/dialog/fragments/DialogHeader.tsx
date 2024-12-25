import './styles/dialog-header.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from "#types/html"

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