import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type PageDividerProps = HTML_DivProps;

export function PageDivider(
    {
        className,
        ...props
    }: PageDividerProps
) {
    return <div
        className={getClassName('page-divider', className)}
        {...props}
    />;
}