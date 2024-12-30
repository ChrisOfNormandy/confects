import './styles/divider.scss';
import { getClassName } from "#helpers/components";
import { HTML_DivProps } from "#types/html";

export type DividerType = 'horizontal' | 'vertical' | 'whitespace';

export type DividerProps = {
    type?: DividerType
} & HTML_DivProps;

export function Divider(
    {
        className,
        type = 'horizontal',
        ...props
    }: DividerProps
) {
    return <div
        className={getClassName('divider', type, className)}
        {...props}
    />
}