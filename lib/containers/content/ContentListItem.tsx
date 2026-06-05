import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import './styles/content-list-item.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';

export interface ContentListItemProps extends HTML_DivProps, ThemeProps { }

export function ContentListItem(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<ContentListItemProps>
) {
    return <div
        className={getClassName('content-list-item', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}