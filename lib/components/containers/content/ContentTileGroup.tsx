import { getClassName, HTML_DivProps } from "@";

export type ContentTileGroupProps = HTML_DivProps;

export function ContentTileGroup(
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