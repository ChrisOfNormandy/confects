import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export interface RibbonProps extends HtmlElementProps<'div'>, ThemeProps {}

export function Ribbon({ className, children, theme, ...props }: Readonly<RibbonProps>) {
    return (
        <div className={getClassName('ribbon', theme?.toClassName(), className)} {...props}>
            {children}
        </div>
    );
}
