import { getClassName, HTML_DivProps } from "../../../main";

export type PageBodyProps = HTML_DivProps;

export function PageBody(
    {
        className,
        children,
        ...props
    }: PageBodyProps
) {
    return <div
        className={getClassName('page-body', className)}
        {...props}
    >
        {children}
    </div>
}