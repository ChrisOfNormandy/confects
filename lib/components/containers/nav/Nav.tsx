import { getClassName } from "@lib/helpers/components";
import { HTMLDivProps } from "@lib/types/html";

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