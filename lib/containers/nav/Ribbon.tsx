import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';

export interface RibbonProps extends HTML_DivProps, ThemeProps { }

export function Ribbon(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<RibbonProps>
) {
    return <div
        className={getClassName('ribbon', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}