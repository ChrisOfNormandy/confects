import { getClassName } from "@lib/helpers/components";
import { HTMLDivProps } from "@lib/types/html";

export type ContentTileProps = HTMLDivProps;

export default function ContentTile(
    {
        className,
        children,
        ...props
    }: ContentTileProps
) {
    return <div
        className={getClassName('content-tile', className)}
        {...props}
    >
        {children}
    </div>
}