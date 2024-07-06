import { getClassName, HTMLDivProps } from "../../../main";

export type PageProps = HTMLDivProps;

export default function Page(
    {
        className,
        children,
        ...props
    }: PageProps
) {
    return <div
        className={getClassName('page', className)}
        {...props}
    >
        {children}
    </div>
}