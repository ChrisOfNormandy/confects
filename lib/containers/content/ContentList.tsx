import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import './styles/content-list.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';

export interface ContentListProps extends HTML_DivProps, ThemeProps { }

export function ContentList(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<ContentListProps>
) {
    return <div
        className={getClassName('content-list', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}