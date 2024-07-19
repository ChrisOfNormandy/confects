import { getClassName, HTML_DivProps } from "@";

export type ContentTileProps = HTML_DivProps;

export function ContentTile(
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