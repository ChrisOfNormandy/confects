import { getClassName, HTML_DivProps } from "@";

export type ContentBlockProps = HTML_DivProps;

export function ContentBlock(
    {
        children,
        className,
        ...props
    }: ContentBlockProps
) {
    return <div
        className={getClassName('content-block', className)}
        {...props}
    >
        {children}
    </div>
}