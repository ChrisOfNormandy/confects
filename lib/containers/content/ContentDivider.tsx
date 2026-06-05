import './styles/content-divider.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface ContentDividerProps extends HTML_DivProps, ThemeProps { }

export function ContentDivider(
    {
        children,
        className,
        theme,
        ...props
    }: Readonly<ContentDividerProps>
) {
    return <div
        className={getClassName('content-divider', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}