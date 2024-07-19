import { getClassName, HTML_DivProps } from "@";

export type RibbonProps = HTML_DivProps;

export function Ribbon(
    {
        className,
        children,
        ...props
    }: RibbonProps
) {
    return <div
        className={getClassName('ribbon', className)}
        {...props}
    >
        {children}
    </div>
}