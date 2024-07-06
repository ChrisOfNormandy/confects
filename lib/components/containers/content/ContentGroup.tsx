import { getClassName, HTMLDivProps } from "../../../main";

export type ContentGroupProps = HTMLDivProps;

export default function ContentGroup(
    {
        className,
        children,
        ...props
    }: ContentGroupProps
) {
    return <div
        className={getClassName('content-group', className)}
        {...props}
    >
        {children}
    </div>
}