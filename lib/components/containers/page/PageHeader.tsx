import { getClassName, HTMLDivProps } from "../../../main";

export type PageHeaderProps = HTMLDivProps;

export default function Page(
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