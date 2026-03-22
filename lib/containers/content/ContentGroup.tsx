import './styles/content-group.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

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