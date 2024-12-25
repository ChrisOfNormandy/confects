import { HTML_DivProps } from "#types/html";
import { getClassName } from "$/helpers";

export type PageDividerProps = HTML_DivProps;

export function PageDivider(
    {
        className,
        ...props
    }: PageDividerProps
) {
    return <div
        className={getClassName('page-divider', className)}
        {...props}
    />
}