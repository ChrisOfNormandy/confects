import './styles/content.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type ContentProps = HTML_DivProps;

export function Content(
    {
        children,
        className,
        ...props
    }: ContentProps
) {
    return <div
        className={getClassName('content', className)}
        {...props}
    >
        {children}
    </div>;
}