import { getClassName, HTMLDivProps } from "../../../main";

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