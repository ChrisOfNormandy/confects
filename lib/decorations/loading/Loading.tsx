import { getClassName } from '#helpers';
import { HTML_DivProps } from '#types';

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
    </div>;
}