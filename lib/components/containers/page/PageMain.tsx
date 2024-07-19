import { getClassName, HTML_DivProps } from "../../../main";

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