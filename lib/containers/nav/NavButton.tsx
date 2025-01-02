import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type NavButtonProps = HTML_DivProps;

export function NavButton(
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
    </div>;
}