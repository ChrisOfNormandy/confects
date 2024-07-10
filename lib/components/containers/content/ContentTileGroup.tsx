import { getClassName } from "@lib/helpers/components";
import { HTMLDivProps } from "@lib/types/html";

export type ContentTileGroupProps = HTMLDivProps;

export default function ContentTileGroup(
    {
        className,
        children,
        ...props
    }: ContentTileGroupProps
) {
    return <div
        className={getClassName('content-tile-group', className)}
        {...props}
    >
        {children}
    </div>
}