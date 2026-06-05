import './styles/content.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface ContentProps extends HTML_DivProps, ThemeProps { }

export function Content(
    {
        children,
        className,
        theme,
        ...props
    }: Readonly<ContentProps>
) {
    return <div
        className={getClassName('content', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}