import { getClassName } from "lib/helpers";
import { HTML_DivProps } from "lib/types";

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