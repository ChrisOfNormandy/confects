import { getClassName, HTMLDivProps } from "../../../main";

export type RibbonProps = HTMLDivProps;

export default function Ribbon(
    {
        className,
        children,
        ...props
    }: RibbonProps
) {
    return <div
        className={getClassName('ribbon', className)}
        {...props}
    >
        {children}
    </div>
}