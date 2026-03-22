import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import './styles/content-list.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
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