import { getClassName } from "#helpers/components";
import { HTML_DivProps } from "#types/html";

export function Loading(
    {
        children,
        className,
        ...props
    }: HTML_DivProps) {
    return <div
        className={getClassName('loading', className)}
        {...props}
    >
        {children || 'Loading...'}
    </div>
}