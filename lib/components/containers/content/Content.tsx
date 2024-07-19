import { getClassName, HTML_DivProps } from "@";

export type ContentProps = HTML_DivProps;

export function Content(
    {
        children,
        className,
        ...props
    }: ContentProps
) {
    return <div
        className={getClassName('content', className)}
        {...props}
    >
        {children}
    </div>
}