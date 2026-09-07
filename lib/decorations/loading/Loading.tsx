import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface LoadingProps extends HtmlElementProps<'div'>, ThemeProps {}

export function Loading({ children, className, theme, ...props }: Readonly<LoadingProps>) {
    return (
        <div className={getClassName('loading', theme?.toClassName(), className)} {...props}>
            {children || 'Loading...'}
        </div>
    );
}
