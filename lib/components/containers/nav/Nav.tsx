import { getClassName, HTML_DivProps } from "@";

export type NavProps = HTML_DivProps;

export function Nav(
    {
        className,
        children,
        ...props
    }: NavProps
) {
    return <div
        className={getClassName('nav', className)}
        {...props}
    >
        {children}
    </div>
}