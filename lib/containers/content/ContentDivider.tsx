import './styles/content-divider.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

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