import { getClassName } from "@lib/helpers/components";
import { HTMLDivProps } from "@lib/types/html";

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