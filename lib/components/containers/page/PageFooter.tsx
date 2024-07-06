import { getClassName, HTMLDivProps } from "../../../main";

export type PageFooterProps = HTMLDivProps;

export default function PageFooter(
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