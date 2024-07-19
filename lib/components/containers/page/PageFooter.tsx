import { getClassName, HTML_DivProps } from "../../../main";

export type PageFooterProps = HTML_DivProps;

export function PageFooter(
    {
        className,
        children,
        ...props
    }: PageFooterProps
) {
    return <div
        className={getClassName('page-footer', className)}
        {...props}
    >
        {children}
    </div>
}