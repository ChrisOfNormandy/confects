import './styles/content-block.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type ContentBlockProps = HTML_DivProps;

export function ContentBlock(
    {
        children,
        className,
        ...props
    }: ContentBlockProps
) {
    return <div
        className={getClassName('content-block', className)}
        {...props}
    >
        {children}
    </div>
}