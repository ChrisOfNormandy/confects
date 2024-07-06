import { getClassName, HTMLDivProps } from "../../../main";

export type PageMainProps = HTMLDivProps;

export default function PageMain(
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