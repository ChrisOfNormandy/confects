import { HTML_DivProps } from '>types/html';
import { getClassName } from '@dead-harbour/shipshape/props';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface LoadingProps extends HTML_DivProps, ThemeProps { }

export function Loading(
    {
        children,
        className,
        theme,
        ...props
    }: Readonly<LoadingProps>) {
    return <div
        className={getClassName('loading', theme?.toClassName(), className)}
        {...props}
    >
        {children || 'Loading...'}
    </div>;
}