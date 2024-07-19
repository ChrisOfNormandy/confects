import { getClassName, HTML_DivProps } from "@";

export type ContentListItemProps = HTML_DivProps;

export function ContentListItem(
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