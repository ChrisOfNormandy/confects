import { getClassName, HTML_DivProps } from "@";

export type PageProps = HTML_DivProps;

export function Page(
    {
        className,
        children,
        ...props
    }: PageProps
) {
    return <div
        className={getClassName('page', className)}
        {...props}
    >
        {children}
    </div>
}