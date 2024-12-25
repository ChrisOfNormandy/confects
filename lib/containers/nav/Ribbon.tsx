import { getClassName } from "$/helpers";
import { HTML_DivProps } from "#types/html";

export type RibbonProps = HTML_DivProps;

export function Ribbon(
    {
        className,
        children,
        ...props
    }: RibbonProps
) {
    return <div
        className={getClassName('ribbon', className)}
        {...props}
    >
        {children}
    </div>
}