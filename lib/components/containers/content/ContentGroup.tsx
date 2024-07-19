import { getClassName, HTML_DivProps } from "@";

export type ContentGroupProps = HTML_DivProps;

export function ContentGroup(
    {
        className,
        children,
        ...props
    }: ContentGroupProps
) {
    return <div
        className={getClassName('content-group', className)}
        {...props}
    >
        {children}
    </div>
}