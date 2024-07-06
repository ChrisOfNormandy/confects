import { getClassName, HTMLDivProps } from "../../../main";

export type ContentListItemProps = HTMLDivProps;

export default function ContentListItem(
    {
        className,
        children,
        ...props
    }: ContentListItemProps
) {
    return <div
        className={getClassName('content-list-item', className)}
        {...props}
    >
        {children}
    </div>
}