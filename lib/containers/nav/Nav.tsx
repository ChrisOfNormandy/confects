import { HTML_DivProps } from 'lib/types';
import { getClassName } from 'lib/helpers';

export type NavProps = HTML_DivProps;

export function Nav(
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
    </div>;
}