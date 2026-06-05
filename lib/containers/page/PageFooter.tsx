import './styles/page-footer.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';

export interface PageFooterProps extends HTML_DivProps, ThemeProps { }

export function PageFooter(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<PageFooterProps>
) {
    return <div
        className={getClassName('page-footer', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}