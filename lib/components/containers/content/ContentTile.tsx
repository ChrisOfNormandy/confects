import { getClassName, HTMLDivProps } from "../../../main";

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