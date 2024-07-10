import { getClassName } from "@lib/helpers/components";
import { HTMLDivProps } from "@lib/types/html";

export type RibbonProps = HTMLDivProps;

export default function Ribbon(
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