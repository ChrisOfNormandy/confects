import './styles/content-group.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface ContentGroupProps extends HTML_DivProps, ThemeProps { }

export function ContentGroup(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<ContentGroupProps>
) {
    return <div
        className={getClassName('content-group', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}