import './styles/content.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

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