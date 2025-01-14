import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type PageMainProps = HTML_DivProps;

export function PageMain(
    {
        className,
        children,
        ...props
    }: PageMainProps
) {
    return <div
        className={getClassName('page-main', className)}
        {...props}
    >
        {children}
    </div>;
}