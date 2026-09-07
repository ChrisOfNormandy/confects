import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface NavProps extends HtmlElementProps<'div'>, ThemeProps {}

export function Nav({ className, children, theme, ...props }: Readonly<NavProps>) {
    return (
        <div className={getClassName('nav', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
