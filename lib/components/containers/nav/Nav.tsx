import { HTML_DivProps } from "#types/html";
import { getClassName } from "$/helpers";

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