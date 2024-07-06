import { getClassName, HTMLDivProps } from "../../../main";

export type ContentListProps = HTMLDivProps;

export default function ContentList(
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