import './styles/page.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type PageProps = HTML_DivProps;

export function Page(
    {
        className,
        children,
        ...props
    }: PageProps
) {
    return <div
        className={getClassName('page', className)}
        {...props}
    >
        {children}
    </div>;
}