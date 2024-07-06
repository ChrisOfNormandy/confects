import { getClassName, HTMLDivProps } from "../../../main";

export type NavProps = HTMLDivProps;

export default function Nav(
    {
        className,
        children,
        ...props
    }: NavProps
) {
    return <div
        className={getClassName('nav', className)}
        {...props}
    >
        {children}
    </div>
}