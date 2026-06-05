import { HTML_DivProps } from '>types/html';
import { getClassName } from '@dead-harbour/shipshape/props';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface NavProps extends HTML_DivProps, ThemeProps { }

export function Nav(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<NavProps>
) {
    return <div
        className={getClassName('nav', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}