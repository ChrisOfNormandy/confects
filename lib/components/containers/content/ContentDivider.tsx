import { getClassName, HTML_DivProps } from "@";

export type ContentDividerProps = HTML_DivProps;

export function ContentDivider(
    {
        children,
        className,
        ...props
    }: ContentDividerProps
) {
    return <div
        className={getClassName('content-divider', className)}
        {...props}
    >
        {children}
    </div>
}