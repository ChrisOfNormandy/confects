import './styles/dialog-body.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

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