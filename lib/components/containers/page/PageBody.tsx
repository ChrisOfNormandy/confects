import { getClassName, HTMLDivProps } from "../../../main";

export type PageBodyProps = HTMLDivProps;

export default function PageBody(
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