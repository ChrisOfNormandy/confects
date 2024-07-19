import { getClassName, HTML_DivProps } from "../../../main";

export type PageHeaderProps = HTML_DivProps;

export function PageHeader(
    {
        className,
        children,
        ...props
    }: PageHeaderProps
) {
    return <div
        className={getClassName('page-header', className)}
        {...props}
    >
        {children}
    </div>
}