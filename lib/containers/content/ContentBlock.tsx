import './styles/content-block.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

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