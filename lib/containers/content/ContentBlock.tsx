import './styles/content-block.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';

export interface ContentBlockProps extends HTML_DivProps, ThemeProps { }

export function ContentBlock(
    {
        children,
        className,
        theme,
        ...props
    }: Readonly<ContentBlockProps>
) {
    return <div
        className={getClassName('content-block', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}