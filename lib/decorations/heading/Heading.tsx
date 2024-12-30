import { getClassName } from "#helpers/components";
import { HTML_HeadingProps } from "#types/html";

export type HeadingProps = {
    level?: number
} & HTML_HeadingProps;

export function Heading(
    {
        level,
        children,
        className,
        ...props
    }: HeadingProps
) {
    if (!children)
        return null;

    switch (level) {
        case 6: return <h6 className={getClassName('heading', className)} {...props}>{children}</h6>;
        case 5: return <h5 className={getClassName('heading', className)} {...props}>{children}</h5>;
        case 4: return <h4 className={getClassName('heading', className)} {...props}>{children}</h4>;
        case 3: return <h3 className={getClassName('heading', className)} {...props}>{children}</h3>;
        case 2: return <h2 className={getClassName('heading', className)} {...props}>{children}</h2>;
        default: return <h1 className={getClassName('heading', className)} {...props}>{children}</h1>;
    }
}