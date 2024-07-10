import { getClassName } from "@lib/helpers/components";
import { HTMLDivProps } from "@lib/types/html";

export type ContentGroupProps = HTMLDivProps;

export default function ContentGroup(
    {
        className,
        children,
        ...props
    }: ContentGroupProps
) {
    return <div
        className={getClassName('content-group', className)}
        {...props}
    >
        {children}
    </div>
}