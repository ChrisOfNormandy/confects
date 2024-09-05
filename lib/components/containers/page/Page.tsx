import './styles/page.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';

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
    </div>
}