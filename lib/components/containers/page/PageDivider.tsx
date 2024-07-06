import { getClassName, HTMLDivProps } from "../../../main";

export type PageDividerProps = HTMLDivProps;

export default function PageDivider(
    {
        className,
        ...props
    }: PageDividerProps
) {
    return <div
        className={getClassName('page-divider', className)}
        {...props}
    />
}