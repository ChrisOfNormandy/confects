import { HTML_DivProps } from '>types/html';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

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