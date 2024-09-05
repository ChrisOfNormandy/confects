import { getClassName } from "$/helpers";
import { HTML_DivProps } from "#types/html";

export type PageMainProps = HTML_DivProps;

export function PageMain(
    {
        className,
        children,
        ...props
    }: PageMainProps
) {
    return <div
        className={getClassName('page-main', className)}
        {...props}
    >
        {children}
    </div>
}