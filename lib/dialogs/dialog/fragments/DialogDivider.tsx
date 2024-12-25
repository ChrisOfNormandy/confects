import './styles/dialog-divider.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

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