import { getClassName, HTML_DivProps } from "@";

export type ContentListProps = HTML_DivProps;

export function ContentList(
    {
        className,
        children,
        ...props
    }: ContentListProps
) {
    return <div
        className={getClassName('content-list', className)}
        {...props}
    >
        {children}
    </div>
}