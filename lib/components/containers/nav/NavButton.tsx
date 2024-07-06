import { getClassName, HTMLDivProps } from "../../../main";

export type NavButtonProps = HTMLDivProps;

export default function NavButton(
    {
        className,
        children,
        ...props
    }: NavButtonProps
) {
    return <div
        className={getClassName('nav-btn', className)}
        {...props}
    >
        {children}
    </div>
}